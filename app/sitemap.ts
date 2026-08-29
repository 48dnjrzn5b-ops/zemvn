import type { MetadataRoute } from "next";
import { services } from "@/data/services";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://zem.vn.ua",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },

    ...services.map((service) => ({
      url: `https://zem.vn.ua/services/${service.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
