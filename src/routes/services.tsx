import { seo, breadcrumbLd } from "@/lib/seo";
import { createFileRoute } from "@tanstack/react-router";
import { CopperButton, GhostButton, Eyebrow, PageHero, TownsBand } from "@/components/site/Layout";
import { businessSuiteRange } from "@/lib/pricing";

export const Route = createFileRoute("/services")({
  head: () =>
    seo({
      path: "/services",
      title: "Services & Flat Pricing | Bluegrass Digital Forge",
      description: `Starter Sites $1,200 and Business Suites ${businessSuiteRange}. Flat one-time pricing for Lake Cumberland businesses — you own the code.`,
      jsonLd: [
        breadcrumbLd([["Home", "/"], ["Services & Pricing", "/services"]]),
        { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faq.map(([q, a]) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })) },
      ],
    }),
  component: Services,
});

const plans = [
  { name: "Starter Sites", who: "Food trucks, barbers & small shops", price: "$1,200", items: ["Up to 4 pages (Home, Menu/Services, About, Contact)", "Mobile-first design", "Tap-to-call / directions / contact form", "Domain & hosting setup", "Google Business Profile basics", "30 days of post-launch tweaks included"] },
  { name: "Business Suites", who: "Restaurants, shops & co-ops", price: businessSuiteRange, popular: true, items: ["Up to 10 pages fully custom", "Online menu/schedule/gallery", "Booking/lead forms", "Google Business + local SEO", "Review collection + analytics", "Photo touch-ups & branding", "Branded email/social graphics", "60 days post-launch tweaks"] },
];
const niches: [string, string, string, string?][] = [
  ["Marinas", "Docks that book slips & rentals online.", "Burnside, Lee's Ford, State Dock, Conley Bottom & more.", "/marina-websites"],
  ["Fishing guides", "Striper & bass sites that get bookings.", "Trip pages, captain bios, trophy galleries.", "/fishing-guide-websites"],
  ["Food trucks", "“Where We Are Today” from your phone.", "Real-time location, menus & festivals.", "/food-truck-websites"],
  ["Lake houses", "Rental sites for lake houses.", "Calendars, galleries, house rules, and direct booking."],
  ["Bait & boats", "Bait shops and rental docks.", "Live bait, hours, fleet cards, fishing reports."],
  ["Contractors", "Plumbers, roofers, HVAC and trades.", "Tap-to-call, service lists and quote forms.", "/contractor-websites"],
];
const branding = [["Business Card Design Only", "Custom digital business card files, print-ready.", "$150"], ["Cards + 250 Printed", "Design plus 250 premium printed cards.", "$250"], ["Cards + 500 Printed", "Design plus 500 premium printed cards.", "$300"], ["Branding Starter", "Logo refinement, color palette, business cards, email signature.", "$450"], ["Full Branding Kit", "Logo design, brand kit, printed cards, social templates, email signature.", "$750"]];
const faq = [
  ["How long does a site take?", "Most Starter Sites launch in about 2 weeks. Business Suites usually 3–5 weeks once we've got photos and content."],
  ["Do I have to use your hosting?", "Nope. The $79/mo care plan is optional. You can host wherever you want — direct hosting usually runs $10–20/month from the provider."],
  ["Can I update the site myself?", "Absolutely. I'll show you how to update content, photos, and menus on a quick screen-share. Or let me handle it on the care plan."],
  ["What if I just need a one-page site?", "A Starter Site starting at $1,200 covers it with room to spare."],
  ["Do you work outside Monticello?", "Most clients are around Wayne County and Lake Cumberland. Outside the area? Custom work is available anywhere by email, or grab a ready-made template from bluegrasstemplates.com."],
  ["Do I own the website when it’s done?", "Yes. Full ownership of the site and code after payment. No monthly retainer required to keep what you paid for."],
  ["What if I just need a logo or business cards?", "Branding add-ons can be bought on their own — no website required."],
];

function Services() {
  return (
    <>
      <PageHero eyebrow="Services & pricing — Monticello KY website designer" title="Website Services & Flat Pricing">
        Flat-rate pricing. One-time. No surprises. When we’re done, <strong className="text-foreground">you own the code.</strong>
      </PageHero>
      <section className="mx-auto grid max-w-5xl gap-6 px-5 pb-20 md:grid-cols-2">
        {plans.map((p) => (
          <div key={p.name} className={`relative rounded-3xl border bg-card p-8 ${p.popular ? "border-primary" : "border-border"}`}>
            {p.popular && <span className="bg-copper absolute -top-3 right-6 rounded-full px-3 py-1 text-xs font-bold text-primary-foreground">MOST POPULAR</span>}
            <h3 className="font-display text-2xl font-bold">{p.name}</h3>
            <p className="text-muted-foreground">{p.who}</p>
            <p className={`mt-6 font-display font-bold ${p.popular ? "text-3xl" : "text-5xl"}`}>{p.price}<span className="mt-2 block font-sans text-sm font-normal text-muted-foreground">{p.popular ? "one-time" : "starting at · one-time"}</span></p>
            <ul className="mt-6 space-y-2 text-sm">{p.items.map((i) => <li key={i} className="flex gap-3"><span className="text-primary">✓</span>{i}</li>)}</ul>
            <div className="mt-8"><CopperButton to="/quote">Start a {p.name.replace(/s$/, "")} →</CopperButton></div>
          </div>
        ))}
      </section>
      <section className="mx-auto max-w-7xl px-5 pb-20">
        <h2 className="font-display text-3xl font-bold">Built for every kind of lake business</h2>
        <p className="mt-3 text-muted-foreground">Also see <a href="/restaurant-websites" className="text-primary">restaurant websites</a>.</p>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {niches.map(([a, b, c, href]) => <div key={a} className="rounded-2xl border border-border bg-card p-6"><Eyebrow>{a}</Eyebrow><h3 className="mt-3 font-display text-xl font-bold">{b}</h3><p className="mt-2 text-sm text-muted-foreground">{c}</p>{href && <a href={href} className="mt-3 inline-block text-sm font-semibold text-primary">{a.replace(/s$/, "")} websites →</a>}</div>)}
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-5 pb-20">
        <Eyebrow>Branding add-ons</Eyebrow>
        <h2 className="mt-3 font-display text-3xl font-bold">Look the part, everywhere.</h2>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {branding.map(([a, b, c]) => <div key={a} className="rounded-2xl border border-border bg-card p-5"><h3 className="font-semibold">{a}</h3><p className="mt-2 text-sm text-muted-foreground">{b}</p><p className="text-copper mt-4 font-display text-3xl font-bold">{c}</p></div>)}
        </div>
        <p className="mt-4 text-sm text-muted-foreground">Deposit required to begin design work. You own everything once paid in full.</p>
      </section>
      <section className="mx-auto max-w-3xl px-5 pb-20 text-center">
        <Eyebrow>Optional care plan</Eyebrow>
        <h2 className="mt-3 font-display text-3xl font-bold">I'll keep it running. You run your business.</h2>
        <p className="text-copper mt-6 font-display text-6xl font-bold">$79<span className="text-2xl">/month</span></p>
        <p className="mt-4 text-muted-foreground">Hosting + SSL, uptime monitoring & backups, small content updates, security updates, priority email. Cancel anytime — no contract. Totally optional.</p>
      </section>
      <TownsBand />
      <section className="mx-auto max-w-3xl px-5 py-20">
        <h2 className="font-display text-3xl font-bold">FAQ</h2>
        <div className="mt-6 divide-y divide-border">
          {faq.map(([q, a]) => <details key={q} className="py-4"><summary className="cursor-pointer font-semibold">{q}</summary><p className="mt-2 text-muted-foreground">{a}</p></details>)}
        </div>
        <div className="mt-12 flex flex-wrap gap-3"><CopperButton to="/quote">Get a free recommendation →</CopperButton><GhostButton to="/work">See real demos first</GhostButton></div>
      </section>
    </>
  );
}
