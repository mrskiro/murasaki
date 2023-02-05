import React from "react"
import styled from "styled-components"
import { AppLink } from "@/shared/components/AppLink"
import { Block } from "@/shared/features/post/types"

type Props = {
  blocks: Block[]
}

export const BulletedList = (props: Props) => {
  return (
    <>
      {props.blocks.map((b) => (
        <Ul key={b.id}>
          <Li>
            {b.richText.map((v) => (
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
