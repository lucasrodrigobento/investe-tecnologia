import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Serviços — Investe Tecnologia",
  description: "Desenvolvimento de sistemas, automação de processos, SaaS, integrações e infraestrutura cloud.",
};

const services = [
  {
    icon: "🖥️",
    title: "Desenvolvimento de Sistemas",
    desc: "Criamos sistemas web e plataformas digitais personalizadas, adaptadas ao fluxo real do seu negócio — do backend ao frontend. Trabalhamos com PHP/Laravel, Node.js, React e TypeScript.",
    items: ["Sistemas web sob medida", "Painéis administrativos", "Portais e plataformas B2B", "E-commerce e marketplaces", "APIs e microserviços"],
  },
  {
    icon: "⚙️",
    title: "Automação de Processos",
    desc: "Identificamos e eliminamos tarefas manuais e repetitivas com automações inteligentes. Integração com WhatsApp Business, e-mail, sistemas de gestão e APIs de terceiros.",
    items: ["Automação via WhatsApp Business", "Pipelines de dados automatizados", "Integração com ERP e CRM", "Bots e assistentes digitais", "Webhooks e eventos em tempo real"],
  },
  {
    icon: "📦",
    title: "Produtos SaaS",
    desc: "Desenvolvemos e operamos soluções SaaS para segmentos específicos, com foco em resolver problemas reais de forma escalável e sustentável.",
    items: ["Plataformas multi-tenant", "Gestão de assinaturas e planos", "Onboarding automatizado", "Dashboard analytics", "Notificações multicanal"],
  },
  {
    icon: "🔌",
    title: "Integrações e APIs",
    desc: "Conectamos sistemas e plataformas. Desenvolvemos e consumimos APIs REST para que tudo funcione de forma fluida, segura e confiável.",
    items: ["APIs REST e GraphQL", "Integrações com portais gov.", "Sistemas de pagamento (Pix, boleto)", "NFe, NFSe e documentos fiscais", "Comunicação via Webhooks"],
  },
  {
    icon: "💡",
    title: "Consultoria em TI",
    desc: "Apoiamos decisões técnicas estratégicas: arquitetura de sistemas, escolha de stack, segurança, escalabilidade e definição de processos de desenvolvimento.",
    items: ["Arquitetura de sistemas", "Revisão de código e segurança", "Definição de stack técnica", "Documentação técnica", "Mentoria de equipes"],
  },
  {
    icon: "☁️",
    title: "Infraestrutura e Cloud",
    desc: "Configuramos e gerenciamos ambientes de produção na nuvem — com monitoramento, CI/CD, backups automatizados e alta disponibilidade.",
    items: ["Docker e Docker Compose", "AWS (EC2, RDS, S3, Lambda)", "CI/CD com GitHub Actions", "Monitoramento e alertas", "Backups e disaster recovery"],
  },
];

const process = [
  { n: "01", title: "Entendimento", desc: "Ouvimos o problema real antes de propor qualquer solução. Mapeamos fluxos, integrações necessárias e objetivos de negócio." },
  { n: "02", title: "Arquitetura", desc: "Definimos a stack, as entidades do sistema, o modelo de dados e os pontos de integração. Documentamos para que não haja ambiguidade." },
  { n: "03", title: "Desenvolvimento", desc: "Ciclos curtos com entregas contínuas. Você acompanha o progresso em tempo real e pode dar feedback a cada sprint." },
  { n: "04", title: "Entrega e suporte", desc: "Deploy em produção com monitoramento ativo. Não sumimos após a entrega — estamos disponíveis para evolução e suporte." },
];

export default function ServicosPage() {
  return (
    <div className="pt-16">
      <section className="py-24 px-[clamp(1.5rem,5vw,4rem)]">
        <div className="max-w-7xl mx-auto">
          <span className="text-[11px] font-bold uppercase tracking-[2.5px] text-gold block mb-3">O que fazemos</span>
          <h1 className="text-[clamp(2.5rem,5vw,4rem)] font-extrabold tracking-tight leading-[1.05] mb-4">Serviços e especialidades</h1>
          <p className="text-[#8c93ad] text-lg leading-[1.8] max-w-xl mb-16">
            Da estratégia à entrega — cobrimos todo o espectro de tecnologia que sua empresa precisa para crescer com segurança e eficiência.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/[0.06] border border-white/[0.06] rounded-2xl overflow-hidden">
            {services.map((s) => (
              <div key={s.title} className="bg-bg1 p-8 hover:bg-bg2 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-gold/10 border border-gold/20 flex items-center justify-center text-xl mb-5">{s.icon}</div>
                <h2 className="text-base font-bold mb-3 tracking-tight">{s.title}</h2>
                <p className="text-sm text-[#8c93ad] leading-[1.7] mb-5">{s.desc}</p>
                <ul className="space-y-1.5">
                  {s.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-[13px] text-[#4a5168]">
                      <span className="text-gold text-xs">✓</span> {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <hr className="border-none h-px bg-gradient-to-r from-transparent via-white/[0.11] to-transparent" />

      <section className="py-24 px-[clamp(1.5rem,5vw,4rem)] bg-bg1">
        <div className="max-w-7xl mx-auto">
          <span className="text-[11px] font-bold uppercase tracking-[2.5px] text-gold block mb-3">Como trabalhamos</span>
          <h2 className="text-[clamp(2rem,4vw,3rem)] font-extrabold tracking-tight leading-[1.05] mb-12">Nosso processo</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {process.map((p) => (
              <div key={p.n} className="bg-bg2 border border-white/[0.11] rounded-2xl p-6">
                <span className="text-[2.5rem] font-extrabold tracking-tight text-gold/20 leading-none block mb-4">{p.n}</span>
                <h3 className="text-[15px] font-bold mb-2 tracking-tight">{p.title}</h3>
                <p className="text-sm text-[#8c93ad] leading-[1.7]">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <hr className="border-none h-px bg-gradient-to-r from-transparent via-white/[0.11] to-transparent" />

      <section className="py-24 px-[clamp(1.5rem,5vw,4rem)]">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-[clamp(2rem,4vw,3rem)] font-extrabold tracking-tight leading-[1.05] mb-6">Tem um projeto em mente?</h2>
          <p className="text-[#8c93ad] text-lg leading-[1.8] max-w-lg mx-auto mb-10">
            Conte o desafio e vamos analisar a melhor abordagem para o seu caso.
          </p>
          <Link href="/contato" className="inline-flex items-center gap-2 bg-gold text-bg px-10 py-4 rounded-full text-base font-bold hover:bg-gold2 transition-all hover:shadow-[0_8px_28px_rgba(201,162,39,0.28)]">
            Fale com a equipe <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
}
