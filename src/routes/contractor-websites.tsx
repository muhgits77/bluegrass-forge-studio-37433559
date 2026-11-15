import { createFileRoute } from "@tanstack/react-router";
import { SpecialtyPage } from "@/components/site/SpecialtyPage";
import { specialties } from "@/lib/specialties";

export const Route = createFileRoute("/contractor-websites")({
  head: () => ({
    meta: [
      { title: "Contractor Websites for Lake Cumberland | Bluegrass Digital Forge" },
      { name: "description", content: "Websites for plumbers, roofers, HVAC and trades in Wayne, Pulaski, Russell and McCreary counties." },
      { property: "og:title", content: "Contractor Websites for Lake Cumberland" },
      { property: "og:description", content: "Websites for plumbers, roofers, HVAC and trades in Wayne, Pulaski, Russell and McCreary counties." },
    ],
  }),
  component: () => <SpecialtyPage s={specialties.contractor} />,
});
