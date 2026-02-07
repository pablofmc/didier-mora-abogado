import type { Metadata } from "next";
import Button from "@/components/Button";
import Card from "@/components/Card";
import Container from "@/components/Container";
import SectionHeader from "@/components/SectionHeader";

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Contacto directo con Didier Mora Calvo, abogado en Costa Rica. Atención en San José y consultas personalizadas.",
  alternates: {
    canonical: "/contacto"
  },
  openGraph: {
    title: "Contacto | Didier Mora Calvo",
    description:
      "Contacto directo con Didier Mora Calvo, abogado en Costa Rica. Atención en San José y consultas personalizadas.",
    url: "/contacto",
    type: "website",
    locale: "es_CR"
  }
};

export default function ContactoPage() {
  return (
    <main className="space-y-12 pb-16 sm:space-y-16 sm:pb-24">
      <section className="bg-white/60 py-12 sm:py-16">
        <Container className="grid gap-10 lg:grid-cols-[1.1fr,0.9fr]">
          <div className="space-y-6">
            <SectionHeader
              eyebrow="Contacto"
              title="Hablemos sobre tu caso"
              subtitle="Completá el formulario y te responderé lo antes posible."
            />
            <form className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <label htmlFor="nombre" className="text-sm font-semibold text-navy">
                    Nombre completo
                  </label>
                  <input
                    id="nombre"
                    name="nombre"
                    type="text"
                    required
                    className="w-full rounded-2xl border border-navy/10 bg-white px-4 py-3 text-base text-text focus-ring"
                    placeholder="Tu nombre"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="telefono" className="text-sm font-semibold text-navy">
                    Teléfono
                  </label>
                  <input
                    id="telefono"
                    name="telefono"
                    type="tel"
                    required
                    className="w-full rounded-2xl border border-navy/10 bg-white px-4 py-3 text-base text-text focus-ring"
                    placeholder="+506 87116249"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="correo" className="text-sm font-semibold text-navy">
                  Correo electrónico
                </label>
                <input
                  id="correo"
                  name="correo"
                  type="email"
                  required
                  className="w-full rounded-2xl border border-navy/10 bg-white px-4 py-3 text-base text-text focus-ring"
                  placeholder="correo@ejemplo.com"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="mensaje" className="text-sm font-semibold text-navy">
                  Mensaje
                </label>
                <textarea
                  id="mensaje"
                  name="mensaje"
                  rows={5}
                  required
                  className="w-full rounded-2xl border border-navy/10 bg-white px-4 py-3 text-base text-text focus-ring"
                  placeholder="Contame brevemente tu caso"
                />
              </div>
              <Button type="submit" className="w-full sm:w-auto">
                Agendar consulta
              </Button>
            </form>
          </div>

          <div className="space-y-6">
            <Card className="space-y-4">
              <p className="text-xs uppercase tracking-[0.3em] text-muted">Atención</p>
              <h3 className="font-serif text-2xl text-navy">San José, Costa Rica</h3>
              <p className="text-base text-muted">Horario: lunes a viernes · 8:00 a.m. - 6:00 p.m.</p>
              <p className="text-base text-muted">Atención virtual y presencial con cita previa.</p>
            </Card>
            <Card className="space-y-4 border-gold/40">
              <p className="text-xs uppercase tracking-[0.3em] text-muted">Contacto directo</p>
              <p className="text-base text-muted">+506 87116249</p>
              <p className="text-base text-muted">dimocalvo48@yahoo.com</p>
              <Button href="https://wa.me/50687116249" variant="secondary">
                WhatsApp
              </Button>
            </Card>
          </div>
        </Container>
      </section>
    </main>
  );
}
