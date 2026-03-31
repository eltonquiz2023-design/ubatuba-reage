---
execution: subagent
agent: squads/ubatuba-reage/agents/cris-comunidade
inputFile:
  - squads/ubatuba-reage/output/instagram-feed-draft.md
  - squads/ubatuba-reage/output/captions.md
outputFile: squads/ubatuba-reage/output/engagement-plan.md
tasks:
  - tasks/prepare-engagement-plan.md
---

# Step 15: Plano de Engajamento — Cris Comunidade

## Context Loading

- `squads/ubatuba-reage/output/{run_id}/v{n}/instagram-feed-draft.md` — carrossel aprovado
- `squads/ubatuba-reage/output/{run_id}/v{n}/reels-script-draft.md` — reel aprovado
- `squads/ubatuba-reage/output/{run_id}/v{n}/captions.md` — legendas
- `squads/ubatuba-reage/pipeline/data/selected-news.md` — fonte primaria para respostas

---

## Instructions

Cris Comunidade prepara o plano de engajamento para a Golden Hour pos-publicacao (primeiros 60 minutos).

### Entregas

- Mapeamento de pontos sensiveis do conteudo
- Templates de resposta para cada tipo de comentario esperado
- Checklist de flags de crise com indicadores e acoes
- Checklist da Golden Hour (primeiros 60 min)

### Regras

- Toda resposta inclui dado factual + proximo degrau na escada de engajamento
- Flags de crise definidos antes da publicacao
- Templates adaptaveis (nao copy-paste)

---

## Output

`squads/ubatuba-reage/output/{run_id}/v{n}/engagement-plan.md`

## Quality Criteria

- Todas as pessoas nomeadas no conteudo mapeadas como pontos sensiveis
- Templates cobrem todos os tipos de comentario previstos
- Flags de crise com indicadores claros e tempo de resposta
