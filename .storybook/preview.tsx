import * as React from "react"
import type { Preview } from "@storybook/react"
import { ResetStyle } from "../src/lib/style/reset-style"
import { ligthTheme } from "../src/features/theme/theme"
import { ThemeProvider } from "styled-components"

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    nextjs: {
      router: {
        path: "/",
        asPath: "/",
        query: {},
      },
    },
  },
  decorators: [
    (Story) => (
      <ThemeProvider theme={ligthTheme}>
        <ResetStyle />
        <Story />
      </ThemeProvider>
    ),
  ],
}

export default preview
