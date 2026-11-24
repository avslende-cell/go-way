import { createServer } from "node:http";
import { readFile, stat } from "node:fs/promises";
import { extname, resolve, sep } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(fileURLToPath(new URL(".", import.meta.url)));
const port = Number(process.env.PORT) || 3000;
const STRIDE = "https://open-bus-stride-api.hasadna.org.il";
const PHOTON = "https://photon.komoot.io/api";
const cache = new Map();
const mimeTypes = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".svg": "image/svg+xml"
};

function sendJson(response, statusCode, body) {
  response.writeHead(statusCode, {
    "Content-Type": "application/json; charset=utf-8",
    "Cache-Control": "no-store",
    "X-Content-Type-Options": "nosniff"
  });
  response.end(JSON.stringify(body));
}

async function serveStatic(pathname, response) {
  let normalizedPath;
  try {
    normalizedPath = pathname === "/" ? "/index.html" : decodeURIComponent(pathname);
  } catch {
    sendJson(response, 400, { error: "bad_request" });
    return;
  }
  const filePath = resolve(root, "." + normalizedPath);
  if (filePath !== root && !filePath.startsWith(root + sep)) {
    sendJson(response, 400, { error: "bad_request" });
    return;
  }
  try {
    const fileStat = await stat(filePath);
    if (!fileStat.isFile()) throw new Error("not a file");
    const content = await readFile(filePath);
    const extension = extname(filePath);
    response.writeHead(200, {
      "Content-Type": mimeTypes[extension] || "application/octet-stream",
      "Cache-Control": extension === ".html" ? "no-cache" : "public, max-age=3600",
      "X-Content-Type-Options": "nosniff",
      "Referrer-Policy": "strict-origin-when-cross-origin",
      "X-Frame-Options": "DENY"
    });
    response.end(content);
  } catch {
    sendJson(response, 404, { error: "not_found" });
  }
}

function cachedJson(url, ttlMs = 60000) {
  const key = String(url);
  const existing = cache.get(key);
  if (existing && existing.expiresAt > Date.now()) return Promise.resolve(existing.value);
  const request = fetch(key, {
    headers: {
      Accept: "application/json",
      "User-Agent": "GoWay/1.1 (public-transit search)"
    },
    signal: AbortSignal.timeout(12000)
  }).then(async (response) => {
    if (!response.ok) {
      const body = await response.text().catch(() => "");
      throw new Error(`Transit API ${response.status} at ${new URL(key).pathname}: ${body.slice(0, 240)}`);
    }
    const value = await response.json();
    cache.set(key, { value, expiresAt: Date.now() + ttlMs });
    return value;
  });
  return request;
}

function strideUrl(path, params = {}) {
  const url = new URL(path, STRIDE);
  Object.entries(params).forEach(([key, value]) => {
    if (value !== undefined && value !== null && value !== "") {
      url.searchParams.set(key, String(value));
    }
  });
  return url;
}

function getLocalDate(daysOffset = 0) {
  const date = new Date(Date.now() + daysOffset * 86400000);
  const parts = new Intl.DateTimeFormat("en-GB", {
    timeZone: "Asia/Jerusalem",
    year: "numeric",
    month: "2-digit",
    day: "2-digit"
  }).formatToParts(date);
  const values = Object.fromEntries(parts.map((part) => [part.type, part.value]));
  return `${values.year}-${values.month}-${values.day}`;
}

function getDateTimeRange() {
  const from = new Date(Date.now() - 2 * 60 * 60 * 1000);
  const to = new Date(Date.now() + 48 * 60 * 60 * 1000);
  return {
    from: from.toISOString(),
    to: to.toISOString()
  };
}

function asArray(value) {
  return Array.isArray(value) ? value : [];
}

function normalizeRoute(route) {
  return {
    id: route.id ?? route.gtfs_route_id ?? null,
    lineRef: route.line_ref ?? route.lineRef ?? null,
    number: String(route.route_short_name ?? route.routeShortName ?? ""),
    name: String(route.route_long_name ?? route.routeLongName ?? ""),
    operator: String(route.agency_name ?? route.operator_name ?? route.agency ?? ""),
    operatorRef: route.operator_ref ?? route.operatorRef ?? null,
    direction: String(route.route_direction ?? ""),
    alternative: String(route.route_alternative ?? ""),
    routeType: String(route.route_type ?? "3"),
    date: route.date ?? null
  };
}

function normalizePhotonFeature(feature, language) {
  const properties = feature?.properties || {};
  const coordinates = feature?.geometry?.coordinates || [];
  const name = properties.name || properties.street || properties.city || "";
  const street = [properties.housenumber, properties.street].filter(Boolean).join(" ");
  const city = properties.city || properties.town || properties.village ||
    (properties.type === "city" || properties.type === "town" ? properties.name : "") ||
    properties.locality || "";
  const parts = [];
  if (street && street !== name) parts.push(street);
  else if (name) parts.push(name);
  if (city && !parts.includes(city)) parts.push(city);
  if (properties.state && !parts.includes(properties.state)) parts.push(properties.state);
  if (properties.country && !parts.includes(properties.country)) parts.push(properties.country);
  return {
    label: parts.join(", ") || name || (language === "he" ? "מיקום" : "Location"),
    name,
    city,
    lat: Number(coordinates[1]),
    lon: Number(coordinates[0]),
    type: properties.type || properties.osm_value || "place",
    countryCode: properties.countrycode || ""
  };
}

async function reverseGeocode(latitude, longitude, language = "he") {
  const url = new URL(PHOTON + "/reverse");
  url.searchParams.set("lat", String(latitude));
  url.searchParams.set("lon", String(longitude));
  url.searchParams.set("lang", language === "en" ? "en" : "he");
  const payload = await cachedJson(url, 5 * 60 * 1000);
  const properties = payload?.features?.[0]?.properties || {};
  return String(properties.city || properties.town || properties.village || properties.locality || "");
}

async function searchPlaces(query, language = "he", near = null) {
  const url = new URL(PHOTON + "/");
  url.searchParams.set("q", query.slice(0, 120));
  url.searchParams.set("limit", "7");
  url.searchParams.set("lang", language === "en" ? "en" : "he");
  url.searchParams.set("bbox", "34.1,29.3,35.9,33.4");
  if (near && Number.isFinite(Number(near.lat)) && Number.isFinite(Number(near.lon))) {
    url.searchParams.set("lat", String(near.lat));
    url.searchParams.set("lon", String(near.lon));
  } else {
    url.searchParams.set("lat", "32.0853");
    url.searchParams.set("lon", "34.7818");
  }
  const payload = await cachedJson(url, 5 * 60 * 1000);
  return asArray(payload.features)
    .map((feature) => normalizePhotonFeature(feature, language))
    .filter((place) => place.countryCode === "il" && Number.isFinite(place.lat) && Number.isFinite(place.lon));
}

function distanceMeters(lat1, lon1, lat2, lon2) {
  const toRadians = (value) => value * Math.PI / 180;
  const dLat = toRadians(lat2 - lat1);
  const dLon = toRadians(lon2 - lon1);
  const a = Math.sin(dLat / 2) ** 2 +
    Math.cos(toRadians(lat1)) * Math.cos(toRadians(lat2)) * Math.sin(dLon / 2) ** 2;
  return 6371000 * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
}

async function searchRoutes(query) {
  const cleaned = query.trim().replace(/^קו\\s*/u, "").slice(0, 80);
  if (!cleaned) return [];

  const dateFrom = getLocalDate(-7);
  const dateTo = getLocalDate(0);
  const baseParams = {
    limit: 200,
    route_type: "3",
    date_from: dateFrom,
    date_to: dateTo
  };
  const searchParams = { ...baseParams };
  if (/^\\d+$/u.test(cleaned)) searchParams.route_short_name = cleaned;
  else searchParams.route_long_name_contains = cleaned;

  let items = asArray(await cachedJson(strideUrl("/gtfs_routes/list", searchParams), 2 * 60 * 1000));

  // GTFS is published as daily snapshots. If the current date has not been loaded yet,
  // widen the date window instead of returning a false "not found".
  if (!items.length) {
    const fallback = { ...searchParams, date_from: getLocalDate(-21) };
    items = asArray(await cachedJson(strideUrl("/gtfs_routes/list", fallback), 2 * 60 * 1000));
  }
  if (!items.length && !/^\\d+$/u.test(cleaned)) {
    const operatorParams = { ...baseParams, agency_name: cleaned };
    items = asArray(await cachedJson(strideUrl("/gtfs_routes/list", operatorParams), 2 * 60 * 1000));
  }
  if (!items.length) {
    const fallback = { ...searchParams };
    delete fallback.date_from;
    delete fallback.date_to;
    items = asArray(await cachedJson(strideUrl("/gtfs_routes/list", fallback), 2 * 60 * 1000));
  }

  // The same route is published in daily GTFS snapshots. Prefer the newest usable
  // snapshot so route details are loaded from the current timetable.
  const latestFirst = [...items].sort((a, b) =>
    String(b.date ?? "").localeCompare(String(a.date ?? ""))
  );
  const unique = new Map();
  for (const item of latestFirst) {
    const route = normalizeRoute(item);
    if (!route.id || !route.number) continue;
    const key = [route.number, route.operator, route.direction, route.alternative, route.name].join("|");
    if (!unique.has(key)) unique.set(key, route);
  }
  return [...unique.values()].slice(0, 30);
}

async function getStopsForCity(city, latitude, longitude) {
  const cityVariants = [...new Set([
    city,
    city.replace(/[–—-]/gu, " "),
    city.replace(/\s+/gu, " ").trim()
  ].filter(Boolean))];
  let stops = [];
  for (const cityName of cityVariants) {
    const url = strideUrl("/gtfs_stops/list", {
      city: cityName.slice(0, 100),
      limit: 500,
      date_from: getLocalDate(-14),
      date_to: getLocalDate(0)
    });
    let payload = await cachedJson(url, 3 * 60 * 1000);
    stops = asArray(payload);
    if (!stops.length) {
      const fallback = strideUrl("/gtfs_stops/list", {
        city: cityName.slice(0, 100),
        limit: 500
      });
      payload = await cachedJson(fallback, 3 * 60 * 1000);
      stops = asArray(payload);
    }
    if (stops.length) break;
  }
  const normalized = stops.map((stop) => {
    const lat = Number(stop.stop_lat ?? stop.latitude ?? stop.lat);
    const lon = Number(stop.stop_lon ?? stop.longitude ?? stop.lon);
    const item = {
      id: stop.id ?? stop.gtfs_stop_id ?? stop.stop_id ?? null,
      code: stop.code ?? stop.stop_code ?? "",
      name: String(stop.stop_name ?? stop.name ?? stop.stop_desc ?? ""),
      city: String(stop.city ?? city),
      lat,
      lon
    };
    if (Number.isFinite(Number(latitude)) && Number.isFinite(Number(longitude)) &&
        Number.isFinite(lat) && Number.isFinite(lon)) {
      item.distanceMeters = Math.round(distanceMeters(Number(latitude), Number(longitude), lat, lon));
    } else {
      item.distanceMeters = null;
    }
    return item;
  }).filter((stop) => stop.id !== null && stop.name && Number.isFinite(stop.lat) && Number.isFinite(stop.lon));

  if (normalized.some((stop) => stop.distanceMeters !== null)) {
    normalized.sort((a, b) => (a.distanceMeters ?? Infinity) - (b.distanceMeters ?? Infinity));
  }
  return normalized.slice(0, 25);
}

async function mapWithConcurrency(items, worker, concurrency = 8) {
  const results = new Array(items.length);
  let nextIndex = 0;
  const workers = Array.from({ length: Math.min(concurrency, items.length) }, async () => {
    while (nextIndex < items.length) {
      const index = nextIndex++;
      results[index] = await worker(items[index], index);
    }
  });
  await Promise.all(workers);
  return results;
}

async function normalizeRouteStops(rows) {
  return mapWithConcurrency(asArray(rows).slice(0, 100), async (row) => {
    const related = row.gtfs_stop || row.stop || row.related_gtfs_stop || {};
    const stopId = row.gtfs_stop_id ?? related.id ?? related.gtfs_stop_id ?? related.stop_id ?? null;
    let stop = related;
    const hasCoordinates = Number.isFinite(Number(stop.lat ?? stop.stop_lat)) &&
      Number.isFinite(Number(stop.lon ?? stop.stop_lon));
    if (stopId !== null && !hasCoordinates) {
      try {
        stop = await cachedJson(strideUrl("/gtfs_stops/get", { id: stopId }), 10 * 60 * 1000);
      } catch (error) {
        console.error("GoWay stop details unavailable:", error.message);
      }
    }
    const lat = Number(stop.lat ?? stop.stop_lat ?? row.lat);
    const lon = Number(stop.lon ?? stop.stop_lon ?? row.lon);
    return {
      sequence: Number(row.stop_sequence ?? row.sequence ?? 0),
      name: String(stop.name ?? stop.stop_name ?? row.stop_name ?? row.gtfs_stop_name ?? row.name ?? ""),
      city: String(stop.city ?? row.city ?? ""),
      lat: Number.isFinite(lat) ? lat : null,
      lon: Number.isFinite(lon) ? lon : null,
      arrival: row.arrival_time ?? row.planned_arrival_time ?? null,
      departure: row.departure_time ?? row.planned_departure_time ?? null,
      stopId
    };
  });
}

async function getLiveVehicleLocations(route) {
  if (!route.lineRef || route.operatorRef === null || route.operatorRef === undefined) return [];

  // SIRI vehicle positions are ingested by Open Bus Stride about once a minute.
  // Keep only recent reports so an old GPS point is never shown as current.
  const recordedTo = new Date().toISOString();
  const recordedFrom = new Date(Date.now() - 30 * 60 * 1000).toISOString();
  const payload = await cachedJson(strideUrl("/siri_vehicle_locations/list", {
    "siri_routes__line_ref": route.lineRef,
    "siri_routes__operator_ref": route.operatorRef,
    recorded_at_time_from: recordedFrom,
    recorded_at_time_to: recordedTo,
    limit: 100,
    order_by: "recorded_at_time desc"
  }), 30 * 1000);

  return asArray(payload).map((item) => {
    const lat = Number(item.lat);
    const lon = Number(item.lon);
    return {
      lat,
      lon,
      recordedAt: item.recorded_at_time ?? null,
      bearing: Number.isFinite(Number(item.bearing)) ? Number(item.bearing) : null,
      velocity: Number.isFinite(Number(item.velocity)) ? Number(item.velocity) : null,
      vehicleRef: String(item.siri_ride?.vehicle_ref ?? item.vehicle_ref ?? "")
    };
  }).filter((item) =>
    Number.isFinite(item.lat) &&
    Number.isFinite(item.lon) &&
    item.lat >= 29 && item.lat <= 34 &&
    item.lon >= 34 && item.lon <= 36
  );
}

async function getRouteDetails(routeId) {
  const id = Number(routeId);
  if (!Number.isSafeInteger(id) || id <= 0) throw new Error("Invalid route identifier");
  const routeRaw = await cachedJson(strideUrl("/gtfs_routes/get", { id }), 10 * 60 * 1000);
  const route = normalizeRoute(routeRaw);
  const now = Date.now();

  // Prefer a trip that is currently running or about to depart, rather than
  // accidentally selecting an old trip from the previous day.
  const rideParams = {
    gtfs_route_id: id,
    start_time_from: new Date(now - 60 * 60 * 1000).toISOString(),
    start_time_to: new Date(now + 48 * 60 * 60 * 1000).toISOString(),
    limit: 100,
    order_by: "start_time asc"
  };
  let rides = asArray(await cachedJson(strideUrl("/gtfs_rides/list", rideParams), 60 * 1000));
  if (!rides.length) {
    rides = asArray(await cachedJson(strideUrl("/gtfs_rides/list", {
      gtfs_route_id: id,
      limit: 20,
      order_by: "start_time asc"
    }), 60 * 1000));
  }

  const selectedRide = rides.find((ride) => {
    const start = Date.parse(ride.start_time ?? "");
    const end = Date.parse(ride.end_time ?? "");
    return Number.isFinite(start) && Number.isFinite(end) && start <= now && end >= now;
  }) || rides.find((ride) => {
    const start = Date.parse(ride.start_time ?? "");
    return Number.isFinite(start) && start >= now;
  }) || rides[0] || null;

  let stops = [];
  if (selectedRide) {
    const rideId = selectedRide.id ?? selectedRide.gtfs_ride_id;
    const stopPayload = await cachedJson(strideUrl("/gtfs_ride_stops/list", {
      gtfs_ride_ids: rideId,
      limit: 250,
      order_by: "stop_sequence asc"
    }), 10 * 60 * 1000);
    stops = await normalizeRouteStops(stopPayload);
  }

  if (!stops.length && route.lineRef) {
    const timetable = await cachedJson(strideUrl("/route_timetable/list", {
      line_refs: route.lineRef,
      limit: 120,
      order_by: "stop_sequence asc"
    }), 60 * 1000);
    stops = await normalizeRouteStops(timetable);
  }
  stops.sort((a, b) => a.sequence - b.sequence);

  let liveVehicles = [];
  try {
    liveVehicles = await getLiveVehicleLocations(route);
  } catch (error) {
    // A temporary SIRI outage should not hide the static line and timetable.
    console.warn("GoWay live vehicle positions unavailable:", error.message);
  }

  const tripHeadsign = selectedRide?.trip_headsign || selectedRide?.headsign || "";
  return {
    route,
    direction: route.direction || tripHeadsign || route.name,
    operator: route.operator,
    stops: stops.filter((stop) => stop.name),
    liveVehicles,
    scheduleType: "planned",
    liveTrackingType: "SIRI GPS",
    liveUpdatedAt: liveVehicles.reduce((latest, vehicle) =>
      !latest || String(vehicle.recordedAt ?? "") > String(latest) ? vehicle.recordedAt : latest
    , null),
    notice: "Stop times are planned GTFS times. Bus markers, when available, use recent SIRI GPS reports."
  };
}

async function getStopArrivals(stopId) {
  const id = Number(stopId);
  if (!Number.isSafeInteger(id) || id <= 0) throw new Error("Invalid stop identifier");
  const payload = await cachedJson(strideUrl("/stop_arrivals/list", {
    gtfs_stop_id: id,
    limit: 30
  }), 45 * 1000);
  return asArray(payload).map((row) => ({
    line: String(row.route_short_name ?? row.gtfs_route_route_short_name ?? row.line_number ?? row.gtfs_route?.route_short_name ?? ""),
    destination: String(row.trip_headsign ?? row.gtfs_ride_trip_headsign ?? row.headsign ?? row.destination ?? row.gtfs_route_route_long_name ?? ""),
    arrival: row.arrival_time ?? row.planned_arrival_time ?? null,
    departure: row.departure_time ?? row.planned_departure_time ?? null
  })).filter((row) => row.line || row.destination || row.arrival);
}

const server = createServer(async (request, response) => {
  let url;
  try {
    url = new URL(request.url, "http://" + (request.headers.host || "localhost"));
  } catch {
    sendJson(response, 400, { error: "bad_request" });
    return;
  }

  try {
    if (url.pathname === "/api/health" && request.method === "GET") {
      sendJson(response, 200, {
        status: "ok",
        transitDataProvider: "Open Bus Stride",
        placeSuggestionsProvider: "Photon / OpenStreetMap",
        scheduleMode: "planned",
        realtimeVehiclePositions: true,
        realtimePredictions: false
      });
      return;
    }

    if (url.pathname === "/api/suggestions" && request.method === "GET") {
      const query = (url.searchParams.get("q") || "").trim();
      if (query.length < 2) {
        sendJson(response, 200, { suggestions: [] });
        return;
      }
      const suggestions = await searchPlaces(query, url.searchParams.get("lang") || "he", {
        lat: url.searchParams.get("lat"),
        lon: url.searchParams.get("lon")
      });
      sendJson(response, 200, { suggestions });
      return;
    }

    if (url.pathname === "/api/lines" && request.method === "GET") {
      const query = (url.searchParams.get("q") || "").trim();
      if (query.length < 1) {
        sendJson(response, 200, { routes: [] });
        return;
      }
      const routes = await searchRoutes(query);
      sendJson(response, 200, { routes });
      return;
    }

    if (url.pathname === "/api/stops" && request.method === "GET") {
      let city = (url.searchParams.get("city") || "").trim();
      const latitude = url.searchParams.get("lat");
      const longitude = url.searchParams.get("lon");
      const query = (url.searchParams.get("q") || "").trim();
      if (!city && query) {
        const places = await searchPlaces(query, url.searchParams.get("lang") || "he", { lat: latitude, lon: longitude });
        city = places[0]?.city || "";
      }
      if (!city && Number.isFinite(Number(latitude)) && Number.isFinite(Number(longitude))) {
        city = await reverseGeocode(latitude, longitude, url.searchParams.get("lang") || "he");
      }
      if (!city) {
        sendJson(response, 200, { stops: [], message: "Choose a city or place to search for public transport stops." });
        return;
      }
      let centerLat = Number(latitude);
      let centerLon = Number(longitude);
      if ((!Number.isFinite(centerLat) || !Number.isFinite(centerLon)) && query) {
        const resolved = await searchPlaces(query, url.searchParams.get("lang") || "he");
        const place = resolved.find((item) => item.city && Number.isFinite(item.lat) && Number.isFinite(item.lon)) || resolved[0];
        if (place) {
          centerLat = place.lat;
          centerLon = place.lon;
          city = city || place.city;
        }
      }
      const stops = await getStopsForCity(
        city,
        Number.isFinite(centerLat) ? centerLat : null,
        Number.isFinite(centerLon) ? centerLon : null
      );
      sendJson(response, 200, {
        city,
        stops,
        scheduleType: "planned",
        notice: "Stop information comes from the static GTFS feed."
      });
      return;
    }

    const routeMatch = url.pathname.match(/^\/api\/routes\/(\d+)$/u);
    if (routeMatch && request.method === "GET") {
      const details = await getRouteDetails(routeMatch[1]);
      sendJson(response, 200, details);
      return;
    }

    const arrivalsMatch = url.pathname.match(/^\/api\/stops\/(\d+)\/arrivals$/u);
    if (arrivalsMatch && request.method === "GET") {
      const arrivals = await getStopArrivals(arrivalsMatch[1]);
      sendJson(response, 200, {
        arrivals,
        scheduleType: "planned",
        notice: "These are scheduled times from GTFS, not live arrival predictions."
      });
      return;
    }

    if (url.pathname === "/api/journeys" && request.method === "GET") {
      sendJson(response, 503, {
        error: "journey_planner_unavailable",
        message: "Place search is available, but full route planning with transfers is not connected yet."
      });
      return;
    }

    if (url.pathname.startsWith("/api/")) {
      sendJson(response, 404, { error: "not_found" });
      return;
    }

    if (request.method !== "GET" && request.method !== "HEAD") {
      sendJson(response, 405, { error: "method_not_allowed" });
      return;
    }
    await serveStatic(url.pathname, response);
  } catch (error) {
    const message = error?.name === "TimeoutError"
      ? "The transit data provider took too long to respond. Please try again."
      : "The transit data provider is temporarily unavailable. Please try again shortly.";
    console.error("GoWay provider request failed:", error?.message || "unknown error");
    sendJson(response, 502, {
      error: "transit_provider_unavailable",
      message
    });
  }
});

server.listen(port, "0.0.0.0", () => {
  console.log("GoWay listening on port " + port);
});

for (const signal of ["SIGINT", "SIGTERM"]) {
  process.on(signal, () => server.close(() => process.exit(0)));
}
