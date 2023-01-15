import Image from "next/image"
import { AppLink } from "@/shared/components/AppLink"

export const BmcButton = () => (
  <AppLink isExternal href="https://www.buymeacoffee.com/mur4saki">
    <Image
      src="/assets/bmc.png"
      alt="by me a coffee"
      width="140px"
      height="80px"
      objectFit="contain"
    />
  </AppLink>
)
