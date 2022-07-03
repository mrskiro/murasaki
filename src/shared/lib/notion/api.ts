import * as Notion from "@notionhq/client"
import { load } from "@/shared/lib/config"
import { BlockObj, PageObj } from "./types"

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
  return res.results as PageObj[]
}

export const findPageBlocksById = async (id: string): Promise<BlockObj[]> => {
  const res = await client.blocks.children.list({
    block_id: id,
  })
  return res.results as BlockObj[]
}

export const findMetaById = async (id: string): Promise<PageObj> => {
  const res = (await client.pages.retrieve({
    page_id: id,
  })) as PageObj
  return res
}
