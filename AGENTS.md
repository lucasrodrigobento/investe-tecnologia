---
id: investe-tecnologia-agents
title: "AGENTS.md — Convenções para Agentes de IA"
tags: [investe-tecnologia, agents, nextjs, vercel, typescript]
version: 1.0.0
created: 2026-06-18
updated: 2026-06-18
author: Claude Sonnet 4.6
tokens: ~624
status: active
---

# AGENTS.md — Investe Tecnologia

> 📍 Leia primeiro [`MEMORY.md`](./MEMORY.md) para contexto operacional: deploy,
> stack, páginas e variáveis de ambiente.

## Sobre este projeto

Site institucional da **Investe Tecnologia** — agência de desenvolvimento de software.
Prod: `https://investetecnologia.com.br` (Vercel, deploy automático via push)

**Stack:** Next.js 16, Tailwind v4, shadcn/ui, Resend, TypeScript

**Versionamento:** `git@github-personal:lucasrodrigobento/investe-tecnologia.git`
⚠️ Código em `~/Projects/investe-tecnologia/`, não clonado no taproot — knowledge base
em `taproot/projects/investe-tecnologia/` é commitada no taproot.

## ⚠️ Next.js 16 — Breaking Changes

Esta versão tem mudanças incompatíveis com Next.js 13/14. Antes de escrever qualquer código, ler `node_modules/next/dist/docs/`. Respeitar avisos de deprecação — não assumir que APIs anteriores funcionam da mesma forma.

**`params` e `searchParams` são Promise em 15/16** — page components devem usar `await params`:
```tsx
// ✅ Next.js 15+
export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
}
```

**Turbopack** está estável para dev em 15.x e beta para prod em 16.x — não é necessário configuração extra se criado com `create-next-app`.

**Timeline**: Next.js 15.x LTS security support termina outubro/2026 — projeto já em 16.x, manter atualizado.

## Segurança e Sensibilidade

- Nunca commitar `.env`, `RESEND_API_KEY` ou credenciais Vercel
- `CONTACT_EMAIL` e `RESEND_API_KEY` ficam apenas nas envs da Vercel (não no repo)

## Convenções de Desenvolvimento

- **Deploy:** automático via `git push origin main` → Vercel CI/CD
- **API de contato:** `POST /api/contact` → Resend → `ti@investetecnologia.com.br`

## Convenções Git

- Branch principal: `main`
- Commits em português, formato `tipo: descrição`
- Identity: `lucasrodrigobento@outlook.com` (SSH alias `github-personal`)
- Nunca force-push em `main`

## Regras de Ouro

1. Consultar `MEMORY.md` antes de qualquer mudança de infra ou deploy
2. Deploy = push para `main` — não usar Vercel CLI manualmente sem motivo
3. DNS: HostGator (MX/e-mail) + Vercel (A record `216.198.79.1`) — não alterar sem validar os dois
