import { Hono } from "hono";
import { handle } from "hono/vercel";
import accounts from "./accounts";
import categories from "./categories";
import transactions from "./transactions";
import settings from "./settings";
import summary from "./summary";
import { Settings } from "lucide-react";

export const runtime = "edge";
const app = new Hono().basePath("/api");

const routes = app
.route("/accounts", accounts)
.route("/categories", categories)
.route("/transactions", transactions)
.route("/settings", settings)
.route("/summary", summary)

export const GET = handle(app);
export const PATCH = handle(app);
export const DELETE = handle(app);
export const POST = handle(app);

export type AppType = typeof routes;
