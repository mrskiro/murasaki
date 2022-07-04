import { useRouter } from "next/router"
import { AppLink } from "@/shared/components/AppLink"
import * as S from "./styled"

const lists = [
  {
    name: "Posts",
    href: "/",
  },
  {
    name: "About",
    href: "/about",
  },
]

export const Navigation = () => {
  const router = useRouter()

  return (
    <S.Wrap>
      <S.Ul>
        {lists.map((v) => (
          <li key={v.name}>
            <AppLink href={v.href} isActive={router.asPath === v.href}>
              {v.name}
            </AppLink>
          </li>
        ))}
      </S.Ul>
    </S.Wrap>
  )
}
