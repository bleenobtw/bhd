import { Hono } from "hono";
import { logger } from "hono/logger";

const app = new Hono();
app.use(logger());

app.get("/", (c) => c.json({ success: true }, 200));

Bun.serve({
  fetch: app.fetch,
  port: Bun.env.PORT,
});
