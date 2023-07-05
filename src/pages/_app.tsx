import { NextPage } from "next"
import * as React from "react"
import { ErrorBoundary } from "@/components/error-boundary"
import { ThemeProvider } from "@/features/theme/context"
import { TwoColumn } from "@/layouts/two-column"
import { isPrd } from "@/lib/environment"
import { GoogleAnalytics, usePegeView } from "@/lib/log"
import { ResetStyle } from "@/lib/style/reset-style"
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
        {/* TODO: ThemeProvider内でのerrorを感知できないのでどうするか考える */}
        <ErrorBoundary
          fallback={() => (
            <TwoColumn>エラーが発生しました。リロードしてください。</TwoColumn>
          )}
        >
          {getLayout(<props.Component {...props.pageProps} />)}
        </ErrorBoundary>
      </ThemeProvider>
    </>
  )
}

export default MyApp
