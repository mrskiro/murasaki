import Image from "next/image"
import { AppLink } from "@/components/app-link"

export const BmcButton = () => (
  <AppLink isExternal href="https://www.buymeacoffee.com/mrskiro">
    <Image
      src="/assets/bmc.png"
      alt="by me a coffee"
      width="140px"
      height="80px"
      objectFit="contain"
    />
  </AppLink>
)
