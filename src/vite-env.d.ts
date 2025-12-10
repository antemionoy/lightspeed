/// <reference types="vite/client" />

declare module '*.module.css' {
  const classes: { readonly [key: string]: string };
  export default classes;
}

interface ImportMetaEnv {
  readonly VITE_ECWID_STORE_ID: string;
  readonly VITE_ECWID_TOKEN: string;
  readonly VITE_ECWID_BASE_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
