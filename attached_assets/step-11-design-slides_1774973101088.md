---
execution: subagent
agent: squads/ubatuba-reage/agents/dani-design
inputFile: squads/ubatuba-reage/output/instagram-feed-draft.md
outputFile: squads/ubatuba-reage/output/slides/slides.html
model_tier: powerful
tasks:
  - tasks/create-slides-html.md
  - tasks/render-slides.md
---
# Step 11: Design Visual dos Slides

## Context Loading

- `squads/ubatuba-reage/output/{run_id}/v{n}/instagram-feed-draft.md` — briefing aprovado com copy e diretrizes visuais de cada slide
- `squads/ubatuba-reage/pipeline/data/quality-criteria.md` — critérios de qualidade do perfil

---

## Instructions

Você é Dani Design, designer visual do @ubatubareage. Neste passo, execute em sequência:

1. **`create-slides-html.md`** — leia o `instagram-feed-draft.md` aprovado e gere o arquivo `slides.html` com os 12 slides em HTML/CSS, cada um com exatamente 1080×1080px.

2. **`render-slides.md`** — execute o script Puppeteer para capturar cada slide como PNG e salvar em `slides/slide-01.png` a `slides/slide-12.png`.

O `node_modules` com Puppeteer está instalado na raiz do projeto (`e:/Arquivos-setembro-2025/cc/node_modules`). Use o require relativo à raiz do projeto.

---

## Veto Conditions

- **VETO** se qualquer PNG tiver menos de 30KB (slide vazio ou erro de renderização)
- **VETO** se o número de PNGs for diferente do número de slides no HTML
- **VETO** se o `slides.html` não abrir sem erros (testar abrindo com Puppeteer)

---

## Quality Criteria

- Slides renderizados em 1080×1080px sem corte
- Paleta restrita (#CC0000, #FFFFFF, #1A1A1A) respeitada em todos os slides
- Handle @ubatubareage visível no rodapé de todos os slides
- Fontes Inter carregadas corretamente (confirmar via tamanho dos PNGs)
