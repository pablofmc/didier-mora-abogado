import type { Metadata } from "next";
import Card from "@/components/Card";
import Container from "@/components/Container";
import SectionHeader from "@/components/SectionHeader";

export const metadata: Metadata = {
  title: "Sobre mí",
  description:
    "Perfil profesional de Didier Mora Calvo, abogado en Costa Rica con enfoque en asesoría legal confiable.",
  alternates: {
    canonical: "/sobre"
  },
  openGraph: {
    title: "Sobre mí | Didier Mora Calvo",
    description:
      "Perfil profesional de Didier Mora Calvo, abogado en Costa Rica con enfoque en asesoría legal confiable.",
    url: "/sobre",
    type: "website",
    locale: "es_CR"
  }
};

const highlights = [
  {
    title: "Atención personalizada",
    description: "Cada caso se analiza con dedicación y seguimiento directo."
  },
  {
    title: "Enfoque estratégico",
    description: "Busco soluciones prácticas que generen tranquilidad y resultados."
  },
  {
    title: "Comunicación cercana",
    description: "Información clara y transparente durante todo el proceso."
  }
];

export default function SobrePage() {
  return (
    <main className="space-y-16 pb-24">
      <section className="bg-white/60 py-16">
        <Container className="grid gap-10 lg:grid-cols-[1.1fr,0.9fr] lg:items-center">
          <div className="space-y-5">
            <SectionHeader
              eyebrow="Perfil profesional"
              title="Didier Mora Calvo"
              subtitle="Abogado en Costa Rica con enfoque en asesoría legal confiable y trato cercano."
            />
            <p className="text-sm text-muted">
              Mi práctica se basa en la claridad, la estrategia y la confianza. Acompaño a mis
              clientes con seriedad, explicando cada paso para que puedan tomar decisiones informadas.
            </p>
            <p className="text-sm text-muted">
              Trabajo con personas y empresas que valoran la transparencia, la eficiencia y la
              búsqueda de soluciones sostenibles en el tiempo.
            </p>
          </div>
          <div className="flex justify-center">
            <div className="flex h-[320px] w-full max-w-sm items-center justify-center rounded-[32px] border border-navy/10 bg-gradient-to-br from-cream via-white to-gold/20 shadow-soft">
              <span className="rounded-full bg-navy px-4 py-2 text-xs uppercase tracking-[0.2em] text-cream">
                Espacio para retrato
              </span>
            </div>
          </div>
        </Container>
      </section>

      <section>
        <Container className="space-y-10">
          <SectionHeader
            eyebrow="Valores"
            title="Una práctica guiada por principios"
            subtitle="Cada decisión se toma pensando en la confianza y la tranquilidad de mis clientes."
          />
          <div className="grid gap-6 md:grid-cols-3">
            {highlights.map((item) => (
              <Card key={item.title} className="space-y-3">
                <h3 className="font-serif text-xl text-navy">{item.title}</h3>
                <p className="text-sm text-muted">{item.description}</p>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-white/60 py-16">
        <Container className="grid gap-10 lg:grid-cols-[1fr,1fr]">
          <div className="space-y-4">
            <p className="text-xs uppercase tracking-[0.3em] text-muted">Enfoque</p>
            <h2 className="font-serif text-3xl text-navy sm:text-4xl">
              Comunicación clara y acompañamiento constante
            </h2>
            <p className="text-sm text-muted">
              Mi prioridad es que cada cliente entienda su situación legal y sepa qué esperar en
              cada etapa.
            </p>
          </div>
          <Card className="space-y-3">
            <p className="text-sm text-muted">
              “Un servicio legal premium implica estrategia y cercanía. Mi objetivo es que cada
              persona se sienta respaldada y segura.”
            </p>
            <p className="text-xs uppercase tracking-[0.2em] text-gold">Didier Mora Calvo</p>
          </Card>
        </Container>
      </section>
    </main>
  );
}
