import { Block as BlockType, BlockMap } from "@/shared/features/post/types"
import { gropingBlocks } from "@/shared/features/post/utils"
import { BulletedList } from "../BulletedList"
import { Code } from "../Code"
import { Heading } from "../Heading"
import { Image } from "../Image"
import { Paragraph } from "../Paragraph"
import { NumberedList } from "./NumberedList"

type Props = {
  block: BlockType
  blockMap: BlockMap
}

export const Block = (props: Props) => {
  switch (props.block.type) {
    case "heading1":
      return <Heading as="h1" text={props.block.richText} />
    case "heading2":
      return <Heading as="h2" text={props.block.richText} />
    case "heading3":
      return <Heading as="h3" text={props.block.richText} />
    case "paragraph":
      return <Paragraph text={props.block.richText} />
    case "bulletedListItem":
      return <BulletedList blocks={[props.block]} />
    case "numberedListItem": {
      const blocks = Object.values(props.blockMap)
      const groups: string[][] = [
        ...gropingBlocks(blocks.filter((v) => !v.parentId)).values,
        ...blocks.flatMap((v) => gropingBlocks(v.children).values),
      ]
      const group = groups.find((v) => v.includes(props.block.id))
      const start = (group?.findIndex((v) => v === props.block.id) ?? 0) + 1
      return (
        <NumberedList
          block={props.block}
          blockMap={props.blockMap}
          start={start}
        />
      )
    }
    case "code":
      return (
        <Code text={props.block.richText} language={props.block.language} />
      )
    case "image":
      return <Image src={props.block.url} alt="" />
    default:
      return null
  }
}
