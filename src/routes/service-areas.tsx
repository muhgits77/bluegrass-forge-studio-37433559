import { seo, breadcrumbLd } from "@/lib/seo";
import { createFileRoute, Link } from "@tanstack/react-router";
import { CopperButton, PageHero } from "@/components/site/Layout";

export const Route = createFileRoute("/service-areas")({
  head: () =>
    seo({
      path: "/service-areas",
      title: "Lake Cumberland Service Areas | Bluegrass Digital Forge",
      description: "Web design for Monticello, Somerset, Russell Springs, Jamestown, Burnside, Nancy, Albany, Whitley City and every Lake Cumberland ramp town.",
      jsonLd: [breadcrumbLd([["Home", "/"], ["Service Areas", "/service-areas"]])],
    }),
  component: Areas,
});

const towns = [
  ["monticello", "Monticello, KY", "Wayne County · Home base · Conley Bottom & Beaver Creek nearby", "Home base for Bluegrass Digital Forge. Restaurants, shops, guides and trades around Wayne County get a neighbor who can meet in person and knows what lake visitors search for."],
  ["jamestown", "Jamestown, KY", "Russell County · State Dock · Lake Cumberland Marina · Recreation Area", "Jamestown is one of the lake’s busiest visitor hubs — houseboats, guides, lodging, and dockside dining. People search for rentals, striper trips, and “what’s open near State Dock” before they ever leave the lake house."],
  ["burnside", "Burnside, KY", "Pulaski County · Burnside Marina · US 27 gateway", "Burnside is the Pulaski gateway to the water — weekend families, lodging, marina traffic, and restaurants that fill when the lake is busy. A clear site helps you show up when boaters search from the road or the parking lot."],
  ["nancy", "Nancy, KY", "Pulaski County · Lee’s Ford Marina Resort", "Nancy is defined by Lee’s Ford — a full-service marina resort destination. Visitors plan lodging, dining, and dock time together. Your website should make that planning easy, not send them hunting across three Facebook pages."],
  ["russell-springs", "Russell Springs, KY", "Russell County · US 127 & KY 80 corridor", "Russell Springs sits on the highway approaches to the lake — lake house traffic, locals who know the quieter ramps, and businesses that serve both town and water. You don’t need a 20-page site; you need a fast, honest one."],
  ["albany", "Albany, KY", "Clinton County · Southern shore access · Grider Hill area", "Albany and Clinton County feed the southern side of Lake Cumberland. Weekenders coming from the south need businesses that look open, local, and easy to reach — not a placeholder site from 2014."],
  ["somerset", "Somerset, KY", "Pulaski County seat · Burnside, Lee’s Ford & Waitsboro nearby", "Somerset is the largest town on the north side of the lake. Restaurants, contractors, shops and services here compete with a bigger town’s worth of businesses, so a fast, clear site matters."],
  ["whitley-city", "Whitley City, KY", "McCreary County · Pine Knot · Stearns · Big South Fork", "Whitley City is the McCreary County seat, south of the lake along US 27. Outdoor visitors heading to the Big South Fork and the national forest search on their phones for lodging, food and outfitters."],
];

function Areas() {
  return (
    <>
      <PageHero eyebrow="Service areas" title="Websites for every major boat ramp town on the lake.">
        Flat pricing. Full ownership. Handcrafted in Monticello. No monthly website retainer.
      </PageHero>
      <section className="mx-auto grid max-w-6xl gap-6 px-5 pb-20 md:grid-cols-2">
        {towns.map(([id, name, meta, body]) => (
          <article key={id} id={id} className="scroll-mt-28 rounded-2xl border border-border bg-card p-7">
            <h2 className="font-display text-2xl font-bold">{name}</h2>
            <p className="mt-1 text-sm text-primary">{meta}</p>
            <p className="mt-4 text-muted-foreground">{body}</p>
            <Link to="/quote" className="mt-4 inline-block text-sm font-semibold text-primary">Get a quote for {(name ?? "").replace(", KY", "")} →</Link>
          </article>
        ))}
      </section>
      <section className="mx-auto max-w-3xl px-5 pb-20 text-center">
        <p className="mb-6 text-muted-foreground">Specialty sites: <Link to="/marina-websites" className="text-primary">marinas</Link> · <Link to="/fishing-guide-websites" className="text-primary">fishing guides</Link> · <Link to="/food-truck-websites" className="text-primary">food trucks</Link> · <Link to="/restaurant-websites" className="text-primary">restaurants</Link> · <Link to="/contractor-websites" className="text-primary">contractors</Link></p>
        <h2 className="font-display text-4xl font-bold">Ready to show up for the boaters at your ramp?</h2>
        <div className="mt-8"><CopperButton to="/quote">Get a free quote →</CopperButton></div>
      </section>
    </>
  );
}
