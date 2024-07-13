/// <reference types="vite/client" />

interface ImportMetaEnv {
  PLAYWIRGHT_USER: string;
  PLAYWIRGHT_PASSWORD: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
