import { useEffect } from "react"
import styled from "styled-components"
import Prism from "prismjs"

import { RichText } from "@/features/post/types"
import "prismjs/plugins/line-numbers/prism-line-numbers.js"
import "prismjs/plugins/line-numbers/prism-line-numbers.css"

import "prismjs/themes/prism-okaidia.css"
import "prismjs/components/prism-clike.min.js"
import "prismjs/components/prism-javascript.min.js"
import "prismjs/components/prism-js-extras.min.js"
import "prismjs/components/prism-typescript.min.js"
import "prismjs/components/prism-jsx.min.js"
import "prismjs/components/prism-tsx.min.js"
import "prismjs/components/prism-json.min.js"
import "prismjs/components/prism-css.min.js"
import "prismjs/components/prism-css-extras.min.js"

type Props = {
  text: RichText[]
  language: string
}

export const Code = (props: Props) => {
  useEffect(() => {
    Prism.highlightAll()
  }, [])

  return (
    <Pre className="line-numbers">
      <code className={`language-${props.language}`}>
        {props.text[0]?.plainText}
      </code>
    </Pre>
  )
}

const Pre = styled.pre`
  // Prismが優先度高いセレクタで当ててくるので絶対に勝つ
  font-size: 12px !important;
`
