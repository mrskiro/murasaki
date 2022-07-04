import { useRouter } from "next/router"
import { AppLink } from "@/shared/components/AppLink"
import * as S from "./styled"

export const Navigation = () => {
  const router = useRouter()

  return (
    <S.Wrap>
      <S.Ul>
        <li>
          <AppLink href="/" isActive={router.pathname === "/root"}>
            Posts
          </AppLink>
        </li>
        <li>
          <AppLink href="/about" isActive={router.pathname === "/about"}>
            About
          </AppLink>
        </li>
      </S.Ul>
    </S.Wrap>
  )
}
