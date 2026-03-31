<p align="center">
  <strong style="font-size: 2em;">Ubatuba <span style="color: #ef4444;">Reage</span></strong>
</p>

<h3 align="center">Portal de jornalismo civico independente de Ubatuba</h3>

<p align="center">
  Fiscalizacao popular, denuncia cidada e informacao que o poder nao quer que voce leia.
</p>

<p align="center">
  <a href="#sobre">Sobre</a> •
  <a href="#funcionalidades">Funcionalidades</a> •
  <a href="#tecnologias">Tecnologias</a> •
  <a href="#arquitetura">Arquitetura</a> •
  <a href="#instalacao">Instalacao</a> •
  <a href="#uso">Uso</a> •
  <a href="#api">API</a> •
  <a href="#contribuindo">Contribuindo</a>
</p>

---

## Sobre

**Ubatuba Reage** e um portal de jornalismo civico independente focado em investigacao, fiscalizacao do poder publico e defesa dos direitos da populacao de Ubatuba, litoral norte de Sao Paulo.

O projeto nasceu da necessidade de um veiculo de comunicacao local que nao dependa de publicidade governamental e que tenha compromisso exclusivo com a verdade e o interesse publico.

### Editorias

| Editoria | Descricao |
|---|---|
| **O Povo Fiscaliza** | Reportagens investigativas sobre gestao publica, orcamento e licitacoes |
| **Saude em Colapso** | Cobertura da crise na saude publica municipal |
| **Brasil e Mundo** | Analises sobre politica nacional e internacional com impacto local |
| **Vozes de Ubatuba** | Entrevistas, perfis e historias da comunidade |
| **Cultura e Identidade** | Valorizacao da cultura caiçara e patrimonio local |

---

## Funcionalidades

### Portal Publico
- **Homepage** com materia destaque em hero full-width e grid de reportagens recentes
- **Pagina de materias** com filtros por categoria e contagem de artigos
- **Pagina de artigo** completa com autor, data, tempo de leitura e compartilhamento social
- **Busca** por titulo e conteudo das materias
- **Editorias** organizadas por temas (fiscalizacao, saude, politica, cultura)
- **Formulario de denuncia anonima** para que cidadaos reportem irregularidades
- **Formulario de contato** para leitores e fontes
- **Feed RSS/XML** para leitores de noticias
- **Sitemap XML** automatico para SEO
- **Dark mode** como padrao, layout inspirado em veiculos investigativos como The Intercept

### Painel Administrativo (`/admin`)
- **Dashboard** com estatisticas em tempo real (total de materias, rascunhos, denuncias, contatos)
- **Gestao de materias** — criar, editar, publicar/despublicar e excluir artigos
- **Editor de artigos** com campos para titulo, lead, corpo (multiplos paragrafos), autor, categoria, serie, imagem, legenda e tempo de leitura
- **Gestao de denuncias** — visualizar denuncias recebidas, alterar status (pendente, em analise, resolvida, arquivada)
- **Gestao de contatos** — visualizar mensagens recebidas, marcar como lidas
- **Autenticacao** via Replit Auth (OIDC/PKCE) — apenas usuarios autorizados acessam o painel

---

## Tecnologias

### Frontend
| Tecnologia | Versao | Uso |
|---|---|---|
| Next.js | 16.2.1 | Framework React com SSR/ISR |
| TypeScript | 5.x | Tipagem estatica |
| Tailwind CSS | v4 | Estilizacao utility-first |
| Framer Motion | 12.x | Animacoes e transicoes |
| shadcn/ui | - | Componentes de interface |

### Backend
| Tecnologia | Versao | Uso |
|---|---|---|
| Express | 4.x | API REST |
| Drizzle ORM | 0.44.x | ORM type-safe para PostgreSQL |
| PostgreSQL | 16 | Banco de dados relacional |
| Passport.js | 0.7.x | Autenticacao OIDC |

### Infraestrutura
| Tecnologia | Uso |
|---|---|
| pnpm Workspaces | Monorepo com pacotes compartilhados |
| Replit Auth | Autenticacao OpenID Connect com PKCE |
| ISR (30s) | Revalidacao incremental para performance |

---

## Arquitetura

```
ubatuba-reage/
├── artifacts/
│   ├── ubatuba-reage/          # Frontend Next.js
│   │   └── src/
│   │       ├── app/            # Rotas (App Router)
│   │       │   ├── admin/      # Painel administrativo
│   │       │   ├── article/    # Paginas de artigos
│   │       │   ├── busca/      # Busca
│   │       │   ├── categoria/  # Filtro por categoria
│   │       │   ├── denuncias/  # Formulario de denuncia
│   │       │   ├── contato/    # Formulario de contato
│   │       │   ├── editorias/  # Listagem de editorias
│   │       │   ├── materias/   # Arquivo de materias
│   │       │   └── sobre/      # Sobre o projeto
│   │       ├── components/     # Componentes reutilizaveis
│   │       └── lib/            # Utilitarios e fetchers
│   │
│   └── api-server/             # Backend Express
│       └── src/
│           ├── routes/
│           │   ├── articles.ts # CRUD de artigos (público + admin)
│           │   ├── admin.ts    # Stats, denuncias, contatos
│           │   ├── auth.ts     # Login/logout/callback
│           │   ├── denuncias.ts# Receber denuncias
│           │   └── contato.ts  # Receber contatos
│           ├── lib/
│           │   └── auth.ts     # Configuracao Passport.js
│           └── middlewares/
│               └── authMiddleware.ts
│
├── lib/
│   ├── db/                     # Schema Drizzle ORM
│   │   └── src/schema/
│   │       ├── articles.ts     # Tabela de artigos
│   │       ├── denuncias.ts    # Tabela de denuncias
│   │       ├── contatos.ts     # Tabela de contatos
│   │       └── auth.ts         # Tabela de sessoes
│   ├── api-client-react/       # Cliente API gerado (orval)
│   ├── api-spec/               # Especificacao OpenAPI
│   └── replit-auth-web/        # Hook de autenticacao React
│
└── pnpm-workspace.yaml         # Configuracao do monorepo
```

### Fluxo de dados

```
Leitor → Next.js (ISR 30s) → API Express → PostgreSQL
                                   ↑
Administrador → /admin → API (auth) → PostgreSQL
                           ↑
                    Replit Auth (OIDC)
```

---

## Instalacao

### Pre-requisitos
- Node.js 20+
- pnpm 10+
- PostgreSQL 16+

### Setup

```bash
# Clonar o repositorio
git clone https://github.com/eltonquiz2023-design/ubatuba-reage.git
cd ubatuba-reage

# Instalar dependencias
pnpm install

# Configurar variaveis de ambiente
# Criar um arquivo .env na raiz com:
DATABASE_URL=postgresql://usuario:senha@localhost:5432/ubatuba_reage

# Criar tabelas no banco de dados
pnpm --filter @workspace/db run db:push

# Iniciar o servidor de desenvolvimento
pnpm --filter @workspace/api-server run dev    # API na porta 8080
pnpm --filter @workspace/ubatuba-reage run dev # Frontend na porta 3000
```

---

## Uso

### Portal publico
Acesse `http://localhost:3000` para ver o portal com todas as materias publicadas.

### Painel administrativo
Acesse `http://localhost:3000/admin` para o painel de administracao. E necessario autenticacao para acessar.

### Criar uma materia
1. Acesse `/admin` e faca login
2. Clique em "Nova Materia" no menu lateral
3. Preencha titulo, lead, corpo, autor, categoria e imagem
4. Escolha o status: "Publicado" para publicar imediatamente ou "Rascunho" para salvar sem publicar
5. Clique em "Salvar"

### Gerenciar denuncias
1. Acesse `/admin/denuncias`
2. Visualize denuncias recebidas pelo formulario publico
3. Altere o status conforme a apuracao (pendente → em analise → resolvida)

---

## API

### Endpoints publicos

| Metodo | Rota | Descricao |
|---|---|---|
| `GET` | `/api/articles` | Lista todos os artigos publicados |
| `GET` | `/api/articles/:slug` | Retorna um artigo pelo slug |
| `POST` | `/api/denuncias` | Envia uma denuncia anonima |
| `POST` | `/api/contato` | Envia uma mensagem de contato |

### Endpoints administrativos (autenticacao obrigatoria)

| Metodo | Rota | Descricao |
|---|---|---|
| `POST` | `/api/articles` | Cria um novo artigo |
| `PUT` | `/api/articles/:id` | Atualiza um artigo existente |
| `DELETE` | `/api/articles/:id` | Remove um artigo |
| `PATCH` | `/api/articles/:id/publish` | Alterna status publicado/rascunho |
| `GET` | `/api/admin/stats` | Estatisticas do dashboard |
| `GET` | `/api/admin/denuncias` | Lista todas as denuncias |
| `PATCH` | `/api/admin/denuncias/:id` | Atualiza status de uma denuncia |
| `GET` | `/api/admin/contatos` | Lista todos os contatos |
| `PATCH` | `/api/admin/contatos/:id/read` | Marca contato como lido |

### Exemplo de uso

```bash
# Listar artigos publicados
curl http://localhost:8080/api/articles

# Buscar artigo por slug
curl http://localhost:8080/api/articles/iptu-aumento-abusivo-2025

# Enviar denuncia
curl -X POST http://localhost:8080/api/denuncias \
  -H "Content-Type: application/json" \
  -d '{
    "titulo": "Obra irregular no centro",
    "descricao": "Construcao sem alvara na Rua...",
    "categoria": "Urbanismo",
    "anonimo": true
  }'
```

---

## Banco de Dados

### Tabelas

**articles** — Artigos/materias jornalisticas
- `id`, `slug`, `title`, `lead`, `body` (JSONB), `author`, `author_bio`, `author_image`, `category`, `category_slug`, `series`, `image_url`, `image_caption`, `reading_time`, `status` (draft/published), `published_at`, `created_at`, `updated_at`

**denuncias** — Denuncias recebidas dos cidadaos
- `id`, `titulo`, `descricao`, `categoria`, `localizacao`, `contato`, `anonimo`, `status` (pendente/em_analise/resolvida/arquivada), `created_at`

**contatos** — Mensagens de contato
- `id`, `nome`, `email`, `assunto`, `mensagem`, `lido`, `created_at`

**sessions** — Sessoes de autenticacao
- `sid`, `sess` (JSONB), `expire`

---

## Seguranca

- Endpoints administrativos protegidos por autenticacao (retornam 401 para requisicoes sem sessao)
- Artigos em rascunho nao sao expostos na API publica
- Validacao de enums nos campos de status (artigos e denuncias)
- CORS configurado para origens permitidas
- Sessoes armazenadas no banco de dados com expiracao automatica

---

## Contribuindo

Contribuicoes sao bem-vindas! Este e um projeto de jornalismo civico e toda ajuda fortalece a fiscalizacao popular.

1. Fork o repositorio
2. Crie uma branch para sua feature (`git checkout -b feature/nova-funcionalidade`)
3. Commit suas mudancas (`git commit -m 'Adiciona nova funcionalidade'`)
4. Push para a branch (`git push origin feature/nova-funcionalidade`)
5. Abra um Pull Request

---

## Licenca

Este projeto e de codigo aberto. O conteudo jornalistico e protegido por direitos autorais e nao pode ser reproduzido sem autorizacao.

---

<p align="center">
  <strong>Ubatuba Reage</strong> — Jornalismo que fiscaliza, informa e transforma.
</p>
