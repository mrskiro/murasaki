import React from "react"
import styled from "styled-components"
import { BulletedListItemBlock } from "@/features/post/types"
import { RichText } from "../rich-text"

type Props = {
  block: BulletedListItemBlock
  children?: React.ReactNode
}

export const BulletedList = (props: Props) => {
  return (
    <Ul>
      <li>
        <RichText text={props.block.richText} />
        {props.children}
      </li>
    </Ul>
  )
}

const Ul = styled.ul`
  list-style: inherit;
  margin-bottom: 2px;
  padding-left: 20px;
`
