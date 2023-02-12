import { test, expect } from "@playwright/test"

test.beforeEach(async ({ page }) => {
  await page.goto("/")
})

test("has title", async ({ page }) => {
  await expect(page).toHaveTitle(/🟣🟣🟪🟪/)
  await page.goto(`/about`)
  await expect(page).toHaveTitle(/About/)
  await page.goto(`/posts/demo`)
  await expect(page).toHaveTitle(/demo/)
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
  await expect(page).toHaveScreenshot("post.png", {
    fullPage: true,
  })
})

test("navigation", async ({ page }) => {
  await page.getByRole("link", { name: "About" }).click()
  await expect(page).toHaveURL(/about/)

  await page.getByRole("link", { name: "Posts" }).click()
  await expect(page).not.toHaveURL(/about/)

  await page.getByRole("link", { name: "demo" }).click()
  await expect(page).not.toHaveURL(/.demo/)
})
