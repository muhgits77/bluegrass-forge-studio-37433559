import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";

const nav = [
  { to: "/", label: "Home" },
  { to: "/work", label: "My Work" },
  { to: "/services", label: "Services & Pricing" },
  { to: "/templates", label: "Templates" },
  { to: "/service-areas", label: "Service Areas" },
  { to: "/blog", label: "Blog" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export const EMAIL = "contact@bluegrassdigitalforge.com";

export function CopperButton({ to, children }: { to: "/quote" | "/work" | "/services" | "/contact"; children: ReactNode }) {
  return (
    <Link to={to} className="bg-copper inline-flex items-center gap-2 rounded-full px-7 py-3.5 font-display font-semibold text-primary-foreground shadow-lg transition hover:brightness-110">
      {children}
    </Link>
  );
}

export function GhostButton({ to, children }: { to: "/quote" | "/work" | "/services" | "/contact"; children: ReactNode }) {
  return (
    <Link to={to} className="inline-flex items-center gap-2 rounded-full border border-border bg-background/60 px-7 py-3.5 font-display font-semibold text-foreground transition hover:border-primary">
      {children}
    </Link>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">{children}</p>;
}

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-5 py-4">
        <Link to="/" className="leading-tight">
          <span className="block font-display text-lg font-bold">Bluegrass Digital Forge</span>
          <span className="block text-xs text-primary">Forged for the Lake • Monticello, KY</span>
        </Link>
        <nav className="hidden items-center gap-5 text-sm text-muted-foreground xl:flex">
          {nav.map((n) => (
            <Link key={n.to} to={n.to} activeOptions={{ exact: true }} activeProps={{ className: "text-foreground border-b-2 border-primary pb-1" }} className="hover:text-foreground">
              {n.label}
            </Link>
          ))}
        </nav>
        <Link to="/quote" className="bg-copper rounded-full px-5 py-2.5 text-sm font-semibold text-primary-foreground">
          Get a free quote →
        </Link>
      </div>
      <nav className="flex gap-4 overflow-x-auto px-5 pb-3 text-sm text-muted-foreground xl:hidden">
        {nav.map((n) => (
          <Link key={n.to} to={n.to} activeOptions={{ exact: true }} activeProps={{ className: "text-primary" }} className="whitespace-nowrap">
            {n.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto grid max-w-7xl gap-8 px-5 py-12 md:grid-cols-3">
        <div>
          <p className="font-display text-lg font-bold">Bluegrass Digital Forge</p>
          <p className="mt-2 text-sm text-muted-foreground">Handcrafted websites for Lake Cumberland businesses. Built in Monticello, KY. Flat pricing — you own the code.</p>
        </div>
        <div className="flex flex-col gap-2 text-sm text-muted-foreground">
          {nav.map((n) => <Link key={n.to} to={n.to} className="hover:text-foreground">{n.label}</Link>)}
          <Link to="/quote" className="hover:text-foreground">Get a quote</Link>
        </div>
        <div className="text-sm text-muted-foreground">
          <p>Wayne, Pulaski, Russell & McCreary counties</p>
          <a href={`mailto:${EMAIL}`} className="mt-2 block text-primary">{EMAIL}</a>
          <a href="https://bluegrasstemplates.com/" className="mt-2 block hover:text-foreground">DIY templates from $99 ↗</a>
          <div className="mt-4 flex flex-col gap-1">
            <Link to="/marina-websites" className="hover:text-foreground">Marina websites</Link>
            <Link to="/fishing-guide-websites" className="hover:text-foreground">Fishing guide websites</Link>
            <Link to="/food-truck-websites" className="hover:text-foreground">Food truck websites</Link>
            <Link to="/restaurant-websites" className="hover:text-foreground">Restaurant websites</Link>
            <Link to="/contractor-websites" className="hover:text-foreground">Contractor websites</Link>
          </div>
        </div>
      </div>
      <p className="pb-8 text-center text-xs text-muted-foreground">© {new Date().getFullYear()} Bluegrass Digital Forge · Monticello, Kentucky</p>
    </footer>
  );
}

export function PageHero({ eyebrow, title, children }: { eyebrow: string; title: string; children?: ReactNode }) {
  return (
    <section className="mx-auto max-w-5xl px-5 pb-10 pt-16">
      <Eyebrow>{eyebrow}</Eyebrow>
      <h1 className="mt-4 font-display text-4xl font-bold tracking-tight md:text-6xl">{title}</h1>
      {children && <div className="mt-5 max-w-3xl text-lg text-muted-foreground">{children}</div>}
    </section>
  );
}

export function TownsBand() {
  const towns = ["Monticello", "Jamestown", "Burnside", "Somerset", "Russell Springs", "Nancy", "Albany", "Creelsboro", "+ McCreary County"];
  return (
    <section className="border-y border-border bg-card/50 py-16">
      <div className="mx-auto max-w-5xl px-5 text-center">
        <Eyebrow>Lake Cumberland service areas</Eyebrow>
        <h2 className="mt-3 font-display text-3xl font-bold md:text-4xl">Built for the towns around the lake.</h2>
        <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">Marinas, guides, restaurants, and shops from Monticello to Jamestown, Burnside, Russell Springs, Nancy, Albany, and every major ramp town — handcrafted by a neighbor who lives here.</p>
        <div className="mt-8 flex flex-wrap justify-center gap-2">
          {towns.map((t) => (
            <Link key={t} to="/service-areas" className="rounded-full border border-border px-4 py-2 text-sm hover:border-primary">{t}</Link>
          ))}
        </div>
      </div>
    </section>
  );
}
