import Link, { LinkProps } from "next/link"
import { ComponentPropsWithoutRef, PropsWithChildren } from "react"
import * as S from "./styled"

type Props =
  | ({
      isAnchor: true
    } & ComponentPropsWithoutRef<"a">)
  | ({
      isAnchor?: false
      isActive?: boolean
    } & LinkProps)

export const AppLink = (props: PropsWithChildren<Props>) => {
  if (props.isAnchor) {
    const { children, ...anchorProps } = props
    return <S.A {...anchorProps}>{props.children}</S.A>
  }
  return (
    <Link {...props} passHref>
      <S.Nav isActive={props.isActive || false}>{props.children}</S.Nav>
    </Link>
  )
}
