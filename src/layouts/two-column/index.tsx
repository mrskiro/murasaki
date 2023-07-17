import { PropsWithChildren } from "react"
import { Switcher } from "@/features/theme/components/switcher"
import { Footer } from "../components/footer"
import { Header } from "../components/header"
import * as Common from "../styled"
import * as S from "./styled"
type Props = Record<never, never>

export const TwoColumn = (props: PropsWithChildren<Props>) => (
  <Common.Wrap>
    <Common.SwitcherWrap>
      <Switcher />
    </Common.SwitcherWrap>

    <S.TwoColumn>
      <S.LeftMenu>
        <Header />
      </S.LeftMenu>

      <S.Main>{props.children}</S.Main>
    </S.TwoColumn>

    <Common.Hr />

    <Footer />
  </Common.Wrap>
)
