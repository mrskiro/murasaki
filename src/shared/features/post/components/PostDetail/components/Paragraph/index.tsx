import styled from "styled-components"
import { AppLink } from "@/shared/components/AppLink"
import { RichText } from "@/shared/features/post/types"

type Props = {
  text: RichText[]
}

export const Paragraph = (props: Props) => {
  return (
    <P>
      {props.text.map((v, i) => {
        if (!v.href) return v.plainText
        return (
          <AppLink isExternal href={v.href} key={i}>
            {v.plainText}
          </AppLink>
        )
      })}
    </P>
  )
}

const P = styled.p`
  margin-bottom: 8px;
`
