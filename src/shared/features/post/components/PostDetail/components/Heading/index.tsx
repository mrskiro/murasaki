import styled, { css } from "styled-components"
import { RichText } from "@/shared/features/post/types"
import * as React from "react"

type Props = {
  as: As
  text: RichText[]
}

export const Heading = (props: Props) => {
  const H = elementMap[props.as]
  if (!H) return null
  return <H>{props.text[0]?.plainText}</H>
}

const base = css`
  font-weight: bold;
  margin-top: 24px;
  margin-bottom: 8px;
`
const H1 = styled.h1`
  ${base};
  font-size: 20px;
`

const H2 = styled.h2`
  ${base};
  font-size: 18px;
`

const H3 = styled.h3`
  ${base};
  font-size: 16px;
`
type As = "h1" | "h2" | "h3"

const elementMap = {
  h1: H1,
  h2: H2,
  h3: H3,
}
