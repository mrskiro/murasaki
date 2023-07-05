import { TwoColumn } from "@/layouts/two-column"
import { Meta } from "@/lib/meta"
import { NextPageWithLayout } from "../_app"

const Page: NextPageWithLayout<unknown> = () => (
  <>
    <Meta title="404" ogType="website" />
    <p>このページは削除されているか、URLが間違っている可能性があります。</p>
  </>
)
Page.getLayout = (page) => <TwoColumn>{page}</TwoColumn>
export default Page
