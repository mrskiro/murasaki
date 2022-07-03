import { Block, RichText } from "./block"

export type Post = {
  id: string
  type: "internal" | "external"
  title: string
  link: string
  createdAt: string
  updatedAt: string
}

export type PostDetail = {
  title: RichText
  blocks: Block[]
  createdAt: string
  updatedAt: string
}
