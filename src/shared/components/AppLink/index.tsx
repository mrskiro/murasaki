import Link, { LinkProps } from "next/link"
import { PropsWithChildren } from "react"
import { A } from "./styled"

type Props = {
  isActive?: boolean
}

export const AppLink = (props: PropsWithChildren<LinkProps & Props>) => {
  return (
    <Link {...props} passHref>
      <A isActive={props.isActive || false}>{props.children}</A>
    </Link>
  )
}
