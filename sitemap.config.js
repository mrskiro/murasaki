/** @type {import('next-sitemap').IConfig} */

const URL = process.env.SITE_URL

if (!URL) {
  throw new Error("not exist site url")
}

module.exports = {
  siteUrl: URL,
  generateRobotsTxt: true,
}
