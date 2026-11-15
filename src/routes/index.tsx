import { seo, localBusiness, website } from "@/lib/seo";
import { createFileRoute, Link } from "@tanstack/react-router";
import hero from "@/assets/hero-lake.jpg";
import { CopperButton, GhostButton, Eyebrow, TownsBand } from "@/components/site/Layout";
import { DemoCard } from "@/components/site/DemoCard";
import { demos } from "@/lib/portfolio";
import { pricing, businessSuiteRange } from "@/lib/pricing";

export const Route = createFileRoute("/")({
  head: () =>
    seo({
      path: "/",
      title: "Lake Cumberland Business Websites | Bluegrass Digital Forge",
      description: "Handcrafted websites for restaurants, food trucks, marinas and shops around Lake Cumberland. Built in Monticello, KY. Flat pricing, you own the code.",
      jsonLd: [localBusiness, website],
    }),
  component: Index,
});

const featured = ["Fiesta Taqueria", "Bluegrass Fence Co.", "La Hacienda Cumberland", "Bluegrass Market & Mercantile", "Bourbon Ridge Artisan Studio", "Hickory Forge Steakhouse"];

function Check({ children }: { children: React.ReactNode }) {
  return <li className="flex gap-3"><span className="text-primary">✓</span>{children}</li>;
}

function Index() {
  const picks = featured.map((t) => demos.find((d) => d.title === t)).filter(Boolean) as typeof demos;
  return (
    <>
      <section className="relative overflow-hidden">
        <img src={hero} alt="Golden hour over Lake Cumberland near Monticello, Kentucky" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-background/40" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 lg:grid-cols-[1.3fr_1fr] lg:py-28">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-background/60 px-4 py-2 text-xs uppercase tracking-[0.2em]"><span className="h-1.5 w-1.5 rounded-full bg-primary" />Forged in Monticello, KY</span>
            <h1 className="mt-6 font-display text-5xl font-bold leading-[1.02] tracking-tight md:text-7xl">
              Lake Cumberland Business Websites Built in <span className="text-copper">Monticello, KY</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg text-muted-foreground">
              Sites for restaurants, food trucks, marinas, and shops around the lake. Built by a neighbor in Monticello. <strong className="text-foreground">Flat pricing.</strong> No monthly lock-in for the build. <strong className="text-foreground">You own the code</strong> from day one.
            </p>
            <p className="mt-4 max-w-xl text-muted-foreground">Built by a neighbor, not an agency. From Monticello to Jamestown, Burnside, and the ramp towns in between.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <CopperButton to="/quote">Get a free quote →</CopperButton>
              <GhostButton to="/work">Browse live demos</GhostButton>
            </div>
            <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground">
              <Check>Flat pricing, no surprises</Check><Check>You own the code</Check><Check>Live in 2–4 weeks</Check>
            </ul>
          </div>
          <div className="rounded-3xl border border-border bg-card/70 p-8 backdrop-blur">
            <Eyebrow>Kentucky base rates</Eyebrow>
            <p className="mt-4 font-display text-6xl font-bold">$1,200 <span className="font-sans text-base font-normal text-muted-foreground">one-time · Starter Sites</span></p>
            <p className="mt-4 text-muted-foreground">Business Suites {businessSuiteRange}. Flat rate, no monthly lock-in for the build. Full ownership — you own the code.</p>
            <ul className="mt-6 space-y-3 text-sm"><Check>Mobile-first, fast, accessible</Check><Check>Local SEO for real lake searches</Check><Check>Handcrafted — not template spam</Check></ul>
            <Link to="/services" className="mt-6 inline-block font-semibold text-primary">See full pricing →</Link>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-5 py-14 md:grid-cols-4">
        {[["16+", "Live Kentucky demos"], ["2–4 wks", "Typical launch"], ["Local", "Monticello builder"], ["Yours", "Full ownership"]].map(([a, b]) => (
          <div key={b} className="text-center"><p className="text-copper font-display text-4xl font-bold">{a}</p><p className="mt-1 text-sm text-muted-foreground">{b}</p></div>
        ))}
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-20">
        <Eyebrow>Featured work</Eyebrow>
        <div className="mt-3 flex flex-wrap items-end justify-between gap-4">
          <h2 className="font-display text-4xl font-bold">Built for real lake businesses</h2>
          <Link to="/work" className="font-semibold text-primary">See all demos →</Link>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">{picks.map((d) => <DemoCard key={d.title} demo={d} />)}</div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-20">
        <div className="grid items-center gap-10 rounded-3xl border border-border bg-card p-10 md:grid-cols-2">
          <div>
            <Eyebrow>Website templates from ${pricing.websiteTemplateFrom}</Eyebrow>
            <h2 className="mt-3 font-display text-3xl font-bold">Prefer to build it yourself?</h2>
            <p className="mt-4 text-muted-foreground">Ready-to-remix website templates, hand-built in Kentucky. Launch a professional site in an afternoon. Website templates from <strong className="text-foreground">${pricing.websiteTemplateFrom}</strong>, calculators from <strong className="text-foreground">${pricing.calculatorFrom}</strong>. One-time purchase. Free updates for bug fixes and refinements.</p>
          </div>
          <div className="text-center md:text-right">
            <a href="https://bluegrasstemplates.com/" className="bg-copper inline-flex rounded-full px-7 py-3.5 font-semibold text-primary-foreground">Browse templates ↗</a>
          </div>
        </div>
      </section>

      <TownsBand />

      <section className="mx-auto max-w-4xl px-5 py-20 text-center">
        <Eyebrow>Let's build</Eyebrow>
        <h2 className="mt-3 font-display text-4xl font-bold md:text-5xl">Ready for a website forged in Monticello?</h2>
        <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">Flat pricing. Full ownership — you own the code. No agency. Lake Cumberland towns from Albany to Whitley City, across Wayne, Pulaski, Russell and McCreary counties.</p>
        <div className="mt-8 flex flex-wrap justify-center gap-3"><CopperButton to="/quote">Get a free quote →</CopperButton><GhostButton to="/services">See pricing</GhostButton></div>
      </section>
    </>
  );
}
