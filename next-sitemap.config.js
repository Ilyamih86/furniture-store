/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || "https://furniture-store-ilyamih-s-projects.vercel.app",
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/admin/", "/cart", "/checkout", "/profile"],
      },
    ],
  },
  exclude: ["/api/*", "/admin/*", "/cart", "/checkout", "/profile"],
  changefreq: "weekly",
  priority: 0.7,
  generateIndexSitemap: false,
};