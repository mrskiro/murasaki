import { GoLinkExternal } from "react-icons/go"
import { AppLink } from "@/shared/components/AppLink"
import { format } from "@/shared/lib/date"
import { Post } from "../../types"
import * as S from "./styled"

type Props = {
  type: Post["type"]
  title: string
  link: string
  date: string
}

export const PostItem = (props: Props) => {
  return (
    <S.Wrap>
      <div>
        <S.DateLabel>{format(props.date)}</S.DateLabel>
      </div>
      {props.type === "internal" ? (
        <AppLink href={`${props.link}`}>
          <S.Title>{`# ${props.title}`}</S.Title>
        </AppLink>
      ) : (
        <AppLink
          href={`${props.link}`}
          isAnchor
          target="_blank"
          rel="noopener noreferrer"
        >
          {/* 色変える */}
          <S.Title>
            {`# ${props.title}`}
            <GoLinkExternal size="12px" />
          </S.Title>
        </AppLink>
      )}
    </S.Wrap>
  )
}

const colors = {
  qiita: "#55c500",
  zenn: "#3ea8ff",
}
