import { AppLink } from "@/shared/components/AppLink"
import * as S from "./styled"

export const PostItem = () => {
  return (
    <S.Wrap>
      <S.DateLabel>2022/06/21</S.DateLabel>
      <AppLink href="/">
        <S.Title># 記事のタイトル</S.Title>
      </AppLink>
    </S.Wrap>
  )
}
