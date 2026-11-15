import { seo, serviceLd, breadcrumbLd } from "@/lib/seo";
import { createFileRoute } from "@tanstack/react-router";
import { SpecialtyPage } from "@/components/site/SpecialtyPage";
import { specialties } from "@/lib/specialties";

export const Route = createFileRoute("/food-truck-websites")({
  head: () =>
    seo({
      path: "/food-truck-websites",
      title: "Food Truck Websites in Kentucky | Bluegrass Digital Forge",
      description: "Food truck websites with Where We Are Today location updates, menus and catering. Flat pricing, you own the code.",
      jsonLd: [serviceLd("Food Truck Websites in Kentucky", "Food truck websites with Where We Are Today location updates, menus and catering. Flat pricing, you own the code.", "/food-truck-websites"), breadcrumbLd([["Home", "/"], ["Services", "/services"], ["Food Truck Websites in Kentucky", "/food-truck-websites"]])],
    }),
  component: () => <SpecialtyPage s={specialties.foodtruck} />,
});
