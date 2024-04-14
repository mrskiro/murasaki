import type { GetStaticProps, NextPage } from "next"
import { RootPage } from "@/components/pages/root/root"
import { findPosts } from "@/features/post/api"
import { Post } from "@/features/post/types/post"
import { load } from "@/lib/config"
import { parseByURL } from "@/lib/parser/rss"

type Props = {
  posts: Post[]
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const config = load()
  const qiitaFeed = await parseByURL(config.QIITA_URL)
  const zennFeed = await parseByURL(config.ZENN_URL)

  const postsFromFeed: Post[] = [...qiitaFeed.items, ...zennFeed.items].map(
    (v) => ({
      id: v.title || "",
      type: "external",
      title: v.title || "",
      content: v.content || "",
      link: v.link || "",
      createdAt: v.isoDate || "",
      updatedAt: v.isoDate || "",
    })
  )

  const postsFromNotion = await findPosts()

  const posts = [...postsFromFeed, ...postsFromNotion].sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  )

  return {
    props: {
      posts,
      meta: {
        title: "Posts",
        ogType: "website",
      },
    },
  }
}

const Page: NextPage<Props> = (props) => <RootPage posts={props.posts} />

export default Page
