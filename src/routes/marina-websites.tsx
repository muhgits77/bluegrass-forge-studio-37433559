import { seo, serviceLd, breadcrumbLd } from "@/lib/seo";
import { createFileRoute } from "@tanstack/react-router";
import { SpecialtyPage } from "@/components/site/SpecialtyPage";
import { specialties } from "@/lib/specialties";

export const Route = createFileRoute("/marina-websites")({
  head: () =>
    seo({
      path: "/marina-websites",
      title: "Marina Websites for Lake Cumberland | Bluegrass Digital Forge",
      description: "Marina and dock websites for Burnside, Lee's Ford, State Dock, Conley Bottom and more. Flat pricing, you own the code.",
      jsonLd: [serviceLd("Marina Websites for Lake Cumberland", "Marina and dock websites for Burnside, Lee's Ford, State Dock, Conley Bottom and more. Flat pricing, you own the code.", "/marina-websites"), breadcrumbLd([["Home", "/"], ["Services", "/services"], ["Marina Websites for Lake Cumberland", "/marina-websites"]])],
    }),
  component: () => <SpecialtyPage s={specialties.marina} />,
});
