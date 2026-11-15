export const SITE_URL = "https://bluegrassdigitalforge.com";
export const OG_IMAGE = `${SITE_URL}/og-image.jpg`;

type JsonLd = Record<string, unknown>;

export function seo({ path, title, description, jsonLd = [] }: { path: string; title: string; description: string; jsonLd?: JsonLd[] }) {
  const url = `${SITE_URL}${path === "/" ? "/" : path}`;
  return {
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: url },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Bluegrass Digital Forge" },
      { property: "og:image", content: OG_IMAGE },
      { property: "og:image:alt", content: "Golden hour over Lake Cumberland near Monticello, Kentucky" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: OG_IMAGE },
    ],
    links: [{ rel: "canonical", href: url }],
    scripts: jsonLd.map((d) => ({ type: "application/ld+json", children: JSON.stringify(d) })),
  };
}

export const localBusiness = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${SITE_URL}/#business`,
  name: "Bluegrass Digital Forge",
  url: SITE_URL,
  image: OG_IMAGE,
  email: "contact@bluegrassdigitalforge.com",
  description: "Handcrafted websites for Lake Cumberland businesses, built in Monticello, KY. Flat one-time pricing and full code ownership.",
  priceRange: "$$",
  address: { "@type": "PostalAddress", addressLocality: "Monticello", addressRegion: "KY", addressCountry: "US" },
  areaServed: ["Wayne County, KY", "Pulaski County, KY", "Russell County, KY", "McCreary County, KY", "Clinton County, KY", "Lake Cumberland"].map((name) => ({ "@type": "Place", name })),
  sameAs: ["https://bluegrasstemplates.com/"],
};

export const website = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  name: "Bluegrass Digital Forge",
  url: SITE_URL,
  publisher: { "@id": `${SITE_URL}/#business` },
};

export function serviceLd(name: string, description: string, path: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url: `${SITE_URL}${path}`,
    serviceType: "Website design",
    provider: { "@id": `${SITE_URL}/#business` },
    areaServed: "Lake Cumberland, Kentucky",
    offers: { "@type": "Offer", price: "1200", priceCurrency: "USD", description: "Starter Sites from $1,200 one-time" },
  };
}

export function breadcrumbLd(items: [string, string][]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map(([name, path], i) => ({ "@type": "ListItem", position: i + 1, name, item: `${SITE_URL}${path}` })),
  };
}
