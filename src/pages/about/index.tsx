import { GetStaticProps } from "next"
import { useRouter } from "next/router"
import { load } from "@/shared/lib/config"
import { Meta } from "@/shared/lib/meta"
import { findPostDetailById } from "@/shared/features/post/api"
import { PostDetail } from "@/shared/features/post/components/PostDetail"
import { Sections } from "@/shared/features/post/components/Sections"
import * as PostTypes from "@/shared/features/post/types"
import { ThreeColumn } from "@/shared/layouts/ThreeColumn"
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
      <Meta title="About" ogType="article" />
      <PostDetail postDetail={props.aboutPageDetail} />
    </>
  )
}
Page.getLayout = (page) => {
  const headings = page.props.aboutPageDetail.blocks.filter((v) => {
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
