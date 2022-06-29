declare namespace NodeJS {
  interface ProcessEnv extends Env {
    readonly NOTION_TOKEN?: string
    readonly QIITA_URL?: string
    readonly ZENN_URL?: string
  }
}
