import React from "react"
import styled from "styled-components"
import * as Types from "@/shared/features/post/types"
import { gropingBlocks } from "@/shared/features/post/utils"
import { BulletedList } from "./BulletedList"
import { Code } from "./Code"
import { Heading } from "./Heading"
import { Image } from "./Image"
import { NumberedList } from "./NumberedList"
import { Paragraph } from "./Paragraph"

type Props = {
  block: Types.Block
  blockMap: Types.BlockMap
}

export const Block = (props: Props) => {
  const renderChildren = () => {
    if (!props.block.hasChildren) {
      return null
    }
    return (
      <ChildrenBlockWrap>
        {props.block.children.map((v) => (
          <Block key={v.id} block={v} blockMap={props.blockMap} />
        ))}
      </ChildrenBlockWrap>
    )
  }
  switch (props.block.type) {
    case "heading1": {
      return (
        <Heading as="h1" text={props.block.richText}>
          {renderChildren()}
        </Heading>
      )
    }
    case "heading2":
      return (
        <Heading as="h2" text={props.block.richText}>
          {renderChildren()}
        </Heading>
      )
    case "heading3":
      return (
        <Heading as="h3" text={props.block.richText}>
          {renderChildren()}
        </Heading>
      )
    case "paragraph":
      return (
        <Paragraph block={props.block} blockMap={props.blockMap}>
          {renderChildren()}
        </Paragraph>
      )
    case "bulletedListItem":
      return <BulletedList block={props.block}>{renderChildren()}</BulletedList>
    case "numberedListItem": {
      const blocks = Object.values(props.blockMap)
      const groups: string[][] = [
        ...gropingBlocks(blocks.filter((v) => !v.parentId)).values,
        ...blocks.flatMap((v) => gropingBlocks(v.children).values),
      ]
      const group = groups.find((v) => v.includes(props.block.id))
      const start = (group?.findIndex((v) => v === props.block.id) ?? 0) + 1
      return (
        <NumberedList block={props.block} start={start}>
          {renderChildren()}
        </NumberedList>
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

const ChildrenBlockWrap = styled.div`
  padding-inline-start: 24px;
`
