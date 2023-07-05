import { Header } from "./header"
import type { Meta, StoryObj } from "@storybook/react"

export default {
  title: "header",
  component: Header,
  tags: ["autodocs"],
} as Meta<typeof Header>

type Story = StoryObj<typeof Header>

export const Default: Story = {}

export const RouteIsAbout: Story = {
  parameters: {
    nextjs: {
      router: {
        asPath: "/about",
      },
    },
  },
}
