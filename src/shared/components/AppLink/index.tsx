import Link, { LinkProps } from "next/link"
import { ComponentPropsWithoutRef, PropsWithChildren } from "react"
import { A } from "./styled"

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
    return <A {...anchorProps}>{props.children}</A>
  }
  return (
    <Link {...props} passHref>
      <A isActive={props.isActive || false}>{props.children}</A>
    </Link>
  )
}
