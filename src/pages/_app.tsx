import type { AppProps } from "next/app"
import { GlobalStyle } from "@/shared/lib/globalStyle"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
