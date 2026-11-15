import { createFileRoute } from "@tanstack/react-router";
import { SpecialtyPage } from "@/components/site/SpecialtyPage";
import { specialties } from "@/lib/specialties";

export const Route = createFileRoute("/food-truck-websites")({
  head: () => ({
    meta: [
      { title: "Food Truck Websites in Kentucky | Bluegrass Digital Forge" },
      { name: "description", content: "Food truck websites with Where We Are Today location updates, menus and catering. Flat pricing, you own the code." },
      { property: "og:title", content: "Food Truck Websites in Kentucky" },
      { property: "og:description", content: "Food truck websites with Where We Are Today location updates, menus and catering. Flat pricing, you own the code." },
    ],
  }),
  component: () => <SpecialtyPage s={specialties.foodtruck} />,
});
