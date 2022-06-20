import { AppLink } from "@/shared/components/AppLink"
import { Post } from "../../types"
import * as S from "./styled"

type Props = {
  title: string
  link: string
  date: string
}

export const PostItem = (props: Props) => {
  return (
    <S.Wrap>
      <S.DateLabel>{props.date}</S.DateLabel>
      <AppLink
        href={`${props.link}`}
        isAnchor
        target="_blank"
        rel="noopener noreferrer"
      >
        {/* 色変える */}
        <S.Title>{`# ${props.title}`}</S.Title>
      </AppLink>
    </S.Wrap>
  )
}
