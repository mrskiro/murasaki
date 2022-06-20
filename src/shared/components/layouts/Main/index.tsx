import { PropsWithChildren } from "react"
import * as S from "./styled"

type Props = {}

export const MainLayout = (props: PropsWithChildren<Props>) => {
  return <S.Main>{props.children}</S.Main>
}
