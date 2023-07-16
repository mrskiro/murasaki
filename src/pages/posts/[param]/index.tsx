import { GetStaticPaths, GetStaticProps } from "next"
import { useRouter } from "next/router"
import { PostDetailPage } from "@/components/pages/posts/[param]"
import { findPostDetailBySlug, findPosts } from "@/features/post/api"
import * as PostTypes from "@/features/post/types"
import { toPublic } from "@/lib/image"
import { Meta } from "@/lib/meta"
import { NextPageWithLayout } from "@/pages/_app"

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

  return (
    <>
      <Meta title={props.postDetail.title.plainText} ogType="article" />
      <PostDetailPage postDetail={props.postDetail} />
    </>
  )
}

export default Page
