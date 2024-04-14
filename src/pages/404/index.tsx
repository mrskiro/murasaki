import { NextPage } from "next"
import { NotFoundPage } from "@/components/pages/404"

export const getStaticProps = async () => {
  return {
    props: {
      meta: {
        title: "404",
        ogType: "website",
      },
    },
  }
}

const Page: NextPage<unknown> = () => <NotFoundPage />
export default Page
