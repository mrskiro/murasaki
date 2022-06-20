import Link, { LinkProps } from "next/link"
import { useRouter } from "next/router"
import { PropsWithChildren, useEffect, useState } from "react"
import { A } from "./styled"

export const AppLink = (props: PropsWithChildren<LinkProps>) => {
  const router = useRouter()

  const [isActive, setIsActive] = useState(false)

  useEffect(() => {
    if (!router.isReady) return
    if (router.asPath === props.href) {
      setIsActive(true)
    } else {
      setIsActive(false)
    }
  }, [router.isReady, router.asPath, props.href])

  return (
    <Link {...props} passHref>
      <A isActive={isActive}>{props.children}</A>
    </Link>
  )
}
