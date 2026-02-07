import type { Metadata } from "next";
import Button from "@/components/Button";
import Card from "@/components/Card";
import Container from "@/components/Container";
import SectionHeader from "@/components/SectionHeader";

export const metadata: Metadata = {
  title: "Abogado Penal en Costa Rica | Defensa Penal en San José",
  description:
    "Defensa penal clara y estratégica en Costa Rica. Didier Mora Calvo, abogado penal en San José, con atención rápida y confidencial.",
  alternates: {
    canonical: "/abogado-penal-costa-rica"
  },
  openGraph: {
    title: "Abogado Penal en Costa Rica | Didier Mora Calvo",
    description:
      "Defensa penal clara y estratégica en Costa Rica. Atención en San José y acompañamiento cercano.",
    url: "/abogado-penal-costa-rica",
    type: "article",
    locale: "es_CR"
  }
};

const services = [
  {
    title: "Defensa en procesos penales",
    detail: "Estrategia legal sólida desde la primera audiencia hasta el cierre del caso."
  },
  {
    title: "Asesoría preventiva",
    detail: "Análisis de riesgos y recomendaciones claras antes de tomar decisiones."
  },
  {
    title: "Acompañamiento inmediato",
    detail: "Respuesta rápida para situaciones urgentes, con comunicación directa."
  }
];

export default function AbogadoPenalPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": ["LegalService", "LocalBusiness"],
    name: "Didier Mora Calvo",
    url: "https://didiermora.cr/abogado-penal-costa-rica",
    description:
      "Abogado penal en Costa Rica. Defensa penal clara, estratégica y confiable en San José.",
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
        name: "¿Cuándo debo contactar a un abogado penal?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Debes contactar a un abogado penal desde el primer momento en que seas citado, investigado o detenido. La asesoría temprana ayuda a entender el proceso, proteger tus derechos y evitar decisiones que compliquen la situación. En Costa Rica, actuar a tiempo suele marcar una diferencia importante."
        }
      },
      {
        "@type": "Question",
        name: "¿Puedo tener un abogado antes de ir a declarar?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Sí. Toda persona tiene derecho a contar con un abogado antes y durante cualquier declaración ante el Ministerio Público o un juez. Es recomendable no declarar sin asesoría legal adecuada, para evitar errores y conocer con claridad el alcance de cada pregunta."
        }
      },
      {
        "@type": "Question",
        name: "¿Qué hace un abogado penal durante la investigación?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "El abogado penal analiza el expediente, asesora al cliente y lo acompaña en diligencias. También participa en audiencias y vela por el respeto de sus derechos durante todo el proceso penal. Su función es construir una estrategia legal coherente y bien sustentada."
        }
      },
      {
        "@type": "Question",
        name: "¿Qué son las medidas cautelares?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Las medidas cautelares son restricciones impuestas por un juez mientras se tramita un proceso penal, como firmar periódicamente, no salir del país o, en casos más graves, prisión preventiva. Se aplican según el riesgo procesal y deben justificarse."
        }
      },
      {
        "@type": "Question",
        name: "¿Un proceso penal siempre termina en juicio?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "No. Muchos procesos penales se resuelven mediante salidas alternas, sobreseimientos o acuerdos, dependiendo de las circunstancias del caso y de la estrategia legal. La vía final se define según la evidencia, la etapa procesal y las opciones disponibles."
        }
      }
    ]
  };

  return (
    <main className="space-y-12 pb-16 sm:space-y-16 sm:pb-24">
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

      <section className="bg-white/60 py-12 sm:py-16">
        <Container className="grid gap-10 lg:grid-cols-[1.1fr,0.9fr]">
          <div className="space-y-6">
            <p className="text-xs uppercase tracking-[0.3em] text-muted">San José, Costa Rica</p>
            <h1 className="font-serif text-3xl text-navy sm:text-4xl lg:text-5xl">
              Abogado Penal en Costa Rica
            </h1>
            <p className="text-base text-muted">
              Defensa penal clara, estratégica y confidencial. Acompaño tu caso con seriedad,
              comunicación directa y enfoque en resultados.
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
          <Card className="space-y-4">
            <p className="text-xs uppercase tracking-[0.3em] text-muted">Autoridad judicial</p>
            <h2 className="font-serif text-2xl text-navy">Trayectoria comprobada</h2>
            <ul className="list-disc space-y-3 pl-5 text-base text-muted marker:text-gold">
              <li>Ex Juez de la República.</li>
              <li>32 años en la Corte.</li>
              <li>Formación en Sala IV.</li>
              <li>19 años litigando procesos penales en Costa Rica.</li>
            </ul>
          </Card>
        </Container>
      </section>

      <section>
        <Container className="space-y-10">
          <SectionHeader
            eyebrow="Servicios principales"
            title="Cómo te puedo ayudar en derecho penal"
            subtitle="Estrategia legal clara para cada etapa del proceso."
          />
          <p className="max-w-3xl text-base text-muted">
            Atención penal en San José, Costa Rica, con enfoque preventivo y defensa técnica cuando
            el caso lo requiere.
          </p>
          <div className="grid gap-6 md:grid-cols-3">
            {services.map((service) => (
              <Card key={service.title} className="space-y-3">
                <h2 className="font-serif text-xl text-navy">{service.title}</h2>
                <p className="text-base text-muted">{service.detail}</p>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-white/60 py-12 sm:py-16">
        <Container className="space-y-8">
          <SectionHeader
            eyebrow="Preguntas frecuentes"
            title="Preguntas frecuentes sobre Derecho Penal en Costa Rica"
            subtitle="Respuestas claras para orientar tus decisiones."
          />
          <div className="grid gap-6 lg:grid-cols-2">
            <Card>
              <h3 className="font-serif text-lg text-navy">
                ¿Cuándo debo contactar a un abogado penal?
              </h3>
              <p className="mt-2 text-base text-muted">
                Debes contactar a un abogado penal desde el primer momento en que seas citado,
                investigado o detenido. La asesoría temprana ayuda a entender el proceso, proteger
                tus derechos y evitar decisiones que compliquen la situación. En Costa Rica, actuar
                a tiempo suele marcar una diferencia importante.
              </p>
            </Card>
            <Card>
              <h3 className="font-serif text-lg text-navy">
                ¿Puedo tener un abogado antes de ir a declarar?
              </h3>
              <p className="mt-2 text-base text-muted">
                Sí. Toda persona tiene derecho a contar con un abogado antes y durante cualquier
                declaración ante el Ministerio Público o un juez. Es recomendable no declarar sin
                asesoría legal adecuada, para evitar errores y conocer con claridad el alcance de
                cada pregunta.
              </p>
            </Card>
            <Card>
              <h3 className="font-serif text-lg text-navy">
                ¿Qué hace un abogado penal durante la investigación?
              </h3>
              <p className="mt-2 text-base text-muted">
                El abogado penal analiza el expediente, asesora al cliente y lo acompaña en
                diligencias. También participa en audiencias y vela por el respeto de sus derechos
                durante todo el proceso penal. Su función es construir una estrategia legal
                coherente y bien sustentada.
              </p>
            </Card>
            <Card>
              <h3 className="font-serif text-lg text-navy">¿Qué son las medidas cautelares?</h3>
              <p className="mt-2 text-base text-muted">
                Las medidas cautelares son restricciones impuestas por un juez mientras se tramita
                un proceso penal, como firmar periódicamente, no salir del país o, en casos más
                graves, prisión preventiva. Se aplican según el riesgo procesal y deben
                justificarse.
              </p>
            </Card>
            <Card>
              <h3 className="font-serif text-lg text-navy">
                ¿Un proceso penal siempre termina en juicio?
              </h3>
              <p className="mt-2 text-base text-muted">
                No. Muchos procesos penales se resuelven mediante salidas alternas, sobreseimientos
                o acuerdos, dependiendo de las circunstancias del caso y de la estrategia legal. La
                vía final se define según la evidencia, la etapa procesal y las opciones
                disponibles.
              </p>
            </Card>
          </div>
        </Container>
      </section>
    </main>
  );
}
