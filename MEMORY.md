# Investe Tecnologia — Hub

## Estado atual
- **Site**: online em `investetecnologia.com.br` (Vercel)
- **Deploy**: automático via `git push origin main`
- **DNS**: A record `216.198.79.1` (Vercel) + MX no HostGator (e-mail)
- **E-mail ativo**: `ti@investetecnologia.com.br` (HostGator, usado no Resend)
- **Admin Panel**: Sistema de gestão de usuários em `/admin/users` (implementado 2026-05-20)

## Repositório
- **Código**: `git@github-personal:lucasrodrigobento/investe-tecnologia.git`
- **Local**: `~/Projects/investe-tecnologia/`
- **Stack**: Next.js 16, Tailwind v4, shadcn/ui, Resend, TypeScript

## Páginas
`/` home · `/sobre` · `/servicos` · `/cases` · `/solucoes` · `/parceiros` · `/carreiras` · `/contato` · `/admin/users` (gestão)

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

## Admin Panel (2026-05-20)
**Página:** `/admin/users`

**Features estado-da-arte:**
- Data table avançada (busca, filtros, ordenação, paginação)
- Drawer lateral para edição/criação (não modal - melhor UX)
- Ações em massa (ativar, desativar, excluir múltiplos)
- Quick actions inline (menu dropdown)
- Busca em tempo real com debounce (300ms)
- Filtros por função, status e departamento
- Badges coloridos para status
- Avatar com fallback de iniciais
- Exportação para CSV
- Confirmação visual para exclusão
- Formatação de tempo relativo ("15min atrás")
- Keyboard accessibility (ESC para fechar)

**Componentes criados:**
- UI base: Avatar, Checkbox, Switch, Dialog, Drawer, Dropdown Menu, Table, Skeleton
- Admin: UsersTable, UsersFilters, UsersToolbar, UsersPagination, UserFormDrawer, DeleteConfirmationDialog

**Design system:**
- Seguindo tema dark (#08090d) com acentos dourados (#c9a227)
- Componentes shadcn/ui customizados
- Animações suaves (fade-in, slide-in)
- Tipografia: Bricolage Grotesque (display), Lora (serif), Geist (sans)

*Última atualização: 2026-05-20*
