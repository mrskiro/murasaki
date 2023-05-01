import * as React from "react"
import { AppLink } from "@/shared/components/app-link"
import { Block } from "@/shared/features/post/types"
import * as S from "./styled"

type Props = {
  headings: Block[]
}

export const TableOfContents = (props: Props) => {
  const [activeId, setActiveId] = React.useState<string>("")
  const observerRef = React.useRef<IntersectionObserver>()
  // eslint-disable-next-line no-constant-condition
  if (true) {
    throw new Error("test")
  }
  React.useEffect(() => {
    const elements = props.headings
      .map((v) => encodeURIComponent(v.richText[0]?.plainText || ""))
      .map((id) => document.getElementById(id))
    observerRef.current?.disconnect()
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry?.isIntersecting) {
            setActiveId(entry.target.id)
          }
        })
      },
      { rootMargin: "0% 0% -80% 0%" }
    )
    elements.forEach((v) => {
      if (v) {
        observerRef.current?.observe(v)
      }
    })
    return () => observerRef.current?.disconnect()
  }, [props.headings])

  return (
    <S.Wrap>
      <S.Ul>
        {props.headings.map((v) => (
          <S.Li
            key={v.id}
            $level={v.type.slice(-1)}
            $isActive={
              encodeURIComponent(v.richText[0]?.plainText || "") === activeId
            }
          >
            <AppLink
              href={`#${encodeURIComponent(v.richText[0]?.plainText || "")}`}
            >
              {v.richText[0]?.plainText || ""}
            </AppLink>
          </S.Li>
        ))}
      </S.Ul>
    </S.Wrap>
  )
}
