import styled from "styled-components"
import { AppLink } from "@/shared/components/AppLink"
import { RichText } from "@/shared/features/post/types"

type Props = {
  text: RichText[]
}

export const Paragraph = (props: Props) => {
  const [text] = props.text
  if (text?.href) {
    return (
      <P>
        <AppLink isExternal href={text.href}>
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
