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
- Default: "cuenta operativa en dólares". USDC/USDT solo al describir la opción de
  enviar a una wallet EXTERNA y propia del cliente (ej. Binance), ahí sí está permitido.
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
