import { Posts } from "@/features/post/components/posts"
import { Post } from "@/features/post/types"
import { TwoColumn } from "@/layouts/two-column"

type Props = {
  posts: Post[]
}

export const RootPage = (props: Props) => {
  return (
    <TwoColumn>
      <Posts posts={props.posts} />
    </TwoColumn>
  )
}
