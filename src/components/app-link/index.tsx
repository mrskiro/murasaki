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
      // eslint-disable-next-line react/jsx-props-no-spreading
      <S.A {...anchorProps} target="_blank">
        {children}
      </S.A>
    )
  }
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <Link {...props} passHref legacyBehavior>
      <S.Nav isActive={props.isActive || false}>{props.children}</S.Nav>
    </Link>
  );
}
