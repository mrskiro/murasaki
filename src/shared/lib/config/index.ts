type Env = Pick<
  Required<typeof process.env>,
  "NOTION_TOKEN" | "QIITA_URL" | "ZENN_URL"
>

export const load = (): Env => {
  const { NOTION_TOKEN, QIITA_URL, ZENN_URL } = process.env
  if (!NOTION_TOKEN) throw new Error("not exist notion env")
  if (!QIITA_URL) throw new Error(`not exist qiita env`)
  if (!ZENN_URL) throw new Error(`not exist zenn env`)
  return {
    NOTION_TOKEN,
    QIITA_URL,
    ZENN_URL,
  }
}
