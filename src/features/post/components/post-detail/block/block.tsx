import React from "react"
import styled from "styled-components"
import * as Types from "@/features/post/types"
import { gropingBlocks } from "@/features/post/utils"
import { BulletedList } from "./bulleted-list"
import { Code } from "./code"
import { Heading } from "./heading"
import { Image } from "./image"
import { NumberedList } from "./numbered-list"
import { Paragraph } from "./paragraph"

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
      return (
        <BulletedList block={props.block}>
          {props.block.children.map((v) => (
            <Block key={v.id} block={v} blockMap={props.blockMap} />
          ))}
        </BulletedList>
      )
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
          {props.block.children.map((v) => (
            <Block key={v.id} block={v} blockMap={props.blockMap} />
          ))}
        </NumberedList>
      )
    }
    case "code":
      return (
        <Code text={props.block.richText} language={props.block.language} />
      )
    case "image":
      return (
        <Image
          id={props.block.id}
          alt={props.block.caption[0]?.plainText ?? "画像"}
        />
      )
    default:
      return null
  }
}

const ChildrenBlockWrap = styled.div`
  padding-inline-start: 24px;
`
