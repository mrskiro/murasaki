import { PostDetail } from "@/features/post/components/post-detail"
import { TableOfContents } from "@/features/post/components/table-of-contents"
import { PostDetail as PostDetailType } from "@/features/post/types"
import { ThreeColumn } from "@/layouts/three-column"

type Props = {
  aboutPageDetail: PostDetailType
}

export const AboutPage = (props: Props) => {
  const headings = props.aboutPageDetail.blocks.filter((v) => {
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
      <PostDetail postDetail={props.aboutPageDetail} />
    </ThreeColumn>
  )
}
