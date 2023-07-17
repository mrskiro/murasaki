import { render } from "@testing-library/react"
import { NextRouter } from "next/router"
import { ThemeProvider } from "@/features/theme/context"
import { mockNextRouter } from "./mock-next-router"

global.IntersectionObserver = jest.fn().mockImplementation(() => ({
  observe: () => jest.fn(),
  unobserve: () => jest.fn(),
  disconnect: () => jest.fn(),
}))

/**
 * https://jestjs.io/docs/26.x/manual-mocks#mocking-methods-which-are-not-implemented-in-jsdom
 */
Object.defineProperty(window, "matchMedia", {
  writable: true,
  value: jest.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(),
    removeListener: jest.fn(),
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
})

type Options = {
  router?: NextRouter
}

export const renderPage = (ui: React.ReactElement, options?: Options) => {
  mockNextRouter(options?.router)
  return render(<ThemeProvider>{ui}</ThemeProvider>)
}
