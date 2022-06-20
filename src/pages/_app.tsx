import type { AppProps } from "next/app"
import { ThemeProvider } from "styled-components"
import { GlobalStyle } from "@/shared/lib/style/globalStyle"
import { MainLayout } from "@/shared/layouts/Main"

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
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
