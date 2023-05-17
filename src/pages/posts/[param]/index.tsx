import { GetStaticPaths, GetStaticProps } from "next"
import { useRouter } from "next/router"
import { BmcButton } from "@/shared/lib/bmc"
import { toPublic } from "@/shared/lib/image"
import { Meta } from "@/shared/lib/meta"
import { NextPageWithLayout } from "@/pages/_app"
import { findPostDetailBySlug, findPosts } from "@/shared/features/post/api"
import { PostDetail } from "@/shared/features/post/components/post-detail"
import { TableOfContents } from "@/shared/features/post/components/table-of-contents"
import * as PostTypes from "@/shared/features/post/types"
import { ThreeColumn } from "@/shared/layouts/three-column"

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await findPosts()
  const paths = posts.map((v) => v.link)
  return {
    paths,
    fallback: true,
  }
}

type Props = {
  postDetail: PostTypes.PostDetail
}

export const getStaticProps: GetStaticProps<Props, { param: string }> = async (
  ctx
) => {
  const slug = ctx.params?.param
  if (!slug) {
    throw new Error("not exist slug")
  }

  const postDetail = await findPostDetailBySlug(slug)

  const shouldSaveImages = postDetail.blocks.reduce<
    { id: string; url: string }[]
  >((p, c) => {
    if (c.type !== "image") {
      return p
    }
    return [...p, { id: c.id, url: c.url }]
  }, [])

  toPublic(shouldSaveImages)

  return {
    props: {
      postDetail,
    },
    revalidate: 1,
  }
}

const Page: NextPageWithLayout<Props> = (props) => {
  const router = useRouter()
  if (router.isFallback) {
    return <p>loading...</p>
  }
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
    <>
      <Meta title={props.postDetail.title.plainText} ogType="article" />
      <ThreeColumn renderRight={() => <TableOfContents headings={headings} />}>
        <PostDetail postDetail={props.postDetail} />
        <BmcButton />
      </ThreeColumn>
    </>
  )
}

// Page.getLayout = (page) => {
//   const headings = page.props.postDetail.blocks.filter((v) => {
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
