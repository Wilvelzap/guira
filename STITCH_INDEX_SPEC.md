# Especificación de Diseño y Contenido de la Landing Page (Index) para Google Stitch

> **Objetivo del documento**: Servir como especificación técnica, de contenido y de sistema de diseño integral para alimentar a **Google Stitch** (o Stitch MCP / prompts de generación de UI). Con este documento, Stitch puede generar múltiples variantes de refactorización visual y estructural para la página principal de **Guira Empresas** (`/`), manteniendo estricta fidelidad al contenido comercial, legal y a los lineamientos de marca.

---

## 1. Identidad de Marca y Reglas de Posicionamiento

* **Nombre de la plataforma**: Guira Empresas (`guiracorp.com`)
* **Propósito**: Plataforma B2B para que empresas de LATAM cobren a sus clientes en el exterior, paguen a sus proveedores internacionales y operen una cuenta operativa en dólares con trazabilidad y respaldo documental.
* **Entidades legales**:
  * `Guira System LLC` (Delaware, EE.UU.): Propietaria y desarrolladora de la plataforma tecnológica.
  * `Guiraglobal SRL` (Bolivia): Equipo de asesoría comercial y acompañamiento local en Bolivia.
* **Reglas de vocabulario y compliance**:
  * **Custodia**: Nunca atribuir custodia ni intermediación bancaria directa a Guira ni a Guiraglobal SRL. Los fondos y rieles son provistos por partners tecnológicos y financieros regulados en EE.UU.
  * **Término central**: "Cuenta operativa en dólares" o "Cuentas virtuales empresariales". (No usar terminología retail tipo "billetera", "carrito", "recargas" o "usuarios finales").
  * **Estilo de copy**: Oraciones claras, tono conversacional profesional y directo, sin punto y coma, sin guiones largos (`—`), sin emojis ni jerga técnica vacía ("next-gen", "seamless", "disruptivo").

---

## 2. Sistema de Diseño y Paleta de Colores

### 2.1 Paleta Cromática Actual (Tokens Hexadecimales)

| Token / Nombre | Valor Hex | Rol Funcional en la Interfaz |
| :--- | :--- | :--- |
| **Guira Blue (Teal)** | `#0051ff` | **Color de acción primario único**. CTAs principales, bordes activos, enlaces clave, focos interactivos y estados hover. |
| **Signal Cyan** | `#00d8ff` | **Acento de energía / luz**. Gradientes secundarios, badges luminosos, brillos decorativos y acentos de contraste en fondos oscuros. |
| **Signal Neon** | `#00f6ff` | **Micro-glows y partículas**. Brillos sutiles de fondo y detalles de muy baja frecuencia. |
| **Guira Navy** | `#0B1120` | **Superficie oscura institucional**. Fondos de secciones técnicas (Problema/Solución, Cobertura, CTA final). |
| **Guira Petrol** | `#0F172A` | **Superficie de contraste alternativo**. Fondos de tarjetas oscuras, columnas comparativas y panel de plataforma. |
| **Guira Dark** | `#020617` | **Fondo profundo / Base nocturna**. Fondo del footer institucional y bordes de alta densidad. |
| **Surface White** | `#ffffff` | **Lienzo principal**. Fondo de la mayoría de secciones diurnas, tarjetas limpias y modales. |
| **Slate 50** | `#f8fafc` | **Fondo alterno suave**. Secciones secundarias (Casos de uso, FAQ, cotizador). |
| **Slate 100 / 200** | `#f1f5f9` / `#e2e8f0` | **Bordes y divisores estructurales**. 1px border en tarjetas, inputs y separadores de lista. |
| **Slate 400 / 500** | `#94a3b8` / `#64748b` | **Texto secundario y kickers**. Metadatos, etiquetas técnicas y subtítulos. |
| **Slate 700 / 900** | `#334155` / `#0f172a` | **Texto primario de alto contraste** en fondos claros y botones primarios oscuros. |
| **Status Emerald** | `#10b981` | **Indicador de éxito y verificación**. Badges de cumplimiento, checks activos ("Vigente", "Cumplido"). |
| **Status Rose** | `#fb7185` | **Indicador de restricción o exclusión**. Cruces y etiquetas de perfil no elegible ("Rechazado"). |
| **Status Amber** | `#f59e0b` | **Indicador de advertencia / límite**. Etiquetas de condición ("Restringido"). |

---

### 2.2 Principios Visuales y Elevación

* **Jerarquía de Color ("The One Accent Rule")**: El azul `#0051ff` es el único elemento que comunica acción interactiva. El cyan `#00d8ff` es solo decorativo/iluminación.
* **Atmósfera General**: Panel de control institucional de alta tecnología (diurno, limpio, espacioso y confiable, con transiciones a bloques oscuros de alta sofisticación).
* **Sombras Suaves Tintadas ("Ambient Tint Rule")**: Las tarjetas no usan sombras negras duras; en reposo usan `0 1px 3px rgba(15,23,42,0.06), 0 8px 32px -8px rgba(15,23,42,0.10)`, y al hacer hover la sombra se tiñe sutilmente del azul primario `rgba(0,81,255,0.14)`.
* **Esquinas y Radios**:
  * Botones y badges: `rounded-lg` (8px) a `rounded-xl` (12px) y `rounded-full` (9999px).
  * Tarjetas y módulos: `rounded-2xl` (16px) a `rounded-3xl` (24px).
* **Tipografía Actual vs Opciones de Refactorización**:
  * *Actual*: `Inter` (pesos 400, 500, 600, 700, 800).
  * *Opciones sugeridas para Stitch*:
    * Opción Tech-Premium: `Geist` + `Geist Mono`
    * Opción Fintech-Editorial: `Satoshi` + `Cabinet Grotesk`
    * Opción Moderna de Alto Impacto: `Outfit` para display + `Inter` para cuerpo de texto

---

## 3. Estructura y Contenido Completo del Index (Sección por Sección)

A continuación se detalla todo el contenido textual, jerarquía y elementos funcionales de la página de inicio para que Stitch pueda estructurar los wireframes y pantallas:

---

### Sección 1: Barra de Navegación (Header & Navigation)
* **Logo**: Isotipo Guira + Texto "Guira Empresas"
* **Enlaces de Navegación**:
  * `Producto` (`/producto/`)
  * `Soluciones` (Desplegable con: *Pagos a proveedores desde Bolivia*, *Cobros de clientes del exterior*, *Cuenta en dólares para empresas*)
  * `Cómo funciona` (`/como-funciona/`)
  * `Seguridad` (`/seguridad/`)
  * `Blog` (`/blog/`)
  * `FAQ` (`/faq/`)
  * `Contacto` (`/contacto/`)
* **Botones de Acción**:
  * Secundario: "Ingresar a Plataforma" (Enlace a `https://app.guiracorp.com`)
  * Primario: "Solicitar Demo" (Enlace a `/demo/`)

---

### Sección 2: Hero Section (Propuesta de Valor Principal)
* **Kicker / Badge**: `● Plataforma tecnológica para empresas de LATAM · Presencia en Bolivia`
* **H1 / Titular Principal**:
  > "Paga a tus proveedores y cobra en dólares desde Bolivia"
* **Subtítulo / Bajada**:
  > "Centraliza la recepción, visibilidad y las instrucciones de pago de tu empresa con respaldo documental y partners internacionales calificados."
* **Acciones / CTAs**:
  * Botón Primario (Fondo oscuro `#0f172a` o Azul `#0051ff`): **"Comenzar Onboarding Empresarial"** → `https://app.guiracorp.com`
  * Botón Secundario (Blanco con borde): **"Hablar con Ventas"** → `/demo/`
* **Métricas / Pilares de Confianza en Hero**:
  * **Onboarding**: Empresarial
  * **Canales**: ACH / Wire
  * **Control**: Trazabilidad
* **Recursos Visuales del Hero**:
  * Imagen de fondo ejecutiva de negocios internacionales.
  * Mockup de la plataforma Guira Empresas en Tablet y Smartphone interactivo.

---

### Sección 3: Simulador Operativo / Cotizador Multi-moneda
* **Kicker**: `Simulador de operación`
* **Título H2**: "Ve cuánto llega, en la moneda que elijas."
* **Descripción**: "Simula el destino de tu saldo en dólares: tu cuenta operativa en dólares o tu banco local en bolivianos."
* **Entrada**:
  * Etiqueta: "Envías desde tu cuenta operativa en dólares"
  * Input numérico: Monto base (ej. `100.00 USD`)
* **Opciones de Destino (Botones interactivos)**:
  1. *Cuenta en dólares*: Saldo en USD (Tasa 1:1, sin conversión, saldo en cuenta operativa).
  2. *Cuenta BOB*: Banco local (Tasa referencial de conversión a cuenta bancaria en bolivianos).
* **Resultado**:
  * Monto calculado a recibir con divisa y etiqueta de destino.
* **Nota Legal**: "* Simulación referencial. El tipo de cambio y las condiciones finales se confirman en cada operación según la estructura habilitada."

---

### Sección 4: Presencia e Infraestructura Institucional
* **Fondo**: `Guira Navy` (`#0B1120`)
* **3 Bloques de Confianza**:
  1. **Estructura Corporativa**: Empresa matriz operativa en Delaware, EE.UU. (Ícono: Edificio).
  2. **Asesores en Bolivia**: Equipo asesor local para empresas que quieren usar Guira. Enlace: *"Ver solución para Bolivia →"* (Ícono: Ubicación / Mapa).
  3. **Acompañamiento B2B**: Equipo humano consultivo y permanente (Ícono: Usuarios / Equipo).

---

### Sección 5: Franja de Confianza y Capacidades (Marquee)
* **Texto Introductorio**: `INFRAESTRUCTURA DESARROLLADA PARA ESCALAR TU OPERACIÓN INTERNACIONAL`
* **Chips / Puntos clave en movimiento continuo**:
  * ✓ Validación empresarial según perfil
  * ✓ Soporte documental y trazabilidad
  * ✓ Operación entre rieles habilitados
  * ✓ Experiencia diseñada para empresas

---

### Sección 6: Banner Multimedia LATAM
* **Elemento Visual**: Video en bucle / banner dinámico que contextualiza la infraestructura digital y financiera conectando Latinoamérica con el resto del mundo.

---

### Sección 7: Cuadrante Comparativo (Operación Tradicional vs Alternativa Guira)
* **Fondo**: Split screen / Dividido en dos columnas (Lado oscuro tradicional `#0B1120` vs Lado Guira Petrol `#0F172A` con acento cyan).
* **Columna Izquierda (Desafíos de la operación tradicional)**:
  * *Kicker*: Operación tradicional
  * *Titular*: "Desafíos de la operación tradicional"
  * *Subtítulo*: "Abrir una cuenta bancaria internacional requiere presencia física, tiempo y altos costos."
  * *Punto 01*: Dificultad para recibir pagos en USD desde LATAM de forma fluida.
  * *Punto 02*: Fricción operativa por múltiples intermediarios y procesos lentos.
  * *Punto 03*: Baja visibilidad y falta de una interfaz operativa centralizada.
* **Columna Derecha (La alternativa Guira Empresas)**:
  * *Kicker*: La alternativa Guira
  * *Titular*: "Guira Empresas"
  * *Subtítulo*: "Una plataforma operativa multi-moneda para cobrar, pagar y tener control de cada operación."
  * *Solución 01*: Estructura habilitada mediante partners para la recepción de fondos.
  * *Solución 02*: Capa empresarial para una operación internacional con trazabilidad real.
  * *Solución 03*: Interfaz operativa centralizada para gestionar cobros, saldo y pagos.

---

### Sección 8: Explorador de Capacidades y Productos (Interactive Showcase)
* **Kicker**: `Capacidades operativas`
* **Título H2**: "Una suite estructurada para tu operación financiera internacional."
* **Descripción**: "Capacidades operativas pensadas exclusivamente para las exigencias corporativas de agencias y exportadoras en LATAM."
* **3 Módulos de Producto Principales**:
  1. **Infraestructura operativa multi-moneda (Cuenta en USD)**:
     * *Resumen*: Centraliza la recepción de pagos desde el exterior al integrarte con estructuras de pago reguladas, facilitando la visibilidad de tu flujo operativo internacional de inicio a fin.
     * *Puntos clave*: Datos de recepción en tu nombre corporativo | Recepción de pagos desde el exterior.
     * *Detalle ampliado*: "Cada cobro, con contexto. Revisa la información de cada recepción y conserva una vista ordenada de tu operación internacional."
  2. **Pagos Empresariales (ACH / Wire)**:
     * *Resumen*: Ejecuta pagos ACH y Wire a proveedores y partners clave en Estados Unidos con total visibilidad, orden y trazabilidad operativa.
     * *Puntos clave*: Pagos ACH y Wire transfer | Mayor orden y trazabilidad.
     * *Detalle ampliado*: "Del proveedor al comprobante. Concentra los datos necesarios para preparar y seguir un pago internacional de tu empresa."
  3. **Flexibilidad de Salida (Enrutamiento Operativo)**:
     * *Resumen*: Instruye transferencias según la estructura aprobada hacia cuentas locales o canales digitales mediante una interfaz orientada al control documental.
     * *Puntos clave*: Opciones de enrutamiento operativo | Soporte documental trazable por transacción.
     * *Detalle ampliado*: "Una salida definida para cada caso. Mantén el seguimiento de la instrucción y la documentación que corresponde a cada operación."
* **Enlace final**: *"Conoce más sobre nuestra tecnología →"* (`/producto/`)

---

### Sección 9: Plataforma en Acción y Trazabilidad
* **Fondo**: `Slate 900` (`#0f172a`)
* **Columna de Texto**:
  * *Kicker*: `PLATAFORMA`
  * *Título H2*: "Tu operación, visible y controlada"
  * *Descripción*: "Gestiona tus pagos y cobros internacionales desde una interfaz diseñada para trazabilidad real. Cada operación queda documentada."
  * *3 Características*:
    1. **Seguimiento en tiempo real**: Ves el estado de cada operación en todo momento. (Ícono: Ojo / Visibilidad)
    2. **Documentación automática**: Cada operación genera su comprobante y trazabilidad. (Ícono: Archivo verificado)
    3. **Revisión manual**: Cada operación es revisada antes de ejecutarse. (Ícono: Escudo de seguridad)
  * *CTA*: "Comenzar a operar →" (`https://app.guiracorp.com`)
* **Columna Visual**:
  * Video interactivo / demostración en vivo de la plataforma generando reportes y comprobantes de operación. Badge: `Plataforma en vivo`.

---

### Sección 10: Casos de Uso por Industria (Verticales de Negocio)
* **Título H2**: "Plataforma financiera para operaciones de alto impacto"
* **5 Filas / Acordeones de Solución**:
  1. `01` **Exportadores de Servicios**: Agencias de software, diseño y consultoras que cobran en USD a clientes del exterior con trazabilidad total. Enlace: `/soluciones/#exportadores`
  2. `02` **Importadores y Operaciones Regionales**: Pagos a proveedores en el exterior con tiempos predecibles e historial integrado. Enlace: `/soluciones/#importadores`
  3. `03` **Empresas que trabajan con el exterior**: Centraliza cobros y pagos cross-border entre múltiples entidades regionales. Enlace: `/soluciones/#operaciones-regionales`
  4. `04` **ONGs y Organizaciones Sin Fines de Lucro**: Recepción de fondos de donantes internacionales con trazabilidad documental para reportes de impacto. Enlace: `/soluciones/#ongs`
  5. `05` **Empresas bolivianas que pagan proveedores**: Asesoría local en Bolivia para instruir pagos ACH y Wire a proveedores internacionales. Enlace: `/soluciones/#bolivia`
* **Enlace final**: *"Explora las soluciones por industria →"* (`/soluciones/`)

---

### Sección 11: Cobertura Operativa y Alcance Regional
* **Fondo**: `Guira Navy` (`#0B1120`)
* **Kicker**: `COBERTURA OPERATIVA`
* **Título H2**: "Alcance regional de Guira"
* **Descripción**: "Guira está pensado para empresas de estas geografías, que cobran y pagan en múltiples monedas con el exterior."
* **Cuadrícula de Regiones (Tarjetas con banderas)**:
  * `01` **Bolivia**: Presencia local con asesoría comercial de Guiraglobal SRL, sin custodia de fondos. Badge: `Guiraglobal SRL`.
  * `02` **Colombia**: Empresas exportadoras que facturan en dólares a clientes en el exterior.
  * `03` **Brasil**: Compañías que cobran en dólares a clientes internacionales.
  * `04` **México**: Negocios con clientes y proveedores fuera del país.
  * `05` **Estados Unidos**: Plataforma operativa multi-moneda, habilitada por un partner tecnológico licenciado en EE.UU. Badges: `ACH` | `Wire`.
  * `06` **Europa**: Clientes y proveedores de empresas latinoamericanas con operación internacional.
  * `07` **Otras regiones**: Empresas de otros países de LATAM que operan con el exterior.

---

### Sección 12: Matriz de Elegibilidad (Para Quién Sí / Para Quién No)
* **Propósito**: Filtro de compliance y pre-calificación para proyectar seriedad bancaria y B2B.
* **Lado Izquierdo (Fondo Blanco - Para quién sí es Guira)**:
  * *Kicker*: `Elegibilidad del servicio`
  * *Título*: "¿Tu empresa encaja con Guira?"
  * *Subtítulo*: "Mantenemos altos estándares de cumplimiento para asegurar operaciones robustas."
  * *Criterios*:
    * ✓ **Exportadores de servicios** que cobran en USD.
    * ✓ **Agencias y estudios** con clientes globales.
    * ✓ **Importadores y comercializadoras** B2B.
    * ✓ **Empresas con proveedores en USA** que requieren pagar ACH/Wire.
    * ✓ **Negocios con operación regional** en LATAM.
* **Lado Derecho (Fondo Navy - Para quién puede no aplicar)**:
  * *Kicker*: `Antes de empezar`
  * *Título*: "Para quién puede no aplicar"
  * *Subtítulo*: "Revisamos cada solicitud para operar con claridad, respaldo y los rieles habilitados."
  * *Criterios*:
    * ✗ Interesados en cuentas para **uso individual o consumo**.
    * ✗ Operaciones que no cuentan con **soporte documental** y de flujo lógico.
    * ✗ Actividades restringidas o **de alto riesgo no compatibles**.
    * ✗ Perfiles fuera de las **jurisdicciones o rieles habilitados**.

---

### Sección 13: Credibilidad Institucional y Prueba Estructural (Compliance)
* **Fondo**: `Slate 900` con grilla técnica sutil.
* **Columna de Argumentación**:
  * *Kicker*: `RESPALDO DOCUMENTAL`
  * *Título H2*: "Credibilidad basada en estructura operativa."
  * *Descripción*: "No inflamos métricas. La confianza operativa en Guira se construye mediante un enfoque B2B estricto y el requerimiento de soporte en cada instrucción."
  * *3 Pilares*:
    1. **Enfoque 100% Corporativo**: Rechazamos perfiles no comerciales o de consumo para asegurar una red exclusiva B2B.
    2. **Respaldo Documental Estricto**: Invoice asociado a la operación, comprobante y referencia validable, trazabilidad de inicio a fin.
    3. **Plataforma de Gestión**: Infraestructura tecnológica que centraliza instrucciones sobre cuentas y rieles de partners autorizados.
  * *Enlace*: *"Conoce en detalle nuestro protocolo de compliance →"* (`/seguridad/`)
* **Columna de Simulación Documental (Certificado / Verification Card)**:
  * Encabezado: `Documento de verificación: Perfil Operativo Confiable` [Badge: **VIGENTE**]
  * `01` Identidad Corporativa Verificada (KYB) → [**CUMPLIDO**]
  * `02` Invoice y Soporte Asociado → [**REQUERIDO**]
  * `03` Instrucción de Pagos a Terceros → [**RESTRINGIDO**]
  * `04` Uso Individual o de Consumo → [**RECHAZADO**]
  * Nota: "La firmeza de nuestros criterios de habilitación es nuestra principal métrica de madurez y seguridad en LATAM."

---

### Sección 14: Preguntas Frecuentes (FAQ Accordion)
* **Título H2**: "Preguntas Frecuentes"
* **Pregunta 1**: *¿A quién está dirigida la plataforma?*
  * **Respuesta**: Exclusivamente a empresas, agencias y entidades corporativas debidamente registradas en sus países base que requieran herramientas de recepción de pagos B2B internacionales. Aplicamos procesos formales de Know Your Business (KYB).
* **Pregunta 2**: *¿La cuenta internacional se registra a nombre de mi empresa?*
  * **Respuesta**: Así es, nuestra arquitectura te otorga una Cuenta Virtual Empresarial ("Virtual Account") donde la razón social de tu empresa figura como beneficiaria, esencial para integraciones con Stripe, Amazon o clientes institucionales corporativos.
* **Pregunta 3**: *¿Son ustedes una entidad bancaria tradicional?*
  * **Respuesta**: No. Guira provee infraestructura de software y visibilidad operativa. Todos los servicios financieros aplicables, resguardo de capitales y movimiento de fondos son operados, soportados y delegados estructuralmente en instituciones o partners regulados, según corresponda. La disponibilidad se condiciona al perfil comercial y jurisdicción aplicable.
* **Enlace**: *"Explorar todas las Preguntas Frecuentes →"* (`/faq/`)

---

### Sección 15: CTA de Cierre de Alto Impacto
* **Fondo**: `Guira Navy` con resplandor azul ambiental difuso.
* **Título H2**: "Evalúa si Guira encaja con la operación internacional de tu empresa"
* **Subtítulo**: "Solicita una demo para revisar requisitos, estructura operativa y elegibilidad del servicio según tu caso de uso."
* **Grupo de Botones**:
  * Primario (`guira-teal` `#0051ff`): **"Crear tu cuenta Guira"** → `https://app.guiracorp.com`
  * Secundario (`slate-800`): **"Solicitar demo"** → `/demo/`
  * Terciario (Ghost traslúcido): **"Hablar con ventas"** → `/contacto/`

---

### Sección 16: Footer Institucional ("Rich-Dark")
* **Fondo**: `Guira Dark` (`#020617`) con bordes `rgba(255,255,255,0.1)`.
* **Columna 1 (Marca)**: Logo blanco + "Guira Empresas" + "Infraestructura tecnológica corporativa para consolidar pagos, gestión operativa y recepciones B2B en las Américas." + Texto de roles de Guira System LLC y Guiraglobal SRL.
* **Columna 2 (Soluciones)**: Pagos a proveedores desde Bolivia, Cobros de clientes del exterior, Cuenta en dólares para empresas, Transferencias internacionales, La plataforma por dentro.
* **Columna 3 (Empresa y Plataforma)**: Acerca de Guira, El proceso paso a paso, Protocolos de Compliance, Blog y Recursos, Contacto Corporativo.
* **Columna 4 (Legal)**: Condiciones Generales, Protección de Datos, Política de Cookies, Preguntas Frecuentes, Guiraglobal SRL - Bolivia.
* **Disclaimers Legales al Pie**:
  * "© 2026 Guira System LLC. Representado en Bolivia por Guiraglobal SRL. Todos los derechos comerciales reservados."
  * "Guira es una plataforma tecnológica creada y operada por Guira System LLC (Delaware, EE.UU.). En Bolivia, Guiraglobal SRL es el equipo de asesoría comercial que acompaña a las empresas en el uso de la plataforma. No somos banco, entidad financiera, casa de cambio, billetera de consumo ni custodio directo de fondos. Los servicios financieros, rieles de pago, cuentas de recepción, custodia, movimiento de fondos o procesamiento transaccional, cuando correspondan, son provistos exclusivamente por terceros o partners aplicables bajo sus propias autorizaciones..."

---

## 4. Direcciones Creativas para Explorar en Stitch (Prompt Directions)

Pasa cualquiera de estas 4 visiones a **Google Stitch** para generar variantes de refactorización según el objetivo deseado:

### Dirección A: "Institutional Swiss Fintech" (Recomendada para Máxima Confianza B2B)
* **Vibe**: Pulcro, quirúrgico, estilo Stripe/Ramp/Linear.
* **Layout**: Bento Grid asimétrico con bordes sutiles de 1px (`#e2e8f0`), tipografía display en `Satoshi` o `Geist`, micro-badges con estados de servidor y telemetría de transferencias bancarias.
* **Hero**: Izquierda con titular tipográfico de alto contraste + badges de datos en vivo; derecha con tarjeta flotante translúcida simulando una transferencia ACH completada con comprobante emitido.

### Dirección B: "Dark Tech Terminal & High Density" (Para Empresas Tecnológicas y Exportadores)
* **Vibe**: Modo oscuro refinado con predominio de `#0B1120` y `#0F172A`, orbes cyan `#00d8ff` y líneas guía luminosas.
* **Layout**: Módulos de datos densos, visualización de rutas bancarias globales (LATAM → USA → Europa), gráficos de flujo de fondos con líneas punteadas y estado en tiempo real.

### Dirección C: "Editorial Wall Street & Modern Banking"
* **Vibe**: Estilo Financial Times / Mercury Bank contemporáneo.
* **Layout**: Grandes espacios en blanco ("Gallery Airy"), titulares con jerarquía clásica y toques modernos, contrastes elegantes de columnas 50/50 y detalles de verificación formal.

### Dirección D: "Interactive Motion & Simulator-First"
* **Vibe**: Interfaz dinámica orientada a la acción.
* **Layout**: El simulador de cambio y enrutamiento toma protagonismo interactivo en el tercio superior; las capacidades de la plataforma se presentan en tarjetas de transición suave con previsualizaciones de documentos fiscales y comprobantes bancarios.
