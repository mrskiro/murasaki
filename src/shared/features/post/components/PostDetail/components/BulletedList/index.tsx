import styled from "styled-components"
import { RichText } from "@/shared/features/post/types"

type Props = {
  items: RichText[]
}

export const BulletedList = (props: Props) => {
  return (
    <Ul>
      {props.items.map((v) => (
        <li key={v.plainText}>{v.plainText}</li>
      ))}
    </Ul>
  )
}

const Ul = styled.ul`
  list-style: inherit;
  list-style-position: inside;
`
