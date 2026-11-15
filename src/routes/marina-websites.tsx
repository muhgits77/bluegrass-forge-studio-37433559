import { createFileRoute } from "@tanstack/react-router";
import { SpecialtyPage } from "@/components/site/SpecialtyPage";
import { specialties } from "@/lib/specialties";

export const Route = createFileRoute("/marina-websites")({
  head: () => ({
    meta: [
      { title: "Marina Websites for Lake Cumberland | Bluegrass Digital Forge" },
      { name: "description", content: "Marina and dock websites for Burnside, Lee's Ford, State Dock, Conley Bottom and more. Flat pricing, you own the code." },
      { property: "og:title", content: "Marina Websites for Lake Cumberland" },
      { property: "og:description", content: "Marina and dock websites for Burnside, Lee's Ford, State Dock, Conley Bottom and more. Flat pricing, you own the code." },
    ],
  }),
  component: () => <SpecialtyPage s={specialties.marina} />,
});
