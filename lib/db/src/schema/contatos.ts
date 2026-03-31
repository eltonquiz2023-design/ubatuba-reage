import { pgTable, serial, text, varchar, timestamp, boolean } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod/v4";

export const contatosTable = pgTable("contatos", {
  id: serial("id").primaryKey(),
  nome: varchar("nome", { length: 255 }).notNull(),
  email: varchar("email", { length: 255 }).notNull(),
  assunto: varchar("assunto", { length: 255 }).default("Não informado"),
  mensagem: text("mensagem").notNull(),
  lido: boolean("lido").default(false),
  createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
});

export const insertContatoSchema = createInsertSchema(contatosTable).omit({ id: true, createdAt: true });
export type InsertContato = z.infer<typeof insertContatoSchema>;
export type Contato = typeof contatosTable.$inferSelect;
