import { RichTextItemResponse } from "@notionhq/client/build/src/api-endpoints"
import {
  findPostsWherePublished,
  findMetaByPageId,
  findMetaBySlug,
  findPageBlocksByPageId,
  BlockObject,
} from "@/shared/lib/notion/api"
import { Block, BlockBase, RichText } from "../types"
import { Post, PostDetail } from "../types/post"

export const findPosts = async (): Promise<Post[]> => {
  const res = await findPostsWherePublished()

  const posts: Post[] = res.map((v) => {
    const nameProperty = v.properties["Name"]
    if (nameProperty?.type !== "title") {
      throw new Error("not exist name property")
    }
    const slugProperty = v.properties["Slug"]
    if (slugProperty?.type !== "rich_text") {
      throw new Error("not exist slug property")
    }
    const [slug] = slugProperty.rich_text
    if (!slug) {
      throw new Error("not exist slug rich text property")
    }
    return {
      id: v.id,
      type: "internal",
      title: nameProperty.title[0]?.plain_text || "",
      link: `/posts/${slug.plain_text}`,
      createdAt: v.created_time,
      updatedAt: v.last_edited_time,
    }
  })
  return posts
}

export const findPostDetailBySlug = async (
  slug: string
): Promise<PostDetail> => {
  const meta = await findMetaBySlug(slug)
  const [blocks] = await Promise.all([findPageBlocksByPageId(meta.id)])
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
    title: richTextFrom(title),
    blocks: blocksFrom(blocks),
    createdAt: meta.created_time,
    updatedAt: meta.last_edited_time,
  }
}

export const findPostDetailById = async (
  pageId: string
): Promise<PostDetail> => {
  const [meta, blocks] = await Promise.all([
    findMetaByPageId(pageId),
    findPageBlocksByPageId(pageId),
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
    title: richTextFrom(title),
    blocks: blocksFrom(blocks),
    createdAt: meta.created_time,
    updatedAt: meta.last_edited_time,
  }
}

const blocksFrom = (blocks: BlockObject[]): Block[] => {
  const results: Block[] = []

  blocks.forEach((block) => {
    const children = []
    if (block.has_children) {
      children.push(...blocksFrom(block.children))
    }
    const base: BlockBase = {
      id: block.id,
      hasChildren: block.has_children,
      children,
    }

    const isNested = block.type === "numbered_list_item"

    if (isNested) {
      const richText = richTextsFrom(block.numbered_list_item.rich_text)
      // 親を探す
      const maybeParent = results.at(-1)
      const hasParent = maybeParent?.type === "numberedListItem"
      // なければ自分が親になる
      if (!hasParent) {
        results.push({
          ...base,
          type: "numberedListItem",
          // TODO
          richText: [],
          items: [
            {
              color: block.numbered_list_item.color,
              richText,
            },
          ],
        })
        return
      }
      // あれば子供になる
      results.splice(results.length - 1, 1, {
        ...base,
        ...maybeParent,
        items: [
          ...maybeParent.items,
          {
            color: block.numbered_list_item.color,
            richText,
          },
        ],
      })
    }

    switch (block.type) {
      case "heading_1": {
        results.push({
          ...base,
          type: "heading1",
          color: block.heading_1.color,
          richText: richTextsFrom(block.heading_1.rich_text),
        })
        return
      }
      case "heading_2": {
        results.push({
          ...base,
          type: "heading2",
          color: block.heading_2.color,
          richText: richTextsFrom(block.heading_2.rich_text),
        })
        return
      }
      case "heading_3": {
        results.push({
          ...base,
          type: "heading3",
          color: block.heading_3.color,
          richText: richTextsFrom(block.heading_3.rich_text),
        })
        return
      }
      case "paragraph": {
        results.push({
          ...base,
          type: "paragraph",
          color: block.paragraph.color,
          richText: richTextsFrom(block.paragraph.rich_text),
        })
        return
      }
      case "bulleted_list_item": {
        results.push({
          ...base,
          type: "bulletedListItem",
          color: block.bulleted_list_item.color,
          richText: richTextsFrom(block.bulleted_list_item.rich_text),
        })
        return
      }
      case "code":
        results.push({
          ...base,
          type: "code",
          language: block.code.language,
          richText: richTextsFrom(block.code.rich_text),
        })
        return
      case "image":
        {
          if (block.image.type === "file") {
            results.push({
              ...base,
              type: "image",
              url: block.image.file.url,
              // TODO
              richText: [],
            })
          }
        }
        return
      default:
        return
    }
  })
  return results
}

const richTextsFrom = (texts: RichTextItemResponse[]): RichText[] => {
  return texts.map(richTextFrom)
}

const richTextFrom = (richText: RichTextItemResponse): RichText => {
  switch (richText.type) {
    case "text": {
      return {
        type: "text",
        plainText: richText.plain_text,
        text: {
          ...richText.text,
        },
        href: richText.href,
        annotations: richText.annotations,
      }
    }
    case "mention":
    case "equation":
    default:
      throw new Error(`unsupportted rich text type: ${richText.type}`)
  }
}
