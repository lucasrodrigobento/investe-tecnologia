# TODO — Investe Tecnologia

> Itens específicos do projeto Investe Tecnologia (site + infra).
> Status: `[ ]` aberto · `[~]` bloqueado · `[x]` feito

---

## Vercel — domínio customizado

- [x] Adicionar A record `216.198.79.1` no HostGator
- [x] Editar CNAME `www` para `cname.vercel-dns.com`
- [ ] Confirmar "Valid Configuration" no painel da Vercel
- [ ] Verificar HTTPS automático ativo

---

## LanceFlow — subdomínios (para deploy em Vercel)

- [ ] Adicionar CNAME `staging-lanceflow` → `cname.vercel-dns.com` no cPanel HostGator
- [ ] Adicionar CNAME `lanceflow` → `cname.vercel-dns.com` no cPanel HostGator
- [ ] Criar projeto `lanceflow-staging` no Vercel com domínio `staging-lanceflow.investetecnologia.com.br`
- [ ] Criar projeto `lanceflow-production` no Vercel com domínio `lanceflow.investetecnologia.com.br`
- [ ] Configurar email `lanceflow@investetecnologia.com.br` após setup do Google Workspace

---

## E-mail corporativo — Google Workspace

- [ ] Criar conta em workspace.google.com com domínio `investetecnologia.com.br` (~R$34/usuário/mês)
- [ ] Adicionar registros MX e TXT do Google no cPanel do HostGator
- [ ] Criar caixas: `comercial@`, `ti@`, `financeiro@`
- [ ] Remover registros MX antigos do HostGator após migração

---

## Resend — domínio verificado

- [ ] Acessar resend.com → Domains → Add Domain → `investetecnologia.com.br`
- [ ] Adicionar registros DNS no HostGator (SPF, DKIM, DMARC) conforme o Resend instruir
- [ ] Aguardar verificação (pode levar até 48h)
- [ ] Atualizar `from` em `app/api/contact/route.ts` para `site@investetecnologia.com.br`
- [ ] Atualizar `CONTACT_EMAIL` nas env vars do Vercel para `comercial@investetecnologia.com.br`

---

## Vercel — variáveis de ambiente em produção

Após verificar o domínio, atualizar em: vercel.com → projeto → Settings → Environment Variables

| Variável | Valor atual (dev) | Valor produção |
|---|---|---|
| `RESEND_API_KEY` | `re_JxmAwzjY_...` | mesmo |
| `CONTACT_EMAIL` | `ti@investetecnologia.com.br` | `comercial@investetecnologia.com.br` |

---

## Identidade visual — aplicar no site

- [ ] Substituir placeholder "IT" (logo-box dourado) pela logo real em SVG ou PNG com fundo transparente
  - Arquivos em `~/Personal/Investe Tecnologia/`: `logo-investe-tecnologia-texto-ao-lado-cores-originais.png`, etc.
- [ ] Revisar paleta de cores do site (verificar se dourado `#c9a227` bate com a marca)
- [ ] Aplicar tipografia oficial da marca (se diferente de Bricolage Grotesque)
- [ ] Adicionar favicon real (atualmente usa padrão Next.js)
- [ ] Adicionar logo no footer substituindo "IT" por imagem real
- [ ] Verificar versão branca da logo para uso no header (fundo escuro)

---

## Conteúdo — atualizar antes do go-live

- [ ] Substituir depoimentos fictícios por reais (ou remover a seção)
- [ ] Atualizar cases com detalhes reais dos clientes (com autorização)
- [ ] Revisar vagas abertas em `/carreiras` — remover ou atualizar
- [ ] Adicionar parceiros reais em `/parceiros`
- [ ] Revisar texto "5+ anos no mercado" em `/sobre`

---

## Manutenção

- [ ] Rodar validação estática de scripts (bash/node) — sem executar integrações externas
