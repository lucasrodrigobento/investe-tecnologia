# TODO — Investe Tecnologia (Produção)

> Checklist para quando o domínio `investetecnologia.com.br` estiver configurado.

---

## Vercel — domínio customizado

- [x] Adicionar A record `216.198.79.1` no HostGator
- [x] Editar CNAME `www` para `cname.vercel-dns.com`
- [ ] Confirmar "Valid Configuration" no painel da Vercel
- [ ] Verificar HTTPS automático ativo

---

## E-mail corporativo — Google Workspace (recomendado)

- [ ] Criar conta em workspace.google.com com domínio `investetecnologia.com.br` (~R$34/usuário/mês)
- [ ] Adicionar registros MX e TXT do Google no cPanel do HostGator
- [ ] Criar caixas: `comercial@`, `ti@`, `financeiro@`
- [ ] Remover registros MX antigos do HostGator após migração

---

## Resend — domínio verificado

- [ ] Acessar resend.com → Domains → Add Domain → `investetecnologia.com.br`
- [ ] Adicionar registros DNS no HostGator (SPF, DKIM, DMARC) conforme o Resend instruir
- [ ] Aguardar verificação (pode levar até 48h)
- [ ] Atualizar `from` em `app/api/contact/route.ts`:
  ```
  from: "Investe Tecnologia <site@investetecnologia.com.br>"
  ```
- [ ] Atualizar `CONTACT_EMAIL` nas env vars do Vercel para `comercial@investetecnologia.com.br`

---

## Vercel — variáveis de ambiente em produção

Após verificar o domínio, atualizar em: vercel.com → projeto → Settings → Environment Variables

| Variável | Valor atual (dev) | Valor produção |
|---|---|---|
| `RESEND_API_KEY` | `re_JxmAwzjY_...` | mesmo |
| `CONTACT_EMAIL` | `ti@investetecnologia.com.br` | `comercial@investetecnologia.com.br` |

---

## Vercel — domínio customizado

- [ ] vercel.com → projeto → Settings → Domains → Add Domain → `investetecnologia.com.br`
- [ ] Adicionar registro no HostGator (CNAME ou A) conforme o Vercel instruir
- [ ] Aguardar propagação DNS (pode levar até 24h)
- [ ] Verificar HTTPS automático ativo

---

## Identidade visual — aplicar no site

- [ ] Substituir placeholder "IT" (logo-box dourado) pela logo real em SVG ou PNG com fundo transparente
  - Arquivos disponíveis em `~/Personal/Investe Tecnologia/`: `logo-investe-tecnologia-texto-ao-lado-cores-originais.png`, `logo-investe-tecnologia-texto-abaixo-cores-originais.png`, `logo-investe-tecnologia-texto-ao-lado-branco.png`
- [ ] Revisar paleta de cores do site contra a identidade visual real (verificar se dourado `#c9a227` bate com o da marca)
- [ ] Aplicar tipografia oficial da marca (se diferente de Bricolage Grotesque)
- [ ] Adicionar favicon real (atualmente usa o padrão do Next.js)
- [ ] Adicionar logo no footer substituindo o "IT" por imagem real
- [ ] Verificar versão branca da logo para uso no header (fundo escuro)

---

## Conteúdo — atualizar antes do go-live

- [ ] Substituir depoimentos fictícios por reais (ou remover a seção)
- [ ] Atualizar cases com detalhes reais dos clientes (com autorização)
- [ ] Adicionar logo real nas versões PNG (substituir placeholder "IT")
- [ ] Revisar vagas abertas em `/carreiras` — remover ou atualizar conforme realidade
- [ ] Adicionar parceiros reais em `/parceiros`
- [ ] Revisar texto "5+ anos no mercado" em `/sobre`
