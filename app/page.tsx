import Button from "@/components/Button";
import Card from "@/components/Card";
import Container from "@/components/Container";
import SectionHeader from "@/components/SectionHeader";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Didier Mora Calvo | Abogado en Costa Rica",
  description:
    "Asesoría legal clara, estratégica y confiable en Costa Rica. Atención cercana con enfoque en resultados.",
  alternates: {
    canonical: "/"
  },
  openGraph: {
    title: "Didier Mora Calvo | Abogado en Costa Rica",
    description:
      "Asesoría legal clara, estratégica y confiable en Costa Rica. Atención cercana con enfoque en resultados.",
    url: "/",
    type: "website",
    locale: "es_CR"
  }
};

const areas = [
  {
    title: "Derecho Penal",
    description:
      "Defensa técnica desde la investigación hasta el juicio, con estrategia y protección de tus derechos."
  },
  {
    title: "Familia",
    description:
      "Soluciones cuidadosas en divorcios, pensiones y régimen de visitas, priorizando acuerdos viables."
  },
  {
    title: "Civil",
    description:
      "Contratos, cobros y conflictos patrimoniales con análisis claro y acciones legales oportunas."
  },
  {
    title: "Laboral",
    description:
      "Asesoría a trabajadores y empleadores en despidos, prestaciones y conflictos en el trabajo."
  },
  {
    title: "Tránsito",
    description:
      "Atención integral en accidentes y procesos administrativos para proteger tu licencia y tu responsabilidad."
  },
  {
    title: "Notariado",
    description:
      "Escrituras, traspasos y certificaciones con precisión jurídica y tiempos de respuesta ágiles."
  }
];

const reasons = [
  {
    title: "Claridad desde el inicio",
    description: "Explico opciones y riesgos en lenguaje directo, sin vueltas innecesarias."
  },
  {
    title: "Confidencialidad absoluta",
    description: "Tu información se maneja con la discreción y el cuidado que merece."
  },
  {
    title: "Respuesta rápida",
    description: "Comunicación ágil para que siempre sepas en qué punto está tu caso."
  }
];

const testimonials = [
  {
    name: "Cliente 1",
    message: "Recibí orientación clara y un trato profesional de principio a fin."
  },
  {
    name: "Cliente 2",
    message: "Me acompañó en todo el proceso con estrategia y transparencia."
  },
  {
    name: "Cliente 3",
    message: "Su compromiso y seguimiento hicieron la diferencia."
  }
];

const faqs = [
  {
    question: "¿Cómo es la primera consulta?",
    answer:
      "Es un espacio para entender tu situación, revisar opciones y definir los siguientes pasos."
  },
  {
    question: "¿Qué documentos debo llevar?",
    answer:
      "Depende del caso, pero normalmente una identificación y cualquier prueba o contrato relacionado."
  },
  {
    question: "¿Trabajás con tarifas fijas o por hora?",
    answer:
      "Se puede definir según el tipo de asunto. Siempre se acuerda antes de iniciar."
  },
  {
    question: "¿Atendés fuera de San José?",
    answer:
      "Sí, se puede coordinar atención en otras zonas o de forma virtual."
  }
];

export default function HomePage() {
  return (
    <main className="space-y-16 pb-16 sm:space-y-24 sm:pb-24">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_#ffffff,transparent_60%)]" />
        <Container className="grid items-center gap-10 py-12 sm:py-16 lg:grid-cols-[1.1fr,0.9fr]">
          <div className="space-y-6">
            <p className="text-xs uppercase tracking-[0.3em] text-muted">
              Didier Mora Calvo · Abogado en Costa Rica
            </p>
            <h1 className="font-serif text-3xl text-navy sm:text-4xl lg:text-6xl">
              Asesoría legal clara, estratégica y confiable.
            </h1>
            <p className="max-w-xl text-base text-muted sm:text-lg">
              Atiendo casos con seriedad, comunicación directa y enfoque en resultados.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button href="/contacto" className="w-full sm:w-auto">
                Agendar consulta
              </Button>
              <Button href="https://wa.me/50687116249" variant="secondary" className="w-full sm:w-auto">
                WhatsApp
              </Button>
            </div>
          </div>
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-full max-w-sm overflow-hidden rounded-[32px] border border-navy/10 bg-gradient-to-br from-cream via-white to-gold/20 p-6 shadow-soft sm:p-8">
              <div className="absolute inset-0 opacity-20" />
              <div className="space-y-4">
                <p className="text-xs uppercase tracking-[0.3em] text-muted">Trayectoria</p>
                <h2 className="font-serif text-2xl text-navy">
                  Autoridad profesional comprobada
                </h2>
                <ul className="list-disc space-y-3 pl-5 text-base text-muted marker:text-gold">
                  <li>32 años en la Corte de Justicia.</li>
                  <li>Ex Juez de la República.</li>
                  <li>19 años litigando penal, tránsito y notariado.</li>
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-20 bg-cream/85" />
        <div className="absolute inset-x-0 -top-12 -z-10 h-24 bg-gradient-to-b from-transparent via-cream/60 to-cream/90" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-cream/50 to-cream/70" />
        <Container className="space-y-10 pt-4">
          <div className="h-px w-full bg-gradient-to-r from-transparent via-navy/15 to-transparent" />
          <SectionHeader
            eyebrow="Servicios"
            title="Áreas de práctica"
            subtitle="Atención legal integral con enfoque humano, incluyendo servicios notariales."
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {areas.map((area) => (
              <Card key={area.title} className="flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <span className="h-3 w-3 rounded-full bg-gold" />
                  <h3 className="font-serif text-xl text-navy">{area.title}</h3>
                </div>
                <p className="text-base text-muted">{area.description}</p>
              </Card>
            ))}
          </div>
          <p className="text-xs text-muted/70">
          </p>
        </Container>
      </section>

      <section className="bg-white/60 py-12 sm:py-16">
        <Container className="grid gap-12 lg:grid-cols-[1fr,1fr]">
          <SectionHeader
            eyebrow="Valor agregado"
            title="Por qué trabajar conmigo"
            subtitle="Una asesoría cercana que combina claridad legal con trato profesional."
          />
          <div className="grid gap-6">
            {reasons.map((reason) => (
              <Card key={reason.title} className="border-gold/30">
                <h3 className="font-serif text-xl text-navy">{reason.title}</h3>
                <p className="mt-2 text-base text-muted">{reason.description}</p>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      <section>
        <Container className="space-y-10">
          <SectionHeader
            eyebrow="Testimonios"
            title="Clientes que recomendarían mi trabajo"
            subtitle="Ejemplos de experiencias basadas en casos reales."
          />
          <div className="grid gap-6 lg:grid-cols-3">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.name} className="space-y-4">
                <p className="text-base text-muted">“{testimonial.message}”</p>
                <div className="text-xs uppercase tracking-[0.2em] text-gold">{testimonial.name}</div>
                <span className="text-[10px] uppercase tracking-[0.2em] text-muted">Ejemplo</span>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-white/60 py-12 sm:py-16">
        <Container className="space-y-10">
          <SectionHeader
            eyebrow="Preguntas frecuentes"
            title="Respuestas rápidas"
            subtitle="Información clara para que tomés decisiones con seguridad."
          />
          <div className="grid gap-6 lg:grid-cols-2">
            {faqs.map((faq) => (
              <Card key={faq.question}>
                <h3 className="font-serif text-lg text-navy">{faq.question}</h3>
                <p className="mt-2 text-base text-muted">{faq.answer}</p>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      <section>
        <Container className="rounded-[36px] border border-navy/10 bg-navy px-5 py-10 text-cream shadow-soft sm:px-10 sm:py-12">
          <div className="grid gap-6 lg:grid-cols-[1.2fr,0.8fr] lg:items-center">
            <div className="space-y-4">
              <p className="text-xs uppercase tracking-[0.3em] text-gold">Contacto directo</p>
              <h2 className="font-serif text-3xl sm:text-4xl">
                ¿Listo para conversar sobre tu caso?
              </h2>
              <p className="text-base text-cream/80">
                Coordiná una consulta y recibí orientación puntual sobre la mejor estrategia.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center lg:justify-end">
              <Button href="/contacto" className="w-full bg-cream text-navy hover:-translate-y-0.5 sm:w-auto">
                Agendar consulta
              </Button>
              <Button
                href="https://wa.me/50687116249"
                variant="secondary"
                className="w-full border-cream/40 text-cream hover:text-gold sm:w-auto"
              >
                WhatsApp
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
