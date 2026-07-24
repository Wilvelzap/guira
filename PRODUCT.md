# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Empresas B2B de LATAM (agencias, exportadoras, importadoras) que necesitan cobrar a
clientes en el exterior, pagar a proveedores internacionales y operar una cuenta en
dólares. Foco operativo actual en Bolivia, con cobertura declarada hacia Colombia, Perú
y México. Sin restricción adicional confirmada de tamaño de empresa, industria
específica o rol/cargo de quien opera la plataforma día a día.

## Product Purpose

Guira es una plataforma tecnológica B2B donde empresas de LATAM cobran a sus clientes
en el exterior, pagan a sus proveedores internacionales y operan una cuenta en dólares,
con trazabilidad y control por operación. Existe para resolver la fricción que estas
empresas enfrentan con infraestructura financiera extranjera que no entiende la
realidad de operar cruzando fronteras en Latinoamérica: procesos bancarios lentos,
múltiples intermediarios y poca visibilidad operativa.

## Positioning

Plataforma tecnológica, no banco ni custodio directo de fondos: la custodia real la
tiene un partner tecnológico licenciado en EE.UU. (nunca nombrado). El diferenciador
confirmado es la combinación de trazabilidad y control operativo por operación con
acompañamiento comercial humano y local en Bolivia (Guiraglobal SRL), sobre una base
institucional en EE.UU. (Guira System LLC, Delaware). El mensaje de función
(pagar/cobrar/cuenta en dólares) precede al mensaje de trazabilidad, que refuerza sin
abrir la propuesta.

## Operating Context

Sitio de marketing en Astro (Tailwind, GSAP, PostHog) con páginas: inicio, producto,
soluciones, cómo funciona, seguridad, sobre Guira, pagos-cobros internacionales, pagos
a proveedores Bolivia, FAQ, blog, demo, contacto, y legales (términos, privacidad,
cookies). CTAs actuales: "Solicitar demo" / "Contactar a un asesor" (no hay flujo de
compra self-service ni carrito). El producto en sí (la plataforma operativa) no vive en
este repo; este repo es el sitio público que la describe y capta leads.

## Capabilities and Constraints

- Recepción de pagos en USD (y declarado también EUR, MXN, COP, BRL) con datos de
  recepción a nombre corporativo del cliente.
- Pagos a proveedores internacionales vía ACH o Wire, con trazabilidad por operación.
- Cuenta operativa en dólares como forma de referirse al saldo dentro de la
  plataforma (nunca "billetera"/"wallet" para ese saldo interno).
- USDC/USDT se mencionan solo como destino de una wallet externa y propia del cliente
  (ej. Binance), nunca como forma por defecto de describir el producto.
- Cada empresa opera su propia cuenta individual, sin mezcla de fondos con otros
  clientes (hecho de arquitectura disponible como argumento de confianza).
- Guira System LLC (Delaware, EE.UU.) creó y opera la plataforma; es la dueña del
  producto. Guiraglobal SRL (Bolivia) es asesoría comercial y acompañamiento
  operativo local, sin rol de custodia ni ejecución.
- Terminología y disciplina de nombres de entidad, vocabulario financiero/regulatorio
  y estilo de escritura viven en `guia_palabras_prohibidas.md` y `CLAUDE.md`/
  `AGENTS.md`; son fuente vigente y mandan sobre cualquier documento histórico del
  repo.
- Vocabulario prohibido: lenguaje de tickets/helpdesk, lenguaje retail/B2C (carrito,
  ofertas, "usuarios" para la empresa contratante), jerga técnica fría (endpoints,
  microservicios), y cualquier frase que atribuya custodia de fondos a Guira o
  Guiraglobal SRL. No citar ASFI ni DS 5384 como autoridad de Guira.
- Pendientes legales activos en `/terminos` y `/privacidad` (retención de datos UIF,
  fórmula de costos de arbitraje ICDR, alineación de la Sección 4 con el registro PSAV,
  presentación del acuerdo del partner tecnológico en onboarding, ventana de disputa
  del cliente) no se resuelven sin aprobación explícita de Wilmar o del abogado
  interno.

## Brand Commitments

- Nombre correcto: "Guiraglobal SRL" (una sola palabra, sin espacio). Nunca "Guira
  Global SRL", "Guira SRL" ni "Soluciones Guira SRL".
- Tono: institucional, B2B, humano, transparente, maduro; funcional primero,
  trazabilidad como refuerzo. No transaccional/retail, no frío ni automatizado, no
  jerga técnica fría.
- Estilo de escritura: sin guiones largos, sin punto y coma, oraciones cortas, tono
  natural y conversacional, no corporativo rígido.
- Activos de marca disponibles en la raíz del repo: logos en SVG/PNG (horizontal,
  vertical, isotipo, versiones color y blanco).

## Evidence on Hand

Producto en etapa pre-lanzamiento: no hay testimonios, cifras de clientes ni casos de
estudio verificables todavía. Ningún trabajo futuro debe inventar o insinuar
testimonios, logos de clientes, cifras de uso o casos de éxito que no existen.

## Product Principles

- Función antes que trazabilidad: cada pieza de copy abre con pagar, cobrar o cuenta
  en dólares, y usa trazabilidad/control como refuerzo, no como gancho principal.
- Nunca atribuir custodia de fondos a Guira ni a Guiraglobal SRL, en ningún canal ni
  formato.
- Institucional y humano por encima de retail/B2C o de soporte automatizado tipo
  ticket.
- No fabricar evidencia (testimonios, cifras, casos) mientras el producto siga en
  etapa pre-lanzamiento.
- Disciplina estricta de nombres de entidad y vocabulario regulado por encima de
  preferencias estilísticas puntuales.

## Accessibility & Inclusion

Sin requisito de accesibilidad específico del producto establecido aún.
