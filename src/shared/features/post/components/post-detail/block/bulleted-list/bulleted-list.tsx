import React from "react"
import styled from "styled-components"
import { BulletedListItemBlock } from "@/shared/features/post/types"
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
  list-style-position: inside;
  margin-bottom: 2px;
`
