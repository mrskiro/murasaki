import React from "react"
import styled from "styled-components"
import { NumberedListBlock } from "@/features/post/types"
import { RichText } from "../rich-text"

type Props = {
  block: NumberedListBlock
  start?: number
  children?: React.ReactNode
}

export const NumberedList = (props: Props) => {
  return (
    <Ol start={props.start}>
      <li>
        <RichText text={props.block.richText} />
        {props.children}
      </li>
    </Ol>
  )
}

const Ol = styled.ol`
  list-style: auto;
  margin-bottom: 2px;
  padding-left: 20px;
`
