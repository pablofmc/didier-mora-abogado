import type { Metadata } from "next";
import Button from "@/components/Button";
import Card from "@/components/Card";
import Container from "@/components/Container";
import SectionHeader from "@/components/SectionHeader";

export const metadata: Metadata = {
  title: "Abogado de Tránsito en Costa Rica | San José",
  description:
    "Asesoría en derecho de tránsito en Costa Rica. Atención en San José para apelaciones, accidentes y trámites viales.",
  alternates: {
    canonical: "/abogado-transito-costa-rica"
  },
  openGraph: {
    title: "Abogado de Tránsito en Costa Rica | Didier Mora Calvo",
    description:
      "Asesoría en derecho de tránsito con respuesta rápida en San José, Costa Rica.",
    url: "/abogado-transito-costa-rica",
    type: "article",
    locale: "es_CR"
  }
};

const services = [
  {
    title: "Impugnaciones y apelaciones",
    detail: "Defensa en multas, partes y resoluciones administrativas."
  },
  {
    title: "Accidentes de tránsito",
    detail: "Acompañamiento legal integral en el proceso judicial y de seguros."
  },
  {
    title: "Trámites y consultas",
    detail: "Asesoría preventiva para evitar riesgos y sanciones futuras."
  }
];

export default function AbogadoTransitoPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": ["LegalService", "LocalBusiness"],
    name: "Didier Mora Calvo",
    url: "https://didiermora.cr/abogado-transito-costa-rica",
    description:
      "Abogado de tránsito en Costa Rica. Atención en San José para apelaciones y accidentes viales.",
    areaServed: {
      "@type": "City",
      name: "San José",
      address: {
        "@type": "PostalAddress",
        addressLocality: "San José",
        addressCountry: "CR"
      }
    },
    telephone: "+506 87116249",
    address: {
      "@type": "PostalAddress",
      addressLocality: "San José",
      addressCountry: "CR"
    }
  };
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "¿Qué debo hacer después de un accidente de tránsito?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Después de un accidente de tránsito es importante mantener la calma, contactar a las autoridades y no aceptar responsabilidades sin asesoría legal. Un abogado puede orientarte desde el inicio del proceso, explicar los pasos ante el juzgado de tránsito y ayudarte a documentar la situación."
        }
      },
      {
        "@type": "Question",
        name: "¿Puedo apelar una multa de tránsito?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Sí. Las multas de tránsito pueden ser apeladas dentro de los plazos establecidos por ley. Un abogado de tránsito puede evaluar si existen fundamentos legales para presentar la apelación y preparar el escrito con respaldo jurídico, evitando errores en el procedimiento."
        }
      },
      {
        "@type": "Question",
        name: "¿Qué pasa si hay personas lesionadas en un accidente?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Cuando existen personas lesionadas, el proceso se vuelve más complejo y puede tener implicaciones penales. Contar con asesoría legal desde el inicio es fundamental para proteger tus derechos, coordinar la evidencia y responder adecuadamente ante las autoridades."
        }
      },
      {
        "@type": "Question",
        name: "¿Es obligatorio asistir a las audiencias de tránsito?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Sí. No asistir a una audiencia puede generar consecuencias negativas en el proceso. Un abogado puede representarte y orientarte sobre cada etapa, así como preparar la documentación necesaria para que la audiencia sea ordenada y clara."
        }
      },
      {
        "@type": "Question",
        name: "¿Cuánto dura un proceso de tránsito?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "La duración depende de la complejidad del caso, la existencia de lesiones y las instancias involucradas. Un adecuado seguimiento legal ayuda a evitar retrasos innecesarios y a mantener el expediente en movimiento, con expectativas realistas sobre tiempos."
        }
      }
    ]
  };

  return (
    <main className="space-y-16 pb-24">
      {/* JSON-LD for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* FAQPage JSON-LD for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <section className="bg-white/60 py-16">
        <Container className="grid gap-10 lg:grid-cols-[1.1fr,0.9fr]">
          <div className="space-y-6">
            <p className="text-xs uppercase tracking-[0.3em] text-muted">San José, Costa Rica</p>
            <h1 className="font-serif text-4xl text-navy sm:text-5xl">
              Abogado de Tránsito en Costa Rica
            </h1>
            <p className="text-base text-muted">
              Atención legal clara en derecho de tránsito, con respuesta rápida y seguimiento
              transparente.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button href="/contacto">Agendar consulta</Button>
              <Button href="https://wa.me/50687116249" variant="secondary">
                WhatsApp
              </Button>
            </div>
          </div>
          <Card className="space-y-4">
            <p className="text-xs uppercase tracking-[0.3em] text-muted">Experiencia</p>
            <h2 className="font-serif text-2xl text-navy">Derecho de tránsito con criterio</h2>
            <ul className="list-disc space-y-3 pl-5 text-sm text-muted marker:text-gold">
              <li>19 años de experiencia en derecho de tránsito.</li>
              <li>Casos exitosos con resolución favorable.</li>
              <li>Accidentes viales, apelaciones y audiencias.</li>
              <li>Atención directa y seguimiento transparente.</li>
            </ul>
          </Card>
        </Container>
      </section>

      <section>
        <Container className="space-y-10">
          <SectionHeader
            eyebrow="Servicios principales"
            title="Soluciones en derecho de tránsito"
            subtitle="Representación y asesoría para proteger tus derechos." 
          />
          <p className="max-w-3xl text-sm text-muted">
            Asesoría en San José, Costa Rica, para conductores y empresas con atención directa y
            seguimiento claro en cada etapa.
          </p>
          <div className="grid gap-6 md:grid-cols-3">
            {services.map((service) => (
              <Card key={service.title} className="space-y-3">
                <h2 className="font-serif text-xl text-navy">{service.title}</h2>
                <p className="text-sm text-muted">{service.detail}</p>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-white/60 py-16">
        <Container className="space-y-8">
          <SectionHeader
            eyebrow="Preguntas frecuentes"
            title="Preguntas frecuentes sobre Derecho de Tránsito"
            subtitle="Respuestas claras para situaciones comunes en Costa Rica."
          />
          <div className="grid gap-6 lg:grid-cols-2">
            <Card>
              <h3 className="font-serif text-lg text-navy">
                ¿Qué debo hacer después de un accidente de tránsito?
              </h3>
              <p className="mt-2 text-sm text-muted">
                Después de un accidente de tránsito es importante mantener la calma, contactar a
                las autoridades y no aceptar responsabilidades sin asesoría legal. Un abogado puede
                orientarte desde el inicio del proceso, explicar los pasos ante el juzgado de
                tránsito y ayudarte a documentar la situación.
              </p>
            </Card>
            <Card>
              <h3 className="font-serif text-lg text-navy">
                ¿Puedo apelar una multa de tránsito?
              </h3>
              <p className="mt-2 text-sm text-muted">
                Sí. Las multas de tránsito pueden ser apeladas dentro de los plazos establecidos
                por ley. Un abogado de tránsito puede evaluar si existen fundamentos legales para
                presentar la apelación y preparar el escrito con respaldo jurídico, evitando
                errores en el procedimiento.
              </p>
            </Card>
            <Card>
              <h3 className="font-serif text-lg text-navy">
                ¿Qué pasa si hay personas lesionadas en un accidente?
              </h3>
              <p className="mt-2 text-sm text-muted">
                Cuando existen personas lesionadas, el proceso se vuelve más complejo y puede tener
                implicaciones penales. Contar con asesoría legal desde el inicio es fundamental
                para proteger tus derechos, coordinar la evidencia y responder adecuadamente ante
                las autoridades.
              </p>
            </Card>
            <Card>
              <h3 className="font-serif text-lg text-navy">
                ¿Es obligatorio asistir a las audiencias de tránsito?
              </h3>
              <p className="mt-2 text-sm text-muted">
                Sí. No asistir a una audiencia puede generar consecuencias negativas en el proceso.
                Un abogado puede representarte y orientarte sobre cada etapa, así como preparar la
                documentación necesaria para que la audiencia sea ordenada y clara.
              </p>
            </Card>
            <Card>
              <h3 className="font-serif text-lg text-navy">¿Cuánto dura un proceso de tránsito?</h3>
              <p className="mt-2 text-sm text-muted">
                La duración depende de la complejidad del caso, la existencia de lesiones y las
                instancias involucradas. Un adecuado seguimiento legal ayuda a evitar retrasos
                innecesarios y a mantener el expediente en movimiento, con expectativas realistas
                sobre tiempos.
              </p>
            </Card>
          </div>
        </Container>
      </section>
    </main>
  );
}
