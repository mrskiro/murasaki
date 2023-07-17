import { PropsWithChildren, ReactNode } from "react"
import { Switcher } from "@/features/theme/components/switcher"
import { Footer } from "../components/footer"
import { Header } from "../components/header"
import * as Common from "../styled"
import * as S from "./styled"

type Props = {
  renderRight: () => ReactNode
}

export const ThreeColumn = (props: PropsWithChildren<Props>) => (
  <Common.Wrap>
    <S.ThreeColumn>
      <S.LeftMenu>
        <Header />
      </S.LeftMenu>

      <S.Main>{props.children}</S.Main>
      <S.RightMenu>{props.renderRight()}</S.RightMenu>
    </S.ThreeColumn>
    <Common.Hr />
    <Footer />
    <Common.SwitcherWrap>
      <Switcher />
    </Common.SwitcherWrap>
  </Common.Wrap>
)
