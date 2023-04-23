import { format } from "@/shared/lib/date"
import * as Types from "@/shared/features/post/types"
import { toBlockMap } from "../../utils"
import { Block } from "./block"
import * as S from "./styled"

type Props = {
  postDetail: Types.PostDetail
}

export const PostDetail = (props: Props) => {
  const blockMap = toBlockMap(props.postDetail.blocks)

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
      {props.postDetail.blocks.map((block) => (
        <Block key={block.id} block={block} blockMap={blockMap} />
      ))}
    </S.Wrap>
  )
}
