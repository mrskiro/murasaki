import styled, { css } from "styled-components"
import { AppLink } from "@/shared/components/AppLink"
import { RichText, Annotations } from "@/shared/features/post/types"

type Props = {
  text: RichText[]
}

export const Paragraph = (props: Props) => {
  return (
    <P>
      {props.text.map((v, i) => {
        if (isUsedAnythingAnnotations(v.annotations)) {
          const Wrap = v.annotations.code ? Code : Span

          if (!v.href)
            return (
              <Wrap key={i} $annotations={v.annotations}>
                {v.plainText}
              </Wrap>
            )

          return (
            <AppLink isExternal href={v.href} key={i}>
              <Wrap $annotations={v.annotations}>{v.plainText}</Wrap>
            </AppLink>
          )
        }

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

const isUsedAnythingAnnotations = (annotations: Annotations): boolean => {
  const { color, ...rest } = annotations
  if (color !== "default") return true
  if (Object.values(rest).some((v) => v)) return true
  return false
}

const P = styled.p`
  margin-bottom: 20px;
`

const annotationCSS = (annotations: Annotations) => {
  const results: ReturnType<typeof css>[] = []
  if (annotations.bold) {
    results.push(
      css`
        font-weight: bold;
      `
    )
  }
  if (annotations.italic) {
    results.push(
      css`
        font-style: italic;
      `
    )
  }
  if (annotations.underline) {
    results.push(
      css`
        text-decoration: underline;
      `
    )
  }
  if (annotations.strikethrough) {
    results.push(
      css`
        text-decoration: line-through;
      `
    )
  }
  if (annotations.color) {
    // TODO: color
  }
  return results.join("")
}

const Span = styled.span<{ $annotations: Annotations }>`
  ${(props) => annotationCSS(props.$annotations)};
`

const Code = styled.code<{ $annotations: Annotations }>`
  ${(props) => annotationCSS(props.$annotations)};
  background-color: rgba(135, 131, 120, 0.15);
  color: #eb5757;
  padding: 4px;
  border-radius: 4px;
`
