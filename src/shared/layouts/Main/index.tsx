import { PropsWithChildren } from "react"
import { GoMarkGithub } from "react-icons/go"
import { AppLink } from "@/shared/components/AppLink"
import { Navigation } from "./Navigation"
import * as S from "./styled"

type Props = {}

export const MainLayout = (props: PropsWithChildren<Props>) => {
  return (
    <S.Wrap>
      <S.ThreeColumn>
        <S.Header>
          <S.H1>
            <AppLink href="/">🟣</AppLink>
          </S.H1>
          <Navigation />
        </S.Header>

        <S.Main>{props.children}</S.Main>
        {/* <S.RightMenu>
          <a>a</a>
        </S.RightMenu> */}
      </S.ThreeColumn>
      <S.Hr />
      <S.Footer>
        <S.FooterDetail>
          <S.Small>Copyright 2022 Haruki Murasaki</S.Small>
          <AppLink isExternal href="https://github.com/purp1eeeee/murasaki">
            <GoMarkGithub size="24px" />
          </AppLink>
        </S.FooterDetail>
      </S.Footer>
    </S.Wrap>
  )
}
