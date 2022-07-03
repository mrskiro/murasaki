import { RichText } from "@/shared/features/post/types"

type Props = {
  text: RichText
}

export const Paragraph = (props: Props) => {
  return <p>{props.text.plainText}</p>
}
