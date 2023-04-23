import { Meta } from "@/shared/lib/meta"
import { TwoColumn } from "@/shared/layouts/two-column"
import { NextPageWithLayout } from "../_app"

const Page: NextPageWithLayout<unknown> = () => (
  <>
    <Meta title="🟣🟣🟪🟪" ogType="website" />
    {/* TODO:  */}
    <p>このページは削除されているか、URLが間違っている可能性があります。</p>
  </>
)
Page.getLayout = (page) => <TwoColumn>{page}</TwoColumn>
export default Page
