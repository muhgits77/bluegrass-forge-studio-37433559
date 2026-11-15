import { seo, serviceLd, breadcrumbLd } from "@/lib/seo";
import { createFileRoute } from "@tanstack/react-router";
import { SpecialtyPage } from "@/components/site/SpecialtyPage";
import { specialties } from "@/lib/specialties";

export const Route = createFileRoute("/fishing-guide-websites")({
  head: () =>
    seo({
      path: "/fishing-guide-websites",
      title: "Fishing Guide Websites for Lake Cumberland | Bluegrass Digital Forge",
      description: "Striper, bass and multi-species guide websites with trip pages and booking. Built in Monticello, KY.",
      jsonLd: [serviceLd("Fishing Guide Websites for Lake Cumberland", "Striper, bass and multi-species guide websites with trip pages and booking. Built in Monticello, KY.", "/fishing-guide-websites"), breadcrumbLd([["Home", "/"], ["Services", "/services"], ["Fishing Guide Websites for Lake Cumberland", "/fishing-guide-websites"]])],
    }),
  component: () => <SpecialtyPage s={specialties.fishing} />,
});
