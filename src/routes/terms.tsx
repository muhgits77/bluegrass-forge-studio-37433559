import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero, EMAIL } from "@/components/site/Layout";
import { seo } from "@/lib/seo";
export const Route = createFileRoute("/terms")({
  head: () => seo({ path: "/terms", title: "Terms | Bluegrass Digital Forge", description: "Terms for portfolio demos, quotes, website ownership, and templates from Bluegrass Digital Forge." }),
  component: LegalPage,
});
const sections = [["Portfolio demos", "Demos are fictional examples built by Bluegrass Digital Forge unless clearly marked as live local projects, including Monticello Eats & Finds. Do not present a demo as your own client work."], ["Quotes are not contracts", "Sending a quote request is not a contract. Work starts only after both sides agree in writing."], ["Ownership after a paid build", "After a paid custom build, you own the project code as described on Services & Pricing and in your written agreement."], ["Templates", "Templates and calculators sold separately follow the listing terms on bluegrasstemplates.com."], ["As-is, Kentucky law", "This site is provided as-is. These terms are governed by the laws of the Commonwealth of Kentucky."]];
function LegalPage() {
  return <>
    <PageHero eyebrow="Terms · Monticello, Kentucky" title="Terms">Last updated November 15, 2026.</PageHero>
    <section className="mx-auto max-w-5xl space-y-8 px-5 pb-20 text-muted-foreground">
      {sections.map(([heading, text]) => <div key={heading}><h2 className="font-display text-xl font-bold text-foreground">{heading}</h2><p className="mt-2">{text}</p></div>)}
      <p>Questions: <a href={`mailto:${EMAIL}`} className="text-primary">{EMAIL}</a>.</p>
      <p>Also see <Link to="/privacy" className="text-primary">Privacy</Link>.</p>
    </section>
  </>;
}
