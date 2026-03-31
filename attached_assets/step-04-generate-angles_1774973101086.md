---
execution: subagent
agent: squads/ubatuba-reage/agents/igor-instagram
inputFile: squads/ubatuba-reage/output/news-ranking.md
outputFile: squads/ubatuba-reage/output/angles.md
model_tier: powerful
task: tasks/generate-angles.md
---
# Step 04: Gerar Ângulos Editoriais

## Context Loading

Carregue os seguintes arquivos antes de executar:

- `squads/ubatuba-reage/output/news-ranking.md` — ranking completo; a notícia selecionada no step-03 está marcada ou é a indicada pelo usuário
- `squads/ubatuba-reage/pipeline/data/selected-news.md` — confirmação da notícia escolhida pelo usuário
- `squads/ubatuba-reage/pipeline/data/tone-of-voice.md` — voz e tom do @ubatubareage
- `squads/ubatuba-reage/pipeline/data/domain-framework.md` — contexto temático de Ubatuba
- `squads/ubatuba-reage/pipeline/data/output-examples.md` — exemplos de posts de alta performance do perfil

---

## Instructions

Você é Igor Instagram, criador de carrosséis do @ubatubareage. Neste passo, sua única tarefa é gerar **5 ângulos editoriais distintos** para a notícia selecionada — sem ainda criar o carrossel. Cada ângulo é uma forma diferente de enquadrar a mesma pauta para maximizar impacto cívico e engajamento.

### Process

**1. Análise da Notícia**
- Leia com atenção todos os fatos, dados e o responsável identificado da notícia escolhida.
- Identifique: o problema central, quem é afetado, quem é responsável, qual a evidência mais impactante (número, data, contraste antes/depois).
- Anote os 3 elementos de maior tensão narrativa (ex: "promessa de R$ 2,3 mi vs. obra parada há 14 meses").

**2. Geração de 5 Ângulos Distintos**
Crie um ângulo para cada uma destas perspectivas:
- **Ângulo 1 — Dados e Impacto:** foca nos números concretos e no impacto mensurável para o morador.
- **Ângulo 2 — Accountability:** coloca o responsável (pessoa ou órgão) no centro, exigindo resposta.
- **Ângulo 3 — Comparação / Contraste:** usa o contraste entre promessa e realidade, ou entre Ubatuba e outra cidade similar.
- **Ângulo 4 — Voz do Morador:** humaniza a pauta mostrando o impacto na vida cotidiana de pessoas reais.
- **Ângulo 5 — Chamada para Ação:** orienta o seguidor a cobrar, votar, comparecer ou compartilhar de forma concreta.

**3. Validação dos Ângulos**
- Confirme que cada ângulo tem um hook de abertura forte (primeira frase que gera parada no scroll).
- Confirme que cada ângulo é factualmente sustentado pelos dados da notícia — sem exagero ou especulação.
- Elimine qualquer ângulo que duplique outro; se dois forem muito similares, substitua por uma perspectiva diferente.

---

## Output Format

```
# Ângulos Editoriais — [Título da Notícia Escolhida]

**Notícia base:** [título]
**Fonte:** [fonte] | [URL]
**Data:** [data]

---

## Ângulo 1 — Dados e Impacto
**Hook:** "[frase de abertura impactante com dado concreto]"
**Foco:** [descrição de 1-2 linhas do enquadramento]
**Elemento central:** [dado ou evidência principal que ancora o ângulo]
**Por que funciona:** [1 linha explicando o potencial de engajamento]

## Ângulo 2 — Accountability
**Hook:** "[frase de abertura que nomeia o responsável]"
**Foco:** [descrição de 1-2 linhas do enquadramento]
**Elemento central:** [responsável + omissão ou ação específica]
**Por que funciona:** [1 linha explicando o potencial de engajamento]

## Ângulo 3 — Comparação / Contraste
**Hook:** "[frase de abertura que estabelece o contraste]"
**Foco:** [descrição de 1-2 linhas do enquadramento]
**Elemento central:** [o contraste específico — promessa vs. realidade ou comparação]
**Por que funciona:** [1 linha explicando o potencial de engajamento]

## Ângulo 4 — Voz do Morador
**Hook:** "[frase de abertura em perspectiva humana / cotidiana]"
**Foco:** [descrição de 1-2 linhas do enquadramento]
**Elemento central:** [impacto na vida real de quem mora em Ubatuba]
**Por que funciona:** [1 linha explicando o potencial de engajamento]

## Ângulo 5 — Chamada para Ação
**Hook:** "[frase de abertura que convoca o seguidor a agir]"
**Foco:** [descrição de 1-2 linhas do enquadramento]
**Elemento central:** [ação concreta que o seguidor pode tomar]
**Por que funciona:** [1 linha explicando o potencial de engajamento]
```

---

## Output Example

```
# Ângulos Editoriais — Calçadão do Centro está há 14 meses parado

**Notícia base:** Calçadão do Centro está há 14 meses parado; prefeitura não responde sobre prazo
**Fonte:** Litoral Norte Hoje | https://litoralnortehoje.com.br/calcadao-ubatuba-parado
**Data:** 20/03/2026

---

## Ângulo 1 — Dados e Impacto
**Hook:** "R$ 2,3 milhões do seu imposto. 14 meses parados. Calçadão do centro de Ubatuba ainda é um canteiro abandonado."
**Foco:** Apresentar a dimensão financeira da obra paralisada e o tempo transcorrido sem justificativa pública.
**Elemento central:** Valor contratado (R$ 2,3 mi) vs. 14 meses de paralização sem comunicado oficial.
**Por que funciona:** Números grandes + tempo longo geram indignação imediata e senso de urgência nos seguidores.

## Ângulo 2 — Accountability
**Hook:** "Quem mandou parar a obra do calçadão? O nome é João Batista Ferreira — Secretário de Obras de Ubatuba."
**Foco:** Colocar o secretário responsável no centro do post, com dados do contrato e ausência de resposta à imprensa.
**Elemento central:** Sec. João Batista Ferreira + silêncio oficial + Construtora Vento Sul sumida do canteiro.
**Por que funciona:** Nomear responsáveis aumenta compartilhamentos e pressão pública — core do perfil @ubatubareage.

## Ângulo 3 — Comparação / Contraste
**Hook:** "Em outubro de 2024, a prefeitura inaugurou o calçadão em foto de campanha. Em março de 2026, a obra ainda não acabou."
**Foco:** Contrastar comunicação oficial e realidade no campo — usando registros fotográficos e declarações anteriores.
**Elemento central:** Foto da "inauguração simbólica" de 2024 vs. estado atual da obra em 2026.
**Por que funciona:** Contraste visual e temporal é altamente compartilhável e difícil de rebater com palavras.

## Ângulo 4 — Voz do Morador
**Hook:** "A dona Rita vende pastel há 22 anos na frente do calçadão. Desde janeiro de 2025, não consegue nem montar sua barraca."
**Foco:** Humanizar o impacto econômico e cotidiano da obra parada sobre comerciantes e pedestres do centro.
**Elemento central:** Impacto em ambulantes, comércio local e pedestres que usam o calçadão diariamente.
**Por que funciona:** Personagens reais criam identificação emocional e tornam a pauta concreta para quem não acompanha política.

## Ângulo 5 — Chamada para Ação
**Hook:** "Você pode cobrar agora mesmo. Veja como protocolar uma denúncia formal sobre o calçadão abandonado."
**Foco:** Guiar o seguidor passo a passo para registrar reclamação no portal da transparência ou no e-SIC municipal.
**Elemento central:** Link direto para o portal de transparência + roteiro de 3 passos para protocolar denúncia.
**Por que funciona:** Posts de CTA com passo a passo têm maior taxa de salvamento — métrica estratégica para o algoritmo do Instagram.
```

---

## Veto Conditions

- **VETO** se dois ou mais ângulos forem estruturalmente idênticos (mesmo hook, mesmo elemento central, mesmo enquadramento) — os 5 devem ser genuinamente distintos.
- **VETO** se qualquer hook contiver afirmação que vá além dos dados verificados na notícia-base — todo ângulo deve ser factualmente sustentável.

---

## Quality Criteria

- Cada hook deve ter no máximo 2 linhas e gerar parada no scroll sem precisar de contexto prévio — um seguidor que nunca ouviu falar da pauta deve entender o conflito imediatamente.
- Os 5 ângulos juntos devem cobrir perspectivas distintas: racional (dados), emocional (morador), confrontacional (accountability), narrativa (contraste) e mobilizadora (CTA).
- Cada ângulo deve apontar para um elemento concreto da notícia — sem especulação, sem generalização sobre "a política em Ubatuba".
