import Link from "next/link";
import { ArrowRight, ChevronRight } from "lucide-react";

const stats = [
  { n: "100%", l: "Projetos entregues" },
  { n: "B2B", l: "Foco empresarial" },
  { n: "SaaS", l: "Produto próprio" },
  { n: "API", l: "Integrações avançadas" },
];

const services = [
  { icon: "🖥️", title: "Desenvolvimento de Sistemas", desc: "Sistemas web e plataformas digitais personalizadas, adaptadas ao fluxo real do seu negócio." },
  { icon: "⚙️", title: "Automação de Processos", desc: "Eliminamos tarefas manuais com automações inteligentes integradas ao WhatsApp, e-mail e APIs." },
  { icon: "📦", title: "Produtos SaaS", desc: "Soluções SaaS para segmentos específicos, com foco em resolver problemas reais de forma escalável." },
];

const cases = [
  {
    tag: "SaaS · Em desenvolvimento", color: "text-gold2 bg-gold/10",
    title: "LanceFlow",
    desc: "Lance inteligente, vitória automática. Plataforma de automação de lances para pregões eletrônicos com autenticação Gov.br e engine de lance automático.",
    metrics: [{ n: "100%", l: "Automatizado" }, { n: "OAuth", l: "Gov.br" }],
  },
  {
    tag: "Sistema · Web", color: "text-blue-300 bg-blue-500/10",
    title: "Sistema de Gestão Comercial",
    desc: "Controle comercial com gestão de clientes, propostas, contratos e relatórios em tempo real integrado ao WhatsApp.",
    metrics: [{ n: "3x", l: "Mais agilidade" }, { n: "-60%", l: "Trabalho manual" }],
  },
  {
    tag: "Automação · API", color: "text-green-300 bg-green-500/10",
    title: "Automação de Compras e NF",
    desc: "Fluxo completo de compras: pedidos, cotações, recebimento de notas fiscais e integração com sistema financeiro.",
    metrics: [{ n: "-80%", l: "Erros manuais" }, { n: "100%", l: "Rastreabilidade" }],
  },
];

export default function Home() {
  return (
    <>
      <div
        className="fixed inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: "linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
          maskImage: "radial-gradient(ellipse 90% 90% at 50% 0%, black 0%, transparent 80%)",
        }}
      />

      <section className="relative min-h-screen pt-32 pb-20 px-[clamp(1.5rem,5vw,4rem)] flex items-center overflow-hidden">
        <div
          className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[1000px] h-[700px] pointer-events-none"
          style={{ background: "radial-gradient(ellipse at 50% 30%, rgba(201,162,39,0.09) 0%, transparent 65%)" }}
        />
        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <div className="inline-flex items-center gap-2.5 border border-gold/20 bg-gold/10 px-4 py-[5px] rounded-full text-[12.5px] font-semibold text-gold2 tracking-wide mb-8">
            <div className="w-[22px] h-[22px] rounded-full bg-gold/10 border border-gold/20 flex items-center justify-center text-[11px]">✦</div>
            Empresa de tecnologia — Goiás, Brasil
          </div>

          <h1 className="text-[clamp(3rem,7vw,5.5rem)] font-extrabold leading-[1.0] tracking-[-2.5px] max-w-3xl mb-7">
            Sistemas que<br />
            <span className="text-gold">transformam</span><br />
            o seu <span className="[-webkit-text-stroke:1px_rgba(255,255,255,0.3)] text-transparent">negócio</span>
          </h1>

          <p className="text-lg text-[#8c93ad] max-w-lg leading-[1.8] mb-11 font-normal">
            Desenvolvemos sistemas sob medida, automatizamos processos e criamos produtos SaaS para empresas que precisam de tecnologia de verdade.
          </p>

          <div className="flex gap-4 flex-wrap">
            <Link href="/contato" className="inline-flex items-center gap-2 bg-gold text-bg px-8 py-3.5 rounded-full text-[15px] font-bold hover:bg-gold2 transition-all hover:shadow-[0_8px_28px_rgba(201,162,39,0.28)] hover:-translate-y-px">
              Iniciar um projeto <ArrowRight size={15} />
            </Link>
            <Link href="/servicos" className="inline-flex items-center gap-2 bg-transparent text-[#8c93ad] border border-white/[0.11] px-8 py-3.5 rounded-full text-[15px] font-bold hover:border-white/[0.18] hover:text-it-white transition-all hover:-translate-y-px">
              Nossos serviços
            </Link>
          </div>

          <div className="flex gap-10 flex-wrap mt-16 pt-12 border-t border-white/[0.11]">
            {stats.map(({ n, l }) => (
              <div key={n}>
                <span className="text-[2.2rem] font-extrabold tracking-tight text-gold leading-none block">{n}</span>
                <span className="text-[#4a5168] text-[13px] mt-1 block">{l}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <hr className="border-none h-px bg-gradient-to-r from-transparent via-white/[0.11] to-transparent" />

      <section className="py-24 px-[clamp(1.5rem,5vw,4rem)]">
        <div className="max-w-7xl mx-auto">
          <span className="text-[11px] font-bold uppercase tracking-[2.5px] text-gold block mb-3">O que fazemos</span>
          <div className="flex items-end justify-between mb-12 flex-wrap gap-4">
            <h2 className="text-[clamp(2rem,4vw,3rem)] font-extrabold tracking-tight leading-[1.05]">Serviços e especialidades</h2>
            <Link href="/servicos" className="inline-flex items-center gap-1.5 text-gold text-sm font-semibold hover:text-gold2 transition-colors">
              Ver todos <ChevronRight size={14} />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/[0.06] border border-white/[0.06] rounded-2xl overflow-hidden">
            {services.map((s) => (
              <div key={s.title} className="bg-bg1 p-9 hover:bg-bg2 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-gold/10 border border-gold/20 flex items-center justify-center text-xl mb-6">{s.icon}</div>
                <h3 className="text-base font-bold mb-2.5 tracking-tight">{s.title}</h3>
                <p className="text-sm text-[#8c93ad] leading-[1.7]">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <hr className="border-none h-px bg-gradient-to-r from-transparent via-white/[0.11] to-transparent" />

      <section className="py-24 px-[clamp(1.5rem,5vw,4rem)] bg-bg1">
        <div className="max-w-7xl mx-auto">
          <span className="text-[11px] font-bold uppercase tracking-[2.5px] text-gold block mb-3">Cases e clientes</span>
          <div className="flex items-end justify-between mb-12 flex-wrap gap-4">
            <h2 className="text-[clamp(2rem,4vw,3rem)] font-extrabold tracking-tight leading-[1.05]">Resultados que<br />comprovam nosso trabalho</h2>
            <Link href="/cases" className="inline-flex items-center gap-1.5 text-gold text-sm font-semibold hover:text-gold2 transition-colors">
              Ver todos <ChevronRight size={14} />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {cases.map((c) => (
              <div key={c.title} className="bg-bg2 border border-white/[0.11] rounded-2xl p-8 hover:border-white/[0.18] hover:-translate-y-0.5 transition-all">
                <span className={`text-[11px] font-bold uppercase tracking-wide px-3 py-1 rounded-full inline-block mb-5 ${c.color}`}>{c.tag}</span>
                <h3 className="text-base font-bold mb-3 tracking-tight">{c.title}</h3>
                <p className="text-sm text-[#8c93ad] leading-[1.7] mb-6">{c.desc}</p>
                <div className="flex gap-6">
                  {c.metrics.map((m) => (
                    <div key={m.l}>
                      <span className="text-2xl font-extrabold tracking-tight text-it-white block">{m.n}</span>
                      <span className="text-xs text-[#4a5168]">{m.l}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <hr className="border-none h-px bg-gradient-to-r from-transparent via-white/[0.11] to-transparent" />

      <section className="py-24 px-[clamp(1.5rem,5vw,4rem)]">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-[clamp(2rem,4vw,3rem)] font-extrabold tracking-tight leading-[1.05] mb-6">
            Pronto para transformar<br />sua operação com tecnologia?
          </h2>
          <p className="text-[#8c93ad] text-lg leading-[1.8] max-w-lg mx-auto mb-10">
            Entre em contato e conte seu desafio. Nossa equipe responde em até 1 dia útil.
          </p>
          <Link href="/contato" className="inline-flex items-center gap-2 bg-gold text-bg px-10 py-4 rounded-full text-base font-bold hover:bg-gold2 transition-all hover:shadow-[0_8px_28px_rgba(201,162,39,0.28)]">
            Iniciar uma conversa <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
