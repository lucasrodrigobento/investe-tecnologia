"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/sobre", label: "Sobre" },
  { href: "/servicos", label: "Serviços" },
  { href: "/cases", label: "Cases" },
  { href: "/solucoes", label: "Soluções" },
  { href: "/parceiros", label: "Parceiros" },
  { href: "/carreiras", label: "Carreiras" },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 h-16 flex items-center px-[clamp(1.5rem,5vw,4rem)] bg-bg/90 backdrop-blur-xl border-b border-white/[0.06]">
      <div className="w-full max-w-7xl mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 no-underline">
          <div className="w-9 h-9 rounded-[9px] bg-gold flex items-center justify-center text-[13px] font-extrabold text-bg leading-none select-none">
            IT
          </div>
          <span className="text-[17px] font-bold text-it-white tracking-tight">Investe Tecnologia</span>
        </Link>

        <nav className="hidden md:flex items-center gap-7">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={cn(
                "text-[13.5px] font-medium transition-colors",
                pathname === href ? "text-it-white" : "text-[#8c93ad] hover:text-it-white"
              )}
            >
              {label}
            </Link>
          ))}
          <Link
            href="/contato"
            className="bg-gold text-bg px-6 py-2 rounded-full text-[13.5px] font-bold hover:bg-gold2 transition-colors"
          >
            Fale conosco
          </Link>
        </nav>

        <button
          className="md:hidden p-2 text-it-white"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <div className="absolute top-16 left-0 right-0 bg-bg1 border-b border-white/[0.06] py-4 px-6 flex flex-col gap-3 md:hidden">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="text-[#8c93ad] hover:text-it-white text-sm font-medium py-1 transition-colors"
              onClick={() => setOpen(false)}
            >
              {label}
            </Link>
          ))}
          <Link
            href="/contato"
            className="bg-gold text-bg px-5 py-2 rounded-full text-sm font-bold text-center mt-1 hover:bg-gold2 transition-colors"
            onClick={() => setOpen(false)}
          >
            Fale conosco
          </Link>
        </div>
      )}
    </header>
  );
}
