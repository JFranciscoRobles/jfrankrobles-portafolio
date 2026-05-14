/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly GOOGLE_SITE_VERIFICATION?: string;
  readonly BING_SITE_VERIFICATION?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
