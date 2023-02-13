import { test, expect, Page } from "@playwright/test"

test.beforeEach(async ({ page }) => {
  await page.goto("/")
})

test("screen shots", async ({ page }) => {
  await expect(page).toHaveScreenshot("home.png", {
    fullPage: true,
  })
  await page.goto(`/about`)
  await expect(page).toHaveScreenshot("about.png", {
    fullPage: true,
  })
  await page.goto(`/posts/demo`)

  await scrollToBottom(page)

  await scrollToTop(page)

  await expect(page).toHaveScreenshot("post.png", {
    fullPage: true,
  })
})

test("navigation", async ({ page }) => {
  await expect(page).toHaveTitle(/🟣🟣🟪🟪/)

  await page.getByRole("link", { name: "About" }).click()
  await expect(page).toHaveURL(/about/)
  await expect(page).toHaveTitle(/About/)

  await page.getByRole("link", { name: "Posts" }).click()
  await expect(page).not.toHaveURL(/about/)

  await page.getByRole("link", { name: "demo" }).click()
  await expect(page).toHaveURL(/demo/)
  await expect(page).toHaveTitle(/demo/)
})

const scrollToBottom = async (page: Page) => {
  await page.evaluate(() => {
    const browserHeight = window.innerHeight
    const pageHeight = document.body.scrollHeight

    for (let i = 0; i < pageHeight; i += browserHeight) {
      window.scrollTo(0, i)
    }
  })
}

const scrollToTop = async (page: Page) => {
  await page.evaluate(() => {
    window.scrollTo(0, 0)
  })
}
