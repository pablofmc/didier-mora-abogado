import "./globals.css";
import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap"
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap"
});

export const metadata: Metadata = {
  metadataBase: new URL("https://didiermora.cr"),
  title: {
    default: "Didier Mora Calvo | Abogado en Costa Rica",
    template: "%s | Didier Mora Calvo"
  },
  description:
    "Asesoría legal clara, estratégica y confiable. Atiendo casos con seriedad, comunicación directa y enfoque en resultados.",
  openGraph: {
    title: "Didier Mora Calvo | Abogado en Costa Rica",
    description:
      "Asesoría legal clara, estratégica y confiable. Atiendo casos con seriedad, comunicación directa y enfoque en resultados.",
    url: "https://didiermora.cr",
    siteName: "Didier Mora Calvo",
    locale: "es_CR",
    type: "website"
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${playfair.variable} ${inter.variable}`}>
      <body className="font-sans">
        <Navbar />
        {children}
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
