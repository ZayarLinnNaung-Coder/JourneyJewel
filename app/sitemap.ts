import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://www.nexlynk.com";

  const pages = ["/", "/contact", "/places", "/for-school", "/about-us"];

  return pages.map((page) => ({
    url: `${baseUrl}${page}`,
    changefreq: "monthly",
    priority: page === "/" ? 1.0 : 0.7,
    lastmod: new Date().toISOString(),
  }));
}
