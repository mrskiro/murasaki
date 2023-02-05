import { format } from "@/shared/lib/date"
import * as Types from "@/shared/features/post/types"
import { BulletedList } from "./components/BulletedList"
import { Code } from "./components/Code"
import { Heading } from "./components/Heading"
import { Image } from "./components/Image"
import { NumberedList } from "./components/NumberedList"
import { Paragraph } from "./components/Paragraph"
import * as S from "./styled"

type Props = {
  postDetail: Types.PostDetail
}

export const PostDetail = (props: Props) => {
  return (
    // TODO: これだと再帰できないのでどうするか考える
    // 現状ulとliが1-1でも問題ない

    // ulの要素の始まりと終わりがわからないので詰め直す
    // const blocks = props.postDetail.blocks.reduce<Types.Block[]>((p, c, i) => {
    //   if (c.type !== "bulletedListItem") return [...p, c]
    //   if (i === 0) return [...p, c]
    //   const lastItem = p[p.length - 1]
    //   if (!lastItem) return [...p, c]
    //   if (lastItem.type !== "bulletedListItem") return [...p, c]
    //   const { richText } = lastItem
    //   return [
    //     ...p.slice(0, -1),
    //     { ...lastItem, richText: [...richText, ...c.richText] },
    //   ]
    // }, [])

    <S.Wrap>
      <S.MetaWrap>
        <S.Title>{props.postDetail.title.plainText}</S.Title>
        <S.MetaDetailWrap>
          <div />
          <div>
            <S.DateLabel>{`${format(props.postDetail.createdAt)}`}</S.DateLabel>
            {format(props.postDetail.updatedAt) !==
              format(props.postDetail.createdAt) && (
              <S.DateLabel>{`最終更新：${format(
                props.postDetail.updatedAt
              )}`}</S.DateLabel>
            )}
          </div>
        </S.MetaDetailWrap>
      </S.MetaWrap>
      {props.postDetail.blocks.map(renderBlock)}
    </S.Wrap>
  )
}

const renderBlock = (v: Types.Block) => {
  switch (v.type) {
    case "heading1":
      return <Heading key={v.id} as="h1" text={v.richText} />
    case "heading2":
      return <Heading key={v.id} as="h2" text={v.richText} />
    case "heading3":
      return <Heading key={v.id} as="h3" text={v.richText} />
    case "paragraph":
      return <Paragraph key={v.id} text={v.richText} />
    case "bulletedListItem":
      return <BulletedList key={v.id} blocks={[v]} />
    case "numberedListItem":
      return <NumberedList key={v.id} block={v} />
    case "code":
      return <Code key={v.id} text={v.richText} language={v.language} />
    case "image":
      return <Image key={v.id} src={v.url} alt="" />
    default:
      return null
  }
}
