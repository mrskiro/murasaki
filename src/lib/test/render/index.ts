import { render } from "@testing-library/react"
import { NextRouter } from "next/router"
import { mockNextRouter } from "./mock-next-router"

type Options = {
  router?: NextRouter
}

export const renderPage = (ui: React.ReactElement, options?: Options) => {
  mockNextRouter(options?.router)
  return render(ui)
}
