const URL = process.env.SITE_URL

if (!URL) {
  throw new Error("not exist site url")
}

/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: URL,
  generateRobotsTxt: true,
}
