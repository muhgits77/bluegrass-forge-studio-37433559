import { createFileRoute } from "@tanstack/react-router";
import { SpecialtyPage } from "@/components/site/SpecialtyPage";
import { specialties } from "@/lib/specialties";

export const Route = createFileRoute("/fishing-guide-websites")({
  head: () => ({
    meta: [
      { title: "Fishing Guide Websites for Lake Cumberland | Bluegrass Digital Forge" },
      { name: "description", content: "Striper, bass and multi-species guide websites with trip pages and booking. Built in Monticello, KY." },
      { property: "og:title", content: "Fishing Guide Websites for Lake Cumberland" },
      { property: "og:description", content: "Striper, bass and multi-species guide websites with trip pages and booking. Built in Monticello, KY." },
    ],
  }),
  component: () => <SpecialtyPage s={specialties.fishing} />,
});
