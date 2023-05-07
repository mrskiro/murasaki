import * as React from "react"
import type { Preview } from "@storybook/react"
import { ResetStyle } from "../src/shared/lib/style/reset-style"

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
      <>
        <ResetStyle />
        <Story />
      </>
    ),
  ],
}

export default preview
