# Estilo tipográfico — referencia de `cuenta-en-dolares.astro`

Documento de referencia para replicar en otras páginas el mismo sistema tipográfico
usado en [`src/pages/cuenta-en-dolares.astro`](../src/pages/cuenta-en-dolares.astro).
Extraído directamente del código fuente de esa página, de
[`src/styles/global.css`](../src/styles/global.css) y de
[`tailwind.config.mjs`](../tailwind.config.mjs).

## 1. Fuente base

- Familia única en todo el sitio: **Inter** (Google Fonts), con fallback `sans-serif`.
  Definida en `global.css:2` y `tailwind.config.mjs:8` (`fontFamily.sans`).
- Pesos cargados desde Google Fonts: `300, 400, 500, 600, 700, 800`.
  No se carga el peso 900. Cualquier clase `font-black` (900) que aparezca en el
  código renderiza con el peso 800 más cercano disponible (el navegador no
  interpola), así que su uso es decorativo/puntual, no un peso real distinto.
- Para textos monoespaciados (IDs de operación, contadores "01·02·03", tags técnicos)
  se usa la utilidad `font-mono` de Tailwind (stack por defecto: `ui-monospace,
  SFMono-Regular, Menlo, monospace`), nunca Inter.
- `-webkit-font-smoothing: antialiased` está aplicado globalmente en `body`.

## 2. Escala de pesos (cómo se usan, no solo qué existe)

| Clase Tailwind | Peso | Dónde se usa en esta página |
|---|---|---|
| `font-medium` (500) | Texto de párrafo / cuerpo | Descripciones, subtítulos largos |
| `font-semibold` (600) | Casi no se usa en esta página | — |
| `font-bold` (700) | Kickers, badges, eyebrows, mono tags | `.section-kicker`, badges de pasos |
| `font-extrabold` (800) | Titulares (h1, h2, h3) y valores destacados | Todos los headings |
| `font-black` (900, cae a 800) | Un único caso puntual | Label "Segmentos" en sección "Para quién" |

**Regla implícita del componente:** el cuerpo de texto (párrafos) nunca baja de
`font-medium`. No hay texto en `font-normal` (400) en esta página — todo lo visible
tiene al menos peso 500. Esto es intencional: da densidad y solidez visual, evita
que el texto se vea "delgado" sobre fondos oscuros o claros.

## 3. Jerarquía tipográfica completa

### 3.1 Kicker / eyebrow (etiqueta de sección)

Clase reutilizable global `.section-kicker` (`global.css:617-623`):

```css
.section-kicker {
    letter-spacing: 0.18em;
    text-transform: uppercase;
    font-size: 0.6875rem;   /* 11px */
    font-weight: 700;
    color: #94a3b8;         /* slate-400 */
}
```

Uso típico en el componente:

```html
<p class="section-kicker text-guira-teal mb-3">El problema real</p>
<p class="section-kicker text-guira-cyan mb-3">Cómo se abre</p>
```

El color base de `.section-kicker` es slate-400, pero casi siempre se sobreescribe
con `text-guira-teal` (fondo claro) o `text-guira-cyan` (fondo oscuro) para dar
acento de marca. Siempre precede a un `<h2>` de sección, nunca aparece solo.

### 3.2 H1 (hero)

```html
<h1 class="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 leading-[1.1]">
  <span class="text-white">Cuenta en dólares</span><br />
  <span class="text-guira-cyan">para empresas</span>
  <span class="text-white"> en Bolivia</span>
</h1>
```

- Tamaño: `text-4xl` (36px) móvil → `text-6xl` (60px) desktop.
- Peso: `font-extrabold` (800), siempre.
- `tracking-tight` (letter-spacing negativo, -0.025em).
- `leading-[1.1]` — interlineado muy apretado, típico de headline grande.
- Frase con **color partido**: bloque principal en blanco, 1-2 palabras clave en
  `text-guira-cyan` para marcar el concepto central (aquí "para empresas").
  Nunca todo el h1 en color de marca.
- Sentence case, no uppercase.

### 3.3 H2 — dos variantes, contexto distinto

**Variante A — "editorial uppercase"** (la más usada, cabecera de cada sección
tipo "bloque"):

```html
<h2 class="text-3xl sm:text-4xl md:text-5xl lg:text-[2.65rem] font-extrabold uppercase tracking-tight text-slate-900 leading-[1.08]">
  Operar en dólares desde Bolivia no debería depender de un trámite distinto cada vez.
</h2>
```

- Escala responsiva a 4 puntos: `text-3xl → text-4xl → text-5xl → text-[2.65rem]`
  (el tamaño en `lg` es *menor* que en `md`, valor fijo en rem para controlar el
  ancho de línea en desktop — no es un typo, es deliberado).
- `font-extrabold uppercase tracking-tight leading-[1.08]`.
- Color: `text-slate-900` sobre fondo blanco, `text-white` sobre fondo `bg-guira-dark`.
- Redacta como frase completa con punto final, no como título corto.
- Siempre precedida por un `.section-kicker`.

**Variante B — "sentence case" sin uppercase** (usada en bloques más "producto",
con columna lateral, ej. sección "Para qué sirve"):

```html
<h2 class="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 leading-[1.1]">
  Una cuenta, las dos puntas de tu operación internacional
</h2>
```

- Mismo peso (`font-extrabold`) y `tracking-tight`, pero **sin `uppercase`** y sin
  el escalón `lg:text-[2.65rem]` (usa `lg:text-5xl` normal).
- Se usa cuando el h2 convive con un elemento gráfico (sello circular, ícono) en
  vez de ir solo en la fila de cabecera.

### 3.4 H3 (títulos de tarjeta / paso / columna)

```html
<h3 class="text-base sm:text-lg font-extrabold uppercase tracking-wider text-slate-900 mb-3 sm:mb-4 group-hover:text-guira-teal transition-colors">
  El cobro tarda
</h3>
```

- `text-base` (16px) → `text-lg` (18px) en `sm`.
- `font-extrabold uppercase tracking-wider` (más tracking que el h2, `0.05em`).
- Color base `text-slate-900` (fondo claro) / `text-white` (fondo oscuro), con
  `group-hover:text-guira-teal` o `group-hover:text-guira-cyan` como micro-interacción
  al pasar el mouse por la tarjeta contenedora (`group`).
- Nunca lleva punto final (son etiquetas cortas, 2-4 palabras).

### 3.5 Cuerpo de texto / párrafos descriptivos

```html
<p class="text-sm sm:text-base font-medium text-slate-600 leading-relaxed">...</p>
```

- `text-sm` (14px) → `text-base` (16px) en `sm`.
- `font-medium` (500) — nunca `font-normal`.
- `leading-relaxed` (1.625) para bloques cortos de 2-3 líneas.
- Color: `text-slate-600` sobre fondo blanco, `text-slate-400` sobre `bg-guira-dark`.
- Párrafos de intro más largos (hero, CTA) suben a `text-base md:text-lg` con el
  mismo `font-medium leading-relaxed`.

### 3.6 Etiquetas monoespaciadas (mono tags)

Usadas para contadores de paso y tags técnicos, siempre en `font-mono`:

```html
<span class="font-mono text-xs font-bold text-guira-cyan tracking-widest uppercase mb-2 block">
  01 · Paso inicial
</span>

<span class="font-mono text-xs text-slate-400 tracking-wider hidden sm:inline-block">
  FLUIDEZ OPERATIVA B2B
</span>
```

- `text-xs` (12px), `tracking-widest` (0.1em) o `tracking-wider` (0.05em).
- El de acento (pasos) es `font-bold text-guira-cyan uppercase`; el decorativo
  (tag suelto al margen) es más discreto: sin `font-bold`, `text-slate-400`.

### 3.7 Micro-stats (bloque "Cobra / Paga / Documenta" del hero)

Par de líneas: kicker + valor.

```html
<p class="text-xs font-bold text-slate-400 section-kicker mb-2">Cobra</p>
<p class="text-lg font-extrabold text-white">Clientes del exterior</p>
```

- La etiqueta reutiliza `.section-kicker` (uppercase, tracking 0.18em, 11px, 700).
- El valor: `text-lg font-extrabold`, color blanco por defecto, `text-guira-cyan`
  para el dato que se quiere destacar como diferencial (aquí "Documenta").

### 3.8 Botones (`KineticButton` / `.btn-29`)

Definidos en `global.css:1102-1290`, no en Tailwind inline:

- `font-weight: 800`, `text-transform: uppercase`, `letter-spacing: 0.09em`.
- Tamaños (`size="sm|md|lg"`) controlan `font-size` y `padding`, no el peso:
  - `sm` → `font-size: 0.75rem`
  - `md` → `font-size: 0.8125rem`
  - `lg` → `font-size: 0.875rem`
- El texto del botón siempre va envuelto en `<span class="text">`, nunca texto
  suelto directo (lo requiere la animación de "slide" del hover).

### 3.9 Detalles finos (mockup, sello circular, badges)

- ID de operación (mockup hero): `font-family: ui-monospace...` explícito en CSS
  (`.account-hero-id`, `global.css:299-305`), `font-size: 0.8rem`, `font-weight: 700`.
- Texto curvo del sello circular: `text-[10px] uppercase tracking-[0.22em] font-extrabold`.
- Badge "B2B LATAM" / label "Segmentos": combina `italic` + `font-black` +
  `tracking-tighter` para el texto grande, y `not-italic font-bold tracking-widest
  uppercase` para el chip pequeño dentro — es la única mezcla itálica de toda la
  página, resérvala para acentos puntuales tipo sello/badge, no para titulares.

## 4. Reglas de color por tipo de fondo

| Fondo de sección | Kicker | H2/H3 | Body | Acento |
|---|---|---|---|---|
| `bg-white` (claro) | `text-guira-teal` | `text-slate-900` | `text-slate-600` | `guira-teal` (#0051ff) |
| `bg-guira-dark` (oscuro, `#020617`) | `text-guira-cyan` | `text-white` | `text-slate-400` | `guira-cyan` (#00d8ff) |

Patrón fijo: **secciones claras usan teal como acento, secciones oscuras usan cyan**.
No se mezclan (nunca `text-guira-cyan` sobre fondo blanco como acento principal de
kicker, ni `text-guira-teal` sobre fondo oscuro). Las secciones alternan
claro/oscuro/claro/oscuro a lo largo de la página (ver los `<section>` de
`cuenta-en-dolares.astro`).

## 5. Tracking (letter-spacing) — resumen por nivel

| Elemento | Utilidad Tailwind | Valor |
|---|---|---|
| H1 | `tracking-tight` | -0.025em |
| H2 (ambas variantes) | `tracking-tight` | -0.025em |
| H3 / título de tarjeta | `tracking-wider` | 0.05em |
| `.section-kicker` | (custom CSS) | 0.18em |
| Mono tags de paso | `tracking-widest` | 0.1em |
| Botones (`.btn-29`) | (custom CSS) | 0.09em |
| Sello circular (texto curvo) | `tracking-[0.22em]` | 0.22em |
| "Segmentos" (label grande) | `tracking-tighter` | -0.05em |

Regla general: **a mayor tamaño de fuente, tracking más negativo (apretado);
a menor tamaño y mayúsculas, tracking más positivo (abierto)**. Los kickers y
tags mono siempre van en mayúsculas + tracking positivo; los headings grandes
siempre van en tracking negativo.

## 6. Checklist para replicar este estilo en otra página/sección

1. Usa siempre `font-medium` como piso para cualquier texto de cuerpo — nunca
   `font-normal`.
2. Todo heading (`h1`, `h2`, `h3`) va en `font-extrabold`. No hay headings en
   `font-bold` en este sistema.
3. Antepón un `.section-kicker` (con `text-guira-teal` o `text-guira-cyan` según
   el fondo) a cada `<h2>` de sección.
4. Decide entre H2 variante A (`uppercase`, escala `3xl→4xl→5xl→[2.65rem]`, para
   secciones tipo declaración/statement) o variante B (sentence case, `3xl→4xl→5xl`,
   para secciones con elemento gráfico acompañante). No mezcles ambas en el mismo
   nivel de una misma página.
5. H3 de tarjeta: `text-base sm:text-lg font-extrabold uppercase tracking-wider`
   + `group-hover:text-guira-teal` (fondo claro) o `group-hover:text-guira-cyan`
   (fondo oscuro), envuelto en un contenedor con clase `group`.
6. Cuerpo de tarjeta: `text-sm sm:text-base font-medium leading-relaxed`, color
   `text-slate-600` (claro) o `text-slate-400` (oscuro).
7. Si necesitas un contador de paso o tag técnico, usa `font-mono` — nunca Inter
   para eso. Combínalo con `tracking-widest uppercase`.
8. Respeta la alternancia de fondos claro/oscuro sección por sección, y con ella
   la alternancia teal/cyan de acento.
9. Para botones, usa siempre el componente `KineticButton` (clases `.btn-29-*`)
   en vez de recrear estilos de botón sueltos — ya trae el peso 800, uppercase y
   tracking 0.09em correctos.
10. Evita `italic` y `font-black` salvo en badges/sellos puntuales de marca; no
    son parte del vocabulario tipográfico de titulares o cuerpo.
