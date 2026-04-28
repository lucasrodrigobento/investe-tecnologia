# Investe Tecnologia — Hub

## Estado atual
- **Site**: online em `investetecnologia.com.br` (Vercel)
- **Deploy**: automático via `git push origin main`
- **DNS**: A record `216.198.79.1` (Vercel) + MX no HostGator (e-mail)
- **E-mail ativo**: `ti@investetecnologia.com.br` (HostGator, usado no Resend)

## Repositório
- **Código**: `git@github-personal:lucasrodrigobento/investe-tecnologia.git`
- **Local**: `~/Projects/investe-tecnologia/`
- **Stack**: Next.js 16, Tailwind v4, shadcn/ui, Resend, TypeScript

## Páginas
`/` home · `/sobre` · `/servicos` · `/cases` · `/solucoes` · `/parceiros` · `/carreiras` · `/contato`

## Formulário de contato
- API: `POST /api/contact` → Resend → `ti@investetecnologia.com.br`
- Env vars na Vercel: `RESEND_API_KEY`, `CONTACT_EMAIL`
- **Temporário**: envia para `ti@` até o domínio ser verificado no Resend

## TODOs pendentes
→ `~/Projects/investe-tecnologia/TODO.md` — fonte única de tarefas do projeto

## Infraestrutura
- **Vercel**: team `investe-tecnologia`, projeto `investe-tecnologia`
- **HostGator**: reseller `lucasben`, conta `investetecnologia.com.br` — manter enquanto e-mail não migrar para Google Workspace
- **Resend**: conta criada com `ti@investetecnologia.com.br`, domínio ainda não verificado

*Última atualização: 2026-04-24*
