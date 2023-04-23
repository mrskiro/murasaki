import { PropsWithChildren } from "react"
import { Switcher } from "@/shared/features/theme/components/switcher"
import { Footer } from "../components/footer"
import { Header } from "../components/header"
import * as S from "../styled"

type Props = Record<never, never>

export const TwoColumn = (props: PropsWithChildren<Props>) => (
  <S.Wrap>
    <S.SwitcherWrap>
      <Switcher />
    </S.SwitcherWrap>

    <S.TwoColumn>
      <S.LeftMenu>
        <Header />
      </S.LeftMenu>

      <S.Main>{props.children}</S.Main>
    </S.TwoColumn>

    <S.Hr />

    <Footer />
  </S.Wrap>
)
