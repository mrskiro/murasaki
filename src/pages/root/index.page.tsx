import type { GetStaticProps, NextPage } from "next"
import { Meta } from "@/shared/lib/meta"
import { findDBWherePublished } from "@/shared/lib/notion/api"
import { parseByURL } from "@/shared/lib/parser/rss"
import { PostItem } from "./components/PostItem"
import * as S from "./styled"
import { Post } from "./types"
import { load } from "@/shared/lib/config"

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
        type: "external",
        title: v.title || "",
        content: v.content || "",
        link: v.link || "",
        date: v.isoDate || "",
      }
    }
  )
  const res = await findDBWherePublished()

  const postsFromNotion: Post[] = res.map((v) => {
    const nameProperty = v.properties["Name"]
    if (nameProperty.type !== "title") {
      throw new Error("internal error")
    }

    return {
      type: "internal",
      title: nameProperty.title[0]?.plain_text,
      content: "",
      date: v.created_time,
      link: `/posts/${v.id}`,
    }
  })

  const posts = [...postsFromFeed, ...postsFromNotion].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  )

  return {
    props: {
      posts,
      res,
    },
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
              date={v.date}
            />
          </li>
        ))}
      </S.Ul>
    </div>
  )
}

export default Page
