---
execution: subagent
agent: squads/ubatuba-reage/agents/sara-stories
inputFile:
  - squads/ubatuba-reage/output/instagram-feed-draft.md
  - squads/ubatuba-reage/output/reels-script-draft.md
  - squads/ubatuba-reage/output/captions.md
outputFile: squads/ubatuba-reage/output/stories-sequence.md
tasks:
  - tasks/create-stories-sequence.md
parallel_group: post-production
---

# Step 14: Criacao de Stories — Sara Stories

## Context Loading

- `squads/ubatuba-reage/output/{run_id}/v{n}/instagram-feed-draft.md` — carrossel aprovado
- `squads/ubatuba-reage/output/{run_id}/v{n}/reels-script-draft.md` — reel aprovado
- `squads/ubatuba-reage/output/{run_id}/v{n}/captions.md` — legendas criadas por Leo
- `squads/ubatuba-reage/pipeline/data/selected-news.md` — fonte primaria para link sticker
- `squads/ubatuba-reage/pipeline/data/tone-of-voice.md` — guia de tom
- `squads/ubatuba-reage/pipeline/data/campaign-context.md` — fase da campanha (se existir)

---

## Instructions

Sara Stories cria sequencia de 3-5 Instagram Stories que amplificam o post principal sem repeti-lo.

### Entregas

- Sequencia de 3-5 Stories com:
  - Copy de cada Story (max 3 linhas)
  - Sticker interativo de cada Story (enquete, link, contagem regressiva, quiz)
  - Direcao visual (fundo, tipografia, posicao dos elementos)
  - Timing de publicacao relativo ao post principal

### Regras

- Stories amplificam, nao repetem o carrossel/reel
- Cada Story tem pelo menos 1 sticker interativo
- Link sticker aponta para documento publico especifico
- Se ha evento civico com data: contagem regressiva obrigatoria
- Sequencia funciona standalone para quem nao viu o post

---

## Output

`squads/ubatuba-reage/output/{run_id}/v{n}/stories-sequence.md`

## Quality Criteria

- 3-5 Stories (nem menos, nem mais de 7)
- Pelo menos 1 link sticker para documento fonte
- Conteudo complementar ao post (nao repetido)
