import { type Config } from "drizzle-kit";

import { env } from "src/env";

export default {
  schema: "./src/server/db/schema.ts",
  dialect: "sqlite",
  dbCredentials: {
    url: env.DATABASE_URL,
  },
  tablesFilter: ["@sln/blogpost-profile_*"],
} satisfies Config;