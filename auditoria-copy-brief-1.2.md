# Auditoría de copy — guiracorp.com vs. Brief v1.2

Fecha del audit: 24 de julio de 2026
Base: Brief v1.2 (23 julio 2026) y Guía de Tono y Palabras Prohibidas v2.0 (18 julio 2026)
Alcance: todas las páginas del sitio y los 17 posts de blog. Se excluyen `/terminos` y `/privacidad` por instrucción expresa (tema legal pendiente).

## Por qué esto importa ahora

El brief v1.2 cambia dos cosas de fondo que el sitio todavía no refleja:

1. Guira ya no es "una cuenta en dólares". Son cinco corredores activos: USD, EUR, MXN, COP, BRL. El sitio, en casi todas sus páginas, sigue hablando solo de USD.
2. El orden de mensaje se confirma: función primero (pagar, cobrar, cuenta multi-moneda), trazabilidad como cierre. Varias páginas y casi todo el blog siguen abriendo con trazabilidad o cumplimiento.

## Hallazgos graves (resolver primero)

1. **JSON-LD `"@type": "FinancialService"`** en `contacto.astro` y `soluciones.astro`. Contradice el disclaimer del propio sitio de que Guira no es una entidad financiera. Es dato estructurado que leen buscadores y agregadores, no solo copy visible. Corregir el schema type, no solo el texto.
2. **"Representante oficial" / "representa oficialmente"** en `guiraglobal.astro`, repetido en title, keywords, schema, badge, hero y dos secciones más. El brief define a Guiraglobal SRL como equipo de **asesoría comercial y acompañamiento operativo**, no como representante. La propia meta description de esa página ya usa el lenguaje correcto, así que la página se contradice a sí misma. Es la corrección de mayor prioridad de todo el audit porque toca directamente la disciplina de entidades de la Sección 1 del brief.
3. **Tesis invertida de pilares** en el post `de-transferir-dinero-a-gestionar-operaciones-pagos-internacionales-empresas.md`. La tabla "Antes/Ahora" del artículo argumenta que mover fondos es el enfoque viejo y que gestionar/visibilizar es el enfoque superior. Eso invierte el orden confirmado por el brief (función abre, trazabilidad refuerza). Requiere reescritura de esa sección, no un ajuste de palabras.

## Falta la frase institucional Guiraglobal SRL / Guira System LLC

El brief pide que esta frase aparezca en páginas visibles, no solo en el footer:

> "Guira es una plataforma tecnológica creada y operada por Guira System LLC (Delaware, EE.UU.). En Bolivia, Guiraglobal SRL es el equipo de asesoría comercial que acompaña a las empresas en el uso de la plataforma."

Falta en: `index.astro`, `producto.astro`, `soluciones.astro`, `como-funciona.astro`, `sobre-guira.astro` (el caso más grave, es la página institucional "Quiénes somos" y no nombra a ninguna de las dos entidades) y en las tres variantes del `Footer.astro` (solo hay una línea corta de copyright).

Sí está bien resuelto en `pagos-cobros-internacionales.astro` y en el bloque "Aviso importante para Bolivia" de `pagos-proveedores-bolivia.astro`. Usar esos dos como plantilla para el resto.

## Mensaje desactualizado: solo USD, sin multi-moneda

Afecta título, meta description, schema o cuerpo de: `index`, `producto`, `soluciones`, `como-funciona`, `sobre-guira`, `pagos-proveedores-bolivia`, `faq`, `contacto`, `demo`, `Footer`, `DemoForm`, y las plantillas `blog/index` y `blog/[slug]` (esta última se repite automáticamente en los 17 posts). A nivel de contenido de post, 6 de 17 lo tocan de forma directa, más el bloque de cierre reutilizado que aparece en 13+ posts:

> "Guira es una plataforma orientada a la gestión, trazabilidad y administración de operaciones internacionales para empresas"

Esa línea de cierre define a Guira por trazabilidad, sin mencionar función ni multi-moneda. Al repetirse en tantos posts, es el cambio de mayor apalancamiento del audit: un solo ajuste al snippet/plantilla de cierre corrige la mayoría de los posts a la vez.

Statement maestro a usar como reemplazo general (Sección 7 del brief):

> "Guira es la plataforma donde una PYME boliviana paga a sus proveedores, cobra de sus clientes y opera cuentas en la moneda que necesite en el exterior — dólares, euros, pesos mexicanos, pesos colombianos o reales — con la trazabilidad documental que su contador y su auditor necesitan en cada operación."

`pagos-proveedores-bolivia.astro` tiene además un caso particular: menciona "proveedores en USA, Europa o Asia" mientras el resto de la página solo ofrece USD. Recomendado quitar "Asia" — el corredor CNY sigue en "Próximamente" y no debe insinuarse cobertura.

## Violaciones de estilo (guiones largos y punto y coma)

La regla del CLAUDE.md del repo es explícita: sin guiones largos, sin punto y coma, oraciones cortas. Se encontraron en al menos 11 archivos:

- Guiones largos: `producto.astro`, `soluciones.astro`, JSON-LD de `pagos-proveedores-bolivia.astro`, y los posts `pagos-proveedores-internacionales-desde-bolivia.md`, `validacion-b2b-como-verificar-empresas-extranjeras.md` y `wire-vs-ach-diferencias-empresas-bolivianas.md` (el peor caso, 4 guiones largos más rangos con en dash).
- Punto y coma: `pagos-cobros-internacionales.astro` (2 casos en la FAQ), `sobre-guira.astro`, `faq.astro`, y los posts `como-cobrar-clientes-estados-unidos-desde-bolivia.md` (2 casos), `desafios-recibir-pagos-internacionales-bolivia.md` y `wire-vs-ach-diferencias-empresas-bolivianas.md`.

## Jerga técnica fría todavía presente

El propio brief ya señalaba estos términos como candidatos a simplificar, y siguen apareciendo: "Balance Operativo Digital" e "Capa de Orquestación" (`index.astro`), "Enrutamiento operativo" / "Enrutamiento de flujos" (`producto.astro`, `como-funciona.astro`, `Footer.astro`), "Balance operativo compartido entre entidades" (`soluciones.astro`), "rieles fiduciarios tradicionales" / "plataformas fiduciarias bancarias" (`faq.astro`).

## Otros hallazgos menores

- **Tarjeta corporativa**: mencionada en `pagos-proveedores-internacionales-desde-bolivia.md`, pero como contexto de mercado de terceros, no como oferta de Guira. Vale aclarar explícitamente que no es un producto propio para evitar lectura ambigua.
- **Segregación de fondos**: el argumento "cada empresa opera su propia cuenta, sin fondos compartidos con otras empresas" está disponible en el brief pero no se usa en ningún lado. Buen candidato para `seguridad.astro` y el `Footer`.
- **Vocabulario liberado bien usado**: no se encontraron casos de evitar "cuenta operativa" o "cuenta virtual" de forma forzada. Bien.
- **Sin hallazgos graves de vocabulario prohibido histórico**: ninguna mención de China/CNY, del nombre del proveedor de custodia, ni de ASFI/DS 5384 como autoridad en ningún archivo, incluido el post dedicado justamente al DS 5384. Esa disciplina sí se mantuvo.
- `contacto.astro` usa "soporte@guiracorp.com" y "soporte corporativo guira" en keywords, un poco cerca del vocabulario de helpdesk que el brief pide evitar.

## Priorización sugerida

1. Corregir `guiraglobal.astro` (rol de Guiraglobal SRL) y el JSON-LD `FinancialService` en `contacto.astro` y `soluciones.astro`. Son los dos hallazgos con más riesgo regulatorio/de coherencia.
2. Actualizar el snippet de cierre del blog (afecta 13+ posts de una vez) y el bloque reutilizado de `blog/[slug].astro`.
3. Reescribir la sección de posicionamiento y pilares en `index.astro`, `producto.astro`, `soluciones.astro`, `como-funciona.astro` con el statement maestro multi-moneda y el orden de pilares confirmado.
4. Agregar la frase institucional Guiraglobal SRL / Guira System LLC a `sobre-guira.astro` y al `Footer.astro` (impacto global al ser componente compartido).
5. Reescribir la tesis del post `de-transferir-dinero-a-gestionar-operaciones...`.
6. Pasada de estilo (guiones largos, punto y coma) en los 11 archivos listados.
7. Limpieza de jerga técnica fría y ajustes menores (tarjeta corporativa, "Asia", "soporte").
