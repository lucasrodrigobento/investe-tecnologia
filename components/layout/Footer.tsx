import Link from "next/link";

const links = [
  { href: "/sobre", label: "Sobre" },
  { href: "/servicos", label: "Serviços" },
  { href: "/cases", label: "Cases" },
  { href: "/solucoes", label: "Soluções" },
  { href: "/parceiros", label: "Parceiros" },
  { href: "/carreiras", label: "Carreiras" },
  { href: "/contato", label: "Contato" },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.06] py-10 px-[clamp(1.5rem,5vw,4rem)]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 flex-wrap">
        <div className="flex items-center gap-3">
          <div className="w-7 h-7 rounded-[7px] bg-gold flex items-center justify-center text-xs font-extrabold text-bg select-none">
            IT
          </div>
          <span className="text-[#4a5168] text-sm">
            <span className="text-[#8c93ad] font-semibold">Investe Tecnologia</span> · investetecnologia.com.br
          </span>
        </div>

        <p className="text-[#4a5168] text-sm order-last md:order-none">
          © {new Date().getFullYear()} Investe Tecnologia. Todos os direitos reservados.
        </p>

        <nav className="hidden md:flex gap-6">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="text-[#4a5168] text-sm hover:text-[#8c93ad] transition-colors"
            >
              {label}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}
