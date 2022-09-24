import { PropsWithChildren, ReactNode } from "react"
import { Switcher } from "@/shared/features/theme/components/Switcher"
import { Footer } from "../components/Footer"
import { Header } from "../components/Header"
import * as S from "../styled"

type Props = {
  renderRight: () => ReactNode
}

export const ThreeColumn = (props: PropsWithChildren<Props>) => (
  <S.Wrap>
    <S.SwitcherWrap>
      <Switcher />
    </S.SwitcherWrap>
    <S.ThreeColumn>
      <S.LeftMenu>
        <Header />
      </S.LeftMenu>

      <S.Main>{props.children}</S.Main>
      <S.RightMenu>{props.renderRight()}</S.RightMenu>
    </S.ThreeColumn>
    <S.Hr />
    <Footer />
  </S.Wrap>
)
