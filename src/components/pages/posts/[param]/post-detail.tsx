import { PostDetail } from "@/features/post/components/post-detail"
import { TableOfContents } from "@/features/post/components/table-of-contents"
import { PostDetail as PostDetailType } from "@/features/post/types"
import { ThreeColumn } from "@/layouts/three-column"
import { BmcButton } from "@/lib/bmc"

type Props = {
  postDetail: PostDetailType
}

export const PostDetailPage = (props: Props) => {
  const headings = props.postDetail.blocks.filter((v) => {
    switch (v.type) {
      case "heading1":
      case "heading2":
      case "heading3":
        return true
      default:
        return false
    }
  })
  return (
    <ThreeColumn renderRight={() => <TableOfContents headings={headings} />}>
      <PostDetail postDetail={props.postDetail} />
      <BmcButton />
    </ThreeColumn>
  )
}
