import { NotFoundPage } from "@/components/pages/404"
import { Meta } from "@/lib/meta"
import { NextPageWithLayout } from "../_app"

const Page: NextPageWithLayout<unknown> = () => (
  <>
    <Meta title="404" ogType="website" />
    <NotFoundPage />
  </>
)
export default Page
