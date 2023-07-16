import { a11yChecker } from "@/lib/test/a11y"
import { renderPage } from "@/lib/test/render"
import { NotFoundPage } from "./not-found"

it("a11y", async () => {
  const { container } = renderPage(<NotFoundPage />)

  const results = await a11yChecker(container)
  expect(results).toHaveNoViolations()
})
