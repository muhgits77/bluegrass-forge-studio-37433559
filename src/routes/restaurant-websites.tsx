import { seo, serviceLd, breadcrumbLd } from "@/lib/seo";
import { createFileRoute } from "@tanstack/react-router";
import { SpecialtyPage } from "@/components/site/SpecialtyPage";
import { specialties } from "@/lib/specialties";

export const Route = createFileRoute("/restaurant-websites")({
  head: () =>
    seo({
      path: "/restaurant-websites",
      title: "Restaurant Websites for Monticello KY | Bluegrass Digital Forge",
      description: "Restaurant websites with phone-friendly menus, hours and catering for Monticello and Lake Cumberland.",
      jsonLd: [serviceLd("Restaurant Websites for Monticello KY", "Restaurant websites with phone-friendly menus, hours and catering for Monticello and Lake Cumberland.", "/restaurant-websites"), breadcrumbLd([["Home", "/"], ["Services", "/services"], ["Restaurant Websites for Monticello KY", "/restaurant-websites"]])],
    }),
  component: () => <SpecialtyPage s={specialties.restaurant} />,
});
