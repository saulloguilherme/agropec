# Agropec 2025

Bem-vindo ao repositório do **Aplicativo Agropec 2025**, a plataforma oficial da maior feira agropecuária do Pará! Este projeto reúne frontend, backend e infraestrutura para oferecer uma experiência digital moderna, segura e eficiente para visitantes, expositores e organizadores.

---

## 🏗️ Visão Geral

O sistema é composto por:

- **Frontend:** Portal público e painel administrativo, ambos desenvolvidos em React + TypeScript.
- **Backend:** API RESTful em Node.js + Express, com autenticação JWT, integração com PostgreSQL (via Prisma) e armazenamento de imagens em MongoDB.
- **Infraestrutura:** Docker Compose para orquestração dos serviços, facilitando o deploy e o desenvolvimento local.

---

## 🚀 Funcionalidades Principais

- **Portal Público:**  
  - Página inicial com destaques, atrações e carrosséis animados.
  - Programação detalhada dos eventos, filtrada por dia.
  - Mapa interativo do parque, com tooltip e destaque visual ao passar o mouse.
  - Página "Sobre" com missão, visão, valores e expositores parceiros.
  - Formulário de contato.

- **Painel Administrativo:**  
  - Login seguro com autenticação JWT (token salvo em cookie HTTP-only).
  - Dashboard para gerenciamento de atrações, programação e imagens.
  - CRUD completo de eventos e atrações.
  - Upload de imagens para o MongoDB.

- **API Backend:**  
  - Endpoints RESTful para eventos, atrações, programação e upload de imagens.
  - Middleware de autenticação para rotas protegidas.
  - Integração com PostgreSQL (dados relacionais) e MongoDB (imagens).
  - Health check para monitoramento das conexões.

- **Infraestrutura:**  
  - Docker Compose para subir todos os serviços (frontend, backend, PostgreSQL, MongoDB, MinIO).
  - Scripts de inicialização e migração automática do banco.

---

## 📦 Estrutura do Projeto

```
agropec/
│
├── backend/
│   ├── src/                # Código-fonte Node.js/Express
│   ├── prisma/             # Schema e migrações Prisma
│   ├── Dockerfile
│   └── docker-compose.yml
│
├── frontend/
│   ├── src/                # Código-fonte React
│   ├── public/             # Imagens, SVGs, favicon, etc.
│   ├── index.html
│   └── package.json
│
└── README.md
```

---

## 🛠️ Tecnologias Utilizadas

- **Frontend:** React 19, TypeScript, Vite, Framer Motion, Swiper, React Router DOM, CSS modularizado
- **Backend:** Node.js 20, Express, TypeScript, Prisma ORM, JWT, Multer, MongoDB Driver
- **Banco de Dados:** PostgreSQL (relacional), MinIO
- **Infraestrutura:** Docker, Docker Compose, 

---

## ⚡ Como Rodar Localmente

1. **Clone o repositório:**
   ```sh
   git clone https://github.com/seu-usuario/agropec2025.git
   cd agropec2025
   ```

2. **Suba todos os serviços com Docker Compose:**
   ```sh
   docker compose up --build
   ```

3. **Acesse no navegador:**
   - Portal: [http://localhost:5173](http://localhost:5173)
   - Painel Admin: [http://localhost:5173/admin](http://localhost:5173/admin)

---

## 🔒 Segurança

- Autenticação JWT com tokens armazenados em cookies HTTP-only.
- Rotas protegidas no backend e frontend.
- Variáveis sensíveis em arquivos `.env` (não versionados).

---

## 📝 Scripts Úteis

- **Frontend:**
  - `npm run dev` — Inicia o frontend em modo desenvolvimento.
  - `npm run build` — Gera build de produção.
- **Backend:**
  - `npm run dev` — Inicia o backend em modo desenvolvimento.
  - `npx prisma migrate deploy` — Aplica migrações do banco.

---

## 🤝 Contribuição

Contribuições são bem-vindas!  
Abra uma issue ou envie um pull request com sugestões, correções ou melhorias.

---

Feito com 💚 para Agropec 2025.