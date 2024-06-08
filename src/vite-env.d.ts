/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_FEATURE_CHAT: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
