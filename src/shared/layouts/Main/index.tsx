import { PropsWithChildren } from "react"
import { Navigation } from "./Navigation"
import * as S from "./styled"

type Props = {}

export const MainLayout = (props: PropsWithChildren<Props>) => {
  return (
    <S.Wrap>
      <S.Header>
        {/* TODO: draw svg */}
        <S.H1>🟣</S.H1>
        <Navigation />
      </S.Header>
      <S.Main>{props.children}</S.Main>
    </S.Wrap>
  )
}
