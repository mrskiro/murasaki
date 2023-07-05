import { GetStaticProps } from "next"
import { useRouter } from "next/router"
import { findPostDetailById } from "@/features/post/api"
import { PostDetail } from "@/features/post/components/post-detail"
import { TableOfContents } from "@/features/post/components/table-of-contents"
import * as PostTypes from "@/features/post/types"
import { ThreeColumn } from "@/layouts/three-column"
import { load } from "@/lib/config"
import { Meta } from "@/lib/meta"
import { NextPageWithLayout } from "../_app"

type Props = {
  aboutPageDetail: PostTypes.PostDetail
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const { ABOUT_PAGE_ID } = load()
  const aboutPageDetail = await findPostDetailById(ABOUT_PAGE_ID)
  return {
    props: {
      aboutPageDetail,
    },
    revalidate: 10,
  }
}

const Page: NextPageWithLayout<Props> = (props) => {
  const router = useRouter()
  if (router.isFallback) {
    return <p>loading...</p>
  }
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
    <>
      <Meta
        title="About"
        ogType="article"
        description="むらさきの自己紹介です。"
      />
      <ThreeColumn renderRight={() => <TableOfContents headings={headings} />}>
        <PostDetail postDetail={props.aboutPageDetail} />
      </ThreeColumn>
    </>
  )
}
// Page.getLayout = (page) => {
//   const headings = page.props.aboutPageDetail.blocks.filter((v) => {
//     switch (v.type) {
//       case "heading1":
//       case "heading2":
//       case "heading3":
//         return true
//       default:
//         return false
//     }
//   })
//   return (
//     <ThreeColumn renderRight={() => <TableOfContents headings={headings} />}>
//       {page}
//     </ThreeColumn>
//   )
// }

export default Page
