import React from "react"
import styled from "styled-components"
import { AppLink } from "@/shared/components/AppLink"
import {
  Block as BlockType,
  NumberedListBlock,
} from "@/shared/features/post/types"
import { Block } from "../Block"

type Props = {
  block: NumberedListBlock
  blockMap: Record<string, BlockType>
  start?: number
}

export const NumberedList = (props: Props) => {
  return (
    <Ol start={props.start}>
      <Li>
        {props.block.richText.map((v) => (
          <React.Fragment key={v.plainText}>
            {v.href === null ? (
              v.plainText
            ) : (
              <AppLink isExternal href={v.href}>
                {v.plainText}
              </AppLink>
            )}
          </React.Fragment>
        ))}
        {props.block.children.map((v) => (
          <Block key={v.id} block={v} blockMap={props.blockMap} />
        ))}
      </Li>
    </Ol>
  )
}

const Ol = styled.ol`
  list-style: auto;
  padding-left: 16px;
  margin-bottom: 2px;
`

const Li = styled.li`
  & > ol {
    padding-left: 24px;
  }
`
