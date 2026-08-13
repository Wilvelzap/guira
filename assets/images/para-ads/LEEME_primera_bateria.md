# Primera batería · Instrucciones para subir a Meta

## 1. Convención de nombres

`Guira_[pieza]_[variante]_[lado]_[medida]_[marca].png`

- **pieza**: A1 a A8, según el banco de copy de la serie
- **variante**: `V1` claro, `V2` oscuro, `foto` fotográfica, `generado_completo` arte íntegro generado, `alt` alternativa fuera del sistema base
- **medida**: lado en píxeles. `1080` cuadrado, `1080x1350` vertical, `1254` cuadrado de la tanda alternativa
- **marca**: `firmada` lleva guiracorp.com compuesto. `IA` requiere declaración de contenido generado por IA al subir

## 2. self_ai_disclosure

No es una propiedad del archivo ni de Drive. Es un parámetro de la API de Marketing de Meta, o una casilla en Ads Manager al crear el anuncio.

**Los seis archivos con sufijo `_IA` requieren esa declaración.** Las tres fotográficas de forma clara, porque muestran personas fotorrealistas generadas. Las tres claras se marcan por precaución, aunque no tienen personas.

Las 18 piezas `_firmada` se construyeron por código sobre fondo vectorial, salvo `foto` y `generado_completo`, que también son generadas y requieren la declaración.

Resumen de las que la requieren:

- Las seis `_IA`
- `Guira_A1_foto_1080x1350_firmada.png`
- `Guira_A2_foto_1080x1350_firmada.png`
- `Guira_A3_foto_1080x1350_firmada.png`
- `Guira_A1_generado_completo_1080x1350_firmada.png`
- `Guira_A3_generado_completo_1080x1080_firmada.png`
- `Guira_A4_generado_completo_1080x1080_firmada.png`

Las vectoriales `V1` y `V2` de A1, A2, A3, A5, A6 y A8 no llevan fotografía ni personas.

## 3. NO PUBLICAR todavía

Las seis piezas `_IA` tienen observaciones abiertas de revisión:

| Archivo | Observación |
| --- | --- |
| `Guira_A6_alt_foto_1254_IA.png` | Logo de Guira estampado en el cajón de madera y en la caja de cartón. Son versiones generadas, no el isotipo real. Además el anillo cerrado de monedas lee como cambio de divisa entre terceros países |
| `Guira_A8_alt_foto_1254_IA.png` | Logo generado en la tapa del laptop y en la caja |
| `Guira_A5_alt_foto_1254_IA.png` | Logo generado en el cajón, y el teléfono muestra un check en círculo, o sea interfaz simulada |
| `Guira_A8_alt_claro_1254_IA.png` | Los corredores quedan partidos: USD, BRL y MXN solo con flecha saliente, EUR y COP solo entrante. Comunica que a Europa y Colombia solo se cobra. No es correcto |
| Las seis | Falta la firma guiracorp.com |

## 4. Pendiente de decisión

`Guira_A5_alt_claro_1254_IA.png` usa una retícula distinta: texto arriba a ancho completo y diagrama abajo. Resuelve el problema de escala del titular de A5, que en el sistema base quedó en 50px contra 63px del resto de la serie. Está propuesto adoptar esa retícula para las ocho piezas.
