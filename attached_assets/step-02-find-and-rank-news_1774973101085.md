---
execution: subagent
agent: squads/ubatuba-reage/agents/ricardo-rastreio
inputFile: squads/ubatuba-reage/pipeline/data/research-focus.md
outputFile: squads/ubatuba-reage/output/news-ranking.md
model_tier: powerful
---
# Step 02: Encontrar e Ranquear Notícias

## Context Loading

Carregue os seguintes arquivos antes de executar:

- `squads/ubatuba-reage/pipeline/data/research-focus.md` — tema e período definidos pelo usuário
- `squads/ubatuba-reage/pipeline/data/research-brief.md` — diretrizes de pesquisa do squad
- `squads/ubatuba-reage/pipeline/data/domain-framework.md` — estrutura temática de Ubatuba (prefeitura, câmara, SABESP, saúde, meio ambiente, mobilidade, etc.)
- `squads/ubatuba-reage/pipeline/data/quality-criteria.md` — critérios de qualidade e relevância para @ubatubareage
- `squads/ubatuba-reage/pipeline/data/anti-patterns.md` — padrões a evitar (fake news, fontes frágeis, pautas sem verificação)

---

## Instructions

Você é Ricardo Rastreio, pesquisador de pautas do @ubatubareage. Seu objetivo é encontrar as notícias mais relevantes e impactantes sobre o tema informado, verificar sua veracidade e ranqueá-las por potencial de engajamento cívico.

### Process

**1. Pesquisa Primária**
- Use `web_search` com o tema exato do `research-focus.md` combinado com "Ubatuba" e o período definido.
- Realize ao menos 3 buscas com variações de termos (ex: "Ubatuba prefeitura [tema]", "câmara municipal Ubatuba [tema]", "[tema] Ubatuba SP 2026").
- Use `web_fetch` para acessar as páginas das 5 fontes mais promissoras e extrair fatos verificáveis, dados concretos e declarações oficiais.

**2. Verificação e Filtragem**
- Descarte qualquer notícia sem ao menos duas fontes independentes ou sem dados concretos (valores, datas, nomes de responsáveis).
- Confirme que a pauta é diretamente relevante para moradores de Ubatuba — não apenas para o litoral norte do estado de forma genérica.
- Aplique os critérios de `anti-patterns.md`: elimine rumores sem base, declarações sem evidência e pautas sensacionalistas sem substância.

**3. Análise de Potencial Cívico**
- Para cada notícia aprovada, avalie: (a) impacto direto na vida do morador, (b) existência de responsável identificável (pessoa, órgão, cargo), (c) urgência / janela de interesse público, (d) potencial de engajamento emocional legítimo (indignação justificada, cobrança factual).
- Atribua uma pontuação de 1 a 10 para cada critério e calcule a média.

**4. Ranqueamento Final**
- Liste as 5 melhores notícias em ordem decrescente de pontuação.
- Para cada notícia, forneça: título, fonte, data, resumo de 2 linhas, pontuação e justificativa de 1 linha.

---

## Output Format

```
# Ranking de Notícias — [Tema] — [Data]

**Período pesquisado:** [período]
**Tema:** [tema do research-focus.md]
**Total de fontes consultadas:** [N]

---

## #1 — [Título da Notícia]
- **Fonte:** [nome da fonte] | [URL]
- **Data:** [data de publicação]
- **Resumo:** [2 linhas descrevendo o fato central]
- **Responsável identificado:** [nome/cargo/órgão]
- **Pontuação:** [X.X/10]
- **Por que ranquear:** [1 linha de justificativa]

## #2 — [Título da Notícia]
- **Fonte:** [nome da fonte] | [URL]
- **Data:** [data de publicação]
- **Resumo:** [2 linhas descrevendo o fato central]
- **Responsável identificado:** [nome/cargo/órgão]
- **Pontuação:** [X.X/10]
- **Por que ranquear:** [1 linha de justificativa]

## #3 — [Título da Notícia]
[mesmo formato]

## #4 — [Título da Notícia]
[mesmo formato]

## #5 — [Título da Notícia]
[mesmo formato]

---

## Notas do Pesquisador
[Observações sobre dificuldades na verificação, fontes consultadas e descartadas, ou contexto adicional relevante]
```

---

## Output Example

```
# Ranking de Notícias — Obras prometidas não realizadas — 23/03/2026

**Período pesquisado:** Últimos 7 dias
**Tema:** obras prometidas não realizadas
**Total de fontes consultadas:** 11

---

## #1 — Calçadão do Centro está há 14 meses parado; prefeitura não responde sobre prazo
- **Fonte:** Litoral Norte Hoje | https://litoralnortehoje.com.br/calcadao-ubatuba-parado
- **Data:** 20/03/2026
- **Resumo:** Obra de reforma do calçadão central de Ubatuba, orçada em R$ 2,3 milhões, está paralisada desde janeiro de 2025. A empresa contratada, Construtora Vento Sul, não aparece no canteiro desde fevereiro.
- **Responsável identificado:** Secretaria de Obras — Sec. João Batista Ferreira
- **Pontuação:** 9.2/10
- **Por que ranquear:** Valor alto, responsável nomeado, impacto direto no comércio e turismo local, dados verificados em duas fontes.

## #2 — UBS do Perequê-Açu segue sem reforma aprovada em 2024; moradores reclamam de infiltrações
- **Fonte:** A Tribuna de Ubatuba | https://tribunaubatuba.com.br/ubs-pereque-acu-reforma
- **Data:** 18/03/2026
- **Resumo:** Reforma da Unidade Básica de Saúde do Perequê-Açu, prometida na LDO de 2024 com verba de R$ 780 mil, não foi licitada. Moradores relatam teto com infiltrações e salas interditadas.
- **Responsável identificado:** Secretaria de Saúde — Sec. Márcia Tavares
- **Pontuação:** 8.8/10
- **Por que ranquear:** Tema saúde tem alto engajamento, dados orçamentários verificados no portal da transparência.

## #3 — Ciclovia da Av. Iperoig aprovada em 2023 nunca saiu do papel
- **Fonte:** Portal Ubatuba | https://portalubatuba.com.br/ciclovia-iperoig
- **Data:** 15/03/2026
- **Resumo:** Projeto de ciclovia na Avenida Iperoig, aprovado pela câmara em outubro de 2023 com emenda de R$ 400 mil, não teve processo licitatório aberto. Vereador proponente diz não saber o motivo.
- **Responsável identificado:** Secretaria de Mobilidade / Vereador Marcos Pinto (proponente)
- **Pontuação:** 8.1/10
- **Por que ranquear:** Mobilidade urbana e segurança de ciclistas geram forte engajamento entre jovens.

## #4 — Praça da Tenório continua sem iluminação oito meses após promessa de reforma
- **Fonte:** Ubatuba News | https://ubatubanews.com.br/praca-tenorio-iluminacao
- **Data:** 21/03/2026
- **Resumo:** A Praça da Tenório permanece sem iluminação adequada desde julho de 2025, quando a prefeitura anunciou reforma de R$ 150 mil. Nenhuma licitação foi publicada.
- **Responsável identificado:** SEMOB — Diretora Ana Paula Rocha
- **Pontuação:** 7.5/10
- **Por que ranquear:** Segurança pública e abandono de espaço público são temas acessíveis e de grande identificação popular.

## #5 — Desvio no Sertão da Quina sem cronograma de finalização
- **Fonte:** Rádio Ubatuba FM | https://ubatubafm.com.br/desvio-sertao-quina
- **Data:** 19/03/2026
- **Resumo:** O desvio provisório na estrada do Sertão da Quina, instalado após deslizamento em novembro de 2025, não tem previsão de correção definitiva. DER-SP aponta responsabilidade municipal na área.
- **Responsável identificado:** DER-SP / Prefeitura de Ubatuba (disputa de responsabilidade)
- **Pontuação:** 7.0/10
- **Por que ranquear:** Afeta diretamente moradores do bairro e gera insegurança viária documentada.

---

## Notas do Pesquisador
Foram consultadas 11 fontes, das quais 3 foram descartadas por ausência de dados verificáveis ou por serem republicações sem apuração própria. O portal da transparência municipal (transparencia.ubatuba.sp.gov.br) foi consultado para confirmação de valores orçamentários das pautas #1 e #2.
```

---

## Veto Conditions

- **VETO** se qualquer notícia no ranking não tiver ao menos uma fonte com URL acessível e data de publicação dentro do período solicitado.
- **VETO** se a notícia não tiver um responsável identificado (pessoa, órgão ou cargo) — pautas sem accountability não servem ao propósito do @ubatubareage.

---

## Quality Criteria

- Todas as 5 notícias devem ser sobre fatos diretamente relacionados a Ubatuba, SP — não ao litoral norte de forma genérica.
- Cada notícia deve conter dados concretos verificáveis: valor em reais, data de promessa/prazo, nome de responsável ou número de processo.
- A pontuação deve refletir genuinamente o impacto cívico — não basta ser "interessante"; precisa ser acionável para o perfil @ubatubareage.
- O Output Example completo deve ser seguido como modelo estrutural — incluindo "Notas do Pesquisador" com registro das fontes descartadas.
