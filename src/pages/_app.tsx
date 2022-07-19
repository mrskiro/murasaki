import { GoogleAnalytics, usePegeView } from "@/shared/lib/log"
import { ResetStyle } from "@/shared/lib/style/resetStyle"
import { ThemeProvider } from "@/shared/features/theme/Context"
import { MainLayout } from "@/shared/layouts/Main"
import type { AppProps } from "next/app"

const MyApp = ({ Component, pageProps }: AppProps) => {
  usePegeView()

  return (
    <>
      <GoogleAnalytics />
      <ResetStyle />
      <ThemeProvider>
        <MainLayout>
          <Component {...pageProps} />
        </MainLayout>
      </ThemeProvider>
    </>
  )
}

export default MyApp
