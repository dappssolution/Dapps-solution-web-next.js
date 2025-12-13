/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://www.dappssolutions.com",
  generateRobotsTxt: true,
  generateIndexSitemap: true,
  changefreq: "weekly",
  priority: 0.7,
  sitemapSize: 7000,
  exclude: ["/404", "/500"],
  robotsTxtOptions: {
    policies: [{ userAgent: "*", allow: "/" }],
    additionalSitemaps: ["https://www.dappssolutions.com/sitemap.xml"],
  },
};
