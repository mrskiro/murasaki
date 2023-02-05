import React from "react"
import styled from "styled-components"
import {
  Block as BlockType,
  NumberedListBlock,
} from "@/shared/features/post/types"
import { Block } from "../Block"
import { RichText } from "../RichText"

type Props = {
  block: NumberedListBlock
  blockMap: Record<string, BlockType>
  start?: number
}

export const NumberedList = (props: Props) => {
  return (
    <Ol start={props.start}>
      <li>
        <RichText text={props.block.richText} />
        {props.block.children.map((v) => (
          <Block key={v.id} block={v} blockMap={props.blockMap} />
        ))}
      </li>
    </Ol>
  )
}

const Ol = styled.ol`
  list-style: auto;
  padding-inline-start: 24px;
  margin-bottom: 2px;
`
