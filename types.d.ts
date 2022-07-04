declare namespace NodeJS {
  interface ProcessEnv extends Env {
    readonly NOTION_TOKEN?: string
    readonly ABOUT_PAGE_ID?: string
    readonly QIITA_URL?: string
    readonly ZENN_URL?: string
  }
}

interface Window {
  gtag(type: "config", googleAnalyticsId: string, { page_path: string })
  gtag(
    type: "event",
    eventAction: string,
    fieldObject: {
      event_label: string
      event_category: string
      value?: string
    }
  )
}
