import Link from "next/link";
import Container from "./Container";

const quickLinks = [
  { href: "/", label: "Inicio" },
  { href: "/areas", label: "Áreas" },
  { href: "/sobre", label: "Sobre mí" },
  { href: "/contacto", label: "Contacto" }
];

export default function Footer() {
  return (
    <footer className="border-t border-navy/10 bg-cream/80">
      <Container className="grid gap-8 py-10 md:grid-cols-[2fr,1fr,1fr] sm:py-12">
        <div className="space-y-3">
          <p className="font-serif text-lg text-navy">Didier Mora Calvo</p>
          <p className="text-sm text-muted">
            Abogado en Costa Rica. Asesoría legal clara, estratégica y confiable.
          </p>
          <p className="text-sm text-muted">San José, Costa Rica</p>
        </div>
        <div className="space-y-3">
          <p className="text-xs uppercase tracking-[0.2em] text-muted">Contacto</p>
          <p className="text-sm text-muted">+506 87116249</p>
          <p className="text-sm text-muted">dimocalvo48@yahoo.com</p>
          <Link href="https://wa.me/50687116249" className="text-sm text-navy focus-ring rounded-full px-2 py-1">
            WhatsApp
          </Link>
        </div>
        <div className="space-y-3">
          <p className="text-xs uppercase tracking-[0.2em] text-muted">Enlaces</p>
          <div className="flex flex-col gap-2 text-sm text-muted">
            {quickLinks.map((link) => (
              <Link key={link.href} href={link.href} className="focus-ring rounded-full px-2 py-1">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </Container>
      <div className="border-t border-navy/10 py-4 text-center text-xs text-muted">
        © {new Date().getFullYear()} Didier Mora Calvo. Todos los derechos reservados.
      </div>
    </footer>
  );
}
