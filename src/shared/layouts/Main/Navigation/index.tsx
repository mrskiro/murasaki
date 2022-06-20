import { AppLink } from "@/shared/components/AppLink"
import * as S from "./styled"

export const Navigation = () => {
  return (
    <S.Wrap>
      <S.Ul>
        <li>
          <AppLink href="/">Posts</AppLink>
        </li>
        <li>
          <AppLink href="/about">Profile</AppLink>
        </li>
      </S.Ul>
    </S.Wrap>
  )
}
