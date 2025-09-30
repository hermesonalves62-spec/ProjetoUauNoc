# ConectaNet - Provedor de Internet

*Automatically synced with your [v0.app](https://v0.app) deployments*

[![Deployed on Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?style=for-the-badge&logo=vercel)](https://vercel.com/jekib16300-8937s-projects/v0-remix-of-untitled-chat)
[![Built with v0](https://img.shields.io/badge/Built%20with-v0.app-black?style=for-the-badge)](https://v0.app/chat/projects/GUjRrOacFhX)

## Overview

Website institucional para provedor de internet com instalação residencial e empresarial, manutenção e projetos de redes.

## Tech Stack

- **Next.js 13.5.6** - React framework
- **React 18.2.0** - UI library
- **Tailwind CSS 3.3.3** - Styling
- **TypeScript** - Type safety
- **Radix UI** - Accessible components

## Deploy to Netlify

Este projeto está configurado para deploy no Netlify com versões estáveis e compatíveis.

### Configurações de Build

- **Build command**: `npm ci && npm run build`
- **Publish directory**: `.next`
- **Node version**: 18.x
- **npm version**: 9.x

### Pré-requisitos para Deploy

**IMPORTANTE**: Antes de fazer deploy no Netlify, você DEVE gerar o `package-lock.json`:

\`\`\`bash
# 1. Limpe instalações anteriores
rm -rf node_modules package-lock.json

# 2. Instale as dependências (isso gerará o package-lock.json)
npm install

# 3. Faça commit do package-lock.json
git add package-lock.json
git commit -m "Add package-lock.json for Netlify deployment"
git push
\`\`\`

### Por que essas configurações?

- **Next.js 13.5.6 + React 18.2.0**: Versões estáveis e amplamente testadas
- **Tailwind CSS 3.3.3**: Versão estável com configuração tradicional (tailwind.config.js)
- **Node 18.x**: Máxima compatibilidade com todas as dependências
- **npm ci**: Instalação rápida e determinística usando package-lock.json

### Desenvolvimento Local

\`\`\`bash
# Instalar dependências
npm install

# Rodar servidor de desenvolvimento
npm run dev

# Build para produção
npm run build

# Iniciar servidor de produção
npm start
\`\`\`

### Troubleshooting Netlify

Se encontrar erros de build:

1. **"Cannot read properties of null (reading 'matches')"**
   - Solução: Certifique-se de que o `package-lock.json` existe e está commitado no repositório
   - Execute `npm install` localmente para gerar o arquivo

2. **"Cannot install with frozen-lockfile because pnpm-lock.yaml is absent"**
   - Solução: O projeto agora usa npm, não pnpm. Delete `pnpm-lock.yaml` se existir

3. **Erros de versão do Node**
   - Solução: Verifique se `.nvmrc` tem `18` e `netlify.toml` tem `NODE_VERSION = "18"`

4. **Erros de Tailwind CSS**
   - Solução: O projeto usa Tailwind v3 com `tailwind.config.js` e `postcss.config.js`

5. **Limpar cache do Netlify**
   - Vá em Deploys > Trigger deploy > Clear cache and deploy site

### Variáveis de Ambiente

Se seu app requer variáveis de ambiente, adicione-as no dashboard do Netlify:
- Vá em Site settings > Environment variables
- Adicione suas variáveis (ex: API keys, URLs de banco de dados)

### Testando Build Localmente

Antes de fazer deploy, teste o build localmente:

\`\`\`bash
# Instalação limpa
rm -rf node_modules package-lock.json
npm install

# Teste o build de produção
npm run build

# Se bem-sucedido, você está pronto para deploy!
\`\`\`

## Estrutura do Projeto

\`\`\`
├── app/                    # Next.js App Router
│   ├── page.tsx           # Página principal
│   ├── layout.tsx         # Layout raiz
│   └── globals.css        # Estilos globais
├── components/            # Componentes React
│   ├── ui/               # Componentes UI (shadcn)
│   └── ...               # Componentes customizados
├── public/               # Assets estáticos
├── tailwind.config.js    # Configuração Tailwind v3
├── postcss.config.js     # Configuração PostCSS
├── netlify.toml          # Configuração Netlify
└── package.json          # Dependências do projeto
\`\`\`

## Build your app

Continue construindo seu app em:

**[https://v0.app/chat/projects/GUjRrOacFhX](https://v0.app/chat/projects/GUjRrOacFhX)**
