import * as React from "react"
import styled from "styled-components"
import * as Types from "@/features/post/types"
import { RichText } from "../rich-text"

type Props = {
  block: Types.ParagraphBlock
  blockMap: Types.BlockMap
  children?: React.ReactNode
}

export const Paragraph = (props: Props) => {
  return (
    <P>
      <RichText text={props.block.richText} />
      {props.children}
    </P>
  )
}

const P = styled.p`
  margin-bottom: 20px;
`
