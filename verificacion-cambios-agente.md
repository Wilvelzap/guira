# Verificación de los cambios reportados (rama `new_page_guira`)

Revisé el código real, no solo el resumen del agente. El resumen tiene aciertos reales, pero también hallazgos marcados como resueltos que en el código siguen sin corregir. Detalle abajo, con evidencia.

## Confirmado como corregido

- JSON-LD `FinancialService` → ahora `Organization` (contacto.astro) y `Service` (soluciones.astro).
- `guiraglobal.astro`: sin rastro de "representante oficial" en el cuerpo de la página, reemplazado por "asesoría comercial y acompañamiento operativo".
- Frase institucional Guira System LLC / Guiraglobal SRL agregada en `sobre-guira.astro` y en las 3 variantes de `Footer.astro`.
- Mención de "Asia" eliminada de `pagos-proveedores-bolivia.astro`.
- Snippet de cierre del blog actualizado al statement multi-moneda, confirmado en 2 posts de muestra.
- `index.astro` sí incorpora las 5 monedas (EUR, MXN, COP, BRL más sus nombres en texto).
- `soluciones.astro`: title y meta description actualizados a "Multi-moneda" / "la moneda que necesites".
- "Capa de Orquestación" ya no aparece en el código.

## Marcado como resuelto pero sigue sin corregir

1. **La misma inconsistencia de "representante" persiste, solo que en otro texto.** El reporte dice que se corrigió el rol de Guiraglobal SRL, pero la línea de copyright "Representado en Bolivia por Guiraglobal SRL" sigue igual en las 3 variantes de `Footer.astro` y en `contacto.astro`, `cookies.astro`, `demo.astro`, `pagos-cobros-internacionales.astro` y `seguridad.astro`. Es el mismo problema de fondo (Guiraglobal SRL descrito como representante, no como asesor) repetido en el tagline que aparece en todas las páginas.

2. **`producto.astro` no tiene el pase multi-moneda que el reporte afirma.** Solo el `name`/`description` del JSON-LD dice "multi-moneda". El cuerpo visible sigue usando "recibir USD" como único ejemplo concreto, sin mencionar EUR/MXN/COP/BRL en ningún punto del texto.

3. **`como-funciona.astro` sigue con la meta description sin corregir**: literalmente dice "recepción en USD, validación KYB, documentación, compliance..." Solo aparece "reales" una vez en toda la página, no es un pase real de multi-moneda.

4. **"Enrutamiento operativo" / "Enrutamiento de flujos" sigue en el código**, incluyendo textualmente la misma línea que el reporte dice haber cambiado: `producto.astro` línea 672 ("Simula el enrutamiento operativo"), más 2 apariciones en `index.astro` y una en el nuevo componente `ProductExplorer.astro`.

5. **"Rieles fiduciarios" no se simplificó en `faq.astro`.** La frase "plataformas fiduciarias bancarias" sigue textual en esa página, en la misma oración que además todavía tiene el punto y coma original.

6. **La pasada de estilo (guiones largos / punto y coma) quedó incompleta.** Quedan puntos y coma reales, en las mismas oraciones que ya estaban señaladas en la auditoría original, en: `pagos-cobros-internacionales.astro` (FAQ, 2 casos), `sobre-guira.astro`, `faq.astro`, y en los posts `como-cobrar-clientes-estados-unidos-desde-bolivia.md`, `desafios-recibir-pagos-internacionales-bolivia.md`, `pagos-proveedores-internacionales-desde-bolivia.md` y `wire-vs-ach-diferencias-empresas-bolivianas.md`. Los guiones largos que quedan en el repo están solo dentro de comentarios HTML para desarrolladores, esos sí están bien (no son texto visible).

7. Como nota menor no reportada: `sobre-guira.astro` conserva la palabra en inglés "reality" sin traducir, ya señalada en la auditoría original.

No re-ejecuté `npm run build` yo mismo, así que no puedo confirmar ni contradecir esa parte del reporte, solo reviso el código fuente.

## Qué recomiendo

No es necesario repetir todo el trabajo. Es un segundo pase corto y dirigido, sobre una lista concreta de 7 puntos (los de arriba), no una nueva ronda completa de auditoría.
