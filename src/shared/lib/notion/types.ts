export type PageObj = {
  object: "page"
  id: string
  created_time: string
  last_edited_time: string
  parent: {
    type: string
    database_id: string
  }
  cover: Media | null
  icon: Icon | null
  archived: boolean
  properties: Record<string, Property>
  url: string
}

type Icon = {
  type: "emoji"
  emoji: string
} & Media

type Media =
  | {
      type: "external"
      external: {
        url: string
      }
    }
  | {
      type: "file"
      file: {
        url: string
        expiry_time: string
      }
    }

type Property =
  | {
      type: "number"
      number: number | null
      id: string
    }
  | {
      type: "url"
      url: string | null
      id: string
    }
  | {
      type: "select"
      select: {
        id: string
        name: string
        color: SelectColor
      } | null
      id: string
    }
  | {
      type: "multi_select"
      multi_select: { id: string; name: string; color: SelectColor }[]
      id: string
    }
  | {
      type: "date"
      date: DateResponse | null
      id: string
    }
  | {
      type: "email"
      email: string | null
      id: string
    }
  | {
      type: "phone_number"
      phone_number: string | null
      id: string
    }
  | {
      type: "checkbox"
      checkbox: boolean
      id: string
    }
  | {
      type: "files"
      files: (
        | {
            file: {
              url: string
              expiry_time: string
            }
            name: string
            type?: "file"
          }
        | {
            external: {
              url: string
            }
            name: string
            type?: "external"
          }
      )[]
      id: string
    }
  | {
      type: "created_time"
      created_time: string
      id: string
    }
  | {
      type: "last_edited_time"
      last_edited_time: string
      id: string
    }
  | {
      type: "formula"
      formula:
        | {
            type: "string"
            string: string | null
          }
        | {
            type: "date"
            date: DateResponse | null
          }
        | {
            type: "number"
            number: number | null
          }
        | {
            type: "boolean"
            boolean: boolean | null
          }
      id: string
    }
  | {
      type: "title"
      title: RichTextItemResponse[]
      id: string
    }
  | {
      type: "rich_text"
      rich_text: RichTextItemResponse[]
      id: string
    }

type DateResponse = {
  start: string
  end: string | null
  time_zone: string | null
}

type RichTextItemResponse =
  | {
      type: "text"
      text: {
        content: string
        link: {
          url: string
        } | null
      }
      annotations: {
        bold: boolean
        italic: boolean
        strikethrough: boolean
        underline: boolean
        code: boolean
        color: RichTextColor
      }
      plain_text: string
      href: string | null
    }
  | {
      type: "mention"
      mention:
        | {
            type: "date"
            date: DateResponse
          }
        | {
            type: "link_preview"
            link_preview: {
              url: string
            }
          }
        | {
            type: "template_mention"
            template_mention:
              | {
                  type: "template_mention_date"
                  template_mention_date: "today" | "now"
                }
              | {
                  type: "template_mention_user"
                  template_mention_user: "me"
                }
          }
        | {
            type: "page"
            page: {
              id: string
            }
          }
        | {
            type: "database"
            database: {
              id: string
            }
          }
      annotations: {
        bold: boolean
        italic: boolean
        strikethrough: boolean
        underline: boolean
        code: boolean
        color: RichTextColor
      }
      plain_text: string
      href: string | null
    }
  | {
      type: "equation"
      equation: {
        expression: string
      }
      annotations: {
        bold: boolean
        italic: boolean
        strikethrough: boolean
        underline: boolean
        code: boolean
        color: RichTextColor
      }
      plain_text: string
      href: string | null
    }

type RichTextColor =
  | "default"
  | "gray"
  | "brown"
  | "orange"
  | "yellow"
  | "green"
  | "blue"
  | "purple"
  | "pink"
  | "red"
  | "gray_background"
  | "brown_background"
  | "orange_background"
  | "yellow_background"
  | "green_background"
  | "blue_background"
  | "purple_background"
  | "pink_background"
  | "red_background"

type SelectColor =
  | "default"
  | "gray"
  | "brown"
  | "orange"
  | "yellow"
  | "green"
  | "blue"
  | "purple"
  | "pink"
  | "red"
