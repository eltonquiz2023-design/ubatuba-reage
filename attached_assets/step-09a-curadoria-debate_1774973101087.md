---
execution: subagent
parallel_agents:
  - agent: squads/ubatuba-reage/agents/carlos-curador
    task: tasks/diagnose-editorial.md
    outputFile: squads/ubatuba-reage/output/diagnostico-editorial.md
  - agent: squads/ubatuba-reage/agents/lucia-local
    task: tasks/diagnose-community.md
    outputFile: squads/ubatuba-reage/output/diagnostico-comunitario.md
  - agent: squads/ubatuba-reage/agents/bia-boost
    task: tasks/diagnose-strategy.md
    outputFile: squads/ubatuba-reage/output/diagnostico-estrategico.md
inputFile:
  - squads/ubatuba-reage/output/instagram-feed-draft.md
  - squads/ubatuba-reage/output/reels-script-draft.md
model_tier: powerful
---

# Step 09a: Curadoria Estrategica — Debate de 3 Perspectivas

## Context Loading

Cada agente carrega os seguintes arquivos antes de executar:

- `squads/ubatuba-reage/output/{run_id}/v{n}/instagram-feed-draft.md` — carrossel aprovado no step-08
- `squads/ubatuba-reage/output/{run_id}/v{n}/reels-script-draft.md` — roteiro aprovado no step-08
- `squads/ubatuba-reage/pipeline/data/curadoria-criterios.md` — rubrica de 10 dimensoes com pesos
- `squads/ubatuba-reage/pipeline/data/selected-news.md` — noticia base
- `squads/ubatuba-reage/pipeline/data/quality-criteria.md` — benchmarks do perfil

---

## Instructions

Dispatch 3 agentes em paralelo, cada um avaliando o conteudo sob sua perspectiva especializada:

### Carlos Curador — Diagnostico Editorial
- Dimensoes: Gancho (15%), Narrativa (10%), Ritmo (8%), Clareza (10%)
- Foco: estrutura narrativa, arco SCQA, qualidade do hook, legibilidade
- Task: `diagnose-editorial.md`
- Output: `diagnostico-editorial.md`

### Lucia Local — Diagnostico Comunitario
- Dimensoes: Friccao (10%), Mobilizacao (12%), Identidade (8%), Utilidade (7%)
- Foco: perspectiva do morador, CTAs acionaveis, identidade local
- Task: `diagnose-community.md`
- Output: `diagnostico-comunitario.md`

### Bia Boost — Diagnostico Estrategico
- Dimensoes: Gancho (15%), Compartilhabilidade (5%), Prova (15%), Ritmo (8%)
- Foco: performance digital, projecao de ER, saves/shares
- Task: `diagnose-strategy.md`
- Output: `diagnostico-estrategico.md`

---

## Output

Tres arquivos de diagnostico independentes na pasta de output do run:
- `diagnostico-editorial.md`
- `diagnostico-comunitario.md`
- `diagnostico-estrategico.md`

Cada um segue o formato definido na respectiva task do agente.

---

## Quality Criteria

- Os 3 diagnosticos sao produzidos em paralelo (nao sequencialmente)
- Cada diagnostico cobre exclusivamente suas dimensoes atribuidas
- Notas de 0-10 com citacao de trecho em todas as dimensoes
- Propostas de reescrita concretas para notas < 8
