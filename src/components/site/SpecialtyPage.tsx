import { Link } from "@tanstack/react-router";
import { CopperButton, GhostButton, Eyebrow } from "@/components/site/Layout";
import { DemoCard } from "@/components/site/DemoCard";
import { demos } from "@/lib/portfolio";
import type { Specialty } from "@/lib/specialties";
import { pricing } from "@/lib/pricing";

export function SpecialtyPage({ s }: { s: Specialty }) {
  const examples = demos.filter((d) => s.demoCategories.includes(d.category) || s.demoTitles?.includes(d.title)).slice(0, 3);
  return (
    <>
      <section className="relative overflow-hidden">
        <img src={s.image} alt={s.imageAlt} width={1600} height={912} className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/30" />
        <div className="relative mx-auto max-w-7xl px-5 py-20 lg:py-28">
          <div className="max-w-2xl">
            <Eyebrow>{s.eyebrow}</Eyebrow>
            <h1 className="mt-4 font-display text-4xl font-bold leading-tight tracking-tight md:text-6xl">{s.title}</h1>
            <p className="mt-5 text-lg text-muted-foreground">{s.intro}</p>
            <p className="mt-4 text-muted-foreground">Handcrafted in Monticello, KY. <strong className="text-foreground">Flat one-time pricing</strong> from $1,200. <strong className="text-foreground">You own the site and the code.</strong> No monthly retainer.</p>
            <div className="mt-8 flex flex-wrap gap-3"><CopperButton to="/quote">{s.cta}</CopperButton><GhostButton to="/services">See pricing</GhostButton></div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20">
        <Eyebrow>What's included</Eyebrow>
        <h2 className="mt-3 font-display text-3xl font-bold md:text-4xl">Features that matter — not agency fluff.</h2>
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {s.features.map(([t, b]) => <div key={t} className="rounded-2xl border border-border bg-card p-6"><h3 className="font-display text-xl font-bold">{t}</h3><p className="mt-2 text-muted-foreground">{b}</p></div>)}
        </div>
        <div className="mt-10 rounded-3xl border border-border bg-card/60 p-8">
          <p className="font-semibold">Typical inclusions</p>
          <ul className="mt-4 grid gap-2 text-sm sm:grid-cols-2 lg:grid-cols-3">{s.inclusions.map((i) => <li key={i} className="flex gap-3"><span className="text-primary">✓</span>{i}</li>)}</ul>
        </div>
      </section>

      <section className="border-y border-border bg-card/50 py-20">
        <div className="mx-auto max-w-7xl px-5">
          <Eyebrow>Who it's for</Eyebrow>
          <h2 className="mt-3 font-display text-3xl font-bold md:text-4xl">{s.whoTitle}</h2>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {s.who.map(([t, b]) => <div key={t} className="rounded-2xl border border-border bg-background p-6"><h3 className="font-display text-lg font-bold">{t}</h3><p className="mt-2 text-sm text-muted-foreground">{b}</p></div>)}
          </div>
          <p className="mt-6 text-sm text-muted-foreground">More on each town: <Link to="/service-areas" className="text-primary">Lake Cumberland service areas →</Link></p>
        </div>
      </section>

      {examples.length > 0 && (
        <section className="mx-auto max-w-7xl px-5 py-20">
          <Eyebrow>Live examples</Eyebrow>
          <h2 className="mt-3 font-display text-3xl font-bold">See it on real builds</h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">{examples.map((d) => <DemoCard key={d.title} demo={d} />)}</div>
        </section>
      )}

      <section className="mx-auto max-w-4xl px-5 pb-20 pt-4 text-center">
        <div className="rounded-3xl border border-primary bg-card p-10">
          <h2 className="font-display text-3xl font-bold md:text-4xl">Pay once. Own it forever.</h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">Tell me about your business and I'll send an honest flat-price proposal — from a neighbor in Monticello, not an agency.</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3"><CopperButton to="/quote">{s.cta}</CopperButton><GhostButton to="/work">Browse all demos</GhostButton></div>
          <p className="mt-6 text-sm text-muted-foreground">Prefer DIY? <Link to="/templates" className="text-primary">Website templates from ${pricing.websiteTemplateFrom}, calculators from ${pricing.calculatorFrom} →</Link></p>
        </div>
      </section>
    </>
  );
}
