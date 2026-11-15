import { createFileRoute, Link } from "@tanstack/react-router";
import hero from "@/assets/hero-lake.jpg";
import { CopperButton, GhostButton, Eyebrow } from "@/components/site/Layout";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About the Monticello KY Website Designer | Bluegrass Digital Forge" },
      { name: "description", content: "A neighbor on Lake Cumberland building websites with flat pricing and full ownership — no agency middlemen, real local replies." },
      { property: "og:title", content: "About Bluegrass Digital Forge" },
      { property: "og:description", content: "Living and working on Lake Cumberland. Flat pricing. You own the code." },
    ],
  }),
  component: About,
});

const values = [
  ["Flat pricing, full ownership", "One clear flat rate for the build. You own the code from day one — no monthly hostage fees, no black-box platform. Host it with me or take it anywhere."],
  ["No agency middlemen", "You talk to the person who builds your site. No account managers, no ticket queues, no overseas handoffs."],
  ["Real local replies", "Text or call me. Stop me at the diner. Weekend answers before a busy Saturday — not a chat window halfway across the country."],
  ["I know your customers", "Folks at the marina, families heading to the lake on Friday, contractors grabbing lunch in town. Sites that speak to them, not generic templates."],
];
const counties = [
  ["Wayne County", "Monticello, Conley Bottom, Beaver Creek"],
  ["Pulaski County", "Somerset, Burnside, Nancy, Lee's Ford"],
  ["Russell County", "Jamestown, Russell Springs, State Dock, Creelsboro"],
  ["McCreary County", "Whitley City, Pine Knot, Stearns"],
];

function About() {
  return (
    <>
      <section className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-16 lg:grid-cols-2">
        <div>
          <Eyebrow>About — Monticello KY website designer</Eyebrow>
          <h1 className="mt-4 font-display text-4xl font-bold tracking-tight md:text-6xl">A neighbor on the lake, not an agency.</h1>
          <p className="mt-6 text-lg text-muted-foreground">I live and work right here on Lake Cumberland. When you hire Bluegrass Digital Forge, you get honest <strong className="text-foreground">flat pricing</strong>, <strong className="text-foreground">full ownership</strong> of your site — <strong className="text-foreground">you own the code</strong> — and a real neighbor who knows the difference between a Wayne County food truck at the marina and a Somerset storefront.</p>
          <p className="mt-4 text-muted-foreground">No lock-in, no proprietary platform holding your business hostage — just local craftsmanship and a flat rate you can plan around. Your website is yours forever.</p>
        </div>
        <img src={hero} alt="Golden hour over Lake Cumberland near Monticello, Kentucky" className="aspect-[4/3] w-full rounded-3xl border border-border object-cover" />
      </section>

      <section className="mx-auto grid max-w-7xl gap-5 px-5 pb-20 md:grid-cols-2">
        {values.map(([t, b]) => <div key={t} className="rounded-2xl border border-border bg-card p-7"><h2 className="font-display text-xl font-bold">{t}</h2><p className="mt-2 text-muted-foreground">{b}</p></div>)}
      </section>

      <section className="border-y border-border bg-card/50 py-20">
        <div className="mx-auto max-w-7xl px-5">
          <Eyebrow>Service area</Eyebrow>
          <h2 className="mt-3 font-display text-3xl font-bold md:text-4xl">Wayne, Pulaski, Russell & McCreary counties</h2>
          <p className="mt-4 max-w-2xl text-muted-foreground">From Monticello outward to every Lake Cumberland town and ramp — plus Albany and the south shore. Outside the area? Custom work is available anywhere by email.</p>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {counties.map(([c, t]) => <div key={c} className="rounded-2xl border border-border bg-background p-6"><h3 className="font-display text-lg font-bold">{c}</h3><p className="mt-2 text-sm text-muted-foreground">{t}</p></div>)}
          </div>
          <Link to="/service-areas" className="mt-6 inline-block font-semibold text-primary">Full service areas →</Link>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-5 py-20 text-center">
        <h2 className="font-display text-4xl font-bold">Curious what an honest, local build looks like?</h2>
        <div className="mt-8 flex flex-wrap justify-center gap-3"><CopperButton to="/quote">Start a conversation →</CopperButton><GhostButton to="/work">Browse the live demos</GhostButton></div>
        <p className="mt-8 text-sm text-muted-foreground">Forged in Monticello, Kentucky. Independently owned. No agency middlemen.</p>
      </section>
    </>
  );
}
