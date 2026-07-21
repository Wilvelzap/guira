# Guía de Tono y Palabras Prohibidas — Guira Empresas (v2.0)

> Reemplaza a `guia_palabras_prohibidas.md` (v1.0). Fusiona esa guía con las reglas de vocabulario financiero/regulatorio definidas para la web de guiracorp.com.
> Fecha de esta versión: 18 de julio de 2026.
> Uso: referencia obligatoria antes de generar o editar cualquier copy público de la plataforma o la web.

---

## 1. Terminología financiera y de custodia (la sección más sensible — riesgo regulatorio real)

### 1.1 Quién es dueño de qué

- **Guira System LLC** (Delaware, EE.UU.) es la empresa que **creó y opera** la plataforma. Es la dueña del producto.
- **Guiraglobal SRL** (Bolivia) es el equipo de **asesoría comercial y acompañamiento operativo** para empresas que usan la plataforma en Bolivia. No es dueña de la plataforma, no la opera, no tiene otra función regulatoria.
- Frase de referencia para usar en páginas visibles (no solo en el footer):
  > "Guira es una plataforma tecnológica creada y operada por Guira System LLC (Delaware, EE.UU.). En Bolivia, Guiraglobal SRL es el equipo de asesoría comercial que acompaña a las empresas en el uso de la plataforma."

### 1.2 Custodia de fondos — nunca atribuida a Guira

| Nunca decir | Decir en su lugar | Por qué |
|---|---|---|
| "Tu cuenta operativa Guira" / "Guira resguarda tus fondos" | "Tu cuenta operativa en dólares" | Implica que Guira custodia el dinero. La custodia real la tiene el partner tecnológico licenciado en EE.UU., nunca Guira System LLC ni Guiraglobal SRL |
| "Billetera"/"wallet" referida al saldo *dentro* de Guira | "Cuenta operativa en dólares" / "saldo operativo" | Mismo motivo — implica custodia propia |
| "Billetera"/"wallet" referida a una wallet **externa y propia del cliente** (ej. en Binance) | Sin cambios — es correcto decir "tu propia billetera" | Aquí "billetera" describe un destino fuera de Guira, no algo que Guira resguarda. El calificativo "propia" es lo que lo vuelve seguro |
| Nombrar al partner tecnológico por su nombre (Bridge u otros) en cualquier canal público | "Partner tecnológico licenciado en EE.UU." / "infraestructura financiera regulada" | Confidencialidad comercial y poder de negociación |

### 1.3 USDC / USDT — cuándo sí nombrarlos

- **No están prohibidos como palabra.** El problema nunca fue el nombre del activo, sino a quién se le atribuye la custodia.
- Úsalos quirúrgicamente: como opción específica cuando el cliente elige mover su saldo a una wallet externa propia (ej. "Envía tu saldo a tu wallet en USDC o USDT, en Binance u otro exchange de tu preferencia"). Es información real y de uso común en Bolivia — no hay que ocultarla ahí.
- No los uses como la forma **por defecto** de describir el producto. El default siempre es "cuenta operativa en dólares" — es lo que la mayoría de las empresas usa y entiende más rápido.

### 1.4 Segregación de fondos — argumento de confianza disponible y sin usar

- Cada empresa opera su propia cuenta individual, sin mezclarse con la de otros clientes. Esto es un hecho verificable de la arquitectura (una wallet por cliente, nunca una wallet conjunta) y refuerza "control" sin tocar vocabulario prohibido.
- Frase sugerida: "Cada empresa opera su propia cuenta, sin fondos compartidos con otras empresas."

### 1.5 Registros y autoridades — no citar hasta validación legal

- No mencionar ASFI ni el Decreto Supremo 5384 como autoridad de Guira o Guiraglobal SRL en copy público, hasta confirmación del abogado interno.
- No dar a entender que Guiraglobal SRL ejecuta la conversión BOB↔USDT/USDC bajo su propio registro PSAV. Esa ruta sigue pasando por PSAV externos aliados, no por el registro propio de Guiraglobal SRL.
- Lenguaje permitido: "a través de un PSAV registrado" / "con aliados registrados bajo la normativa boliviana vigente", en términos generales.

### 1.6 Vocabulario regulado — tabla heredada del brief original (sin cambios)

| Nunca usar | Usar en su lugar |
|---|---|
| Banco, casa de cambio, remesadora | Plataforma tecnológica de pagos internacionales |
| Entidad financiera, fintech (para la SRL) | Plataforma operativa / empresa de tecnología |
| Depósito | Transferencia / instrucción de pago |
| Intereses, rendimientos | (no usar) |
| Custodia de fondos (atribuida a Guira) | Gestión de flujos operativos |

---

## 2. Terminología de "sistema de tickets" (prohibida)

Guira se diferencia por ofrecer acompañamiento humano y dedicado, no un centro de soporte automatizado y frío.

- Evitar: "Ticket", "Número de ticket", "Mesa de ayuda", "Helpdesk", "Caso abierto", "Resolución de casos"
- Evitar "Soporte técnico" → usar "Acompañamiento", "Equipo de especialistas", "Asesoría continua"

## 3. Terminología retail o B2C (prohibida)

Guira atiende empresas, no consumidores finales.

- Evitar: "Carrito de compras", "Comprar ahora", "Añadir al carrito" → "Solicitar demo", "Contactar a un asesor", "Empezar ahora"
- Evitar "Clientes" en sentido individual/minorista → "Empresas", "Organizaciones", "Partners", "Aliados estratégicos"
- Evitar: "Ofertas", "Descuentos", "Promociones", "Rebajas" → "Planes corporativos", "Propuesta de valor", "Soluciones a medida"
- Evitar "Usuarios" referido a la empresa contratante → "Empresas" (o "Equipos" si se refiere a los colaboradores de esa empresa)

## 4. Terminología excesivamente técnica o fría

- Evitar jerga de software sin valor de negocio ("endpoints", "microservicios", "frameworks"), salvo documento técnico para desarrolladores.
- Evitar mensajes robóticos ("Error 500", "Falla de sistema").
- Preferir lenguaje de impacto operativo: "Optimización de flujos", "Visibilidad en tiempo real", "Trazabilidad de pagos", "Eficiencia de recursos".
- Nota de aplicación: términos actuales del sitio como "Capa de Orquestación", "Balance Operativo Digital" o "Enrutamiento operativo" caen en esta categoría y conviene simplificarlos (ver instrucciones de Claude Code).

## 5. Checklist antes de publicar cualquier pieza

- ¿Abre con una función concreta (pagar, cobrar, cuenta en dólares) antes que con trazabilidad?
- ¿Evita atribuirle custodia de fondos a Guira o Guiraglobal SRL en cualquier frase?
- ¿Usa "cuenta operativa en dólares" como default, y USDC/USDT solo en la opción de salida a wallet externa?
- ¿Dice con claridad que Guira System LLC es la creadora/dueña y Guiraglobal SRL es asesoría?
- ¿Evita lenguaje de tickets, retail/B2C y jerga técnica fría (Secciones 2–4)?
- ¿Evita citar ASFI/DS 5384 como autoridad, y evita implicar que Guiraglobal SRL ejecuta la conversión bajo su propio PSAV?
- ¿Fue revisada por el abogado interno antes de publicarse?

## Resumen del tono deseado

- **Sí:** Institucional, B2B, humano, transparente, maduro, funcional primero y trazabilidad como refuerzo.
- **No:** Transaccional (B2C/retail), frío, automatizado (tickets), excesivamente técnico, o que implique custodia propia de fondos.
