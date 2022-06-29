import * as Notion from "@notionhq/client"
import { load } from "../config"
import { PageObj } from "./types"

const { NOTION_TOKEN } = load()

const client = new Notion.Client({
  auth: NOTION_TOKEN,
})

export const findDBWherePublished = async (): Promise<PageObj[]> => {
  const res = await client.databases.query({
    database_id: "3dc71c3166304af6bcde94eb88258b0a",
    filter: {
      or: [
        {
          type: "checkbox",
          property: "Published",
          checkbox: {
            equals: true,
          },
        },
      ],
    },
    sorts: [
      {
        property: "CreatedAt",
        direction: "ascending",
      },
    ],
  })
  // notion-sdk-jsの型定義が壊れている
  return res.results as PageObj[]
}
