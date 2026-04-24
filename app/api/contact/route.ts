import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const resend = new Resend(process.env.RESEND_API_KEY);

const schema = z.object({
  nome: z.string().min(2),
  empresa: z.string().optional(),
  email: z.string().email(),
  assunto: z.string().min(1),
  mensagem: z.string().min(10),
});

export async function POST(req: NextRequest) {
  const body = await req.json();
  const result = schema.safeParse(body);

  if (!result.success) {
    return NextResponse.json({ error: "Dados inválidos" }, { status: 400 });
  }

  const { nome, empresa, email, assunto, mensagem } = result.data;

  const { error } = await resend.emails.send({
    from: "Investe Tecnologia <onboarding@resend.dev>",
    to: [process.env.CONTACT_EMAIL ?? "comercial@investetecnologia.com.br"],
    replyTo: email,
    subject: `[Site] ${assunto} — ${nome}`,
    html: `
      <div style="font-family:sans-serif;max-width:600px;margin:0 auto;color:#1a1a1a">
        <div style="background:#c9a227;padding:24px 32px;border-radius:12px 12px 0 0">
          <h1 style="margin:0;font-size:20px;font-weight:800;color:#08090d">Novo contato via site</h1>
        </div>
        <div style="background:#f8f8f8;padding:32px;border-radius:0 0 12px 12px;border:1px solid #e5e5e5;border-top:none">
          <table style="width:100%;border-collapse:collapse">
            <tr><td style="padding:8px 0;font-size:13px;color:#666;width:100px">Nome</td><td style="padding:8px 0;font-size:14px;font-weight:600">${nome}</td></tr>
            ${empresa ? `<tr><td style="padding:8px 0;font-size:13px;color:#666">Empresa</td><td style="padding:8px 0;font-size:14px;font-weight:600">${empresa}</td></tr>` : ""}
            <tr><td style="padding:8px 0;font-size:13px;color:#666">E-mail</td><td style="padding:8px 0;font-size:14px;font-weight:600"><a href="mailto:${email}" style="color:#c9a227">${email}</a></td></tr>
            <tr><td style="padding:8px 0;font-size:13px;color:#666">Assunto</td><td style="padding:8px 0;font-size:14px;font-weight:600">${assunto}</td></tr>
          </table>
          <hr style="margin:24px 0;border:none;border-top:1px solid #e5e5e5" />
          <p style="font-size:13px;color:#666;margin:0 0 8px 0">Mensagem</p>
          <p style="font-size:15px;line-height:1.7;margin:0;white-space:pre-wrap">${mensagem}</p>
          <hr style="margin:24px 0;border:none;border-top:1px solid #e5e5e5" />
          <p style="font-size:12px;color:#999;margin:0">Responda diretamente para <a href="mailto:${email}" style="color:#c9a227">${email}</a></p>
        </div>
      </div>
    `,
  });

  if (error) {
    return NextResponse.json({ error: "Falha ao enviar e-mail" }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
