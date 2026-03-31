import { Router, type IRouter } from "express";
import { db, denunciasTable } from "@workspace/db";

const router: IRouter = Router();

router.post("/denuncias", async (req, res) => {
  try {
    const { titulo, descricao, categoria, localizacao, contato, anonimo } = req.body;

    if (!titulo || !descricao) {
      res.status(400).json({ error: "Titulo e descricao sao obrigatorios" });
      return;
    }

    const [denuncia] = await db.insert(denunciasTable).values({
      titulo,
      descricao,
      categoria: categoria ?? "Não informada",
      localizacao: localizacao ?? null,
      contato: anonimo ? null : (contato ?? null),
      anonimo: Boolean(anonimo),
      status: "pendente",
    }).returning();

    console.log("[Denuncia recebida]", denuncia.id, titulo);

    res.status(201).json({ ok: true, id: denuncia.id.toString() });
  } catch (err) {
    console.error("[Erro ao processar denuncia]", err);
    res.status(500).json({ error: "Erro interno ao processar a denuncia" });
  }
});

export default router;
