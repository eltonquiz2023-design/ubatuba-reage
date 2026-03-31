import { Router, type IRouter, type Request, type Response } from "express";
import { db, denunciasTable, contatosTable, articlesTable } from "@workspace/db";
import { eq, desc, count } from "drizzle-orm";

const router: IRouter = Router();

router.get("/admin/stats", async (req: Request, res: Response) => {
  if (!req.isAuthenticated()) {
    res.status(401).json({ error: "Não autorizado" });
    return;
  }
  try {
    const [articlesCount] = await db.select({ value: count() }).from(articlesTable);
    const [denunciasCount] = await db.select({ value: count() }).from(denunciasTable);
    const [contatosCount] = await db.select({ value: count() }).from(contatosTable);

    res.json({
      articles: articlesCount.value,
      denuncias: denunciasCount.value,
      contatos: contatosCount.value,
    });
  } catch (err) {
    console.error("[Erro ao buscar stats]", err);
    res.status(500).json({ error: "Erro ao buscar estatísticas" });
  }
});

router.get("/admin/denuncias", async (req: Request, res: Response) => {
  if (!req.isAuthenticated()) {
    res.status(401).json({ error: "Não autorizado" });
    return;
  }
  try {
    const denuncias = await db
      .select()
      .from(denunciasTable)
      .orderBy(desc(denunciasTable.createdAt));
    res.json(denuncias);
  } catch (err) {
    console.error("[Erro ao listar denúncias]", err);
    res.status(500).json({ error: "Erro ao listar denúncias" });
  }
});

const VALID_DENUNCIA_STATUSES = ["pendente", "em_analise", "publicada", "arquivada"];

router.patch("/admin/denuncias/:id", async (req: Request, res: Response) => {
  if (!req.isAuthenticated()) {
    res.status(401).json({ error: "Não autorizado" });
    return;
  }
  try {
    const id = parseInt(req.params.id);
    const { status } = req.body;

    if (!status || !VALID_DENUNCIA_STATUSES.includes(status)) {
      res.status(400).json({ error: "Status inválido. Valores aceitos: " + VALID_DENUNCIA_STATUSES.join(", ") });
      return;
    }

    const [denuncia] = await db
      .update(denunciasTable)
      .set({ status })
      .where(eq(denunciasTable.id, id))
      .returning();
    if (!denuncia) {
      res.status(404).json({ error: "Denúncia não encontrada" });
      return;
    }
    res.json(denuncia);
  } catch (err) {
    console.error("[Erro ao atualizar denúncia]", err);
    res.status(500).json({ error: "Erro ao atualizar denúncia" });
  }
});

router.get("/admin/contatos", async (req: Request, res: Response) => {
  if (!req.isAuthenticated()) {
    res.status(401).json({ error: "Não autorizado" });
    return;
  }
  try {
    const contatos = await db
      .select()
      .from(contatosTable)
      .orderBy(desc(contatosTable.createdAt));
    res.json(contatos);
  } catch (err) {
    console.error("[Erro ao listar contatos]", err);
    res.status(500).json({ error: "Erro ao listar contatos" });
  }
});

router.patch("/admin/contatos/:id", async (req: Request, res: Response) => {
  if (!req.isAuthenticated()) {
    res.status(401).json({ error: "Não autorizado" });
    return;
  }
  try {
    const id = parseInt(req.params.id);
    const [contato] = await db
      .update(contatosTable)
      .set({ lido: true })
      .where(eq(contatosTable.id, id))
      .returning();
    if (!contato) {
      res.status(404).json({ error: "Contato não encontrado" });
      return;
    }
    res.json(contato);
  } catch (err) {
    console.error("[Erro ao atualizar contato]", err);
    res.status(500).json({ error: "Erro ao atualizar contato" });
  }
});

export default router;
