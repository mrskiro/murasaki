import { GetStaticProps } from "next"
import { useRouter } from "next/router"
import { AboutPage } from "@/components/pages/about"
import { findPostDetailById } from "@/features/post/api"
import * as PostTypes from "@/features/post/types"
import { load } from "@/lib/config"
import { Meta } from "@/lib/meta"
import { NextPageWithLayout } from "../_app"

type Props = {
  aboutPageDetail: PostTypes.PostDetail
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const { ABOUT_PAGE_ID } = load()
  const aboutPageDetail = await findPostDetailById(ABOUT_PAGE_ID)
  return {
    props: {
      aboutPageDetail,
    },
    revalidate: 10,
  }
}

const Page: NextPageWithLayout<Props> = (props) => {
  const router = useRouter()
  if (router.isFallback) {
    return <p>loading...</p>
  }

  return (
    <>
      <Meta
        title="About"
        ogType="article"
        description="むらさきの自己紹介です。"
      />
      <AboutPage aboutPageDetail={props.aboutPageDetail} />
    </>
  )
}

export default Page
