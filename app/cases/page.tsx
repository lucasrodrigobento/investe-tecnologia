import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Cases — Investe Tecnologia",
  description: "Projetos reais entregues pela Investe Tecnologia. Resultados concretos para empresas reais.",
};

const cases = [
  {
    tag: "SaaS · Em desenvolvimento", color: "text-gold2 bg-gold/10", accent: "from-gold to-gold2",
    title: "LanceFlow",
    desc: "Lance inteligente, vitória automática. Plataforma de automação de lances para pregões eletrônicos do ComprasNet com autenticação oficial Gov.br, engine de lance automático em tempo real e estratégias inteligentes de precificação.",
    stack: ["Next.js 16", "React 19", "TypeScript", "OAuth Gov.br", "Vercel Edge"],
    metrics: [{ n: "100%", l: "Automatizado" }, { n: "OAuth", l: "Gov.br" }, { n: "Real-time", l: "Lance automático" }],
  },
  {
    tag: "Sistema · Web", color: "text-blue-300 bg-blue-500/10", accent: "from-blue-400 to-cyan-400",
    title: "Sistema de Gestão Comercial",
    desc: "Plataforma de controle comercial com gestão completa de clientes, proposta, contratos e pipeline de vendas. Relatórios em tempo real com dashboards customizáveis e integração com WhatsApp para notificações automáticas ao time.",
    stack: ["Laravel", "Vue.js", "MySQL", "WhatsApp API"],
    metrics: [{ n: "3x", l: "Mais agilidade" }, { n: "-60%", l: "Trabalho manual" }, { n: "∞", l: "Escalável" }],
  },
  {
    tag: "Automação · API", color: "text-green-300 bg-green-500/10", accent: "from-green-400 to-blue-400",
    title: "Automação de Compras e NF",
    desc: "Automação completa do fluxo de compras: emissão de pedidos, cotações com fornecedores, recebimento e validação de notas fiscais com integração direta ao sistema financeiro — eliminando erros e reduzindo drasticamente o tempo de processamento.",
    stack: ["Node.js", "SEFAZ API", "MySQL", "Webhooks"],
    metrics: [{ n: "-80%", l: "Erros manuais" }, { n: "100%", l: "Rastreabilidade" }, { n: "<1s", l: "Processamento" }],
  },
];

const testimonials = [
  {
    quote: "A Investe Tecnologia entregou exatamente o que prometeu — um sistema que realmente se encaixou na nossa operação. O suporte pós-entrega foi fundamental.",
    name: "Marcos Rodrigues", role: "Diretor Comercial", initials: "MR",
  },
  {
    quote: "A automação que eles implementaram eliminou horas de trabalho manual da nossa equipe. Hoje o processo roda sozinho, com alertas em tempo real no WhatsApp.",
    name: "Ana Lima", role: "Gestora de Operações", initials: "AL",
  },
  {
    quote: "Profissionais sérios e muito técnicos. Eles entenderam nosso problema antes de propor qualquer solução — isso fez toda a diferença no resultado final.",
    name: "Carlos Ferreira", role: "CEO · Empresa de logística", initials: "CF",
  },
];

export default function CasesPage() {
  return (
    <div className="pt-16">
      <section className="py-24 px-[clamp(1.5rem,5vw,4rem)]">
        <div className="max-w-7xl mx-auto">
          <span className="text-[11px] font-bold uppercase tracking-[2.5px] text-gold block mb-3">Cases e clientes</span>
          <h1 className="text-[clamp(2.5rem,5vw,4rem)] font-extrabold tracking-tight leading-[1.05] mb-4">
            Resultados que<br />comprovam nosso trabalho
          </h1>
          <p className="text-[#8c93ad] text-lg leading-[1.8] max-w-xl mb-16">
            Projetos reais, desafios reais — e soluções que continuam gerando valor para nossos clientes.
          </p>

          <div className="space-y-5">
            {cases.map((c) => (
              <div key={c.title} className="relative bg-bg2 border border-white/[0.11] rounded-2xl p-8 hover:border-white/[0.18] transition-all overflow-hidden">
                <div className={`absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r ${c.accent}`} />
                <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-8 items-start">
                  <div>
                    <span className={`text-[11px] font-bold uppercase tracking-wide px-3 py-1 rounded-full inline-block mb-4 ${c.color}`}>{c.tag}</span>
                    <h2 className="text-xl font-bold mb-3 tracking-tight">{c.title}</h2>
                    <p className="text-sm text-[#8c93ad] leading-[1.7] mb-5 max-w-2xl">{c.desc}</p>
                    <div className="flex flex-wrap gap-2">
                      {c.stack.map((tech) => (
                        <span key={tech} className="text-[11px] font-semibold bg-bg3 border border-white/[0.06] text-[#8c93ad] px-3 py-1 rounded-lg">{tech}</span>
                      ))}
                    </div>
                  </div>
                  <div className="flex lg:flex-col gap-6 lg:gap-4">
                    {c.metrics.map((m) => (
                      <div key={m.l} className="text-center">
                        <span className="text-2xl font-extrabold tracking-tight text-it-white block">{m.n}</span>
                        <span className="text-xs text-[#4a5168] whitespace-nowrap">{m.l}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <hr className="border-none h-px bg-gradient-to-r from-transparent via-white/[0.11] to-transparent" />

      <section className="py-24 px-[clamp(1.5rem,5vw,4rem)] bg-bg1">
        <div className="max-w-7xl mx-auto">
          <span className="text-[11px] font-bold uppercase tracking-[2.5px] text-gold block mb-3">Depoimentos</span>
          <h2 className="text-[clamp(2rem,4vw,3rem)] font-extrabold tracking-tight leading-[1.05] mb-12">O que dizem sobre nós</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-bg2 border border-white/[0.11] rounded-2xl p-7">
                <p className="font-serif italic text-[15px] text-[#8c93ad] leading-[1.75] mb-6">&ldquo;{t.quote}&rdquo;</p>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-bg3 border border-white/[0.11] flex items-center justify-center text-gold font-bold text-sm flex-shrink-0">
                    {t.initials}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-it-white">{t.name}</p>
                    <p className="text-xs text-[#4a5168]">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <hr className="border-none h-px bg-gradient-to-r from-transparent via-white/[0.11] to-transparent" />

      <section className="py-24 px-[clamp(1.5rem,5vw,4rem)]">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-[clamp(2rem,4vw,3rem)] font-extrabold tracking-tight leading-[1.05] mb-6">Seu projeto pode ser o próximo</h2>
          <p className="text-[#8c93ad] text-lg leading-[1.8] max-w-lg mx-auto mb-10">
            Conte o seu desafio e vamos construir juntos uma solução que gera resultado real.
          </p>
          <Link href="/contato" className="inline-flex items-center gap-2 bg-gold text-bg px-10 py-4 rounded-full text-base font-bold hover:bg-gold2 transition-all hover:shadow-[0_8px_28px_rgba(201,162,39,0.28)]">
            Iniciar um projeto <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
}
