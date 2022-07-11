type Heading<
  T extends number[],
  I extends unknown[] = [],
  R extends Record<string, string> = {}
> = T["length"] extends 0
  ? never
  : I["length"] extends T["length"]
  ? R
  : Heading<
      T,
      [...I, unknown],
      R & { [key in `heading${T[I["length"]]}`]: `heading${T[I["length"]]}` }
    >

const heading: Heading<[1, 2, 3]> = {
  heading1: "heading1",
  heading2: "heading2",
  heading3: "heading3",
}

// TODO: いらないのは消す
const BlockType = {
  ...heading,
  paragraph: "paragraph",
  bulletedListItem: "bulletedListItem",
  numberedListItem: "numberedListItem",
  quote: "quote",
  todo: "todo",
  toggle: "toggle",
  template: "template",
  syncedBlock: "syncedBlock",
  childPage: "childPage",
  childDatabase: "childDatabase",
  equation: "equation",
  code: "code",
  callout: "callout",
  divider: "divider",
  breadcrumb: "breadcrumb",
  tableOfContents: "tableOfContents",
  columnList: "columnList",
  column: "column",
  linkToPage: "linkToPage",
  table: "table",
  tableRow: "tableRow",
  embed: "embed",
  bookmark: "bookmark",
  image: "image",
  video: "video",
  pdf: "pdf",
  file: "file",
  audio: "audio",
  linkPreview: "linkPreview",
  unsupported: "unsupported",
} as const

type BlockType = typeof BlockType[keyof typeof BlockType]

export type Block = {
  id: string
} & Children &
  (HeadingBlock | ParagraphBlock | CodeBlock | BulletedListItemBlock)

type Children = {
  hasChildren: boolean
  children: Block[]
}

export type HeadingBlock = {
  type: Extract<BlockType, `heading${number}`>
  color: string
  richText: RichText[]
}

export type ParagraphBlock = {
  type: typeof BlockType["paragraph"]
  color: string
  richText: RichText[]
}

export type CodeBlock = {
  type: typeof BlockType["code"]
  richText: RichText[]
  // caption: RichText
  language: string
}

export type BulletedListItemBlock = {
  type: typeof BlockType["bulletedListItem"]
  richText: RichText[]
  color: string
}

export type RichText = {
  plainText: string
  href: string | null
  annotations: Annotations
} & (TextRichText | MentionRichText | EquationRichText)

export type Annotations = {
  bold: boolean
  italic: boolean
  strikethrough: boolean
  underline: boolean
  code: boolean
  color: string
}

type TextRichText = {
  type: "text"
  text: {
    content: string
    link: {
      url: string
    } | null
  }
}

type MentionRichText = {
  type: "mention"
  // todo
  mention: {}
}

type EquationRichText = {
  type: "equation"
  equation: {
    expression: string
  }
}

// type RichTextItemResponse =
//   // | {
//   //     type: "mention"
//   //     mention:
//   //       | {
//   //           type: "date"
//   //           date: DateResponse
//   //         }
//   //       | {
//   //           type: "link_preview"
//   //           link_preview: {
//   //             url: string
//   //           }
//   //         }
//   //       | {
//   //           type: "template_mention"
//   //           template_mention:
//   //             | {
//   //                 type: "template_mention_date"
//   //                 template_mention_date: "today" | "now"
//   //               }
//   //             | {
//   //                 type: "template_mention_user"
//   //                 template_mention_user: "me"
//   //               }
//   //         }
//   //       | {
//   //           type: "page"
//   //           page: {
//   //             id: string
//   //           }
//   //         }
//   //       | {
//   //           type: "database"
//   //           database: {
//   //             id: string
//   //           }
//   //         }
//   //     annotations: {
//   //       bold: boolean
//   //       italic: boolean
//   //       strikethrough: boolean
//   //       underline: boolean
//   //       code: boolean
//   //       color: RichTextColor
//   //     }
//   //     plain_text: string
//   //     href: string | null
//   //   }
//   {
//     type: "equation"
//     equation: {
//       expression: string
//     }
//     annotations: {
//       bold: boolean
//       italic: boolean
//       strikethrough: boolean
//       underline: boolean
//       code: boolean
//       color: RichTextColor
//     }
//     plain_text: string
//     href: string | null
//   }
