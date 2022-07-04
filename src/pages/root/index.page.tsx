import type { GetStaticProps, NextPage } from "next"
import { Meta } from "@/shared/lib/meta"
import { parseByURL } from "@/shared/lib/parser/rss"
import { PostItem } from "./components/PostItem"
import { load } from "@/shared/lib/config"
import { Post } from "@/shared/features/post/types/post"
import * as S from "./styled"
import { findPosts } from "@/shared/features/post/api"

type Props = {
  posts: Post[]
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const config = load()
  const qiitaFeed = await parseByURL(config.QIITA_URL)
  const zennFeed = await parseByURL(config.ZENN_URL)

  const postsFromFeed: Post[] = [...qiitaFeed.items, ...zennFeed.items].map(
    (v) => {
      return {
        id: v.title || "",
        type: "external",
        title: v.title || "",
        content: v.content || "",
        link: v.link || "",
        createdAt: v.isoDate || "",
        updatedAt: v.isoDate || "",
      }
    }
  )

  const postsFromNotion = await findPosts()

  const posts = [...postsFromFeed, ...postsFromNotion].sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  )

  return {
    props: {
      posts,
    },
    revalidate: 1,
  }
}

const Page: NextPage<Props> = (props) => {
  return (
    <div>
      <Meta title="Posts" />
      <S.Ul>
        {props.posts.map((v) => (
          <li key={v.title}>
            <PostItem
              type={v.type}
              title={v.title}
              link={v.link}
              createdAt={v.createdAt}
            />
          </li>
        ))}
      </S.Ul>
    </div>
  )
}

export default Page
