import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Parceiros — Investe Tecnologia",
  description: "Conheça os parceiros tecnológicos e estratégicos da Investe Tecnologia.",
};

const techPartners = [
  { name: "AWS", desc: "Infraestrutura cloud para aplicações de alta disponibilidade e escalabilidade." },
  { name: "Resend", desc: "Envio de e-mails transacionais com alta entregabilidade e developer experience superior." },
  { name: "WhatsApp Business", desc: "Automações e notificações via API oficial do WhatsApp para nossos clientes." },
  { name: "GitHub", desc: "CI/CD, versionamento e colaboração em todos os projetos da empresa." },
  { name: "Sentry", desc: "Monitoramento de erros em tempo real para garantir estabilidade em produção." },
  { name: "Stripe", desc: "Processamento de pagamentos internacionais em projetos SaaS." },
];

const partnerTypes = [
  {
    icon: "🤝",
    title: "Parceiros de Tecnologia",
    desc: "Empresas e plataformas que utilizamos como base tecnológica nos projetos que desenvolvemos e operamos.",
  },
  {
    icon: "🔄",
    title: "Parceiros de Revenda",
    desc: "Agências e consultorias que revendem ou indicam nossos produtos e serviços para seus clientes.",
  },
  {
    icon: "🏗️",
    title: "Parceiros Estratégicos",
    desc: "Empresas com as quais desenvolvemos produtos conjuntos ou dividimos expertise técnica e de mercado.",
  },
];

const benefits = [
  { icon: "💰", title: "Comissionamento", desc: "Receba comissão por cada cliente indicado que fechar contrato conosco." },
  { icon: "📣", title: "Co-marketing", desc: "Divulgação mútua para as bases de clientes de ambas as empresas." },
  { icon: "🎓", title: "Capacitação técnica", desc: "Acesso a documentação técnica e treinamentos para revendedores." },
  { icon: "🛠️", title: "Suporte prioritário", desc: "Canal de suporte dedicado para parceiros com SLA garantido." },
];

export default function ParceirosPage() {
  return (
    <div className="pt-16">
      <section className="py-24 px-[clamp(1.5rem,5vw,4rem)]">
        <div className="max-w-7xl mx-auto">
          <span className="text-[11px] font-bold uppercase tracking-[2.5px] text-gold block mb-3">Parceiros</span>
          <h1 className="text-[clamp(2.5rem,5vw,4rem)] font-extrabold tracking-tight leading-[1.05] mb-4">
            Ecossistema de<br /><span className="text-gold">parcerias estratégicas</span>
          </h1>
          <p className="text-[#8c93ad] text-lg leading-[1.8] max-w-xl mb-16">
            Construímos relações de longo prazo com empresas que complementam nossa atuação e ampliam o valor entregue aos nossos clientes.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-16">
            {partnerTypes.map((p) => (
              <div key={p.title} className="bg-bg2 border border-white/[0.11] rounded-2xl p-6 hover:border-white/[0.18] transition-colors">
                <div className="w-11 h-11 rounded-xl bg-gold/10 border border-gold/20 flex items-center justify-center text-lg mb-5">{p.icon}</div>
                <h2 className="text-[15px] font-bold mb-2 tracking-tight">{p.title}</h2>
                <p className="text-sm text-[#8c93ad] leading-[1.7]">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <hr className="border-none h-px bg-gradient-to-r from-transparent via-white/[0.11] to-transparent" />

      <section className="py-24 px-[clamp(1.5rem,5vw,4rem)] bg-bg1">
        <div className="max-w-7xl mx-auto">
          <span className="text-[11px] font-bold uppercase tracking-[2.5px] text-gold block mb-3">Stack tecnológico</span>
          <h2 className="text-[clamp(2rem,4vw,3rem)] font-extrabold tracking-tight leading-[1.05] mb-12">Parceiros de tecnologia</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {techPartners.map((p) => (
              <div key={p.name} className="bg-bg2 border border-white/[0.11] rounded-2xl p-5 flex items-start gap-4 hover:border-white/[0.18] transition-colors">
                <div className="w-10 h-10 rounded-lg bg-bg3 border border-white/[0.06] flex items-center justify-center text-sm font-bold text-gold flex-shrink-0">
                  {p.name.slice(0, 2)}
                </div>
                <div>
                  <p className="text-sm font-semibold text-it-white mb-1">{p.name}</p>
                  <p className="text-xs text-[#4a5168] leading-[1.5]">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <hr className="border-none h-px bg-gradient-to-r from-transparent via-white/[0.11] to-transparent" />

      <section className="py-24 px-[clamp(1.5rem,5vw,4rem)]">
        <div className="max-w-7xl mx-auto">
          <span className="text-[11px] font-bold uppercase tracking-[2.5px] text-gold block mb-3">Programa de parceiros</span>
          <h2 className="text-[clamp(2rem,4vw,3rem)] font-extrabold tracking-tight leading-[1.05] mb-4">Torne-se um parceiro</h2>
          <p className="text-[#8c93ad] text-lg leading-[1.8] max-w-xl mb-12">
            Se você tem uma agência, consultoria ou empresa de tecnologia, podemos construir uma parceria que gera valor para ambos os lados.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
            {benefits.map((b) => (
              <div key={b.title} className="bg-bg2 border border-white/[0.11] rounded-2xl p-5">
                <div className="text-xl mb-3">{b.icon}</div>
                <p className="text-sm font-semibold text-it-white mb-1.5">{b.title}</p>
                <p className="text-xs text-[#4a5168] leading-[1.5]">{b.desc}</p>
              </div>
            ))}
          </div>
          <Link href="/contato" className="inline-flex items-center gap-2 bg-gold text-bg px-8 py-3.5 rounded-full text-sm font-bold hover:bg-gold2 transition-all hover:shadow-[0_8px_28px_rgba(201,162,39,0.28)]">
            Propor parceria <ArrowRight size={15} />
          </Link>
        </div>
      </section>
    </div>
  );
}
