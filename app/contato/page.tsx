"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowRight, CheckCircle } from "lucide-react";

const schema = z.object({
  nome: z.string().min(2, "Nome obrigatório"),
  empresa: z.string().optional(),
  email: z.string().email("E-mail inválido"),
  assunto: z.string().min(1, "Selecione um assunto"),
  mensagem: z.string().min(10, "Mensagem muito curta"),
});

type FormData = z.infer<typeof schema>;

const contactLinks = [
  { icon: "✉️", title: "E-mail comercial", value: "comercial@investetecnologia.com.br", href: "mailto:comercial@investetecnologia.com.br" },
  { icon: "🔧", title: "Suporte técnico", value: "ti@investetecnologia.com.br", href: "mailto:ti@investetecnologia.com.br" },
  { icon: "💰", title: "Financeiro", value: "financeiro@investetecnologia.com.br", href: "mailto:financeiro@investetecnologia.com.br" },
  { icon: "📍", title: "Localização", value: "Goiás, Brasil · Atendimento nacional", href: undefined },
];

const assuntos = [
  "Desenvolvimento de sistema sob medida",
  "Automação de processos",
  "Integração com APIs",
  "Consultoria em TI",
  "Sistema de Licitações (Licita-Já)",
  "Parceria estratégica",
  "Oportunidade de trabalho",
  "Outro",
];

export default function ContatoPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const { register, handleSubmit, setValue, watch, formState: { errors }, reset } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const assuntoValue = watch("assunto");

  async function onSubmit(data: FormData) {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Falha no envio");
      setSubmitted(true);
      reset();
    } catch {
      setError("Não foi possível enviar. Tente novamente ou escreva diretamente para comercial@investetecnologia.com.br");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="pt-16">
      <section className="py-24 px-[clamp(1.5rem,5vw,4rem)]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[5fr_4fr] gap-16 items-start">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-[2.5px] text-gold block mb-3">Contato</span>
              <h1 className="text-[clamp(2rem,4vw,3rem)] font-extrabold tracking-tight leading-[1.05] mb-10">
                Vamos conversar sobre<br />o seu projeto?
              </h1>

              {submitted ? (
                <div className="flex flex-col items-start gap-4 bg-green-500/10 border border-green-500/20 rounded-2xl p-8">
                  <CheckCircle size={32} className="text-green2" />
                  <div>
                    <p className="text-lg font-bold text-it-white mb-1">Mensagem enviada!</p>
                    <p className="text-[#8c93ad] text-sm leading-[1.7]">
                      Recebemos seu contato e retornaremos em até 1 dia útil no e-mail informado.
                    </p>
                  </div>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-gold text-sm font-semibold hover:text-gold2 transition-colors"
                  >
                    Enviar outra mensagem
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <Label htmlFor="nome" className="text-[13px] font-semibold text-[#8c93ad]">Nome *</Label>
                      <Input
                        id="nome"
                        placeholder="Seu nome completo"
                        {...register("nome")}
                        className="bg-bg2 border-white/[0.11] text-it-white placeholder:text-[#4a5168] focus-visible:ring-gold focus-visible:border-gold"
                      />
                      {errors.nome && <p className="text-xs text-red-400">{errors.nome.message}</p>}
                    </div>
                    <div className="space-y-1.5">
                      <Label htmlFor="empresa" className="text-[13px] font-semibold text-[#8c93ad]">Empresa</Label>
                      <Input
                        id="empresa"
                        placeholder="Nome da empresa"
                        {...register("empresa")}
                        className="bg-bg2 border-white/[0.11] text-it-white placeholder:text-[#4a5168] focus-visible:ring-gold focus-visible:border-gold"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <Label htmlFor="email" className="text-[13px] font-semibold text-[#8c93ad]">E-mail *</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="seu@email.com.br"
                      {...register("email")}
                      className="bg-bg2 border-white/[0.11] text-it-white placeholder:text-[#4a5168] focus-visible:ring-gold focus-visible:border-gold"
                    />
                    {errors.email && <p className="text-xs text-red-400">{errors.email.message}</p>}
                  </div>

                  <div className="space-y-1.5">
                    <Label className="text-[13px] font-semibold text-[#8c93ad]">Assunto *</Label>
                    <Select
                      value={assuntoValue ?? ""}
                      onValueChange={(v) => setValue("assunto", v ?? "", { shouldValidate: true })}
                    >
                      <SelectTrigger className="bg-bg2 border-white/[0.11] text-it-white focus:ring-gold focus:border-gold data-[placeholder]:text-[#4a5168]">
                        <SelectValue placeholder="Selecione o tipo de projeto" />
                      </SelectTrigger>
                      <SelectContent className="bg-bg2 border-white/[0.11]">
                        {assuntos.map((a) => (
                          <SelectItem key={a} value={a} className="text-[#8c93ad] focus:bg-bg3 focus:text-it-white">
                            {a}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    {errors.assunto && <p className="text-xs text-red-400">{errors.assunto.message}</p>}
                  </div>

                  <div className="space-y-1.5">
                    <Label htmlFor="mensagem" className="text-[13px] font-semibold text-[#8c93ad]">Mensagem *</Label>
                    <Textarea
                      id="mensagem"
                      placeholder="Descreva brevemente o que você precisa..."
                      rows={5}
                      {...register("mensagem")}
                      className="bg-bg2 border-white/[0.11] text-it-white placeholder:text-[#4a5168] focus-visible:ring-gold focus-visible:border-gold resize-none"
                    />
                    {errors.mensagem && <p className="text-xs text-red-400">{errors.mensagem.message}</p>}
                  </div>

                  {error && <p className="text-xs text-red-400 bg-red-500/10 border border-red-500/20 rounded-lg px-4 py-3">{error}</p>}

                  <Button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-gold text-bg hover:bg-gold2 rounded-full font-bold text-[15px] py-6 transition-all hover:shadow-[0_8px_28px_rgba(201,162,39,0.28)] disabled:opacity-60"
                  >
                    {loading ? "Enviando..." : (
                      <span className="flex items-center gap-2 justify-center">
                        Enviar mensagem <ArrowRight size={15} />
                      </span>
                    )}
                  </Button>
                </form>
              )}
            </div>

            <div className="lg:pt-16">
              <h2 className="text-lg font-bold mb-2 tracking-tight">Fale com a equipe certa</h2>
              <p className="text-[#8c93ad] text-sm leading-[1.8] mb-6">
                Nossa equipe responde em até 1 dia útil. Para projetos urgentes ou parcerias estratégicas, entre em contato diretamente pelo e-mail comercial.
              </p>
              <div className="space-y-3">
                {contactLinks.map((link) => (
                  link.href ? (
                    <a key={link.title} href={link.href} className="flex items-center gap-4 bg-bg2 border border-white/[0.11] rounded-xl px-4 py-3.5 hover:border-white/[0.18] transition-colors no-underline group">
                      <div className="w-9 h-9 rounded-lg bg-gold/10 border border-gold/20 flex items-center justify-center text-sm flex-shrink-0">{link.icon}</div>
                      <div>
                        <p className="text-sm font-semibold text-it-white">{link.title}</p>
                        <p className="text-xs text-[#4a5168] group-hover:text-[#8c93ad] transition-colors">{link.value}</p>
                      </div>
                    </a>
                  ) : (
                    <div key={link.title} className="flex items-center gap-4 bg-bg2 border border-white/[0.11] rounded-xl px-4 py-3.5">
                      <div className="w-9 h-9 rounded-lg bg-gold/10 border border-gold/20 flex items-center justify-center text-sm flex-shrink-0">{link.icon}</div>
                      <div>
                        <p className="text-sm font-semibold text-it-white">{link.title}</p>
                        <p className="text-xs text-[#4a5168]">{link.value}</p>
                      </div>
                    </div>
                  )
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
