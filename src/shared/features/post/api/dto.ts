import {
  BlockObj,
  PageObj,
  RichTextItemResponse,
} from "@/shared/lib/notion/types"
import { Post, Block, RichText } from "../types"

export const toPostFromNotion = (v: PageObj): Post => {
  const nameProperty = v.properties["Name"]
  if (nameProperty?.type !== "title") {
    throw new Error("internal error")
  }
  return {
    id: v.id,
    type: "internal",
    title: nameProperty.title[0]?.plain_text || "",
    link: `/posts/${v.id}`,
    createdAt: v.created_time,
    updatedAt: v.last_edited_time,
  }
}

export const toBlockFromNotion = (v: BlockObj): Block => {
  const base = {
    id: v.id,
    hasChildren: v.has_children,
    children: [],
  }
  const { type } = v
  switch (type) {
    case "heading_1":
      return {
        ...base,
        type: "heading1",
        color: v.heading_1.color,
        richText: v.heading_1.rich_text.map(toRichText),
      }
    case "heading_2":
      return {
        ...base,
        type: "heading2",
        color: v.heading_2.color,
        richText: v.heading_2.rich_text.map(toRichText),
      }
    case "heading_3":
      return {
        ...base,
        type: "heading3",
        color: v.heading_3.color,
        richText: v.heading_3.rich_text.map(toRichText),
      }
    case "paragraph":
      return {
        ...base,
        type: "paragraph",
        color: v.paragraph.color,
        richText: v.paragraph.rich_text.map(toRichText),
      }
    case "code":
      return {
        ...base,
        type: "code",
        language: v.code.language,
        richText: v.code.rich_text.map(toRichText),
        // caption: toRichText(v.rich_text),
      }
    case "bulleted_list_item":
      return {
        ...base,
        type: "bulletedListItem",
        color: v.bulleted_list_item.color,
        richText: v.bulleted_list_item.rich_text.map(toRichText),
      }
    default:
      return {}
    // throw new Error(`invalid block type: ${type}`)
  }
}

export const toRichText = (v: RichTextItemResponse): RichText => {
  switch (v.type) {
    case "text":
      return {
        type: "text",
        plainText: v.plain_text,
        href: v.href,
        text: {
          content: v.text.content,
          link: v.text.link,
        },
      }
    default:
      throw new Error(`invalid rich text type: ${v.type}`)
  }
}
