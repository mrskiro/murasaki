import { GetStaticProps, NextPage } from "next"
import { useRouter } from "next/router"
import { AboutPage } from "@/components/pages/about"
import { findPostDetailById } from "@/features/post/api"
import * as PostTypes from "@/features/post/types"
import { load } from "@/lib/config"

type Props = {
  aboutPageDetail: PostTypes.PostDetail
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const { ABOUT_PAGE_ID } = load()
  const aboutPageDetail = await findPostDetailById(ABOUT_PAGE_ID)
  return {
    props: {
      aboutPageDetail,
      meta: {
        title: "About",
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

  return <AboutPage aboutPageDetail={props.aboutPageDetail} />
}

export default Page
