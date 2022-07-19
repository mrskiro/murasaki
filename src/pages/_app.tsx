import { NextPage } from "next"
import * as React from "react"
import { GoogleAnalytics, usePegeView } from "@/shared/lib/log"
import { ResetStyle } from "@/shared/lib/style/resetStyle"
import { ThemeProvider } from "@/shared/features/theme/Context"
import type { AppProps } from "next/app"

export type NextPageWithLayout<P = unknown> = NextPage<P> & {
  getLayout?: (page: React.ReactElement<P>) => React.ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

const MyApp = ({ Component, pageProps }: AppPropsWithLayout) => {
  usePegeView()

  const getLayout = Component.getLayout ?? ((page) => page)

  return (
    <>
      <GoogleAnalytics />
      <ResetStyle />
      <ThemeProvider>{getLayout(<Component {...pageProps} />)}</ThemeProvider>
    </>
  )
}

export default MyApp
