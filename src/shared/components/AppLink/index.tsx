import { ComponentPropsWithoutRef, PropsWithChildren } from "react"
import Link, { LinkProps } from "next/link"
import * as S from "./styled"

type Props =
  | ({
      isExternal: true
    } & ComponentPropsWithoutRef<"a">)
  | ({
      isExternal?: false
      isActive?: boolean
    } & LinkProps)

export const AppLink = (props: PropsWithChildren<Props>) => {
  if (props.isExternal) {
    const { children, ...anchorProps } = props
    return (
      <S.A {...anchorProps} target="_blank">
        {props.children}
      </S.A>
    )
  }
  return (
    <Link {...props} passHref>
      <S.Nav isActive={props.isActive || false}>{props.children}</S.Nav>
    </Link>
  )
}
