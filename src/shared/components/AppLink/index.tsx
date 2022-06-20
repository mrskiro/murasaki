import Link, { LinkProps } from "next/link"
import { useRouter } from "next/router"
import { PropsWithChildren } from "react"
import { A } from "./styled"

export const AppLink = (props: PropsWithChildren<LinkProps>) => {
  const router = useRouter()
  const isActive = router.asPath === props.href
  return (
    <Link {...props} passHref>
      <A isActive={isActive}>{props.children}</A>
    </Link>
  )
}
