import { NextPage } from "next"
import { NotFoundPage } from "@/components/pages/404"
import { Meta } from "@/lib/meta"

const Page: NextPage<unknown> = () => (
  <>
    <Meta title="404" ogType="website" />
    <NotFoundPage />
  </>
)
export default Page
