import styled from "styled-components"
import { RichText } from "@/shared/features/post/types"
import { AppLink } from "@/shared/components/AppLink"

type Props = {
  text: RichText[]
}

export const Paragraph = (props: Props) => {
  const [text] = props.text
  if (text?.href) {
    return (
      <P>
        <AppLink isAnchor href={text.href} target="_brank">
          {text.plainText}
        </AppLink>
      </P>
    )
  }
  return <P>{text?.plainText}</P>
}

const P = styled.p`
  margin-bottom: 8px;
`
