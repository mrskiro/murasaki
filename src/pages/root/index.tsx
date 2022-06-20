import { Meta } from "@/shared/lib/meta"
import { parseByURL } from "@/shared/lib/parser/rss"
import type { GetStaticProps, NextPage } from "next"
import { PostItem } from "./components/PostItem"
import * as S from "./styled"
import { Post } from "./types"

type Props = {
  posts: Post[]
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const res = await parseByURL("https://qiita.com/purpleeeee/feed.atom")
  const posts: Post[] = res.items.map((v) => {
    return {
      title: v.title || "",
      content: v.content || "",
      link: v.link || "",
      date: v.isoDate || "",
    }
  })
  return {
    props: {
      posts,
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
            <PostItem title={v.title} link={v.link} date={v.date} />
          </li>
        ))}
      </S.Ul>

      <footer></footer>
    </div>
  )
}

export default Page
