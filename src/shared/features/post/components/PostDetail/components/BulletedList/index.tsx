import styled from "styled-components"
import { Block } from "@/shared/features/post/types"
import { AppLink } from "@/shared/components/AppLink"

type Props = {
  blocks: Block[]
}

export const BulletedList = (props: Props) => {
  return (
    <>
      {props.blocks.map((b) => (
        <Ul key={b.id}>
          {b.richText.map((v) => (
            <Li key={v.plainText}>
              {v.href ? (
                <AppLink isAnchor target="_blank" href={v.href}>
                  {v.plainText}
                </AppLink>
              ) : (
                v.plainText
              )}
              {b.hasChildren && <BulletedList blocks={b.children} />}
            </Li>
          ))}
        </Ul>
      ))}
    </>
  )
}

const Ul = styled.ul`
  list-style: inherit;
  list-style-position: inside;
  margin-bottom: 2px;
`

const Li = styled.li`
  & > ul {
    padding-left: 24px;
  }
`
