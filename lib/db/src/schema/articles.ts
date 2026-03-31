import { pgTable, serial, text, varchar, timestamp, jsonb } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod/v4";

export const articlesTable = pgTable("articles", {
  id: serial("id").primaryKey(),
  slug: varchar("slug", { length: 255 }).notNull().unique(),
  title: text("title").notNull(),
  lead: text("lead").notNull(),
  body: jsonb("body").notNull().$type<string[]>(),
  author: varchar("author", { length: 255 }).notNull(),
  authorImage: varchar("author_image", { length: 500 }),
  authorBio: text("author_bio"),
  category: varchar("category", { length: 255 }).notNull(),
  categorySlug: varchar("category_slug", { length: 255 }).notNull(),
  series: varchar("series", { length: 255 }),
  imageUrl: varchar("image_url", { length: 500 }),
  imageCaption: text("image_caption"),
  readingTime: varchar("reading_time", { length: 50 }),
  status: varchar("status", { length: 20 }).notNull().default("draft"),
  createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
  updatedAt: timestamp("updated_at", { withTimezone: true }).notNull().defaultNow().$onUpdate(() => new Date()),
  publishedAt: timestamp("published_at", { withTimezone: true }),
});

export const insertArticleSchema = createInsertSchema(articlesTable).omit({ id: true, createdAt: true, updatedAt: true });
export type InsertArticle = z.infer<typeof insertArticleSchema>;
export type Article = typeof articlesTable.$inferSelect;
