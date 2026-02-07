"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Container from "./Container";

const links = [
  { href: "/", label: "Inicio" },
  { href: "/abogado-penal-costa-rica", label: "Penal" },
  { href: "/abogado-transito-costa-rica", label: "Tránsito" },
  { href: "/abogado-notario-costa-rica", label: "Notariado" },
  { href: "/sobre-didier-mora", label: "Sobre mí" },
  { href: "/contacto", label: "Contacto" }
];

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="border-b border-navy/80 bg-navy text-cream">
      <Container className="flex items-center justify-between py-4 sm:py-5">
        <Link href="/" className="font-serif text-base leading-tight text-cream sm:text-lg">
          Didier Mora Calvo | Abogado
        </Link>
        <div className="flex items-center gap-3">
          <nav className="hidden items-center gap-6 text-sm text-cream/80 md:flex">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`focus-ring rounded-full px-2 py-1 transition-colors ${
                  pathname === link.href
                    ? "text-gold"
                    : "text-cream/80 hover:text-gold"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <Link
            href="/contacto"
            className="hidden rounded-full border border-cream/30 px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-cream focus-ring hover:text-gold md:inline-flex"
          >
            Agendar consulta
          </Link>
          <button
            type="button"
            aria-label="Abrir menú"
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            onClick={() => setIsOpen((prev) => !prev)}
            className="focus-ring rounded-full border border-cream/30 px-3 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-cream md:hidden"
          >
            {isOpen ? "Cerrar" : "Menú"}
          </button>
        </div>
      </Container>
      <div
        id="mobile-menu"
        className={`border-t border-cream/10 md:hidden ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        } overflow-hidden transition-[max-height,opacity] duration-300`}
      >
        <Container className="space-y-4 py-4 text-sm text-cream/80">
          <div className="flex flex-col gap-3">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`focus-ring rounded-full px-3 py-2 transition-colors ${
                  pathname === link.href
                    ? "bg-cream/10 text-gold"
                    : "text-cream/80 hover:text-gold"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
          <Link
            href="/contacto"
            onClick={() => setIsOpen(false)}
            className="inline-flex items-center justify-center rounded-full border border-cream/30 px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-cream focus-ring hover:text-gold"
          >
            Agendar consulta
          </Link>
        </Container>
      </div>
    </header>
  );
}
