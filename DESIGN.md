---
name: Guira Empresas
description: Plataforma tecnológica B2B para pagos internacionales de empresas LATAM
colors:
  guira-teal: "#0051ff"
  guira-cyan: "#00d8ff"
  guira-neon: "#00f6ff"
  guira-navy: "#0B1120"
  guira-petrol: "#0F172A"
  guira-dark: "#020617"
  slate-900: "#0f172a"
  slate-800: "#1e293b"
  slate-700: "#334155"
  slate-600: "#475569"
  slate-500: "#64748b"
  slate-400: "#94a3b8"
  slate-200: "#e2e8f0"
  slate-100: "#f1f5f9"
  slate-50: "#f8fafc"
  surface-white: "#ffffff"
typography:
  display:
    fontFamily: "Inter, sans-serif"
    fontWeight: 800
    lineHeight: 1.2
    letterSpacing: "-0.01em"
  headline:
    fontFamily: "Inter, sans-serif"
    fontWeight: 700
    lineHeight: 1.3
  body:
    fontFamily: "Inter, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "Inter, sans-serif"
    fontSize: "0.6875rem"
    fontWeight: 700
    letterSpacing: "0.18em"
rounded:
  sm: "8px"
  md: "12px"
  lg: "16px"
  xl: "24px"
  full: "9999px"
spacing:
  sm: "8px"
  md: "16px"
  lg: "24px"
  xl: "40px"
components:
  button-primary:
    backgroundColor: "{colors.slate-900}"
    textColor: "{colors.surface-white}"
    rounded: "{rounded.md}"
    padding: "14px 32px"
  button-primary-hover:
    backgroundColor: "{colors.slate-800}"
  button-accent:
    backgroundColor: "{colors.guira-teal}"
    textColor: "{colors.surface-white}"
    rounded: "{rounded.lg}"
    padding: "20px 40px"
  button-secondary:
    backgroundColor: "{colors.surface-white}"
    textColor: "{colors.slate-700}"
    rounded: "{rounded.md}"
    padding: "14px 32px"
  card-primary:
    backgroundColor: "{colors.surface-white}"
    rounded: "{rounded.xl}"
    padding: "40px"
---

# Design System: Guira Empresas

## Overview

**Creative North Star: "The Institutional Control Panel"**

Guira Empresas se lee como el panel de control de una institución financiera seria que, en los momentos que importan, deja ver su capa de energía tecnológica. La base del sitio es diurna e institucional: blanco dominante, texto en slate oscuro, tarjetas limpias con sombras suaves y bordes casi imperceptibles. Sobre esa base, un solo acento eléctrico (azul `#0051ff`, nombrado internamente "teal" aunque su hue real es azul) marca cada punto de decisión: CTAs, estados activos de navegación, bordes de hover, glows. El sistema no imita un dashboard frío de SaaS genérico ni un fintech neón; es más cercano a un banco corporativo moderno que ha invertido en diseño, con un footer casi negro (`#020617`) que actúa como la "sala de máquinas" donde la energía del acento se concentra visiblemente.

Cyan (`#00d8ff`) y neon (`#00f6ff`) existen en la paleta pero se usan con moderación, como brillo decorativo (gradientes de texto, orbes desenfocados, glows de fondo), nunca como color de acción. La jerarquía cromática es deliberadamente restringida: un acento hace todo el trabajo de "esto importa", y el resto de la interfaz se mantiene en blanco y slate para que ese acento no compita consigo mismo.

Motion es sutil y funcional: reveals con desplazamiento y fade al hacer scroll, hover con elevación de 1–2px, glass blur en badges y navbar. Nada de movimiento decorativo que no refuerce jerarquía o estado.

**Key Characteristics:**
- Base diurna institucional (blanco, slate) con un único acento eléctrico que carga el significado de acción.
- Footer casi negro como contraparte oscura deliberada, no como tema alternativo.
- Sombras suaves y difusas, nunca elevación dura tipo Material.
- Cyan/neon estrictamente decorativos y de baja frecuencia.
- Glassmorphism moderado (navbar, badges) como señal de "capa tecnológica" sin volverse un HUD futurista.

## Colors

Paleta restringida y jerárquica: blanco y slate cargan el 90%+ de cada pantalla; el acento azul aparece donde hay una decisión que tomar.

### Primary
- **Guira Blue** (`#0051ff`, token `guira-teal`): el único color de acción del sistema. CTAs de acento, estados activos de nav, bordes de hover en tarjetas, glows, subrayados de enlaces en contenido de blog. Pese al nombre interno "teal", su hue real es azul eléctrico, no verde azulado; no reintroducir un verde-azulado real bajo el mismo token.

### Secondary
- **Signal Cyan** (`#00d8ff`, token `guira-cyan`) y **Signal Neon** (`#00f6ff`, token `guira-neon`): brillo decorativo de baja frecuencia. Gradientes de texto (`.text-gradient-accent`), orbes desenfocados (`.fintech-orb`), acentos de fondo. Nunca portan una acción por sí solos; siempre acompañan al azul primario o aparecen en superficies puramente decorativas.

### Neutral
- **Surface White** (`#ffffff`): fondo dominante de todas las páginas de contenido.
- **Slate 50–100** (`#f8fafc`, `#f1f5f9`): fondos de sección alternos, fondos de tarjeta secundaria, tracks de scrollbar.
- **Slate 200** (`#e2e8f0`): bordes por defecto de tarjetas, inputs y divisores.
- **Slate 400–600** (`#94a3b8`–`#475569`): texto secundario, kickers, iconografía inactiva.
- **Slate 900 / Petrol** (`#0f172a`): texto primario sobre fondo blanco; también fondo de botones primarios y bloques de código.
- **Guira Navy / Dark** (`#0B1120`, `#020617`): fondos oscuros dedicados (footer `rich-dark`, bloques CTA oscuros). No se usan como texto.

### Named Rules
**The One Accent Rule.** Solo el azul primario (`#0051ff`) puede portar una acción (botón, link, estado activo). Cyan y neon decoran; nunca sustituyen al azul como color de CTA.

## Typography

**Display/Body Font:** Inter (con `sans-serif` como fallback). Una sola familia tipográfica en todo el sistema; la jerarquía se construye con peso y tamaño, no con pares de fuentes.

**Character:** Inter en pesos altos (700–800) para titulares y CTAs transmite precisión institucional; el mismo Inter en 400–500 para cuerpo mantiene legibilidad neutra sin perder calidez.

### Hierarchy
- **Display** (extrabold/800, `text-3xl` a `text-5xl` según viewport, line-height 1.2): H1 de hero y títulos de sección principales.
- **Headline** (bold/700, `text-2xl`–`text-3xl`): subtítulos de sección, títulos de tarjeta destacada.
- **Body** (regular/400–medium/500, `1rem`–`1.0625rem`, line-height 1.6–1.8): párrafos de producto y contenido de blog (máx. ~72ch en `.prose-guira`).
- **Label** (bold/700, `0.6875rem`, letter-spacing `0.18em`, uppercase): kickers de sección (`.section-kicker`), badges, etiquetas de tabla.

## Layout

Contenedor centrado `max-w-7xl` (contenido largo como blog usa `max-w-4xl`) con padding horizontal `px-6`. Secciones se apilan verticalmente (`data-stack-section`) con generoso padding vertical (`py-20`–`py-24`). Grids responsivos de 1 columna en mobile a 2–4 en desktop para tarjetas de features y stats. Densidad media: aire suficiente entre secciones para que el acento azul respire, sin volverse un sitio "vacío".

## Elevation & Depth

Elevación suave y ambiental: el sistema usa sombras difusas y de baja intensidad para reforzar jerarquía y estado hover, no para simular placas físicas separadas de la superficie. `.premium-card` combina una sombra de contacto casi imperceptible (`0 1px 3px`) con un halo ambiental amplio (`0 8px 32px -8px`) que se intensifica y tiñe de azul al hover. Nada usa sombras duras u ofsets grandes tipo Material elevation.

### Shadow Vocabulary
- **Card rest** (`0 1px 3px rgba(15,23,42,0.06), 0 8px 32px -8px rgba(15,23,42,0.10)`): estado por defecto de tarjetas premium.
- **Card hover / accent glow** (`0 1px 3px rgba(15,23,42,0.06), 0 16px 48px -12px rgba(0,81,255,0.14)`): hover de tarjeta, la sombra se tiñe del azul primario y se expande.
- **Button primary** (`0 4px 16px rgba(15,23,42,0.20)` en reposo, `0 8px 24px rgba(15,23,42,0.24)` en hover): eleva el CTA principal sin volverlo flotante.
- **Badge / glass** (`0 2px 16px rgba(0,81,255,0.08)`): sombra mínima bajo badges con blur.

### Named Rules
**The Ambient Tint Rule.** Cuando una sombra se intensifica en hover, se tiñe del azul primario (`rgba(0,81,255,…)`) en vez de simplemente oscurecerse; así el hover comunica "esto es interactivo" con el mismo acento que carga las acciones.

## Shapes

Esquinas generosamente redondeadas y consistentes: botones en `8px`–`16px` (`rounded-lg`/`rounded-xl`), tarjetas e íconos contenedores en `16px`–`24px` (`rounded-2xl`/`rounded-3xl`), badges y chips en `9999px` (full pill). Bordes finos de 1px en slate-200 o blanco translúcido delimitan tarjetas y badges en vez de sombras duras. Sin esquinas rectas ni clip-paths angulares en ningún componente observado.

## Components

### Buttons
- **Shape:** `rounded-lg` (8px) en navegación y CTAs de tamaño estándar; `rounded-xl`/`rounded-2xl` (12–16px) en CTAs grandes de hero/cierre de página.
- **Primary (dark):** fondo `slate-900`, texto blanco, peso 700, sombra `0 4px 16px rgba(15,23,42,0.20)`. Usado como el CTA de conversión por defecto ("Solicitar Demo").
- **Accent (blue):** fondo `guira-teal` (`#0051ff`), texto blanco, sombra teñida de azul. Usado en CTAs de cierre sobre fondo oscuro o hero.
- **Secondary/Ghost:** fondo blanco, borde `slate-200`, texto `slate-700`. Usado para acciones secundarias ("Ingresar a Plataforma").
- **Hover / Focus:** todos los botones elevan `translateY(-2px)` al hover y comprimen ligeramente (`scale(0.97)`) al active; transición 0.15–0.2s.

### Cards / Containers
- **Corner Style:** `rounded-2xl`–`rounded-3xl` (16–24px).
- **Background:** blanco sobre fondo de sección slate-50, o slate-50 sobre fondo blanco (alternancia de contraste sutil).
- **Shadow Strategy:** ver Elevation & Depth; ambient tint al hover.
- **Border:** 1px `slate-200` en reposo, se tiñe de azul (`rgba(0,81,255,0.20–0.22)`) al hover.
- **Internal Padding:** `24px`–`40px` (`p-6` a `p-10`).

### Inputs / Fields
- **Style:** fondo blanco, borde slate por defecto.
- **Focus:** borde sólido `guira-teal` (`#0051ff`) más halo `0 0 0 3px rgba(0,81,255,0.10)`. Sin excepciones observadas: todo focus state usa este mismo azul.

### Navigation
- **Style:** navbar fija translúcida con blur (`glass-panel`), fondo `white/80`. Enlaces en `slate-600`, activo/hover en `guira-teal` (peso 700 cuando activo). Excepción: la página `/producto` usa un segundo acento (`guira-emerald`) para su propio estado activo de nav, pero ese token no está definido en `tailwind.config`; ver Do's and Don'ts.
- **Mobile:** menú desplegable a pantalla completa bajo el navbar, mismos estilos de enlace en tamaño mayor.

### Badges / Chips
- **Style:** pill (`rounded-full`), fondo blanco translúcido con blur o `guira-teal` al 6–14% de opacidad, borde a juego, texto en azul o slate-900.

## Do's and Don'ts

### Do:
- **Do** usar `guira-teal` (`#0051ff`) como el único color que porta una acción o estado activo (The One Accent Rule).
- **Do** teñir de azul primario las sombras que se intensifican al hover, no solo oscurecerlas (The Ambient Tint Rule).
- **Do** mantener Inter como única familia tipográfica; construir jerarquía con peso y tamaño.
- **Do** usar `guira-navy`/`guira-dark` solo como fondos oscuros dedicados (footer, bloques CTA oscuros), nunca como color de texto sobre fondo claro.

### Don't:
- **Don't** promover cyan o neon a color de botón, link o estado activo; son estrictamente decorativos y de baja frecuencia.
- **Don't** introducir sombras duras u ofsets grandes tipo Material; toda elevación es difusa y ambiental.
- **Don't** usar esquinas rectas o angulares; el sistema es consistentemente redondeado (8px mínimo).
- **Don't** reutilizar el token `guira-emerald` sin definirlo primero en `tailwind.config.js`/`.mjs`. Existe una referencia sin declarar en `Navbar.astro` para el estado activo de `/producto`; es una inconsistencia heredada, no un segundo acento intencional. Resolverla (definir el color o quitar la referencia) antes de expandir su uso.
