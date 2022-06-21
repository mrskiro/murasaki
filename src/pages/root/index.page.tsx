import { Meta } from "@/shared/lib/meta"
import { findDBWherePublished } from "@/shared/lib/notion/api"
import { parseByURL } from "@/shared/lib/parser/rss"
import type { GetStaticProps, NextPage } from "next"
import { PostItem } from "./components/PostItem"
import * as S from "./styled"
import { Post } from "./types"

type Props = {
  posts: Post[]
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const feed = await parseByURL("https://qiita.com/purpleeeee/feed.atom")
  const postsFromFeed: Post[] = feed.items.map((v) => {
    return {
      title: v.title || "",
      content: v.content || "",
      link: v.link || "",
      date: v.isoDate || "",
    }
  })
  const res = await findDBWherePublished()
  const postsFromNotion: Post[] = res.map((v) => {
    const nameProperty = v.properties["Name"]
    if (nameProperty.type !== "title") {
      throw new Error("internal error")
    }
    return {
      title: nameProperty.title[0]?.plain_text,
      content: "",
      date: v.created_time,
      link: v.url,
    }
  })

  const posts = [...postsFromFeed, ...postsFromNotion]
  return {
    props: {
      posts,
      res,
    },
  }
}

const Page: NextPage<Props> = (props) => {
  // console.log(props.posts)
  return (
    <div>
      <Meta title="Posts" />
      <S.Ul>
        {props.posts.map((v) => (
          <li key={v.title}>
            <PostItem title={v.title} link={v.link} date={v.date} />
          </li>
        ))}
      </S.Ul>

      <footer></footer>
    </div>
  )
}

export default Page
