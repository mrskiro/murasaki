import * as Notion from "@notionhq/client"
import { load } from "@/shared/lib/config"
import { BlockObj, PageObj } from "./types"

const { NOTION_TOKEN } = load()
const DATABASE_ID = "3dc71c3166304af6bcde94eb88258b0a"

const client = new Notion.Client({
  auth: NOTION_TOKEN,
})

export const findPostsWherePublished = async (): Promise<PageObj[]> => {
  const res = await client.databases.query({
    database_id: DATABASE_ID,
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

export const findMetaBySlug = async (slug: string): Promise<PageObj> => {
  const page = await findPageBySlug(slug)
  const res = await findMetaById(page.id)
  return res
}

const findPageBySlug = async (slug: string): Promise<PageObj> => {
  const db = await client.databases.query({
    database_id: DATABASE_ID,
    filter: {
      and: [
        {
          type: "rich_text",
          property: "Slug",
          rich_text: {
            equals: slug,
          },
        },
      ],
    },
  })
  const [target] = db.results
  if (!target) {
    throw new Error(`not match slug: ${slug}`)
  }
  return target as PageObj
}

export const findMetaById = async (id: string): Promise<PageObj> => {
  const res = (await client.pages.retrieve({
    page_id: id,
  })) as PageObj
  return res
}

export const findPageBlocksById = async (id: string): Promise<BlockObj[]> => {
  const res = await client.blocks.children.list({
    block_id: id,
  })
  return res.results as BlockObj[]
}
