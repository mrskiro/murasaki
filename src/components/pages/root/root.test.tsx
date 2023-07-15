import { a11yChecker } from "@/lib/test/a11y"
import { renderPage } from "@/lib/test/render"
import { RootPage } from "./root"

it("a11y", async () => {
  const { container } = renderPage(<RootPage posts={[]} />)

  const results = await a11yChecker(container)
  expect(results).toHaveNoViolations()
})
