import { NextPage } from "next"
import * as React from "react"
import { isPrd } from "@/shared/lib/environment"
import { GoogleAnalytics, usePegeView } from "@/shared/lib/log"
import { ResetStyle } from "@/shared/lib/style/reset-style"
import { ThemeProvider } from "@/shared/features/theme/context"
import type { AppProps } from "next/app"

export type NextPageWithLayout<P = unknown> = NextPage<P> & {
  getLayout?: (page: React.ReactElement<P>) => React.ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

const MyApp = (props: AppPropsWithLayout) => {
  usePegeView()

  const getLayout = props.Component.getLayout ?? ((page) => page)

  return (
    <>
      {isPrd() && <GoogleAnalytics />}
      <ResetStyle />
      <ThemeProvider>
        {getLayout(<props.Component {...props.pageProps} />)}
      </ThemeProvider>
    </>
  )
}

export default MyApp
