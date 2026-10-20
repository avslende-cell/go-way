import { createServer } from "node:http";
import { readFile, stat } from "node:fs/promises";
import { extname, resolve, sep } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(fileURLToPath(new URL(".", import.meta.url)));
const port = Number(process.env.PORT) || 3000;
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
  const filePath = resolve(root, `.${normalizedPath}`);
  if (filePath !== root && !filePath.startsWith(`${root}${sep}`)) {
    sendJson(response, 400, { error: "bad_request" });
    return;
  }
  try {
    const fileStat = await stat(filePath);
    if (!fileStat.isFile()) throw new Error("not a file");
    const content = await readFile(filePath);
    response.writeHead(200, {
      "Content-Type": mimeTypes[extname(filePath)] || "application/octet-stream",
      "Cache-Control": extname(filePath) === ".html" ? "no-cache" : "public, max-age=3600",
      "X-Content-Type-Options": "nosniff",
      "Referrer-Policy": "strict-origin-when-cross-origin",
      "X-Frame-Options": "DENY"
    });
    response.end(content);
  } catch {
    sendJson(response, 404, { error: "not_found" });
  }
}

const server = createServer(async (request, response) => {
  let url;
  try {
    url = new URL(request.url, `http://${request.headers.host || "localhost"}`);
  } catch {
    sendJson(response, 400, { error: "bad_request" });
    return;
  }

  if (url.pathname === "/api/health" && request.method === "GET") {
    sendJson(response, 200, { status: "ok", transitDataConfigured: false });
    return;
  }

  if (url.pathname.startsWith("/api/")) {
    const resource = url.pathname.slice("/api/".length);
    if (["journeys", "stops", "lines"].includes(resource) && request.method === "GET") {
      sendJson(response, 503, {
        error: "transit_data_unavailable",
        message: "Transit search is unavailable because no verified transit data provider is configured.",
        resource
      });
      return;
    }
    sendJson(response, 404, { error: "not_found" });
    return;
  }

  if (request.method !== "GET" && request.method !== "HEAD") {
    sendJson(response, 405, { error: "method_not_allowed" });
    return;
  }
  await serveStatic(url.pathname, response);
});

server.listen(port, "0.0.0.0", () => {
  console.log(`GoWay listening on port ${port}`);
});

for (const signal of ["SIGINT", "SIGTERM"]) {
  process.on(signal, () => server.close(() => process.exit(0)));
}