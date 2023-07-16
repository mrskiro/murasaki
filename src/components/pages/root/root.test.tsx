import { a11yChecker } from "@/lib/test/a11y"
import { renderPage } from "@/lib/test/render"
import { RootPage } from "./root"

it("a11y", async () => {
  const { container } = renderPage(
    <RootPage
      posts={[
        {
          id: "1",
          type: "external",
          title: "Qiitaの記事",
          link: "/posts/qiita-post",
          createdAt: "2023-06-24T12:02:00.000Z",
          updatedAt: "2023-06-24T12:02:00.000Z",
        },
        {
          id: "2",
          type: "internal",
          title: "notionの記事",
          link: "/posts/notion-post",
          createdAt: "2023-06-24T12:02:00.000Z",
          updatedAt: "2023-06-24T12:02:00.000Z",
        },
      ]}
    />
  )

  const results = await a11yChecker(container)
  expect(results).toHaveNoViolations()
})
