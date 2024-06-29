/// <reference types="vite/client" />

interface ImportMetaEnv {
  VITE_FEATURE_TOGGLE_BLOG: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
