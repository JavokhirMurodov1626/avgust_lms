import { defineConfig } from "drizzle-kit";
import { env } from "@/data/env/server";

export default defineConfig({
  out: "./src/drizzle/migrations",
  dialect: "postgresql",
  schema: "./src/drizzle/schema.ts",
  strict: true,
  verbose: true,
  dbCredentials: {
    password: env.DB_PASSWORD,
    user: env.DB_USER,
    database: env.DB_NAME,
    host: env.DB_HOST,
    ssl: true,
    port: 5432,
  },
});
