// Example model schema from the Drizzle docs
// https://orm.drizzle.team/docs/sql-schema-declaration

import { generateUniqueString, timestamps } from 'src/server/db/helpers'
import * as t from "drizzle-orm/sqlite-core";
import type { AnySQLiteColumn } from "drizzle-orm/sqlite-core";
/**
 * This is an example of how to use the multi-project schema feature of Drizzle ORM. Use the same
 * database instance for multiple projects.
 *
 * @see https://orm.drizzle.team/docs/goodies#multi-project-schema
 */
export const createTable = t.sqliteTableCreator((name) => `@sln/blogpost-profile_${name}`);

export const users = createTable(
  "user",
  {
    ...timestamps,
    id: t.int("id").primaryKey({ autoIncrement: true }),
    identifyingName: t.text("identifying_name", { length: 256 }),
    displayName: t.text("display_name", { length: 256 }),
    firstName: t.text("first_name"),
    lastName: t.text("last_name"),
    email: t.text("email").notNull(),
    invitee: t.int("invitee").references((): AnySQLiteColumn => users.id),
    role: t.text("role").$type<"guest" | "user" | "admin">().default("guest"),
  },
  (table) => {
    return {
      emailIndex: t.uniqueIndex("email_idx").on(table.email),
      identifyingNameIndex: t.uniqueIndex("identifying_name_idx").on(table.identifyingName),
      displayNameIndex: t.index("display_name_idx").on(table.displayName),
    };
  }
);

export const posts = createTable(
  "post",
  {
    ...timestamps,
    id: t.int("id", { mode: "number" }).primaryKey({ autoIncrement: true }),
    slug: t.text("slug").$default(() => generateUniqueString(16)),
    title: t.text("title", { length: 256 }).notNull(),
    content: t.text("content", { length: 2048 }).notNull(),
    ownerId: t.int("owner_id").references(() => users.id),
    rating: t.int("rating", { mode: "number" }),
  },
  (table) => ({
    slugIndex: t.uniqueIndex("slug_idx").on(table.slug),
    titleIndex: t.index("title_idx").on(table.title),
  })
);

export const comments = createTable(
  "comment",
  {
  ...timestamps,
  id: t.int("id", { mode: "number" }).primaryKey({ autoIncrement: true }),
  title: t.text("title", { length: 256 }),
  content: t.text("content",{ length: 256 }),
  relevancy: t.int("relevancy", { mode: "number" }),
  rating: t.int("rating", { mode: "number" }),
  postId: t.int("post_id").references(() => posts.id),
  ownerId: t.int("owner_id").references(() => users.id),
  },
)
