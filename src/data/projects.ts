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
    slug: "probien-catalogo",
    index: "02",
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
      es: "Portal público para una inmobiliaria de 20 años con 300+ propiedades exclusivas.",
      en: "Public portal for a 20-year-old agency with 300+ exclusive listings.",
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
      { value: "300+", label: { es: "Propiedades indexadas", en: "Indexed listings" } },
      { value: "40+", label: { es: "Agentes en plataforma", en: "Agents on platform" } },
      { value: "20", label: { es: "Años de la empresa", en: "Years in business" } },
    ],
    context: {
      es: "Probien manejaba su inventario de lujo en redes sociales y portales genéricos donde compite con miles de listados. Necesitaban un canal propio: rápido, con búsqueda profesional, optimizado para Google y que reflejara el posicionamiento premium.",
      en: "Probien used to push listings on social media and generic portals where they compete with thousands of properties. They needed an owned channel: fast, with serious search, ranked on Google, reflecting their premium positioning.",
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
    index: "03",
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
    slug: "bloom",
    index: "04",
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
    index: "05",
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
    index: "06",
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
      es: "Portafolio multilingüe (ES/EN) con rutas traducidas, tema oscuro/claro persistente, sistema editorial basado en una sola tipografía mono, y SEO completo (Open Graph, Schema.org, hreflang).",
      en: "Multilingual portfolio (ES/EN) with translated routes, persistent dark/light theme, an editorial system built around a single mono typeface, and full SEO (Open Graph, Schema.org, hreflang).",
    },
    technologies: [
      "Astro",
      "TypeScript",
      "Tailwind CSS v4",
      "astro-i18next",
      "JetBrains Mono",
      "Vercel",
    ],
    metrics: [
      { value: "12", label: { es: "Páginas estáticas", en: "Static pages" } },
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
        title: { es: "Una sola tipografía (JetBrains Mono)", en: "One typeface (JetBrains Mono)" },
        body: {
          es: "Probé serif + sans, luego solo serif. Terminé con mono para todo: títulos, body, meta. Refleja mi trabajo (código) sin disfrazarlo de algo más \"editorial\". La consistencia es el diseño.",
          en: "I tried serif + sans, then serif-only. Landed on mono for everything: titles, body, meta. It reflects my actual work (code) without dressing it up as something more \"editorial\". Consistency is the design.",
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
