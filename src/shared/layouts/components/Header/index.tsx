import styled from "styled-components"
import { useRouter } from "next/router"
import { AppLink } from "@/shared/components/AppLink"

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
        <AppLink href="/">🟣</AppLink>
      </H1>
      <Ul>
        {lists.map((v) => (
          <li key={v.name}>
            <AppLink href={v.href} isActive={router.asPath === v.href}>
              {v.name}
            </AppLink>
          </li>
        ))}
      </Ul>
    </Wrap>
  )
}

const Wrap = styled.header`
  display: flex;
  flex-direction: column;
  gap: 2px;
`

const H1 = styled.h1`
  font-size: 20px;
`

const Ul = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;
`
