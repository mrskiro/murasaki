import { Post } from "../../types"
import { PostItem } from "./components/PostItem"
import * as S from "./styled"

type Props = {
  posts: Post[]
}

export const Posts = (props: Props) => (
  <S.Ul>
    {props.posts.map((v) => (
      <li key={v.id}>
        <PostItem
          type={v.type}
          title={v.title}
          link={v.link}
          createdAt={v.createdAt}
        />
      </li>
    ))}
  </S.Ul>
)
