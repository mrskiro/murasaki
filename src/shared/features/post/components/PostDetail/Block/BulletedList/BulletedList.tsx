import React from "react"
import styled from "styled-components"
import { Block } from "@/shared/features/post/types"
import { RichText } from "../RichText"

type Props = {
  blocks: Block[]
}

export const BulletedList = (props: Props) => {
  return (
    <>
      {props.blocks.map((b) => (
        <Ul key={b.id}>
          <Li>
            <RichText text={b.richText} />
            {b.hasChildren && <BulletedList blocks={b.children} />}
          </Li>
        </Ul>
      ))}
    </>
  )
}

const Ul = styled.ul`
  list-style: inherit;
  padding-left: 16px;
  margin-bottom: 2px;
`

const Li = styled.li`
  & > ul {
    padding-left: 24px;
  }
`
