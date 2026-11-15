import { seo, breadcrumbLd } from "@/lib/seo";
import { createFileRoute, Link } from "@tanstack/react-router";
import { Eyebrow, PageHero } from "@/components/site/Layout";
import { pricing } from "@/lib/pricing";

export const Route = createFileRoute("/templates")({
  head: () =>
    seo({
      path: "/templates",
      title: `Website Templates from $${pricing.websiteTemplateFrom} | Bluegrass Digital Forge`,
      description: `Website templates from $${pricing.websiteTemplateFrom}, calculators from $${pricing.calculatorFrom}. One-time purchase, free updates. Available at bluegrasstemplates.com.`,
      jsonLd: [breadcrumbLd([["Home", "/"], ["Templates", "/templates"]])],
    }),
  component: Templates,
});

const STORE = "https://bluegrasstemplates.com/";
const steps = [
  ["1. Pick a template", "Browse ready-made sites for restaurants, food trucks, guides, trades and more."],
  ["2. Remix it", "Swap in your name, photos, menu, and hours. Launch a professional site in an afternoon."],
  ["3. Own it", "One-time purchase — no monthly lock-in. Free updates for bug fixes and refinements."],
];

function Templates() {
  return (
    <>
      <PageHero eyebrow={`Website templates from $${pricing.websiteTemplateFrom} · Calculators from $${pricing.calculatorFrom}`} title="Prefer to build it yourself?">
        Ready-to-remix website templates hand-built in Kentucky — the same care and local craft as our custom Lake Cumberland builds, just self-serve.
      </PageHero>
      <section className="mx-auto max-w-5xl px-5 pb-16">
        <div className="grid items-center gap-8 rounded-3xl border border-primary bg-card p-10 md:grid-cols-[1.4fr_1fr]">
          <ul className="space-y-3">
            {[`Website templates from $${pricing.websiteTemplateFrom} — one-time purchase`, "Hand-built in Kentucky, ready to remix", "Free updates for bug fixes & refinements", `Calculators from $${pricing.calculatorFrom}`].map((i) => <li key={i} className="flex gap-3"><span className="text-primary">✓</span>{i}</li>)}
          </ul>
          <div className="text-center md:text-right">
            <p className="text-copper font-display text-6xl font-bold">${pricing.websiteTemplateFrom}</p>
            <p className="text-sm text-muted-foreground">website templates · starting · one-time</p>
            <a href={STORE} className="bg-copper mt-6 inline-flex max-w-full rounded-full px-5 py-3.5 font-semibold text-primary-foreground">Browse templates ↗</a>
          </div>
        </div>
      </section>
      <section className="mx-auto grid max-w-5xl gap-5 px-5 pb-16 md:grid-cols-3">
        {steps.map(([t, b]) => <div key={t} className="rounded-2xl border border-border bg-card p-6"><h2 className="font-display text-xl font-bold">{t}</h2><p className="mt-2 text-sm text-muted-foreground">{b}</p></div>)}
      </section>
      <section className="mx-auto max-w-3xl px-5 pb-20 text-center">
        <Eyebrow>Want it done for you?</Eyebrow>
        <p className="mt-3 text-muted-foreground">Custom builds start at $1,200 with full code ownership. <Link to="/services" className="text-primary">See pricing</Link> or <Link to="/quote" className="text-primary">get a free quote →</Link></p>
      </section>
    </>
  );
}
