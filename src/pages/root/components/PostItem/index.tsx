import { GoLinkExternal } from "react-icons/go"
import { format } from "@/shared/lib/date"
import { AppLink } from "@/shared/components/AppLink"
import { Post } from "@/shared/features/post/types"
import { ExternalTag } from "./components/Tag"
import * as S from "./styled"

type Props = {
  type: Post["type"]
  title: string
  link: string
  createdAt: string
}

export const PostItem = (props: Props) => {
  return (
    <S.Wrap>
      <div>
        <S.DateLabel>{format(props.createdAt)}</S.DateLabel>
      </div>
      {props.type === "internal" ? (
        <AppLink href={`${props.link}`}>
          <S.Title>{`# ${props.title}`}</S.Title>
        </AppLink>
      ) : (
        <AppLink href={`${props.link}`} isExternal>
          {/* 色変える */}
          <S.Title>
            {`# ${props.title}`}
            <GoLinkExternal size="12px" />
          </S.Title>
          {props.type === "external" && <ExternalTag link={props.link} />}
        </AppLink>
      )}
    </S.Wrap>
  )
}
