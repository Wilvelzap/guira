# Guía de Layout Horizontal y Contenedores — Guira Empresas

Esta guía define el estándar obligatorio de ancho máximo, márgenes laterales y padding horizontal para todas las páginas y componentes del sitio web de Guira.

El objetivo es asegurar que todo el sitio se sienta como una sola plataforma continua y profesional, evitando saltos visuales de alineación entre secciones.

---

## 1. La Regla Estándar del Contenedor

Toda sección dentro de una página o componente debe usar la siguiente combinación exacta en su contenedor principal:

```html
<div class="max-w-7xl mx-auto px-6 relative z-10">
  <!-- Contenido de la sección -->
</div>
```

### Detalle de las propiedades:
- **Ancho máximo (`max-w-7xl`)**: `80rem` (1280 píxeles). Es el ancho de referencia del proyecto establecido en la sección de Preguntas frecuentes (`FaqSection.astro`).
- **Margen horizontal (`mx-auto`)**: Centra el bloque automáticamente en pantallas anchas.
- **Padding horizontal (`px-6`)**: `1.5rem` (24 píxeles) en ambos laterales en todos los tamaños de pantalla. Mantiene una respiración uniforme en móviles, tablets y escritorios.
- **Capa y posicionamiento (`relative z-10`)**: Opcional pero recomendado cuando la sección incluye fondos decorativos, mallas o resplandores luminosos.

---

## 2. Contenedor exterior vs. Ancho de lectura interior

Para bloques que requieren un ancho de lectura más estrecho (por ejemplo, formularios de contacto, títulos centrados o simuladores), no se debe achicar el contenedor principal de la sección.

La estructura correcta es usar dos niveles:

1. **Nivel 1 (Contenedor de sección)**: Siempre con `max-w-7xl mx-auto px-6` para mantener la línea de borde alineada con el resto de la página.
2. **Nivel 2 (Bloque interior)**: Se reduce el ancho solo del elemento interior usando clases de soporte (`max-w-2xl mx-auto`, `max-w-4xl mx-auto`, etc.).

### Ejemplo correcto:

```html
<!-- Sección con contenedor estándar -->
<section class="py-20 bg-slate-50">
  <div class="max-w-7xl mx-auto px-6">
    
    <!-- Encabezado con ancho de lectura cómodo -->
    <div class="text-center max-w-2xl mx-auto mb-12">
      <h2 class="text-3xl font-extrabold uppercase text-slate-900">
        Título de la sección
      </h2>
      <p class="text-slate-600 mt-4">
        Texto descriptivo con ancho controlado.
      </p>
    </div>

    <!-- Formulario o tarjeta interna -->
    <div class="max-w-4xl mx-auto">
      <!-- Elemento interactivo -->
    </div>

  </div>
</section>
```

---

## 3. Clases y valores no permitidos en el contenedor principal

Para evitar que una página parezca aislada o distinta, se prohíbe el uso de las siguientes clases en el `<div>` contenedor principal de una sección:

- **Prohibido `max-w-6xl` o `max-w-5xl` en el contenedor exterior**: Genera saltos bruscos en los márgenes laterales al navegar entre páginas.
- **Prohibido `px-4`**: Es demasiado ajustado y desalinea las tarjetas respecto a los encabezados del sitio.
- **Prohibido `sm:px-8` o `px-8`**: Ensancha el margen interior en tablets y genera una ruptura visual con `FaqSection`.
- **Prohibido `px-12` o `px-16` en contenedores de ancho completo**: Debe usarse únicamente dentro de tarjetas individuales.

---

## 4. Aplicación en Componentes Reutilizables

| Componente | Archivo | Contenedor principal |
|---|---|---|
| **Preguntas Frecuentes** | `src/components/FaqSection.astro` | `max-w-7xl mx-auto px-6 relative z-10` |
| **Cuadrícula Editorial** | `src/components/EditorialGridSection.astro` | `max-w-7xl mx-auto px-6 relative z-10` |
| **Sección Dividida** | `src/components/SplitFeatureSection.astro` | `max-w-7xl mx-auto px-6 relative z-10` |
| **Pie de página** | `src/components/Footer.astro` | `max-w-7xl mx-auto px-6` |
| **Navegación principal** | `src/components/Navbar.astro` | `max-w-7xl mx-auto px-6` |

---

## 5. Checklist para crear o modificar secciones

Antes de publicar cualquier página nueva o editar una existente, verifica los siguientes puntos:

1. ¿El elemento contenedor directo de la sección usa `max-w-7xl mx-auto px-6`?
2. ¿El padding horizontal se mantiene en `px-6` sin modificadores responsivos como `sm:px-8` que rompan la simetría?
3. ¿Si el contenido es estrecho, se redujo el ancho en un contenedor hijo y no en el padre principal?
4. ¿Los encabezados y divisores horizontales coinciden visualmente con la línea guía de `FaqSection`?
