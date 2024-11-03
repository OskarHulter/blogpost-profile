import { sql } from "drizzle-orm";
import { int, text } from "drizzle-orm/sqlite-core";

export const timestamps = {
  createdAt: int("created_at", { mode: "timestamp" }).default(sql`(unixepoch())`).notNull(),
    updatedAt: int("updated_at", { mode: "timestamp" }).$onUpdate(
      () => new Date()
  ),
    deletedAt: int("deleted_at", { mode: "timestamp" }).$onUpdate(
      () => new Date()
  )
}

export const identity = {
  id: int("id", { mode: "number" }).primaryKey({ autoIncrement: true }),
    identifyingName: text("identifying_name", { length: 256 }),
    displayName: text("display_name", { length: 256 }),
}

export function generateUniqueString(length = 12): string {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let uniqueString = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    uniqueString += characters[randomIndex];
  }
  return uniqueString;
}
