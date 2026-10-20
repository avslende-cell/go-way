# GoWay

GoWay is a responsive, Hebrew-first public-transport application shell. It includes journey, nearby-stop, and line search interfaces; a Leaflet/OpenStreetMap location map; English and RTL/LTR support; a light/dark theme; and device-local saved places and recent searches.

## Data availability

No official Israeli transit provider or API credentials were present in this repository. GoWay therefore does **not** show sample routes, fabricated stops, schedules, or live arrivals. The `/api/journeys`, `/api/stops`, and `/api/lines` endpoints return an explicit `503 transit_data_unavailable` response until a verified provider is selected and an adapter is implemented. `/api/health` reports service health and whether transit data is configured.

Before enabling transit results, select an official Ministry of Transport dataset/API or another documented, licensed provider; verify current access terms, update frequency, rate limits, coverage, and authentication; then implement and test a server-side adapter. Keep provider credentials in Render environment variables, never in browser code. Do not advertise live arrivals unless the provider actually supplies them.

The nearby map uses OpenStreetMap tiles through Leaflet. Map tiles require an internet connection, attribution is shown on the map, and the public OpenStreetMap tile service is subject to its usage policy. The map only places a marker after the user explicitly grants browser location permission; the app does not send or retain location coordinates in browser storage.

## Run locally

Requires Node.js 20 or later. No npm dependencies are required.

```sh
npm start
```

Open `http://localhost:3000`. The browser needs an internet connection for the optional Heebo font, Leaflet library, and map tiles. If these external assets are unavailable, the rest of the app remains usable and the map shows a fallback.

Run syntax checks with:

```sh
npm run check
```

## Deploy to Render

The included `render.yaml` creates a Node web service. Connect the repository to Render and deploy using the Blueprint. Render runs `npm install` followed by `npm start`; the service listens on Render's `PORT` and exposes `/api/health` as its health check. There are no database migrations or secrets until a real transit provider and authenticated user storage are deliberately added. `.env.example` documents the current no-credentials setup.

## Included behavior and limitations

- Hebrew is the default; the language control switches the complete interface to English and updates document direction.
- Saved destination pairs, recent searches, language, and theme use browser `localStorage`; they are guest-only and remain on this device.
- Journey, stop, and line searches validate input, call the same-origin API, and explain missing provider configuration. They never synthesize transit results.
- The nearby map asks for location only after the user selects **Use my location**.
- Authentication, server-backed profiles, geocoding suggestions, timetables, live arrivals, service alerts, route geometry, and journey routing require a provider/backend integration and are not implemented.
- Privacy and contact links are placeholders until production policies and contact details are supplied.