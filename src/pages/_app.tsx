import * as React from "react"
import { ErrorBoundary } from "@/components/error-boundary"
import { ThemeProvider } from "@/features/theme/context"
import { TwoColumn } from "@/layouts/two-column"
import { isPrd } from "@/lib/environment"
import { GoogleAnalytics, usePegeView } from "@/lib/log"
import { ResetStyle } from "@/lib/style/reset-style"
import type { AppProps } from "next/app"

const MyApp = (props: AppProps) => {
  usePegeView()

  return (
    <>
      {isPrd() && <GoogleAnalytics />}
      {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
      {/* @ts-ignore */}
      <ResetStyle />
      <ThemeProvider>
        {/* TODO: ThemeProvider内でのerrorを感知できないのでどうするか考える */}
        <ErrorBoundary
          fallback={() => (
            <TwoColumn>エラーが発生しました。リロードしてください。</TwoColumn>
          )}
        >
          <props.Component {...props.pageProps} />
        </ErrorBoundary>
      </ThemeProvider>
    </>
  )
}

export default MyApp
