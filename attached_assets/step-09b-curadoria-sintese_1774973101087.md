---
execution: inline
agent: squads/ubatuba-reage/agents/vera-veredito
inputFile:
  - squads/ubatuba-reage/output/diagnostico-editorial.md
  - squads/ubatuba-reage/output/diagnostico-comunitario.md
  - squads/ubatuba-reage/output/diagnostico-estrategico.md
  - squads/ubatuba-reage/output/review-report.md
outputFile: squads/ubatuba-reage/output/curadoria-scorecard.md
tasks:
  - tasks/synthesize-curadoria.md
---

# Step 09b: Curadoria Estrategica — Sintese de Vera Veredito

## Context Loading

Carregue os seguintes arquivos antes de executar:

- `squads/ubatuba-reage/output/{run_id}/v{n}/diagnostico-editorial.md` — Carlos Curador
- `squads/ubatuba-reage/output/{run_id}/v{n}/diagnostico-comunitario.md` — Lucia Local
- `squads/ubatuba-reage/output/{run_id}/v{n}/diagnostico-estrategico.md` — Bia Boost
- `squads/ubatuba-reage/output/{run_id}/v{n}/review-report.md` — review FACT de Vera (step-09)
- `squads/ubatuba-reage/pipeline/data/curadoria-criterios.md` — rubrica com pesos

---

## Instructions

Vera Veredito sintetiza os 3 diagnosticos independentes em um scorecard unificado de 10 dimensoes.

### Processo

1. **Consolidar** as notas dos 3 diagnosticos na tabela ponderada
2. **Resolver divergencias** quando 2 agentes avaliam a mesma dimensao com diferenca > 3 pontos
3. **Integrar** com o review FACT ja produzido no step-09 (poder de veto factual)
4. **Calcular** score ponderado final
5. **Emitir veredito**: APROVADO (>= 9.0), APROVADO CONDICIONAL (8.0-8.9), REJEITADO (< 8.0)
6. **Se REJEITADO e ciclo < 3/3**: compilar instrucoes de auto-correcao ordenadas por impacto

### Regras de Veto FACT

O review FACT do step-09 tem poder de veto absoluto:
- F-score < 4/5 → REJEITADO independente do score de curadoria
- RISCO LEGAL flagged → REJEITADO independente do score de curadoria

### Auto-Correcao

Se score < 8.0 e ciclo < 3/3:
- Compile mudancas obrigatorias dos 3 diagnosticos + review FACT
- Ordene por impacto no score ponderado (maior peso primeiro)
- Gere instrucoes para o agente criador
- O pipeline retorna ao step-06 com as instrucoes

Se ciclo = 3/3:
- Escale ao usuario com relatorio completo
- Nao entre no ciclo 4

---

## Output

`squads/ubatuba-reage/output/{run_id}/v{n}/curadoria-scorecard.md` conforme formato definido em `synthesize-curadoria.md`.

---

## Veto Conditions

- VETO se emitir veredito sem consultar os 3 diagnosticos
- VETO se ignorar o review FACT do step-09
- VETO se entrar em ciclo 4 de revisao

## Quality Criteria

- Score matematicamente correto (soma dos ponderados com pesos da rubrica)
- Divergencias registradas e resolvidas com criterio conservador
- Mudancas obrigatorias ordenadas por impacto estimado
- Projecao de ER baseada em benchmarks reais do perfil
