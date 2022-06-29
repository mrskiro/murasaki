type Env = Pick<Required<typeof process.env>, "QIITA_URL" | "ZENN_URL">

export const load = (): Env => {
  const { QIITA_URL, ZENN_URL } = process.env
  if (!QIITA_URL) throw new Error(`not exist qiita env`)
  if (!ZENN_URL) throw new Error(`not exist zenn env`)
  return {
    QIITA_URL,
    ZENN_URL,
  }
}
