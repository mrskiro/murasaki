import { ThemeProvider } from "styled-components"
import { GoogleAnalytics, usePegeView } from "@/shared/lib/log"
import { GlobalStyle } from "@/shared/lib/style/globalStyle"
import { MainLayout } from "@/shared/layouts/Main"
import type { AppProps } from "next/app"

const MyApp = ({ Component, pageProps }: AppProps) => {
  usePegeView()

  return (
    <>
      <GoogleAnalytics />
      <GlobalStyle />
      <ThemeProvider theme={{}}>
        <MainLayout>
          <Component {...pageProps} />
        </MainLayout>
      </ThemeProvider>
    </>
  )
}

export default MyApp
