import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Sobre — Investe Tecnologia",
  description: "Conheça a Investe Tecnologia: nossa história, valores e equipe.",
};

const values = [
  { icon: "🎯", title: "Foco em resultado", desc: "Não entregamos código — entregamos soluções que geram valor real e mensurável para o cliente." },
  { icon: "🔍", title: "Transparência total", desc: "Comunicação clara em todas as etapas, do escopo ao deploy. Sem surpresas." },
  { icon: "⚡", title: "Execução ágil", desc: "Ciclos curtos, entregas contínuas e capacidade de adaptar rota conforme o negócio evolui." },
  { icon: "🛡️", title: "Qualidade e segurança", desc: "Código testado, infraestrutura monitorada e boas práticas em cada linha entregue." },
];

const traits = [
  { icon: "🏗️", title: "Desenvolvimento completo", desc: "Do backend robusto ao frontend responsivo, entregamos a solução inteira." },
  { icon: "🔌", title: "Integrações avançadas", desc: "APIs REST, WhatsApp, e-mail, sistemas fiscais e muito mais." },
  { icon: "📦", title: "Produtos SaaS próprios", desc: "Criamos soluções escaláveis para segmentos estratégicos." },
  { icon: "🛡️", title: "Infraestrutura confiável", desc: "Monitoramento, CI/CD e alta disponibilidade em produção." },
];

export default function SobrePage() {
  return (
    <div className="pt-16">
      <section className="py-24 px-[clamp(1.5rem,5vw,4rem)]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[5fr_4fr] gap-16 items-center">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-[2.5px] text-gold block mb-3">Sobre a empresa</span>
              <h1 className="text-[clamp(2.5rem,5vw,4rem)] font-extrabold tracking-tight leading-[1.05] mb-8">
                Tecnologia aplicada a<br /><span className="text-gold">problemas reais</span>
              </h1>
              <div className="space-y-4 text-[#8c93ad] leading-[1.85] text-base">
                <p>
                  A <span className="text-it-white font-semibold">Investe Tecnologia</span> nasceu da percepção de que muitas empresas brasileiras precisam de sistemas robustos, integrados e eficientes — mas raramente encontram soluções que realmente se encaixam no seu dia a dia.
                </p>
                <p>
                  Desenvolvemos desde sistemas web personalizados até produtos SaaS voltados para segmentos específicos do mercado, sempre com foco em <span className="text-it-white font-semibold">escalabilidade, segurança e resultado concreto</span> para o cliente.
                </p>
                <p>
                  Nossa equipe domina o ciclo completo do produto: da concepção à infraestrutura em produção, integrando APIs, automações, painéis administrativos e múltiplos canais de comunicação.
                </p>
                <p>
                  Somos uma empresa goiana com atuação nacional — atendemos clientes de diferentes segmentos e portes, sempre com a mesma seriedade técnica e comprometimento com o resultado.
                </p>
              </div>
            </div>

            <div className="bg-bg2 border border-white/[0.11] rounded-2xl p-8">
              <div className="flex items-end gap-3 mb-6 pb-6 border-b border-white/[0.06]">
                <span className="text-[4rem] font-extrabold tracking-[-2px] text-gold leading-none">+5</span>
                <span className="text-sm text-[#8c93ad] pb-2">anos no<br />mercado</span>
              </div>
              <div className="space-y-0">
                {traits.map((t, i) => (
                  <div key={t.title} className={`flex items-start gap-3 py-4 ${i < traits.length - 1 ? "border-b border-white/[0.06]" : ""}`}>
                    <div className="w-8 h-8 rounded-lg flex-shrink-0 bg-gold/10 border border-gold/20 flex items-center justify-center text-sm">{t.icon}</div>
                    <div>
                      <p className="text-sm font-semibold text-it-white mb-0.5">{t.title}</p>
                      <p className="text-[13px] text-[#8c93ad] leading-[1.5]">{t.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <hr className="border-none h-px bg-gradient-to-r from-transparent via-white/[0.11] to-transparent" />

      <section className="py-24 px-[clamp(1.5rem,5vw,4rem)] bg-bg1">
        <div className="max-w-7xl mx-auto">
          <span className="text-[11px] font-bold uppercase tracking-[2.5px] text-gold block mb-3">Nossos valores</span>
          <h2 className="text-[clamp(2rem,4vw,3rem)] font-extrabold tracking-tight leading-[1.05] mb-12">O que nos guia</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {values.map((v) => (
              <div key={v.title} className="bg-bg2 border border-white/[0.11] rounded-2xl p-6 hover:border-white/[0.18] transition-colors">
                <div className="w-11 h-11 rounded-xl bg-gold/10 border border-gold/20 flex items-center justify-center text-lg mb-5">{v.icon}</div>
                <h3 className="text-[15px] font-bold mb-2 tracking-tight">{v.title}</h3>
                <p className="text-sm text-[#8c93ad] leading-[1.7]">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <hr className="border-none h-px bg-gradient-to-r from-transparent via-white/[0.11] to-transparent" />

      <section className="py-24 px-[clamp(1.5rem,5vw,4rem)]">
        <div className="max-w-7xl mx-auto">
          <span className="text-[11px] font-bold uppercase tracking-[2.5px] text-gold block mb-3">Marca registrada</span>
          <h2 className="text-[clamp(2rem,4vw,3rem)] font-extrabold tracking-tight leading-[1.05] mb-6">Identidade protegida</h2>
          <p className="text-[#8c93ad] text-lg leading-[1.8] max-w-2xl mb-10">
            A <span className="text-it-white font-semibold">Investe Tecnologia</span> possui marca registrada no INPI — Instituto Nacional da Propriedade Industrial, garantindo a proteção da nossa identidade e dos produtos que desenvolvemos.
          </p>
          <div className="inline-flex items-center gap-4 bg-bg2 border border-white/[0.11] rounded-2xl px-6 py-4">
            <div className="w-10 h-10 rounded-xl bg-gold/10 border border-gold/20 flex items-center justify-center text-base">🏛️</div>
            <div>
              <p className="text-sm font-semibold text-it-white">INPI — Registro de Marca</p>
              <p className="text-xs text-[#4a5168]">Investe Tecnologia · Nº 29409171943786751</p>
            </div>
          </div>
        </div>
      </section>

      <hr className="border-none h-px bg-gradient-to-r from-transparent via-white/[0.11] to-transparent" />

      <section className="py-24 px-[clamp(1.5rem,5vw,4rem)] bg-bg1">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-[clamp(2rem,4vw,3rem)] font-extrabold tracking-tight leading-[1.05] mb-6">Vamos trabalhar juntos?</h2>
          <p className="text-[#8c93ad] text-lg leading-[1.8] max-w-lg mx-auto mb-10">
            Conte seu projeto. Respondemos em até 1 dia útil com uma análise real do que podemos construir.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/contato" className="inline-flex items-center gap-2 bg-gold text-bg px-8 py-3.5 rounded-full text-sm font-bold hover:bg-gold2 transition-all hover:shadow-[0_8px_28px_rgba(201,162,39,0.28)]">
              Fale conosco <ArrowRight size={15} />
            </Link>
            <Link href="/cases" className="inline-flex items-center gap-2 bg-transparent text-[#8c93ad] border border-white/[0.11] px-8 py-3.5 rounded-full text-sm font-bold hover:border-white/[0.18] hover:text-it-white transition-all">
              Ver nossos cases
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
