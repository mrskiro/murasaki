import { PropsWithChildren } from "react"
import { Switcher } from "@/shared/features/theme/components/Switcher"
import { Footer } from "../components/Footer"
import { Header } from "../components/Header"
import * as S from "../styled"

type Props = {}

export const TwoColumn = (props: PropsWithChildren<Props>) => {
  return (
    <S.Wrap>
      <S.SwitcherWrap>
        <Switcher></Switcher>
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
}
