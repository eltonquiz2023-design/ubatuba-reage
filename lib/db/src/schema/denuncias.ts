import { pgTable, serial, text, varchar, timestamp, boolean } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod/v4";

export const denunciasTable = pgTable("denuncias", {
  id: serial("id").primaryKey(),
  titulo: text("titulo").notNull(),
  descricao: text("descricao").notNull(),
  categoria: varchar("categoria", { length: 255 }).default("Não informada"),
  localizacao: varchar("localizacao", { length: 500 }),
  contato: varchar("contato", { length: 500 }),
  anonimo: boolean("anonimo").default(false),
  status: varchar("status", { length: 20 }).notNull().default("pendente"),
  createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
});

export const insertDenunciaSchema = createInsertSchema(denunciasTable).omit({ id: true, createdAt: true });
export type InsertDenuncia = z.infer<typeof insertDenunciaSchema>;
export type Denuncia = typeof denunciasTable.$inferSelect;
