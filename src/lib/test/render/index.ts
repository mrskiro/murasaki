import { render } from "@testing-library/react"
import { NextRouter } from "next/router"
import { mockNextRouter } from "./mock-next-router"

type Options = {
  router?: NextRouter
}

global.IntersectionObserver = jest.fn().mockImplementation(() => ({
  observe: () => jest.fn(),
  unobserve: () => jest.fn(),
  disconnect: () => jest.fn(),
}))

export const renderPage = (ui: React.ReactElement, options?: Options) => {
  mockNextRouter(options?.router)
  return render(ui)
}
