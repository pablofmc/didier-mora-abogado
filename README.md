# Didier Mora Calvo - Sitio Web Legal

Sitio profesional para un abogado en Costa Rica construido con Next.js (App Router), TypeScript y TailwindCSS.

## Requisitos
- Node.js 18+ (recomendado)
- npm

## Instalación
```bash
npm install
```

## Desarrollo
```bash
npm run dev
```
Luego abrí `http://localhost:3000` en el navegador.

## Producción
```bash
npm run build
npm run start
```

## Estructura
- `app/` Rutas (App Router)
- `components/` Componentes reutilizables
- `app/globals.css` Estilos globales y Tailwind

## Personalización rápida
- Colores: `tailwind.config.ts`
- Tipografías: `app/layout.tsx`
- Contenido: `app/page.tsx` y páginas de `app/`
