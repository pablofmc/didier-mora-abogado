import Link from "next/link";

export default function FloatingWhatsApp() {
  return (
    <Link
      href="https://wa.me/50687116249"
      aria-label="Contactar por WhatsApp"
      className="fixed bottom-4 right-4 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-gold text-navy shadow-soft transition-transform duration-200 hover:-translate-y-1 focus-ring sm:bottom-6 sm:right-6 sm:h-14 sm:w-14"
    >
      <svg
        viewBox="0 0 24 24"
        className="h-6 w-6 sm:h-7 sm:w-7"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M12.04 3.2c-4.88 0-8.84 3.97-8.84 8.86 0 1.56.41 3.08 1.2 4.42L3 21l4.68-1.24a8.8 8.8 0 0 0 4.36 1.15h.01c4.88 0 8.85-3.97 8.85-8.86S16.93 3.2 12.04 3.2zm5.1 12.08c-.22.63-1.28 1.16-1.76 1.23-.46.07-1.04.1-1.68-.1-.39-.12-.89-.29-1.55-.57-2.74-1.18-4.53-3.98-4.66-4.16-.13-.18-1.12-1.48-1.12-2.82s.7-1.99.95-2.27c.25-.28.54-.35.72-.35.18 0 .36 0 .52.01.17.01.39-.06.62.47.22.53.76 1.84.83 1.98.07.14.11.3.02.48-.08.18-.12.3-.25.46-.13.16-.27.36-.38.48-.13.14-.27.3-.12.58.15.28.68 1.11 1.46 1.8 1.01.9 1.86 1.18 2.14 1.31.28.13.45.11.62-.07.17-.18.72-.84.92-1.13.2-.28.39-.24.64-.14.26.1 1.64.77 1.92.91.28.14.47.21.54.32.07.11.07.64-.15 1.27z" />
      </svg>
    </Link>
  );
}
