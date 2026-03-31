import { Router, type IRouter } from "express";
import { db, contatosTable } from "@workspace/db";

const router: IRouter = Router();

router.post("/contato", async (req, res) => {
  try {
    const { nome, email, assunto, mensagem } = req.body;

    if (!nome || !email || !mensagem) {
      res.status(400).json({ error: "Nome, email e mensagem sao obrigatorios" });
      return;
    }

    const [contato] = await db.insert(contatosTable).values({
      nome,
      email,
      assunto: assunto ?? "Não informado",
      mensagem,
    }).returning();

    console.log("[Contato recebido]", contato.id, nome);

    res.status(201).json({ ok: true, id: contato.id.toString() });
  } catch (err) {
    console.error("[Erro ao processar contato]", err);
    res.status(500).json({ error: "Erro interno ao processar o contato" });
  }
});

export default router;
