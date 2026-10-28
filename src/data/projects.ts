export type ProjectCategory = "work" | "personal";

export interface ProjectMetric {
  value: string;
  label: { es: string; en: string };
}

export interface ProjectSection {
  title: { es: string; en: string };
  body: { es: string; en: string };
}

export interface Project {
  slug: string;
  index: string;
  year: string;
  category: ProjectCategory;
  title: string;
  tagline: { es: string; en: string };
  description: { es: string; en: string };
  cover: string;
  href?: string;
  hrefLabel?: { es: string; en: string };
  repoHref?: string;
  status: { es: string; en: string };
  role: { es: string; en: string };
  client: { es: string; en: string };
  technologies: string[];
  metrics?: ProjectMetric[];
  context: { es: string; en: string };
  decisions: ProjectSection[];
  gallery?: { src: string; caption: { es: string; en: string } }[];
}

export const projects: Project[] = [
  {
    slug: "zeitap",
    index: "01",
    year: "2026",
    category: "work",
    title: "Zeitap",
    cover: "/zeitap.png",
    href: "https://www.zeitap.ai/",
    hrefLabel: { es: "Visitar zeitap.ai", en: "Visit zeitap.ai" },
    status: { es: "En producción", en: "Live" },
    role: { es: "Full-stack developer", en: "Full-stack developer" },
    client: { es: "Zeitap (SaaS jurídico)", en: "Zeitap (legal SaaS)" },
    tagline: {
      es: "SaaS jurídico con IA para despachos mexicanos.",
      en: "AI-native legal SaaS built for Mexican law firms.",
    },
    description: {
      es: "Plataforma de gestión legal que centraliza casos, clientes, documentos, finanzas y comunicación. Conecta con tribunales del Poder Judicial, integra asistentes de IA y ofrece portal del cliente.",
      en: "Legal management platform that centralizes cases, clients, documents, finance and communication. Wired into the Mexican judiciary, ships AI assistants and a dedicated client portal.",
    },
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "PostgreSQL",
      "Prisma ORM",
      "AI / LLMs",
      "Vercel",
    ],
    metrics: [
      { value: "8+", label: { es: "Módulos en producción", en: "Modules in production" } },
      { value: "4", label: { es: "Planes (Free → Pro)", en: "Plans (Free → Pro)" } },
      { value: "100%", label: { es: "Multi-tenant SaaS", en: "Multi-tenant SaaS" } },
    ],
    context: {
      es: "Los despachos legales en México llevan casos en Excel, WhatsApp y carpetas dispersas. Pierden tiempo, plazos y trazabilidad. Zeitap propone una capa operativa unificada: del seguimiento de un asunto a la facturación, con IA que acelera tareas repetitivas (contratos, análisis de jurisprudencia, bitácoras).",
      en: "Mexican law firms juggle cases across Excel, WhatsApp and scattered folders — losing hours, deadlines and traceability. Zeitap offers a single operational layer: from case follow-up to billing, with AI that accelerates repetitive work (contracts, case-law analysis, automated logs).",
    },
    decisions: [
      {
        title: { es: "Multi-tenant desde el día uno", en: "Multi-tenant from day one" },
        body: {
          es: "El producto vende a despachos de tamaños muy distintos (abogado solo → firma corporativa). La separación lógica por tenant en Postgres con Prisma permite escalar planes sin reescribir consultas.",
          en: "The product targets very different firm sizes (solo lawyers → corporate firms). Logical tenant separation in Postgres with Prisma lets us scale plans without rewriting queries.",
        },
      },
      {
        title: { es: "IA como features, no como gimmick", en: "AI as features, not gimmick" },
        body: {
          es: "Sof.ia, Contract Builder y AI Legal Assistant resuelven trabajo concreto: redactar contratos guiados, resumir el DOF diariamente, hacer análisis jurisprudencial. Cada asistente vive dentro del flujo donde el abogado ya está trabajando.",
          en: "Sof.ia, Contract Builder and the AI Legal Assistant solve real work: guided contract drafting, daily DOF summaries, case-law analysis. Each assistant lives where the lawyer already works.",
        },
      },
      {
        title: { es: "Integración con tribunales", en: "Court system integration" },
        body: {
          es: "El módulo de alertas se conecta con el Poder Judicial para detectar movimientos en expedientes y disparar recordatorios antes del vencimiento. Es lo que despachos privados normalmente delegan a personal de oficialía.",
          en: "The alerts module integrates with the judiciary to detect docket movements and fire reminders before deadlines hit. It replaces work usually delegated to office staff.",
        },
      },
    ],
  },
  {
    slug: "mytablecoupon",
    index: "02",
    year: "2026",
    category: "work",
    title: "MyTableCoupon",
    cover: "/mytablecoupon.png",
    href: "https://www.mytablecoupon.com/",
    hrefLabel: { es: "Visitar mytablecoupon.com", en: "Visit mytablecoupon.com" },
    status: { es: "En producción", en: "Live" },
    role: { es: "Full-stack developer", en: "Full-stack developer" },
    client: {
      es: "MyTableCoupon (SaaS de lealtad para negocios)",
      en: "MyTableCoupon (loyalty SaaS for businesses)",
    },
    tagline: {
      es: "Plataforma de lealtad y recuperación de clientes: clientes que vuelven, solos.",
      en: "Loyalty and win-back platform: customers who come back on their own.",
    },
    description: {
      es: "SaaS para restaurantes y comercios que detecta clientes inactivos y los recupera con campañas, premios y automatizaciones. Incluye programas de sellos, cashback, gift cards y VIP, pases de Apple/Google Wallet, reseñas de Google, WhatsApp, notificaciones push y una app móvil para el cliente final.",
      en: "SaaS for restaurants and shops that detects lapsed customers and wins them back with campaigns, rewards and automations. Ships stamp, cashback, gift card and VIP programs, Apple/Google Wallet passes, Google reviews, WhatsApp, push notifications and a mobile app for end customers.",
    },
    technologies: [
      "NestJS",
      "Next.js",
      "React Native (Expo)",
      "TypeScript",
      "Prisma ORM",
      "PostgreSQL",
      "Stripe",
      "Apple / Google Wallet",
      "Turborepo",
    ],
    metrics: [
      { value: "3", label: { es: "Apps: API, panel web y móvil", en: "Apps: API, web dashboard, mobile" } },
      { value: "35+", label: { es: "Módulos en la API", en: "API modules" } },
      { value: "60+", label: { es: "Modelos de datos", en: "Data models" } },
    ],
    context: {
      es: "Un restaurante sabe cuántos clientes entran, pero no cuántos dejaron de volver. Las tarjetas de sellos de papel se pierden y las campañas por redes no llegan a quien ya te conoce. MyTableCoupon convierte cada visita en un dato: detecta quién no ha regresado en 30 días, sugiere el premio para recuperarlo y mide el retorno de cada campaña.",
      en: "A restaurant knows how many customers walk in, but not how many stopped coming back. Paper stamp cards get lost and social campaigns miss the people who already know you. MyTableCoupon turns every visit into data: it detects who hasn't returned in 30 days, suggests the reward that wins them back and measures each campaign's return.",
    },
    decisions: [
      {
        title: { es: "La tarjeta vive en la Wallet", en: "The card lives in the Wallet" },
        body: {
          es: "En lugar de obligar a descargar una app, cada cliente recibe un pase de Apple Wallet o Google Wallet que se actualiza con sus sellos y saldo. La app móvil existe para quien la quiere; la Wallet llega a todos.",
          en: "Instead of forcing an app download, every customer gets an Apple Wallet or Google Wallet pass that updates with stamps and balance. The mobile app is there for those who want it; the Wallet reaches everyone.",
        },
      },
      {
        title: { es: "Un motor de lealtad, varios programas", en: "One loyalty engine, many programs" },
        body: {
          es: "Sellos, cashback, gift cards y VIP comparten el mismo modelo de visitas, ventas y canjes con tokens de un solo uso. Agregar un tipo de programa no toca los demás, y cada canje queda auditado por sucursal.",
          en: "Stamps, cashback, gift cards and VIP share the same model of visits, sales and single-use redemption tokens. Adding a program type leaves the others alone, and every redemption is audited per branch.",
        },
      },
      {
        title: { es: "Canal de partners y agencias", en: "Partner and agency channel" },
        body: {
          es: "La venta escala por agencias y partners: paquetes de negocios cobrados a la agencia, materiales de venta generados con la marca de cada partner y comisiones semanales calculadas sobre el neto de cada cobro en Stripe.",
          en: "Sales scale through agencies and partners: business bundles billed to the agency, sales material generated with each partner's brand and weekly commissions computed on the net of every Stripe charge.",
        },
      },
    ],
  },
  {
    slug: "regimen-suite",
    index: "03",
    year: "2026",
    category: "work",
    title: "Regimen Suite",
    cover: "/regimensuite.png",
    href: "https://www.regimensuite.com/",
    hrefLabel: { es: "Visitar regimensuite.com", en: "Visit regimensuite.com" },
    status: { es: "En producción", en: "Live" },
    role: { es: "Full-stack developer", en: "Full-stack developer" },
    client: {
      es: "Regimen Suite — PropTech para desarrolladores, notarías y despachos",
      en: "Regimen Suite — PropTech for developers, notaries and law firms",
    },
    tagline: {
      es: "Regímenes condominales en minutos, no en meses.",
      en: "Condominium regimes in minutes, not months.",
    },
    description: {
      es: "Plataforma que automatiza la elaboración de regímenes condominales: lee los planos DXF de AutoCAD, detecta unidades, tramos y orientación, guía la captura de colindancias y genera las fichas legales en PDF de todas las unidades en un ZIP, además del Excel de resumen.",
      en: "Platform that automates condominium regime paperwork: it reads AutoCAD DXF drawings, detects units, boundary segments and orientation, guides the capture of adjoining properties and generates the legal PDF sheet of every unit in one ZIP, plus a summary spreadsheet.",
    },
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "FastAPI",
      "Python",
      "ezdxf",
      "ReportLab",
      "Prisma ORM",
      "PostgreSQL",
      "Stripe",
    ],
    metrics: [
      { value: "40–60 min", label: { es: "Por unidad, antes (Word + AutoCAD)", en: "Per unit, before (Word + AutoCAD)" } },
      { value: "Segundos", label: { es: "Para todas las fichas del proyecto", en: "For every sheet in the project" } },
      { value: "3", label: { es: "Planes (Free, Pro, Custom)", en: "Plans (Free, Pro, Custom)" } },
    ],
    context: {
      es: "Un régimen condominal exige una ficha legal por unidad: áreas por nivel, croquis, ubicación en el edificio y la tabla de linderos con distancias y colindancias. Los arquitectos la armaban a mano entre AutoCAD y Word, 40 a 60 minutos por departamento. En un proyecto de 28 unidades eran días de trabajo repetitivo y propenso a errores.",
      en: "A condominium regime requires one legal sheet per unit: areas per level, a sketch, its location in the building and the boundary table with distances and neighbors. Architects built it by hand between AutoCAD and Word, 40 to 60 minutes per apartment. On a 28-unit project that meant days of repetitive, error-prone work.",
    },
    decisions: [
      {
        title: { es: "El plano DXF como fuente de verdad", en: "The DXF drawing as source of truth" },
        body: {
          es: "En vez de recapturar medidas, el servidor en Python lee el DXF con ezdxf: extrae cada layout, calcula tramos, distancias y orientación cardinal, y renderiza un croquis limpio sin anotaciones. El arquitecto solo completa lo que el plano no dice: las colindancias.",
          en: "Instead of re-entering measurements, the Python server reads the DXF with ezdxf: it extracts every layout, computes segments, distances and cardinal orientation, and renders a clean sketch without annotations. The architect only fills in what the drawing doesn't say: the neighbors.",
        },
      },
      {
        title: { es: "Next.js para la captura, Python para los documentos", en: "Next.js for capture, Python for documents" },
        body: {
          es: "El ecosistema de CAD y PDF vive en Python (ezdxf, PyMuPDF, ReportLab), así que la generación corre en FastAPI. El frontend en Next.js se encarga del editor interactivo, las cuentas, los proyectos compartidos y la facturación con Stripe.",
          en: "The CAD and PDF ecosystem lives in Python (ezdxf, PyMuPDF, ReportLab), so generation runs on FastAPI. The Next.js frontend owns the interactive editor, accounts, shared projects and Stripe billing.",
        },
      },
      {
        title: { es: "Un editor pensado para capturar rápido", en: "An editor built for fast capture" },
        body: {
          es: "Croquis SVG con zoom y vértices resaltados según el tramo enfocado, navegación con teclado, autocompletado de colindancias y botones para copiarlas a otro departamento o a todos los niveles. La vista previa del PDF se genera antes de exportar.",
          en: "SVG sketch with zoom and vertices highlighted for the focused segment, keyboard navigation, autocompleted neighbors and buttons to copy them to another apartment or every level. The PDF preview renders before export.",
        },
      },
    ],
  },
  {
    slug: "probien-catalogo",
    index: "04",
    year: "2021 — 2026",
    category: "work",
    title: "Probien Catálogo",
    cover: "/probiencms.png",
    href: "https://www.probien.com.mx/",
    hrefLabel: { es: "Visitar probien.com.mx", en: "Visit probien.com.mx" },
    status: { es: "En producción", en: "Live" },
    role: { es: "Arquitecto + Full-stack", en: "Architect + Full-stack" },
    client: {
      es: "Probien Bienes Exclusivos — inmobiliaria de lujo en Tijuana",
      en: "Probien Bienes Exclusivos — luxury real estate in Tijuana",
    },
    tagline: {
      es: "Portal público para una inmobiliaria de 20 años con 400+ propiedades exclusivas.",
      en: "Public portal for a 20-year-old agency with 400+ exclusive listings.",
    },
    description: {
      es: "Sitio público con catálogo de propiedades, búsqueda avanzada, perfiles de agentes y desarrollos exclusivos. Construido sobre Payload CMS (headless) con búsqueda Meilisearch e indexación SEO en cada propiedad.",
      en: "Public site with property catalog, advanced search, agent profiles and exclusive developments. Built on Payload CMS (headless) with Meilisearch and SEO-optimized pages per property.",
    },
    technologies: [
      "Next.js",
      "Payload CMS",
      "Tailwind CSS",
      "TypeScript",
      "InstantSearch.js",
      "Meilisearch",
      "Vercel",
    ],
    metrics: [
      { value: "400+", label: { es: "Propiedades indexadas", en: "Indexed listings" } },
      { value: "500+", label: { es: "Páginas estáticas", en: "Static pages" } },
      { value: "40+", label: { es: "Agentes en plataforma", en: "Agents on platform" } },
    ],
    context: {
      es: "Probien tenía un sitio en WordPress viejo, lento y difícil de mantener, mientras su inventario de lujo competía con miles de listados en portales genéricos. Necesitaban un canal propio: rápido, con búsqueda profesional, optimizado para Google y que reflejara su posicionamiento premium.",
      en: "Probien ran an old WordPress site that was slow and hard to maintain, while its luxury inventory competed with thousands of listings on generic portals. They needed an owned channel: fast, with serious search, ranked on Google, reflecting their premium positioning.",
    },
    decisions: [
      {
        title: { es: "Payload sobre Strapi o WordPress", en: "Payload over Strapi or WordPress" },
        body: {
          es: "El equipo necesitaba editar contenido sin tocar código. Payload es type-safe (mismos modelos en backend y frontend Next.js), tiene auth/roles incluidos y se despliega en el mismo repo. Sin overhead de PHP ni de un Strapi separado.",
          en: "The team had to edit content without touching code. Payload is type-safe (shared models between Next.js front and back), has auth/roles built in and deploys in the same repo. No PHP overhead, no separate Strapi instance.",
        },
      },
      {
        title: { es: "Meilisearch sobre Algolia", en: "Meilisearch over Algolia" },
        body: {
          es: "Algolia se pone caro rápido con miles de queries. Meilisearch self-hosted en Railway nos da búsqueda tipo-tolerante en español, facets, filtros geográficos y queries en menos de 50ms a costo fijo.",
          en: "Algolia gets expensive fast at scale. Self-hosted Meilisearch on Railway gives us typo-tolerant Spanish search, facets, geo filters and sub-50ms queries at a flat cost.",
        },
      },
      {
        title: { es: "Generación estática por propiedad", en: "Per-listing static generation" },
        body: {
          es: "Cada propiedad genera su página estática con `getStaticPaths`. Resultado: Core Web Vitals en verde, indexación rápida en Google y experiencia instantánea para el visitante.",
          en: "Every property generates its static page via `getStaticPaths`. Result: green Core Web Vitals, fast Google indexing and an instant experience for the visitor.",
        },
      },
    ],
  },
  {
    slug: "probien-crm",
    index: "05",
    year: "2021 — 2026",
    category: "work",
    title: "Probien CRM",
    cover: "/probiencrm-app.png",
    status: { es: "En producción (sistema interno)", en: "Live (internal system)" },
    role: { es: "Arquitecto + Full-stack", en: "Architect + Full-stack" },
    client: {
      es: "Probien Bienes Exclusivos — uso interno",
      en: "Probien Bienes Exclusivos — internal use",
    },
    tagline: {
      es: "Monorepo con API NestJS, app web Next.js y app móvil React Native para 40+ agentes inmobiliarios.",
      en: "Monorepo with NestJS API, Next.js web app and React Native mobile app for 40+ real estate agents.",
    },
    description: {
      es: "Sistema interno tipo ERP/CRM para gestionar propiedades, contactos, oportunidades, pagos, gastos, campañas, eventos, ausencias y un Drive interno. Multi-rol (admin, dirección, staff, agente, broker) con permisos granulares.",
      en: "Internal ERP/CRM-style system for managing properties, contacts, opportunities, payments, expenses, marketing campaigns, events, absences and an internal Drive. Multi-role (admin, leadership, staff, agent, broker) with granular permissions.",
    },
    technologies: [
      "NestJS",
      "Next.js",
      "React Native (Expo)",
      "TypeScript",
      "Prisma ORM",
      "PostgreSQL",
      "Cloudflare R2",
      "Meilisearch",
      "WebSockets",
      "FCM Push",
    ],
    metrics: [
      { value: "90K+", label: { es: "Contactos migrados", en: "Contacts migrated" } },
      { value: "12K+", label: { es: "Propiedades históricas", en: "Historical properties" } },
      { value: "18+", label: { es: "Módulos integrados", en: "Integrated modules" } },
    ],
    context: {
      es: "Probien adoptó Salesforce en 2015 y operó durante años apoyándose básicamente en cuatro objetos: contactos, cuentas, oportunidades y actividades. Sobre esa base acumularon más de 90,000 contactos, 12,000 propiedades y un volumen masivo de operaciones. El costo creciente de licencias y la rigidez para modelar flujos propios del negocio inmobiliario llevaron a la decisión de construir un CRM interno desde cero — diseñado a la medida de cómo trabajan agentes y administradores en Tijuana, sin pagar por features que nunca se usaron.",
      en: "Probien adopted Salesforce back in 2015 and ran on it for years using mostly four objects: contacts, accounts, opportunities and activities. On that foundation they accumulated 90,000+ contacts, 12,000+ properties and a massive volume of deals. Rising license costs and the friction of modeling real estate-specific flows in a generic CRM led to the decision to build an in-house CRM from scratch — tailored to how agents and admins actually work in Tijuana, without paying for features no one used.",
    },
    decisions: [
      {
        title: { es: "Monorepo con SDK compartido", en: "Monorepo with shared SDK" },
        body: {
          es: "Three apps (API, web, mobile) comparten un paquete `api-client` con servicios HTTP, hooks de React Query y tipos TypeScript. Una sola fuente de verdad: cuando se cambia un endpoint, los tres clientes lo reflejan al instante.",
          en: "Three apps (API, web, mobile) share one `api-client` package: HTTP services, React Query hooks and TypeScript types. Single source of truth — change an endpoint once and all three clients pick it up.",
        },
      },
      {
        title: { es: "RBAC granular con 100+ permisos", en: "Granular RBAC with 100+ permissions" },
        body: {
          es: "Permisos por recurso × acción (`account:read:own`, `client:update`, etc.). El seeder sincroniza permisos al rol en cada deploy — agregar un nuevo permiso al sistema solo requiere correr `npm run seed`, sin tocar datos existentes.",
          en: "Permissions per resource × action (`account:read:own`, `client:update`, etc.). The seeder syncs permissions to roles on every deploy — adding a new permission only takes `npm run seed`, no data migration.",
        },
      },
      {
        title: { es: "Drive interno con Cloudflare R2", en: "Internal Drive on Cloudflare R2" },
        body: {
          es: "Carpetas estilo Google Drive con ACL por usuario/rol/división, uploads multipart, integrado en cada propiedad y oportunidad. R2 es S3-compatible y mucho más barato que S3 a este volumen.",
          en: "Google Drive-style folders with ACL per user/role/division, multipart uploads, integrated into every property and opportunity. R2 is S3-compatible and dramatically cheaper at this volume.",
        },
      },
      {
        title: { es: "Zona horaria como invariante", en: "Timezone as an invariant" },
        body: {
          es: "Todo el sistema vive en `America/Tijuana`. Un interceptor global convierte fechas UTC del DB a hora local en cada respuesta y `TijuanaDateUtils` centraliza cálculos. Cero bugs de offset en producción.",
          en: "The whole system lives in `America/Tijuana`. A global interceptor turns UTC dates from the DB into local time on every response; `TijuanaDateUtils` centralizes math. Zero offset bugs in production.",
        },
      },
    ],
  },
  {
    slug: "rebodocs",
    index: "06",
    year: "2026",
    category: "personal",
    title: "Rebodocs",
    cover: "/rebodocs.png",
    href: "https://www.rebodocs.com/",
    hrefLabel: { es: "Visitar rebodocs.com", en: "Visit rebodocs.com" },
    repoHref: "https://github.com/JFranciscoRobles/rebodocs",
    status: { es: "Open source · v0.12", en: "Open source · v0.12" },
    role: { es: "Creador / solo developer", en: "Sole creator" },
    client: { es: "Proyecto open source (MIT)", en: "Open source project (MIT)" },
    tagline: {
      es: "Editor de Word (.docx) para el navegador, con un motor propio.",
      en: "A Word (.docx) editor for the browser, with an engine of its own.",
    },
    description: {
      es: "Abre, edita y guarda archivos .docx dentro de cualquier aplicación: control de cambios, versiones, plantillas con variables, colaboración en tiempo real y PDF en el servidor. Se publica como seis paquetes npm, desde el motor sin DOM hasta el componente de React, e incluye un servidor MCP para que asistentes de IA editen documentos.",
      en: "Open, edit and save .docx files inside any application: tracked changes, versions, templates with variables, real-time collaboration and server-side PDF. Published as six npm packages, from the DOM-free engine to the React component, with an MCP server so AI assistants can edit documents.",
    },
    technologies: [
      "TypeScript",
      "React",
      "Node.js",
      "WebSockets",
      "MCP",
      "Claude API",
      "Vitest",
      "Tauri",
    ],
    metrics: [
      { value: "737", label: { es: "Tests automatizados", en: "Automated tests" } },
      { value: "6", label: { es: "Paquetes en npm", en: "npm packages" } },
      { value: "45", label: { es: "Herramientas MCP para IA", en: "MCP tools for AI" } },
    ],
    context: {
      es: "Los editores web de documentos o no abren bien un Word real, o dependen de un servicio de terceros que se queda con tus archivos. Necesitaba editar contratos dentro de mis propios sistemas (CRM, SaaS jurídico) y que el archivo saliera igual que en Word. Rebodocs es ese editor: tu aplicación guarda los archivos y decide quién entra.",
      en: "Web document editors either can't open a real Word file properly, or depend on a third-party service that keeps your files. I needed to edit contracts inside my own systems (CRM, legal SaaS) and have the file come out exactly as in Word. Rebodocs is that editor: your application stores the files and decides who gets in.",
    },
    decisions: [
      {
        title: { es: "Motor propio, sin contenteditable", en: "Own engine, no contenteditable" },
        body: {
          es: "Modelo de documento, saltos de línea, paginación, cursor, selección y lector/escritor DOCX escritos desde cero. Sin ProseMirror ni librerías de edición; la única dependencia del motor es `fflate`. Lo que el editor no entiende se conserva intacto en el archivo.",
          en: "Document model, line breaking, pagination, caret, selection and DOCX reader/writer written from scratch. No ProseMirror, no editing library; the engine's only dependency is `fflate`. Whatever the editor doesn't understand is kept untouched in the file.",
        },
      },
      {
        title: { es: "Medido contra Word, línea por línea", en: "Measured against Word, line by line" },
        body: {
          es: "Las páginas se componen con las reglas de Word y un comando compara cada documento de prueba con el PDF que genera Word. Así cada cambio de layout se valida con números, no a ojo.",
          en: "Pages are laid out by Word's rules, and a command compares every test document against the PDF Word produces. Every layout change is validated with numbers, not by eye.",
        },
      },
      {
        title: { es: "Un motor, cualquier entorno", en: "One engine, any runtime" },
        body: {
          es: "`@rebodocs/core` no toca el DOM: corre en navegador, Node, Deno, Bun y Workers. El mismo layout produce el PDF en el servidor sin navegador, y las plantillas se llenan desde una API o la línea de comandos.",
          en: "`@rebodocs/core` never touches the DOM: it runs in the browser, Node, Deno, Bun and Workers. The same layout produces the PDF on the server without a browser, and templates are filled from an API or the command line.",
        },
      },
    ],
  },
  {
    slug: "rebofiles",
    index: "07",
    year: "2026",
    category: "personal",
    title: "ReboFiles",
    cover: "/rebofiles.png",
    href: "https://www.rebofiles.com/",
    hrefLabel: { es: "Visitar rebofiles.com", en: "Visit rebofiles.com" },
    repoHref: "https://github.com/JFranciscoRobles/rebofiles",
    status: { es: "Open source · v0.12", en: "Open source · v0.12" },
    role: { es: "Creador / solo developer", en: "Sole creator" },
    client: { es: "Proyecto open source (MIT)", en: "Open source project (MIT)" },
    tagline: {
      es: "Un drive de archivos que integras en tu app, sobre tu propio storage.",
      en: "A file drive you build into your app, on your own storage.",
    },
    description: {
      es: "Carpetas, subidas reanudables, vistas previas, versiones, papelera y compartir, en paquetes que se toman uno a uno. Búsqueda por nombre y por contenido (Word, Excel, PDF y OCR), solicitudes de archivos por link, webhooks, app de escritorio con sincronización y edición de Word con Rebodocs.",
      en: "Folders, resumable uploads, previews, versions, trash and sharing, in packages you take one at a time. Search by name and by content (Word, Excel, PDF and OCR), file requests through links, webhooks, a desktop app with sync and Word editing through Rebodocs.",
    },
    technologies: [
      "TypeScript",
      "React",
      "Node.js",
      "S3 / R2 / GCS / Azure",
      "SQLite",
      "MCP",
      "Tauri",
      "Playwright",
    ],
    metrics: [
      { value: "404", label: { es: "Tests automatizados", en: "Automated tests" } },
      { value: "6", label: { es: "Paquetes en npm", en: "npm packages" } },
      { value: "5", label: { es: "Proveedores de storage", en: "Storage providers" } },
    ],
    context: {
      es: "Cada sistema que construyo termina necesitando un \"Drive\": documentos de propiedades, expedientes, contratos. Rehacerlo en cada proyecto o pagar un servicio que guarda los archivos fuera de mi infraestructura no tenía sentido. ReboFiles es el drive de la suite Rebo, junto a Rebodocs.",
      en: "Every system I build ends up needing a \"Drive\": property documents, case files, contracts. Rebuilding it per project, or paying a service that keeps files outside my infrastructure, made no sense. ReboFiles is the drive of the Rebo suite, beside Rebodocs.",
    },
    decisions: [
      {
        title: { es: "Los bytes nunca pasan por el servidor", en: "Bytes never touch the server" },
        body: {
          es: "El navegador sube y descarga directo del bucket con direcciones firmadas por unos minutos. El servidor solo guarda las entradas (carpetas, nombres, dueños, versiones), así que escala sin cargar con el tráfico de archivos.",
          en: "The browser uploads and downloads straight from the bucket through addresses signed for a few minutes. The server only stores entries (folders, names, owners, versions), so it scales without carrying file traffic.",
        },
      },
      {
        title: { es: "La app decide los permisos", en: "Your app owns permissions" },
        body: {
          es: "`createDriveHandler` recibe `identify` y `authorize`: ReboFiles pregunta a tu aplicación quién es el usuario y qué puede hacer con cada entrada. Funciona con Next.js, Express, Hono o Fastify y con Auth.js, Clerk o tokens propios.",
          en: "`createDriveHandler` takes `identify` and `authorize`: ReboFiles asks your application who the user is and what they may do with each entry. It works with Next.js, Express, Hono or Fastify and with Auth.js, Clerk or your own tokens.",
        },
      },
      {
        title: { es: "Sincronización por partes", en: "Chunked sync" },
        body: {
          es: "La app de escritorio en Tauri mantiene una carpeta del disco sincronizada en ambos sentidos y solo envía las partes del archivo que cambiaron, igual que las subidas reanudables del navegador.",
          en: "The Tauri desktop app keeps a disk folder in sync both ways and only sends the parts of a file that changed, just like the browser's resumable uploads.",
        },
      },
    ],
  },
  {
    slug: "bloom",
    index: "08",
    year: "2026",
    category: "personal",
    title: "Bloom",
    cover: "/bloom.png",
    repoHref: "https://github.com/JFranciscoRobles/bloom",
    hrefLabel: { es: "Ver en GitHub", en: "View on GitHub" },
    status: { es: "Open source", en: "Open source" },
    role: { es: "Creador / solo developer", en: "Sole creator" },
    client: { es: "Proyecto personal", en: "Personal project" },
    tagline: {
      es: "App de escritorio para productividad personal: kanban, gantt y finanzas multi-moneda.",
      en: "Desktop app for personal productivity: kanban, gantt and multi-currency finance.",
    },
    description: {
      es: "App de escritorio (Electron) que combina tableros Kanban con drag-and-drop, vista Gantt con dependencias entre tareas y gestión financiera con cuentas en múltiples monedas. Todo offline con SQLite.",
      en: "Desktop app (Electron) blending Kanban boards with drag-and-drop, a Gantt view with task dependencies, and finance tracking with multi-currency accounts. Fully offline with SQLite.",
    },
    technologies: [
      "Electron",
      "React",
      "TypeScript",
      "Vite",
      "SQLite",
      "better-sqlite3",
      "@dnd-kit",
      "Recharts",
      "Tailwind CSS",
    ],
    metrics: [
      { value: "10", label: { es: "Temas pastel por tablero", en: "Pastel themes per board" } },
      { value: "100%", label: { es: "Offline-first", en: "Offline-first" } },
      { value: ".xlsx", label: { es: "Backup nativo", en: "Native backup" } },
    ],
    context: {
      es: "Necesitaba una herramienta personal que no viviera en la nube de nadie, que aguantara mis datos por años sin riesgos de cierre de servicio, y que mezclara productividad (Kanban + Gantt) con finanzas. Notion, Things, YNAB — todos requieren cuenta. Bloom no.",
      en: "I needed a personal tool that didn't live in someone else's cloud, that would survive years of my data without sunset risk, and that combined productivity (Kanban + Gantt) with finance. Notion, Things, YNAB — all need accounts. Bloom doesn't.",
    },
    decisions: [
      {
        title: { es: "SQLite local, no IndexedDB", en: "Local SQLite, not IndexedDB" },
        body: {
          es: "`better-sqlite3` es síncrono, súper rápido y permite queries reales. El usuario puede hacer backup copiando un archivo `.db`. IndexedDB hubiera implicado migrar a sync APIs o lidiar con su modelo asíncrono extraño.",
          en: "`better-sqlite3` is synchronous, fast, and supports real SQL queries. Users can back up by copying a single `.db` file. IndexedDB would have meant fighting its odd async model.",
        },
      },
      {
        title: { es: "Electron sobre Tauri", en: "Electron over Tauri" },
        body: {
          es: "Tauri es más liviano pero el ecosistema de Node (mejor SQLite, exceljs, dnd-kit, recharts) está más maduro. Para una app personal, el tamaño extra del bundle vale la productividad.",
          en: "Tauri is lighter, but the Node ecosystem (better SQLite, exceljs, dnd-kit, recharts) is more mature. For a personal app, the extra bundle size is worth the productivity.",
        },
      },
      {
        title: { es: "Temas como sistema visual, no skin", en: "Themes as a visual system, not a skin" },
        body: {
          es: "Cada tablero puede tener uno de 10 temas pastel (Rosa, Lavanda, Cielo, Menta…). El tema no solo cambia colores: redefine gradientes y acentos en toda la UI mientras estás en ese tablero. Crea sensación de espacios distintos.",
          en: "Each board can wear one of 10 pastel themes (Rose, Lavender, Sky, Mint…). It's not just colors — it redefines gradients and accents across the whole UI while you're in that board. Different boards feel like different rooms.",
        },
      },
    ],
  },
  {
    slug: "webpwizard",
    index: "09",
    year: "2025",
    category: "personal",
    title: "WebPWizard",
    cover: "/webpwizard.png",
    href: "https://www.webpwizard.com/",
    hrefLabel: { es: "Visitar webpwizard.com", en: "Visit webpwizard.com" },
    status: { es: "En producción", en: "Live" },
    role: { es: "Creador / solo developer", en: "Sole creator" },
    client: { es: "Proyecto personal", en: "Personal project" },
    tagline: {
      es: "Convertidor de imágenes WebP/PNG/JPG 100% en el navegador. Sin uploads.",
      en: "WebP/PNG/JPG image converter — fully in the browser. Zero uploads.",
    },
    description: {
      es: "Convierte y optimiza imágenes entre WebP, PNG y JPG sin enviar nada a un servidor. Drag-and-drop, conversión por lotes, control de calidad y dimensiones, descarga en ZIP.",
      en: "Convert and optimize images between WebP, PNG and JPG without sending anything to a server. Drag-and-drop, batch conversion, quality and size control, ZIP download.",
    },
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "WebAssembly",
      "Canvas API",
      "JSZip",
      "Vercel",
    ],
    metrics: [
      { value: "3", label: { es: "Formatos soportados", en: "Supported formats" } },
      { value: "0", label: { es: "Bytes subidos al servidor", en: "Bytes uploaded to server" } },
      { value: "∞", label: { es: "Conversiones por lote", en: "Conversions per batch" } },
    ],
    context: {
      es: "La mayoría de convertidores online suben tu imagen a un servidor desconocido y la procesan ahí. Para fotos personales, screenshots con info sensible o assets de cliente, eso es un riesgo. WebPWizard hace todo en el navegador con Canvas + WebAssembly.",
      en: "Most online converters upload your image to an unknown server. For personal photos, screenshots with sensitive info or client assets, that's a risk. WebPWizard does everything in-browser using Canvas + WebAssembly.",
    },
    decisions: [
      {
        title: { es: "Canvas API para casos simples, WASM para WebP", en: "Canvas API for the easy path, WASM for WebP" },
        body: {
          es: "JPG/PNG se manejan con la Canvas API nativa (cero dependencias). Para WebP cargo un encoder WASM solo si el usuario pide ese formato. Resultado: bundle inicial pequeño y conversiones nativas instantáneas.",
          en: "JPG/PNG go through the native Canvas API (zero deps). For WebP I lazy-load a WASM encoder only when the user asks for that format. Result: small initial bundle and instant native conversions.",
        },
      },
      {
        title: { es: "Sin backend = sin costos", en: "No backend = no cost" },
        body: {
          es: "Hospedado como sitio estático en Vercel. Sin facturación por uso, sin escalado, sin compliance de uploads. Si mañana hay 10 mil usuarios diarios, sigue costando $0.",
          en: "Hosted as a static site on Vercel. No usage billing, no scaling, no upload compliance. If tomorrow it hits 10k daily users, it still costs $0.",
        },
      },
    ],
  },
  {
    slug: "portafolio",
    index: "10",
    year: "2024 — 2026",
    category: "personal",
    title: "Portafolio personal",
    cover: "/portfolio.png",
    href: "https://jfrankrobles.com",
    hrefLabel: { es: "Estás aquí", en: "You're here" },
    repoHref: "https://github.com/JFranciscoRobles/jfrankrobles-portafolio",
    status: { es: "Iterando", en: "Iterating" },
    role: { es: "Creador / solo developer", en: "Sole creator" },
    client: { es: "Yo mismo", en: "Myself" },
    tagline: {
      es: "Este sitio. Astro + Tailwind + i18n con un sistema visual editorial monocromático.",
      en: "This site. Astro + Tailwind + i18n with a monochrome editorial design system.",
    },
    description: {
      es: "Portafolio multilingüe (ES/EN) con rutas traducidas, tema oscuro/claro persistente, un sistema editorial de dos tipografías (mono para títulos, sans para lectura) y SEO completo (Open Graph, Schema.org, hreflang).",
      en: "Multilingual portfolio (ES/EN) with translated routes, persistent dark/light theme, a two-typeface editorial system (mono for titles, sans for reading) and full SEO (Open Graph, Schema.org, hreflang).",
    },
    technologies: [
      "Astro",
      "TypeScript",
      "Tailwind CSS v4",
      "astro-i18next",
      "JetBrains Mono + Inter",
      "Vercel",
    ],
    metrics: [
      { value: "34", label: { es: "Páginas estáticas", en: "Static pages" } },
      { value: "2", label: { es: "Idiomas con rutas propias", en: "Languages with own routes" } },
      { value: "0 KB", label: { es: "JavaScript de framework", en: "Framework JavaScript" } },
    ],
    context: {
      es: "Quería un portafolio que no se viera como template, que cargara instantáneamente y que me obligara a tomar decisiones de diseño deliberadas. La meta no era \"verse bonito\" sino \"verse como yo lo decidí\".",
      en: "I wanted a portfolio that didn't look like a template, that loaded instantly and forced me into deliberate design choices. The goal wasn't \"look pretty\" — it was \"look like I decided it\".",
    },
    decisions: [
      {
        title: { es: "Astro sobre Next.js", en: "Astro over Next.js" },
        body: {
          es: "Para un portafolio mayormente estático, Next.js mete React runtime que no necesito. Astro genera HTML puro, hidrata solo lo que pido (toggle de tema, menú móvil) y la página queda en kilobytes.",
          en: "For a mostly static portfolio, Next.js ships a React runtime I don't need. Astro generates pure HTML and only hydrates what I ask (theme toggle, mobile menu). The page lands in kilobytes.",
        },
      },
      {
        title: { es: "Mono para la identidad, sans para leer", en: "Mono for identity, sans for reading" },
        body: {
          es: "Empecé con JetBrains Mono para todo, pero los párrafos largos cansaban y todo pesaba lo mismo. Ahora la mono queda en títulos y etiquetas, que es donde da carácter, e Inter lleva el texto corrido. La jerarquía se lee de un vistazo.",
          en: "I started with JetBrains Mono for everything, but long paragraphs were tiring and everything carried the same weight. Now mono stays in titles and labels, where it adds character, and Inter carries body text. The hierarchy reads at a glance.",
        },
      },
      {
        title: { es: "Variables CSS para tema, no clases", en: "CSS variables for theming, not classes" },
        body: {
          es: "Cambiar de dark a light alterna `data-theme` en `<html>` y todas las variables (`--bg`, `--text`, `--line`) re-resuelven. Las clases Tailwind quedan iguales — apuntan a la variable, no al color. Cambia el tema sin tocar markup.",
          en: "Switching from dark to light flips `data-theme` on `<html>` and every variable (`--bg`, `--text`, `--line`) re-resolves. Tailwind classes stay the same — they point to the variable, not the color. Theme change with zero markup edits.",
        },
      },
    ],
  },
];

export function getProjectsByCategory(category: ProjectCategory): Project[] {
  return projects.filter((p) => p.category === category);
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
