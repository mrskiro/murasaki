import React from "react"
import styled from "styled-components"
import { AppLink } from "@/shared/components/AppLink"
import { NumberedListBlock } from "@/shared/features/post/types"

type Props = {
  block: NumberedListBlock
}

export const NumberedList = (props: Props) => {
  return (
    <Ol>
      {props.block.items.map((item, i) => (
        <Li key={i}>
          {item.richText.map((v) => (
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
        </Li>
      ))}
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
