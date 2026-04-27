import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Soluções — Investe Tecnologia",
  description: "Produtos SaaS e soluções de mercado desenvolvidos pela Investe Tecnologia.",
};

const features = [
  { icon: "🔐", title: "OAuth Gov.br", desc: "Autenticação oficial do governo brasileiro integrada para acesso seguro aos pregões eletrônicos." },
  { icon: "🤖", title: "Lance automático", desc: "Engine inteligente de lances que monitora pregões em tempo real e executa estratégias configuradas." },
  { icon: "⚡", title: "Tempo real", desc: "Monitora múltiplos pregões simultaneamente e reage instantaneamente a mudanças de status e lances." },
  { icon: "🎯", title: "Estratégias inteligentes", desc: "Configure regras de lance: valores mínimos, máximos, decrementos e condições de disputa." },
  { icon: "🔔", title: "Notificações", desc: "Alertas instantâneos sobre eventos críticos: início, lance derrotado, vitória e fechamento." },
  { icon: "📊", title: "Dashboard analítico", desc: "Acompanhe histórico de participações, win rate e performance das estratégias de lance." },
];

const roadmap = [
  { fase: "Fase 0", status: "Concluído", title: "Descoberta e arquitetura", desc: "Arquitetura OAuth Gov.br, ComprasNet API, engine de lance e banco de dados definidos." },
  { fase: "Fase 1", status: "Em andamento", title: "MVP e credenciais", desc: "Landing page, infraestrutura Vercel, solicitação de credenciais OAuth Gov.br em andamento." },
  { fase: "Fase 2", status: "Planejado", title: "Engine de lance", desc: "Implementação do monitor de pregões, executor de lances e estratégias de precificação." },
  { fase: "Fase 3", status: "Planejado", title: "Dashboard e escalabilidade", desc: "Interface de gerenciamento, analytics de performance e suporte a múltiplos usuários simultâneos." },
];

export default function SolucoesPage() {
  return (
    <div className="pt-16">
      <section className="py-24 px-[clamp(1.5rem,5vw,4rem)]">
        <div className="max-w-7xl mx-auto">
          <span className="text-[11px] font-bold uppercase tracking-[2.5px] text-gold block mb-3">Soluções no mercado</span>
          <h1 className="text-[clamp(2.5rem,5vw,4rem)] font-extrabold tracking-tight leading-[1.05] mb-4">
            Produtos que resolvem<br /><span className="text-gold">problemas reais</span>
          </h1>
          <p className="text-[#8c93ad] text-lg leading-[1.8] max-w-xl mb-16">
            Além de sistemas sob medida, desenvolvemos produtos SaaS voltados para segmentos estratégicos do mercado brasileiro.
          </p>

          {/* LanceFlow — produto principal */}
          <div className="relative bg-bg2 border border-white/[0.11] rounded-2xl overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-gold to-gold2" />
            <div className="p-8 lg:p-12">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wide px-3 py-1 rounded-full inline-block mb-5 text-gold2 bg-gold/10">
                    SaaS · Em desenvolvimento
                  </span>
                  <h2 className="text-3xl font-extrabold tracking-tight mb-4">LanceFlow</h2>
                  <p className="text-[#8c93ad] leading-[1.8] mb-6">
                    Lance inteligente, vitória automática. Plataforma de automação de lances para pregões eletrônicos do ComprasNet, a plataforma oficial do governo federal brasileiro para licitações.
                  </p>
                  <p className="text-[#8c93ad] leading-[1.8] mb-8">
                    Com autenticação oficial Gov.br, engine de lance automático em tempo real, estratégias inteligentes de precificação e monitoramento simultâneo de múltiplos pregões, o LanceFlow maximiza as chances de vitória em disputas eletrônicas.
                  </p>
                  <div className="flex gap-4 flex-wrap">
                    <Link href="/contato" className="inline-flex items-center gap-2 bg-gold text-bg px-6 py-3 rounded-full text-sm font-bold hover:bg-gold2 transition-all">
                      Interesse antecipado <ArrowRight size={14} />
                    </Link>
                    <Link href="/cases" className="inline-flex items-center gap-2 text-[#8c93ad] border border-white/[0.11] px-6 py-3 rounded-full text-sm font-bold hover:border-white/[0.18] hover:text-it-white transition-all">
                      Ver case completo
                    </Link>
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {features.map((f) => (
                    <div key={f.title} className="bg-bg3 border border-white/[0.06] rounded-xl p-4">
                      <div className="text-lg mb-2">{f.icon}</div>
                      <p className="text-[13px] font-semibold text-it-white mb-1">{f.title}</p>
                      <p className="text-xs text-[#4a5168] leading-[1.5]">{f.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <hr className="border-none h-px bg-gradient-to-r from-transparent via-white/[0.11] to-transparent" />

      <section className="py-24 px-[clamp(1.5rem,5vw,4rem)] bg-bg1">
        <div className="max-w-7xl mx-auto">
          <span className="text-[11px] font-bold uppercase tracking-[2.5px] text-gold block mb-3">Roadmap</span>
          <h2 className="text-[clamp(2rem,4vw,3rem)] font-extrabold tracking-tight leading-[1.05] mb-12">Status de desenvolvimento</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {roadmap.map((r) => (
              <div key={r.fase} className="bg-bg2 border border-white/[0.11] rounded-2xl p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[11px] font-bold text-[#4a5168] uppercase tracking-wider">{r.fase}</span>
                  <span className={`text-[10px] font-bold uppercase tracking-wide px-2.5 py-1 rounded-full ${
                    r.status === "Concluído" ? "bg-green-500/10 text-green2" :
                    r.status === "Em andamento" ? "bg-gold/10 text-gold2" :
                    "bg-white/[0.06] text-[#4a5168]"
                  }`}>{r.status}</span>
                </div>
                <h3 className="text-[15px] font-bold mb-2 tracking-tight">{r.title}</h3>
                <p className="text-sm text-[#8c93ad] leading-[1.7]">{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <hr className="border-none h-px bg-gradient-to-r from-transparent via-white/[0.11] to-transparent" />

      <section className="py-24 px-[clamp(1.5rem,5vw,4rem)]">
        <div className="max-w-7xl mx-auto">
          <span className="text-[11px] font-bold uppercase tracking-[2.5px] text-gold block mb-3">Soluções customizadas</span>
          <h2 className="text-[clamp(2rem,4vw,3rem)] font-extrabold tracking-tight leading-[1.05] mb-6">Seu segmento pode ser o próximo</h2>
          <p className="text-[#8c93ad] text-lg leading-[1.8] max-w-2xl mb-10">
            Além do LanceFlow, desenvolvemos soluções SaaS customizadas para outros segmentos. Se você tem um problema de mercado e precisa de um produto tecnológico para resolvê-lo, vamos conversar.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-12">
            {[
              { icon: "🏗️", title: "Você tem o domínio de negócio", desc: "Você conhece o problema, o mercado e os usuários. Nós cuidamos da tecnologia." },
              { icon: "🤝", title: "Desenvolvemos juntos", desc: "Podemos trabalhar como parceiros — equity, receita compartilhada ou contrato fixo." },
              { icon: "🚀", title: "Lançamos rápido", desc: "MVP em semanas, não meses. Validação real antes de investimento massivo." },
            ].map((item) => (
              <div key={item.title} className="bg-bg2 border border-white/[0.11] rounded-2xl p-6">
                <div className="w-11 h-11 rounded-xl bg-gold/10 border border-gold/20 flex items-center justify-center text-lg mb-4">{item.icon}</div>
                <h3 className="text-[15px] font-bold mb-2">{item.title}</h3>
                <p className="text-sm text-[#8c93ad] leading-[1.7]">{item.desc}</p>
              </div>
            ))}
          </div>
          <Link href="/contato" className="inline-flex items-center gap-2 bg-gold text-bg px-8 py-3.5 rounded-full text-sm font-bold hover:bg-gold2 transition-all hover:shadow-[0_8px_28px_rgba(201,162,39,0.28)]">
            Propor uma parceria <ArrowRight size={15} />
          </Link>
        </div>
      </section>
    </div>
  );
}
