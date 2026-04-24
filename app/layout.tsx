import type { Metadata } from "next";
import { Bricolage_Grotesque, Lora, Geist } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
  weight: ["400", "500", "700", "800"],
});

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Investe Tecnologia — Desenvolvimento de Sistemas",
  description:
    "Desenvolvemos sistemas sob medida, automatizamos processos e criamos produtos SaaS para empresas que precisam de tecnologia de verdade.",
  keywords: "desenvolvimento de sistemas, automação, SaaS, APIs, tecnologia, Goiás",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={cn(bricolage.variable, lora.variable, "font-sans", geist.variable)}>
      <body className="antialiased min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
