import { useRouter } from "next/router"

const Page = () => {
  const router = useRouter()
  return <p>param:{router.query.param}</p>
}

export default Page
