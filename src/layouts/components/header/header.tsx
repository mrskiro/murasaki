import styled from "styled-components"
import { useRouter } from "next/router"
import { AppLink } from "@/components/app-link"
import { SROnly } from "@/components/sr-only"

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

export const Header = () => {
  const router = useRouter()
  return (
    <Wrap>
      <H1>
        <AppLink href="/">
          🟣
          <SROnly label="ホーム" />
        </AppLink>
      </H1>
      <nav aria-label="グローバルナビゲーション">
        <Ul>
          {lists.map((v) => (
            <li key={v.name}>
              <AppLink href={v.href} isActive={router.asPath === v.href}>
                {v.name}
              </AppLink>
            </li>
          ))}
        </Ul>
      </nav>
    </Wrap>
  )
}

const Wrap = styled.header`
  display: flex;
  flex-direction: column;
  gap: 2px;
`

const H1 = styled.h1`
  font-size: ${(props) => props.theme.fontSizes.xl};
`

const Ul = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;
`
