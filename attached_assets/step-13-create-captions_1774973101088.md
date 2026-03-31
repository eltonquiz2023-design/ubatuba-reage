---
execution: subagent
agent: squads/ubatuba-reage/agents/leo-legenda
inputFile:
  - squads/ubatuba-reage/output/instagram-feed-draft.md
  - squads/ubatuba-reage/output/reels-script-draft.md
  - squads/ubatuba-reage/pipeline/data/selected-angle.md
outputFile: squads/ubatuba-reage/output/captions.md
tasks:
  - tasks/create-caption.md
parallel_group: post-production
---

# Step 13: Criacao de Legendas — Leo Legenda

## Context Loading

- `squads/ubatuba-reage/output/{run_id}/v{n}/instagram-feed-draft.md` — carrossel aprovado
- `squads/ubatuba-reage/output/{run_id}/v{n}/reels-script-draft.md` — reel aprovado
- `squads/ubatuba-reage/pipeline/data/selected-angle.md` — angulo e tom selecionados
- `squads/ubatuba-reage/pipeline/data/selected-news.md` — fonte primaria para frase pronta
- `squads/ubatuba-reage/pipeline/data/tone-of-voice.md` — guia de tom

---

## Instructions

Leo Legenda cria as legendas do carrossel e do reel com foco nos primeiros 125 caracteres como hook de timeline.

### Entregas

- Legenda do carrossel: hook (125 chars) + contexto + frase pronta + CTA
- Legenda do reel: hook (125 chars) + contexto + frase pronta + CTA
- Hashtags separadas para primeiro comentario (5-15 tags por peca)

### Regras

- Hook dos primeiros 125 chars funciona standalone
- Legenda complementa os slides, nao repete
- Frase pronta entre aspas em toda denuncia/cobranca
- Hashtags NUNCA na legenda — sempre no primeiro comentario

---

## Output

`squads/ubatuba-reage/output/{run_id}/v{n}/captions.md`

## Quality Criteria

- Hook testado: lendo so os 125 chars, geraria tap no "mais"?
- Frase pronta e realista (alguem de fato enviaria)
- Tom alinhado com o angulo selecionado
