import * as React from "react"
import styled, { css } from "styled-components"
import { AppLink } from "@/shared/components/AppLink"
import * as Types from "@/shared/features/post/types"

type Props = {
  text: Types.RichText[]
}

export const RichText = (props: Props) => {
  return (
    <>
      {props.text.map((v, i) => (
        <React.Fragment key={i}>{wrapText(v)}</React.Fragment>
      ))}
    </>
  )
}

const wrapText = (text: Types.RichText) => {
  let element: React.ReactNode = (
    <Text
      as={text.annotations.code ? "code" : "span"}
      $annotations={text.annotations}
    >
      {text.plainText}
    </Text>
  )
  if (text.href) {
    element = (
      <AppLink isExternal href={text.href}>
        {element}
      </AppLink>
    )
  }
  return element
}

const Text = styled.span<{ $annotations: Types.Annotations }>`
  ${(props) => annotationsCSS(props.$annotations)}
`

const annotationsCSS = (annotations: Types.Annotations) => {
  let style: ReturnType<typeof css> = []
  if (annotations.bold) {
    style = css(
      {
        fontWeight: "bold",
      },
      style
    )
  }
  if (annotations.italic) {
    style = css(
      {
        fontStyle: "italic",
      },
      style
    )
  }
  if (annotations.underline) {
    style = css(
      {
        textDecoration: "underline",
      },
      style
    )
  }
  if (annotations.strikethrough) {
    style = css(
      {
        textDecoration: "line-through",
      },
      style
    )
  }
  if (annotations.code) {
    style = css(
      {
        borderRadius: "4px",
        padding: "4px",
        color: "#eb5757",
        backgroundColor: "rgba(135, 131, 120, 0.15)",
      },
      style
    )
  }
  if (annotations.color) {
    // TODO: color
  }
  return style
}
