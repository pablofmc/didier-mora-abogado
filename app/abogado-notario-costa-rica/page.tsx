import type { Metadata } from "next";
import Button from "@/components/Button";
import Card from "@/components/Card";
import Container from "@/components/Container";
import SectionHeader from "@/components/SectionHeader";

export const metadata: Metadata = {
  title: "Abogado Notario en Costa Rica | San José",
  description:
    "Servicios de notariado en Costa Rica. Autenticaciones, escrituras y trámites notariales con respaldo profesional en San José.",
  alternates: {
    canonical: "/abogado-notario-costa-rica"
  },
  openGraph: {
    title: "Abogado Notario en Costa Rica | Didier Mora Calvo",
    description:
      "Servicios notariales confiables en San José, Costa Rica. Atención cercana y ágil.",
    url: "/abogado-notario-costa-rica",
    type: "article",
    locale: "es_CR"
  }
};

const services = [
  {
    title: "Autenticaciones y certificaciones",
    detail: "Validación de documentos con seguridad y cumplimiento legal."
  },
  {
    title: "Escrituras y contratos",
    detail: "Redacción y formalización de actos notariales con claridad."
  },
  {
    title: "Trámites notariales",
    detail: "Gestión rápida y acompañamiento durante todo el proceso."
  }
];

export default function AbogadoNotarioPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": ["LegalService", "LocalBusiness"],
    name: "Didier Mora Calvo",
    url: "https://didiermora.cr/abogado-notario-costa-rica",
    description:
      "Abogado notario en Costa Rica. Servicios notariales confiables en San José.",
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
        name: "¿Qué trámites puede realizar un abogado notario?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Un abogado notario puede realizar escrituras públicas, inscripciones de propiedades y vehículos, certificaciones, autenticaciones, sucesiones y otros actos notariales. En Costa Rica, estos trámites requieren formalidad y respaldo legal para garantizar su validez y seguridad jurídica."
        }
      },
      {
        "@type": "Question",
        name: "¿Cuánto tiempo tarda un trámite notarial?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "El tiempo depende del tipo de trámite y de la documentación aportada. Muchos actos notariales pueden realizarse en corto tiempo si la información está completa. Cuando hay registros involucrados, los plazos pueden variar, pero se aclaran desde el inicio."
        }
      },
      {
        "@type": "Question",
        name: "¿Es obligatorio acudir a un notario para vender una propiedad?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Sí. La compraventa de bienes inmuebles debe formalizarse mediante escritura pública ante notario para que tenga validez legal en Costa Rica. Además, el notario gestiona la inscripción en el Registro Nacional, lo que protege los derechos de las partes."
        }
      },
      {
        "@type": "Question",
        name: "¿Qué es una certificación notarial?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Una certificación notarial es un documento emitido por un notario que da fe de la autenticidad de firmas, copias o hechos, con pleno valor legal. Este tipo de documento se utiliza para trámites bancarios, administrativos y judiciales."
        }
      },
      {
        "@type": "Question",
        name: "¿Puedo hacer varios trámites notariales en una sola cita?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "En muchos casos sí, siempre que se cuente con la documentación necesaria. Es recomendable consultar previamente para una mejor organización y así aprovechar la cita, revisar requisitos y avanzar con varios actos notariales de forma ordenada."
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
              Abogado Notario en Costa Rica
            </h1>
            <p className="text-base text-muted">
              Servicios notariales claros y confiables, con atención personalizada y tiempos
              ágiles.
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
            <p className="text-xs uppercase tracking-[0.3em] text-muted">Notariado</p>
            <h2 className="font-serif text-2xl text-navy">Ejercicio notarial sólido</h2>
            <ul className="list-disc space-y-3 pl-5 text-base text-muted marker:text-gold">
              <li>19 años de ejercicio notarial.</li>
              <li>Trámites: vehículos, propiedades, escrituras, sucesorios y certificaciones.</li>
              <li>Atención integral y segura en Costa Rica.</li>
            </ul>
          </Card>
        </Container>
      </section>

      <section>
        <Container className="space-y-10">
          <SectionHeader
            eyebrow="Servicios principales"
            title="Soluciones notariales en San José"
            subtitle="Formalización ordenada con respaldo legal." 
          />
          <p className="max-w-3xl text-base text-muted">
            Servicios notariales en Costa Rica con enfoque en seguridad jurídica y tiempos claros
            para cada trámite.
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
            title="Preguntas frecuentes sobre Servicios Notariales"
            subtitle="Respuestas claras para trámites notariales en Costa Rica."
          />
          <div className="grid gap-6 lg:grid-cols-2">
            <Card>
              <h3 className="font-serif text-lg text-navy">
                ¿Qué trámites puede realizar un abogado notario?
              </h3>
              <p className="mt-2 text-base text-muted">
                Un abogado notario puede realizar escrituras públicas, inscripciones de propiedades
                y vehículos, certificaciones, autenticaciones, sucesiones y otros actos notariales.
                En Costa Rica, estos trámites requieren formalidad y respaldo legal para garantizar
                su validez y seguridad jurídica.
              </p>
            </Card>
            <Card>
              <h3 className="font-serif text-lg text-navy">
                ¿Cuánto tiempo tarda un trámite notarial?
              </h3>
              <p className="mt-2 text-base text-muted">
                El tiempo depende del tipo de trámite y de la documentación aportada. Muchos actos
                notariales pueden realizarse en corto tiempo si la información está completa.
                Cuando hay registros involucrados, los plazos pueden variar, pero se aclaran desde
                el inicio.
              </p>
            </Card>
            <Card>
              <h3 className="font-serif text-lg text-navy">
                ¿Es obligatorio acudir a un notario para vender una propiedad?
              </h3>
              <p className="mt-2 text-base text-muted">
                Sí. La compraventa de bienes inmuebles debe formalizarse mediante escritura pública
                ante notario para que tenga validez legal en Costa Rica. Además, el notario gestiona
                la inscripción en el Registro Nacional, lo que protege los derechos de las partes.
              </p>
            </Card>
            <Card>
              <h3 className="font-serif text-lg text-navy">
                ¿Qué es una certificación notarial?
              </h3>
              <p className="mt-2 text-base text-muted">
                Una certificación notarial es un documento emitido por un notario que da fe de la
                autenticidad de firmas, copias o hechos, con pleno valor legal. Este tipo de
                documento se utiliza para trámites bancarios, administrativos y judiciales.
              </p>
            </Card>
            <Card>
              <h3 className="font-serif text-lg text-navy">
                ¿Puedo hacer varios trámites notariales en una sola cita?
              </h3>
              <p className="mt-2 text-base text-muted">
                En muchos casos sí, siempre que se cuente con la documentación necesaria. Es
                recomendable consultar previamente para una mejor organización y así aprovechar la
                cita, revisar requisitos y avanzar con varios actos notariales de forma ordenada.
              </p>
            </Card>
          </div>
        </Container>
      </section>
    </main>
  );
}
