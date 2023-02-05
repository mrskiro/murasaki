import styled from "styled-components"
import * as Types from "@/shared/features/post/types"
import { RichText } from "../RichText"

type Props = {
  text: Types.RichText[]
}

export const Paragraph = (props: Props) => (
  <P>
    <RichText text={props.text} />
  </P>
)

const P = styled.p`
  margin-bottom: 20px;
`
