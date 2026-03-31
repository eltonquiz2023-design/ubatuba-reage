---
execution: subagent
agent: squads/ubatuba-reage/agents/ricardo-rastreio
inputFile:
  - squads/ubatuba-reage/pipeline/data/selected-news.md
  - squads/ubatuba-reage/pipeline/data/campaigns.md
outputFile: squads/ubatuba-reage/pipeline/data/campaign-context.md
tasks:
  - tasks/check-campaign.md
---

# Step 03b: Verificacao de Campanha — Ricardo Rastreio

## Context Loading

- `squads/ubatuba-reage/pipeline/data/selected-news.md` — pauta selecionada no step-03
- `squads/ubatuba-reage/pipeline/data/campaigns.md` — registro de campanhas ativas
- `squads/ubatuba-reage/pipeline/data/domain-framework.md` — ciclo de campanha de referencia

---

## Instructions

Ricardo verifica se a pauta selecionada pertence a uma campanha existente ou inicia uma campanha nova.

### Processo

1. Extrair tema, entidades e contrato/PL da pauta selecionada
2. Buscar em campaigns.md por tema, pessoa e instituicao
3. Se campanha existente: identificar fase atual e posicionar o conteudo
4. Se campanha nova: criar entrada em campaigns.md e definir plano de 4 semanas

### Output

`campaign-context.md` com:
- ID da campanha (existente ou nova)
- Fase atual (EXPOSICAO / PRESSAO / RESPONSABILIZACAO / MEMORIA)
- Tom recomendado para esta fase
- Angulo sugerido em relacao ao(s) post(s) anterior(es)
- Plano das proximas 3 semanas (se fase EXPOSICAO)

Esse contexto e consumido por Igor Instagram no step-04 para ajustar o angulo do carrossel conforme a fase da campanha.

---

## Quality Criteria

- Busca em campaigns.md por tema, pessoa E instituicao
- Fase corretamente identificada pela timeline
- campaigns.md atualizado com novo post ou nova campanha
