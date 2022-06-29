declare namespace NodeJS {
  interface ProcessEnv extends Env {
    readonly QIITA_URL?: string
    readonly ZENN_URL?: string
  }
}
