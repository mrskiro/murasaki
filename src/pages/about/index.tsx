import { GetStaticProps } from "next"
import { load } from "@/shared/lib/config"
import { Meta } from "@/shared/lib/meta"
import { findPostDetailById } from "@/shared/features/post/api"
import { PostDetail } from "@/shared/features/post/components/PostDetail"
import * as PostTypes from "@/shared/features/post/types"

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
  }
}

const Page = (props: Props) => {
  return (
    <>
      <Meta title="About" ogType="article" />
      <PostDetail postDetail={props.aboutPageDetail} />
    </>
  )
}

export default Page
