import {
  findDBWherePublished,
  findMetaById,
  findPageBlocksById,
} from "@/shared/lib/notion/api"
import { Post, PostDetail } from "../types/post"
import { toBlockFromNotion, toPostFromNotion, toRichText } from "./dto"

export const findPosts = async (): Promise<Post[]> => {
  const posts = await findDBWherePublished()
  return posts.map(toPostFromNotion)
}

export const findPostDetailById = async (id: string): Promise<PostDetail> => {
  const [meta, blocks] = await Promise.all([
    findMetaById(id),
    findPageBlocksById(id),
  ])

  const nameProperty = meta.properties["Name"]

  if (!nameProperty) {
    throw new Error("not exist post title")
  }
  if (nameProperty.type !== "title") {
    throw new Error(`not title type: ${nameProperty.type}`)
  }

  return {
    title: toRichText(nameProperty.title[0]),
    blocks: blocks.map(toBlockFromNotion),
    createdAt: meta.created_time,
    updatedAt: meta.last_edited_time,
  }
}
