import { GetStaticPaths, GetStaticProps, NextPage } from "next"
import { useRouter } from "next/router"
import { Meta } from "@/shared/lib/meta"
import { NextPageWithLayout } from "@/pages/_app"
import { findPostDetailBySlug, findPosts } from "@/shared/features/post/api"
import { PostDetail } from "@/shared/features/post/components/PostDetail"
import { Sections } from "@/shared/features/post/components/Sections"
import * as PostTypes from "@/shared/features/post/types"
import { ThreeColumn } from "@/shared/layouts/ThreeColumn"

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
  return (
    <div>
      <Meta title={props.postDetail.title.plainText} ogType="article" />
      <PostDetail postDetail={props.postDetail} />
    </div>
  )
}

Page.getLayout = (page) => {
  const headings = page.props.postDetail.blocks.filter((v) => {
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
    <ThreeColumn renderRight={() => <Sections headings={headings} />}>
      {page}
    </ThreeColumn>
  )
}
export default Page
