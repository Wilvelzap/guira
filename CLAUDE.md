# Guira Empresas — Instrucciones para Claude Code

## Qué es Guira (una línea, para no perder el foco en ninguna sesión)

Guira es una plataforma B2B donde empresas de LATAM cobran a sus clientes en el
exterior, pagan a sus proveedores internacionales y operan una cuenta en dólares,
con trazabilidad y control por operación.

## Nombres de entidad (disciplina estricta, error recurrente en el proyecto)

- Correcto: "Guiraglobal SRL" (una sola palabra, sin espacio).
- Incorrecto, nunca usar: "Guira Global SRL", "Guira SRL", "Soluciones Guira SRL".
- Correcto: "Guira System LLC" = dueña y creadora de la plataforma.
- Correcto: "Guiraglobal SRL" = asesoría comercial local en Bolivia, sin rol de
  custodia ni ejecución.
- Si algún documento del repo usa "Guira Global SRL" con espacio, es un nombre viejo
  y descartado. Corregirlo, no repetirlo.

## Vocabulario y posicionamiento — Guira Empresas

- Nunca atribuir custodia de fondos a Guira ni a Guiraglobal SRL. Custodia = "partner
  tecnológico licenciado en EE.UU." (no nombrar a Bridge).
- Default: "cuenta operativa en dólares".
- Regla permanente (agosto 2026): prohibido mencionar activos virtuales, stablecoins,
  exchanges o billeteras (USDC, USDT, Binance, wallet, cripto, criptomoneda, blockchain,
  etc.) en cualquier página pública del sitio, incluida la opción de enviar a una wallet
  externa del cliente. Esta regla reemplaza y anula cualquier excepción anterior sobre
  ese tema en este archivo o en `guia_palabras_prohibidas.md`.
- No citar ASFI ni DS 5384 como autoridad de Guira. No implicar que Guiraglobal SRL
  ejecuta la conversión BOB↔USDT/USDC bajo su propio registro PSAV.
- Mensaje de función antes que trazabilidad: pagar/cobrar/cuenta en dólares abre,
  trazabilidad y control cierran.
- Prohibido: lenguaje de tickets/helpdesk, lenguaje retail/B2C (carrito, ofertas,
  "usuarios" para la empresa), jerga técnica fría (endpoints, microservicios).
- Ver `guia_palabras_prohibidas.md` para la lista completa y el checklist de
  publicación.

## Estilo de escritura (aplica a todo texto de Guira, no solo copy de marketing)

- No usar guiones largos.
- No usar punto y coma.
- Oraciones cortas, con puntos y comas normales.
- Tono natural y conversacional, no corporativo rígido.

## Documentos históricos del repo

- Si existe algún documento de traspaso o contexto anterior a julio de 2026 en el
  repo (por ejemplo un archivo de contexto general del proyecto), tratarlo como una
  foto histórica, no como fuente vigente. Puede contener el nombre de entidad viejo,
  vocabulario ya descartado, o el estado del producto en fase de piloto que ya cambió.
  Ante cualquier conflicto, este archivo y `guia_palabras_prohibidas.md` mandan.

## Alcance del sitio (no solo las dos páginas ya corregidas)

- Las reglas de esta sección aplican a todo guiracorp.com, no solo a `/` y a
  `/pagos-cobros-internacionales`. Páginas todavía sin auditar con este criterio:
  `/producto`, `/soluciones`, `/como-funciona`, `/seguridad`, `/sobre-guira`,
  `/pagos-proveedores-bolivia`, `/faq`, `/blog` y sus posts.
- No asumir que esas páginas ya están limpias de vocabulario prohibido o del nombre
  de entidad viejo. Auditarlas antes de dar por cerrado el trabajo de vocabulario.

## Pendientes legales activos (no resolver por cuenta propia)

Estos puntos siguen sin confirmación del abogado interno. Si el trabajo toca
`/terminos` o `/privacidad`, no fijar una respuesta nueva sobre ellos, solo señalar
que sigue pendiente:

- Período de retención de datos exigido por UIF (hoy se usa cinco años como piso
  alineado a FATF, sin confirmar).
- Fórmula de costos de arbitraje ICDR.
- Que la descripción de Guiraglobal SRL en la Sección 4 de los T&C coincida
  exactamente con su registro PSAV ante la UIF.
- Si el onboarding de la app presenta el acuerdo de usuario del partner tecnológico
  como paso de aceptación separado.
- Ventana de disputa del cliente frente al plazo de reversión del partner tecnológico.

No publicar cambios en `/terminos` o `/privacidad` sin aprobación explícita de
Wilmar o del abogado interno.

## Landings de tráfico pago (regla permanente, agosto 2026)

- Toda landing creada para tráfico pago (campañas, anuncios, utm_content) se crea
  con meta robots "noindex, nofollow" y se excluye del sitemap. No debe competir
  por indexación orgánica con las páginas comerciales del sitio.
- Prohibido afirmar en copy público que el cliente mantiene saldo o fondos en
  Guira. Guira describe función (pagar, cobrar, operar) nunca posesión. Evitar
  también en estas landings: saldo, fondos, mantener, guardar, almacenar,
  retener, disponible, custodiar, resguardar, tener dinero, dejar dinero,
  aplicado a la cuenta operativa o a cualquier cuenta del cliente.

## Regla de botones de WhatsApp del sitio (agosto 2026)

Todo enlace wa.me con mensaje precargado empieza con un código fijo entre corchetes, escrito directamente en el href. Sin JavaScript.

Formato: `[W-{INTENCION}{NUMERO}] {mensaje}`
- `PAG` = pagos a proveedores
- `COB` = cobros y recepción

El prefijo `W-` indica que la conversación se originó en el sitio web. Los anuncios Click-to-WhatsApp usan otros códigos sin `W-`.

Reglas:
1. El código va al inicio del mensaje, seguido de un espacio. Nunca al final ni en el medio.
2. Un código por mensaje. Si dos botones de páginas distintas usan el mismo mensaje, comparten el mismo código.
3. Cada mensaje nuevo pide un código nuevo correlativo. Nunca reusar un número dado de baja.
4. Enlaces sin `?text=`, como el teléfono del pie, quedan sin código.
5. Retirar y prohibir cualquier script que agregue o modifique un sufijo `[ref: ...]` en los enlaces wa.me. Esa regla queda derogada.
6. Todos los enlaces wa.me deben disparar el evento `click-whatsapp` de GTM y `whatsapp_contact_clicked` en PostHog.

### Tabla de códigos y mensajes vigentes

| Código | Intención | Mensaje | Href codificado |
|---|---|---|---|
| `W-PAG1` | Pagos a proveedores (General / Operación) | `[W-PAG1] Hola, quiero pagar a mis proveedores del exterior con Guira` | `https://wa.me/59167015106?text=%5BW-PAG1%5D%20Hola,%20quiero%20pagar%20a%20mis%20proveedores%20del%20exterior%20con%20Guira` |
| `W-PAG2` | Pagos a proveedores (Orientación) | `[W-PAG2] Hola, necesito pagar a un proveedor del exterior y quiero orientación` | `https://wa.me/59167015106?text=%5BW-PAG2%5D%20Hola,%20necesito%20pagar%20a%20un%20proveedor%20del%20exterior%20y%20quiero%20orientaci%C3%B3n` |
| `W-PAG3` | Pagos a proveedores (Respaldo documental) | `[W-PAG3] Hola, quiero conocer el respaldo documental de los pagos con Guira` | `https://wa.me/59167015106?text=%5BW-PAG3%5D%20Hola,%20quiero%20conocer%20el%20respaldo%20documental%20de%20los%20pagos%20con%20Guira` |
| `W-COB1` | Cobros y recepción (General / Recepción) | `[W-COB1] Hola, quiero recibir pagos internacionales en mi empresa con Guira` | `https://wa.me/59167015106?text=%5BW-COB1%5D%20Hola,%20quiero%20recibir%20pagos%20internacionales%20en%20mi%20empresa%20con%20Guira` |
| `W-COB2` | Cobros y recepción (Orientación / Cliente en EE.UU.) | `[W-COB2] Hola, mi cliente de Estados Unidos quiere pagarme y necesito orientación` | `https://wa.me/59167015106?text=%5BW-COB2%5D%20Hola,%20mi%20cliente%20de%20Estados%20Unidos%20quiere%20pagarme%20y%20necesito%20orientaci%C3%B3n` |
| `W-COB3` | Cobros y recepción (Orden / Flujo de recepción) | `[W-COB3] Hola, quiero ordenar la recepción de pagos internacionales de mi empresa` | `https://wa.me/59167015106?text=%5BW-COB3%5D%20Hola,%20quiero%20ordenar%20la%20recepci%C3%B3n%20de%20pagos%20internacionales%20de%20mi%20empresa` |
| `W-COB4` | Cobros y recepción (Revisión de datos) | `[W-COB4] Hola, mi cliente ya está listo para pagar desde Estados Unidos y quiero revisar los datos` | `https://wa.me/59167015106?text=%5BW-COB4%5D%20Hola,%20mi%20cliente%20ya%20est%C3%A1%20listo%20para%20pagar%20desde%20Estados%20Unidos%20y%20quiero%20revisar%20los%20datos` |

