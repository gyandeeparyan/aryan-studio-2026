export async function GET() {
  const baseUrl = "https://aryanstudio.in";

  const pages = [
    { loc: "", changefreq: "weekly", priority: 1.0 },
    { loc: "#services", changefreq: "monthly", priority: 0.9 },
    { loc: "#about", changefreq: "monthly", priority: 0.8 },
    { loc: "#projects", changefreq: "monthly", priority: 0.9 },
    { loc: "#pricing", changefreq: "monthly", priority: 0.8 },
    { loc: "#team", changefreq: "monthly", priority: 0.7 },
    { loc: "#faqs", changefreq: "monthly", priority: 0.8 },
    { loc: "#contact", changefreq: "monthly", priority: 0.9 },
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${pages
    .map(
      (page) => `
  <url>
    <loc>${baseUrl}${page.loc}</loc>
    <lastmod>${new Date().toISOString().split("T")[0]}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>
  `
    )
    .join("")}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
    },
  });
}
