import { Link } from "@tanstack/react-router";
import { useState, type ReactNode } from "react";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetTrigger, SheetContent, SheetTitle } from "@/components/ui/sheet";
import logo from "@/assets/forge-logo.jpg.asset.json";
import { pricing } from "@/lib/pricing";

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
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/90 backdrop-blur">
      <div className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-3 px-5 py-4 xl:flex xl:justify-between">
        <Link to="/" className="flex min-w-0 items-center gap-3 leading-tight">
          <img src={logo.url} alt="" width={44} height={44} className="h-11 w-11 shrink-0 rounded-md object-contain" />
          <span className="min-w-0"><span className="block font-display text-base font-bold sm:text-lg">Bluegrass Digital Forge</span>
          <span className="block text-xs text-primary">Forged for the Lake • Monticello, KY</span></span>
        </Link>
        <nav className="hidden items-center gap-5 text-sm text-muted-foreground xl:flex">
          {nav.map((n) => (
            <Link key={n.to} to={n.to} activeOptions={{ exact: true }} activeProps={{ className: "text-foreground border-b-2 border-primary pb-1" }} className="hover:text-foreground">
              {n.label}
            </Link>
          ))}
        </nav>
        <Link to="/quote" className="bg-copper hidden shrink-0 rounded-full px-5 py-2.5 text-sm font-semibold text-primary-foreground xl:block">
          Get a free quote →
        </Link>
        <Sheet open={menuOpen} onOpenChange={setMenuOpen}>
          <SheetTrigger asChild><Button variant="outline" size="icon" className="h-11 w-11 shrink-0 xl:hidden" aria-label="Open navigation menu"><Menu /></Button></SheetTrigger>
          <SheetContent aria-describedby={undefined} className="w-[min(22rem,100%)] overflow-y-auto">
            <SheetTitle className="pr-6 font-display">Bluegrass Digital Forge</SheetTitle>
            <nav aria-label="Phone navigation" className="mt-6 flex flex-col gap-1">
              {nav.map((n) => <Link key={n.to} to={n.to} onClick={() => setMenuOpen(false)} activeOptions={{ exact: true }} activeProps={{ className: "text-primary bg-accent" }} className="rounded-md px-3 py-3 text-foreground hover:bg-accent">{n.label}</Link>)}
              <Link to="/quote" onClick={() => setMenuOpen(false)} className="bg-copper mt-4 rounded-full px-5 py-3 text-center font-semibold text-primary-foreground">Get a free quote →</Link>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
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
          <a href="https://bluegrasstemplates.com/" className="mt-2 block hover:text-foreground">Website templates from ${pricing.websiteTemplateFrom}, calculators from ${pricing.calculatorFrom} ↗</a>
          <div className="mt-4 flex flex-col gap-1">
            <Link to="/marina-websites" className="hover:text-foreground">Marina websites</Link>
            <Link to="/fishing-guide-websites" className="hover:text-foreground">Fishing guide websites</Link>
            <Link to="/food-truck-websites" className="hover:text-foreground">Food truck websites</Link>
            <Link to="/restaurant-websites" className="hover:text-foreground">Restaurant websites</Link>
            <Link to="/contractor-websites" className="hover:text-foreground">Contractor websites</Link>
          </div>
        </div>
      </div>
      <div className="space-y-3 px-5 pb-8 text-center text-xs text-muted-foreground">
        <p>Forged by Brian · Monticello, Kentucky</p>
        <p>© {new Date().getFullYear()} Bluegrass Digital Forge</p>
        <div className="flex justify-center gap-5"><Link to="/privacy" className="hover:text-foreground">Privacy</Link><Link to="/terms" className="hover:text-foreground">Terms</Link></div>
      </div>
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
        <div className="mt-6 flex flex-wrap justify-center gap-x-5 gap-y-2 text-sm font-semibold text-primary">
          <Link to="/marina-websites">Marina sites →</Link>
          <Link to="/fishing-guide-websites">Guide sites →</Link>
          <Link to="/food-truck-websites">Food truck sites →</Link>
          <Link to="/restaurant-websites">Restaurant sites →</Link>
          <Link to="/contractor-websites">Contractor sites →</Link>
          <Link to="/quote">Get a quote →</Link>
        </div>
      </div>
    </section>
  );
}
