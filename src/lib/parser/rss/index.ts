import Parser from "rss-parser"

const parser = new Parser()

export const parseByURL = async (
  url: string
): Promise<Parser.Output<Record<string, unknown>>> => {
  const result = await parser.parseURL(url)
  return result
}
