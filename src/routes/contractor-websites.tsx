import { seo, serviceLd, breadcrumbLd } from "@/lib/seo";
import { createFileRoute } from "@tanstack/react-router";
import { SpecialtyPage } from "@/components/site/SpecialtyPage";
import { specialties } from "@/lib/specialties";

export const Route = createFileRoute("/contractor-websites")({
  head: () =>
    seo({
      path: "/contractor-websites",
      title: "Contractor Websites for Lake Cumberland | Bluegrass Digital Forge",
      description: "Websites for plumbers, roofers, HVAC and trades in Wayne, Pulaski, Russell and McCreary counties.",
      jsonLd: [serviceLd("Contractor Websites for Lake Cumberland", "Websites for plumbers, roofers, HVAC and trades in Wayne, Pulaski, Russell and McCreary counties.", "/contractor-websites"), breadcrumbLd([["Home", "/"], ["Services", "/services"], ["Contractor Websites for Lake Cumberland", "/contractor-websites"]])],
    }),
  component: () => <SpecialtyPage s={specialties.contractor} />,
});
