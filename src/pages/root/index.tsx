import { Meta } from "@/shared/lib/meta"
import type { NextPage } from "next"
import { PostItem } from "./components/PostItem"
import * as S from "./styled"

const Page: NextPage = () => {
  return (
    <div>
      <Meta title="Posts" />
      <S.Ul>
        <li>
          <PostItem />
        </li>
        <li>
          <PostItem />
        </li>
        <li>
          <PostItem />
        </li>
      </S.Ul>

      <footer></footer>
    </div>
  )
}

export default Page
