import { GetStaticPaths, GetStaticProps, NextPage } from "next"
import { useRouter } from "next/router"
import { PostDetailPage } from "@/components/pages/posts/[param]"
import { findPostDetailBySlug, findPosts } from "@/features/post/api"
import * as PostTypes from "@/features/post/types"
import { toPublic } from "@/lib/image"

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
      meta: {
        title: postDetail.title.plainText,
        ogType: "article",
      },
    },
  }
}

const Page: NextPage<Props> = (props) => {
  const router = useRouter()
  if (router.isFallback) {
    return <p>loading...</p>
  }

  return <PostDetailPage postDetail={props.postDetail} />
}

export default Page
