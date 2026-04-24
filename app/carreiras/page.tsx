import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Carreiras — Investe Tecnologia",
  description: "Trabalhe com a Investe Tecnologia. Vagas abertas em desenvolvimento e tecnologia.",
};

const perks = [
  { icon: "🏠", title: "100% remoto", desc: "Trabalhe de onde quiser, com horário flexível." },
  { icon: "🚀", title: "Projetos reais", desc: "Sistemas em produção, impactando empresas reais." },
  { icon: "📚", title: "Stack moderna", desc: "PHP 8.4, Laravel 11, React 18, TypeScript, Docker, AWS." },
  { icon: "🤝", title: "Autonomia total", desc: "Sem burocracia — você propõe, discutimos e construímos." },
  { icon: "🎯", title: "Foco em resultado", desc: "Valorizamos entrega e qualidade, não horas trabalhadas." },
  { icon: "📈", title: "Crescimento", desc: "Ambiente técnico sério com espaço para evoluir de verdade." },
];

const jobs = [
  {
    title: "Desenvolvedor Full-Stack",
    stack: "Laravel · React · TypeScript · MySQL · REST APIs",
    type: ["Remoto", "PJ"],
    desc: "Você vai trabalhar no desenvolvimento de sistemas web completos: modelagem de banco, APIs RESTful, interfaces React e integrações com serviços externos. Foco em Laravel no backend e React/TypeScript no frontend.",
    requirements: [
      "Sólido conhecimento em PHP 8+ e Laravel",
      "Experiência com React e TypeScript",
      "Familiaridade com MySQL e modelagem relacional",
      "Git no dia a dia",
      "Capacidade de trabalhar de forma autônoma",
    ],
  },
  {
    title: "Desenvolvedor Backend",
    stack: "PHP · Laravel · Docker · AWS · Redis",
    type: ["Remoto", "PJ"],
    desc: "Foco total em backend: APIs robustas, filas assíncronas, integrações com sistemas externos e infraestrutura. Você vai projetar e implementar serviços que escalam com consistência e segurança.",
    requirements: [
      "Domínio de PHP 8.4 e Laravel 11",
      "Experiência com Docker e ambientes conteinerizados",
      "Conhecimento de Redis e filas (queues)",
      "Noções de AWS (EC2, RDS, S3)",
      "Boas práticas de segurança e performance",
    ],
  },
  {
    title: "Analista de Automação",
    stack: "APIs · Webhooks · WhatsApp Business · Integrações",
    type: ["Remoto", "CLT ou PJ"],
    desc: "Você vai mapear, projetar e implementar automações de processos: integração com APIs de terceiros, webhooks, WhatsApp Business e sistemas de gestão. Parte técnica e parte de levantamento de requisitos.",
    requirements: [
      "Experiência com consumo de APIs REST",
      "Conhecimento de webhooks e eventos",
      "Lógica de programação sólida (qualquer linguagem)",
      "Habilidade de mapear fluxos de processo",
      "Desejável: experiência com WhatsApp Business API",
    ],
  },
];

export default function CarreirasPage() {
  return (
    <div className="pt-16">
      <section className="py-24 px-[clamp(1.5rem,5vw,4rem)]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-16">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-[2.5px] text-gold block mb-3">Trabalhe conosco</span>
              <h1 className="text-[clamp(2.5rem,5vw,4rem)] font-extrabold tracking-tight leading-[1.05] mb-6">
                Faça parte<br />do time
              </h1>
              <div className="space-y-4 text-[#8c93ad] leading-[1.8]">
                <p>Buscamos pessoas apaixonadas por tecnologia, que queiram construir produtos e sistemas que realmente fazem diferença para empresas reais.</p>
                <p>Trabalhamos com um ambiente técnico sério, projetos desafiadores e total autonomia para propor soluções melhores.</p>
                <p>Não temos hierarquia rígida nem reuniões desnecessárias. Valorizamos execução, qualidade e comunicação direta.</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {perks.map((p) => (
                <div key={p.title} className="bg-bg2 border border-white/[0.11] rounded-xl p-4">
                  <div className="text-lg mb-2">{p.icon}</div>
                  <p className="text-[13px] font-semibold text-it-white mb-1">{p.title}</p>
                  <p className="text-xs text-[#4a5168] leading-[1.5]">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <hr className="border-none h-px bg-gradient-to-r from-transparent via-white/[0.11] to-transparent" />

      <section className="py-24 px-[clamp(1.5rem,5vw,4rem)] bg-bg1">
        <div className="max-w-7xl mx-auto">
          <span className="text-[11px] font-bold uppercase tracking-[2.5px] text-gold block mb-3">Vagas abertas</span>
          <h2 className="text-[clamp(2rem,4vw,3rem)] font-extrabold tracking-tight leading-[1.05] mb-12">Oportunidades disponíveis</h2>
          <div className="space-y-5">
            {jobs.map((job) => (
              <div key={job.title} className="bg-bg2 border border-white/[0.11] rounded-2xl p-8 hover:border-white/[0.18] transition-colors">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                  <div>
                    <h3 className="text-xl font-bold mb-1 tracking-tight">{job.title}</h3>
                    <p className="text-sm text-[#8c93ad]">{job.stack}</p>
                  </div>
                  <div className="flex items-center gap-2 flex-wrap flex-shrink-0">
                    {job.type.map((t) => (
                      <span key={t} className={`text-[11px] font-bold uppercase tracking-wide px-2.5 py-1 rounded-lg ${
                        t === "Remoto" ? "bg-green-500/10 text-green-300" :
                        t === "PJ" ? "bg-gold/10 text-gold2" :
                        "bg-blue-500/10 text-blue-300"
                      }`}>{t}</span>
                    ))}
                    <Link
                      href={`/contato?vaga=${encodeURIComponent(job.title)}`}
                      className="bg-transparent border border-white/[0.11] text-[#8c93ad] px-4 py-1.5 rounded-full text-xs font-semibold hover:border-gold hover:text-gold hover:bg-gold/10 transition-all"
                    >
                      Candidatar-se
                    </Link>
                  </div>
                </div>
                <p className="text-sm text-[#8c93ad] leading-[1.7] mb-5">{job.desc}</p>
                <div>
                  <p className="text-xs font-semibold text-[#4a5168] uppercase tracking-wider mb-3">Requisitos</p>
                  <ul className="space-y-1.5">
                    {job.requirements.map((r) => (
                      <li key={r} className="flex items-center gap-2 text-[13px] text-[#8c93ad]">
                        <span className="text-gold text-xs flex-shrink-0">✓</span> {r}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <hr className="border-none h-px bg-gradient-to-r from-transparent via-white/[0.11] to-transparent" />

      <section className="py-24 px-[clamp(1.5rem,5vw,4rem)]">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-[clamp(2rem,4vw,3rem)] font-extrabold tracking-tight leading-[1.05] mb-4">Não encontrou sua vaga?</h2>
          <p className="text-[#8c93ad] text-lg leading-[1.8] max-w-lg mx-auto mb-10">
            Mande um e-mail apresentando seu perfil e o que você sabe fazer. Se fizer sentido, entramos em contato.
          </p>
          <a
            href="mailto:ti@investetecnologia.com.br?subject=Candidatura espontânea"
            className="inline-flex items-center gap-2 bg-gold text-bg px-10 py-4 rounded-full text-base font-bold hover:bg-gold2 transition-all hover:shadow-[0_8px_28px_rgba(201,162,39,0.28)]"
          >
            Enviar candidatura espontânea
          </a>
        </div>
      </section>
    </div>
  );
}
