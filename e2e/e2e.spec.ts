import { test, expect } from "@playwright/test"

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

  // scroll to bottom
  await page.evaluate(async () => {
    const delay = (ms: number) =>
      new Promise((resolve) => setTimeout(resolve, ms))
    for (let i = 0; i < document.body.scrollHeight; i += window.innerHeight) {
      window.scrollTo(0, i)
      await delay(100)
    }
  })

  // scroll top
  await page.evaluate(async () => {
    const delay = (ms: number) =>
      new Promise((resolve) => setTimeout(resolve, ms))
    for (let i = document.body.scrollHeight; i > 0; i -= 50) {
      window.scrollTo(0, i)
      await delay(50)
    }
  })

  await page.waitForTimeout(2000)

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
