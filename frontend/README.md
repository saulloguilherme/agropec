# Agropec 2025 - Portal Oficial

Bem-vindo ao repositório do **Portal da Agropec 2025**, o site oficial da maior feira agropecuária do Pará! Este projeto foi desenvolvido com foco em performance, experiência do usuário e facilidade de administração de conteúdo.

---

## ✨ Visão Geral

O portal oferece informações completas sobre a feira, programação de eventos, atrações, expositores, mapa interativo do local, além de um painel administrativo para gerenciamento de dados.

- **Frontend:** React + TypeScript + Vite
- **Estilo:** CSS modularizado, responsivo e moderno
- **Administração:** Painel protegido para edição de atrações e programação
- **Experiência:** Animações, carrosséis, navegação fluida e design mobile-first

---

## 🚀 Funcionalidades

- **Página Inicial:** Destaques, carrossel de imagens e atrações principais.
- **Programação:** Visualização da agenda de eventos por dia e horário.
- **Mapa Interativo:** Explore o local da feira com informações dinâmicas dos espaços.
- **Sobre:** Informações institucionais, missão, visão, valores e expositores parceiros.
- **Contato:** Formulário para dúvidas, sugestões e parcerias.
- **Painel Admin:** Login seguro, dashboard, edição de atrações e programação.

---

## 📁 Estrutura de Pastas

```
frontend/
│
├── public/
│   ├── images/         # Logos, fotos de atrações, expositores, etc.
│   └── map/            # SVG do mapa da feira
│
├── src/
│   ├── components/     # Componentes reutilizáveis (Navbar, Footer, Carrossel, etc.)
│   ├── pages/          # Páginas públicas e administrativas
│   ├── styles/         # CSS modularizado
│   └── App.tsx         # Roteamento principal
│
├── index.html
├── package.json
└── ...
```

---

## 🛠️ Tecnologias Utilizadas

- [React 19](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- [Framer Motion](https://www.framer.com/motion/) (animações)
- [Swiper](https://swiperjs.com/) (carrossel)
- [React Router DOM](https://reactrouter.com/)
- [React Icons](https://react-icons.github.io/react-icons/)
- CSS puro e modularizado

---

## ⚡ Como Rodar Localmente

1. **Clone o repositório:**
   ```sh
   git clone https://github.com/seu-usuario/agropec2025.git
   cd agropec2025/frontend
   ```

2. **Instale as dependências:**
   ```sh
   npm install
   ```

3. **Inicie o servidor de desenvolvimento:**
   ```sh
   npm run dev
   ```

4. **Acesse:**  
   Abra [http://localhost:5173](http://localhost:5173) no navegador.

---

## 🔒 Painel Administrativo

- Acesse `/admin` para login.
- Após autenticação, gerencie atrações e programação pelo dashboard.
- Rotas protegidas por Autenticação.

---

## 📦 Scripts Disponíveis

- `npm run dev` — Inicia o servidor de desenvolvimento.
- `npm run build` — Gera build de produção.

---

Feito com 💚 para a Agropec 2025.