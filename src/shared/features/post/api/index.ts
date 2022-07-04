import {
  findDBWherePublished,
  findMetaById,
  findPageBlocksById,
} from "@/shared/lib/notion/api"
import { Block } from "../types"
import { Post, PostDetail } from "../types/post"
import { toBlockFromNotion, toPostFromNotion, toRichText } from "./dto"

export const findPosts = async (): Promise<Post[]> => {
  const posts = await findDBWherePublished()
  return posts.map(toPostFromNotion)
}

export const findPostDetailById = async (id: string): Promise<PostDetail> => {
  const [meta, blocks] = await Promise.all([
    findMetaById(id),
    findWithChildren(id),
  ])

  const nameProperty = meta.properties["Name"] || meta.properties["title"]

  if (!nameProperty) {
    throw new Error("not exist post title")
  }
  if (nameProperty.type !== "title") {
    throw new Error(`not title type: ${nameProperty.type}`)
  }
  const [title] = nameProperty.title
  if (!title) {
    throw new Error(`not exist title: ${nameProperty.title}`)
  }
  return {
    title: toRichText(title),
    blocks,
    createdAt: meta.created_time,
    updatedAt: meta.last_edited_time,
  }
}

const findWithChildren = async (id: string): Promise<Block[]> => {
  const results: Block[] = []
  const blocks = await findPageBlocksById(id)

  for (const b of blocks) {
    if (!b.has_children) {
      results.push({ ...toBlockFromNotion(b) })
      continue
    }

    const children = await findWithChildren(b.id)
    results.push({
      ...toBlockFromNotion(b),
      children,
    })
  }
  return results
}
