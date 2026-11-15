import { createFileRoute } from "@tanstack/react-router";
import { SpecialtyPage } from "@/components/site/SpecialtyPage";
import { specialties } from "@/lib/specialties";

export const Route = createFileRoute("/restaurant-websites")({
  head: () => ({
    meta: [
      { title: "Restaurant Websites for Monticello KY | Bluegrass Digital Forge" },
      { name: "description", content: "Restaurant websites with phone-friendly menus, hours and catering for Monticello and Lake Cumberland." },
      { property: "og:title", content: "Restaurant Websites for Monticello KY" },
      { property: "og:description", content: "Restaurant websites with phone-friendly menus, hours and catering for Monticello and Lake Cumberland." },
    ],
  }),
  component: () => <SpecialtyPage s={specialties.restaurant} />,
});
