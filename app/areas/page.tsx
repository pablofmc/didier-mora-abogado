import type { Metadata } from "next";
import Card from "@/components/Card";
import Container from "@/components/Container";
import SectionHeader from "@/components/SectionHeader";

export const metadata: Metadata = {
  title: "Áreas de práctica",
  description:
    "Áreas de práctica legal en Costa Rica con atención profesional y cercana en San José.",
  alternates: {
    canonical: "/areas"
  },
  openGraph: {
    title: "Áreas de práctica | Didier Mora Calvo",
    description:
      "Áreas de práctica legal en Costa Rica con atención profesional y cercana en San José.",
    url: "/areas",
    type: "website",
    locale: "es_CR"
  }
};

const areas = [
  {
    title: "Derecho Penal",
    description: "Defensa técnica, acompañamiento estratégico y seguimiento cercano."
  },
  {
    title: "Familia",
    description: "Divorcios, pensiones y acuerdos con enfoque humano y firmeza legal."
  },
  {
    title: "Civil",
    description: "Contratos, cobros y conflictos civiles con gestión ordenada."
  },
  {
    title: "Laboral",
    description: "Asesoría para empleadores y trabajadores, con claridad en cada paso."
  },
  {
    title: "Tránsito",
    description: "Atención a incidentes viales, apelaciones y seguimiento administrativo."
  },
  {
    title: "Notariado",
    description: "Autenticaciones, escrituras y trámites notariales con respaldo seguro."
  }
];

export default function AreasPage() {
  return (
    <main className="space-y-16 pb-24">
      <section className="bg-white/60 py-16">
        <Container className="space-y-10">
          <SectionHeader
            eyebrow="Servicios"
            title="Áreas de práctica"
            subtitle="Atención integral adaptada a las necesidades legales de cada cliente, con enfoque en notariado."
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {areas.map((area) => (
              <Card key={area.title} className="flex flex-col gap-3">
                <h3 className="font-serif text-xl text-navy">{area.title}</h3>
                <p className="text-sm text-muted">{area.description}</p>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      <section>
        <Container className="grid gap-10 lg:grid-cols-[1.1fr,0.9fr] lg:items-center">
          <div className="space-y-4">
            <p className="text-xs uppercase tracking-[0.3em] text-muted">Metodología</p>
            <h2 className="font-serif text-3xl text-navy sm:text-4xl">
              Una estrategia legal enfocada en resultados
            </h2>
            <p className="text-sm text-muted">
              Cada caso se analiza con detalle, priorizando una ruta clara y opciones viables.
            </p>
          </div>
          <div className="rounded-3xl border border-navy/10 bg-cream/70 p-6">
            <ul className="space-y-3 text-sm text-muted">
              <li>Diagnóstico legal claro y preciso.</li>
              <li>Plan de acción con tiempos y prioridades.</li>
              <li>Comunicación constante y transparente.</li>
              <li>Trámites notariales ágiles y con seguimiento directo.</li>
            </ul>
          </div>
        </Container>
      </section>
    </main>
  );
}
