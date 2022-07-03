import { RichText } from "@/shared/features/post/types"

type Props = {
  text: RichText
  language: string
}

export const Code = (props: Props) => {
  return (
    <pre>
      <code>{props.text.plainText}</code>
    </pre>
  )
}
