import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero, EMAIL } from "@/components/site/Layout";
import { seo } from "@/lib/seo";
export const Route = createFileRoute("/privacy")({
  head: () => seo({ path: "/privacy", title: "Privacy | Bluegrass Digital Forge", description: "How Bluegrass Digital Forge handles contact information, quote requests, and site visits." }),
  component: LegalPage,
});
const sections = [["Who we are", "Bluegrass Digital Forge is a website studio in Monticello, Kentucky."], ["What we collect and why", "We collect the information you submit through our contact and quote forms, including your name, email, phone, business details, and project notes. Submissions are stored securely in Lovable Cloud and used to respond to your request. We do not sell or rent your contact information."], ["Hosting and site visits", "This version of the site is hosted on Lovable. Hosting logs and visitor analytics may record information about site visits. Sending a form does not create a public account."], ["Update or remove your information", "Email us to request a correction or deletion of your contact or quote submission."]];
function LegalPage() {
  return <>
    <PageHero eyebrow="Privacy · Monticello, Kentucky" title="Privacy">Last updated November 15, 2026.</PageHero>
    <section className="mx-auto max-w-5xl space-y-8 px-5 pb-20 text-muted-foreground">
      {sections.map(([heading, text]) => <div key={heading}><h2 className="font-display text-xl font-bold text-foreground">{heading}</h2><p className="mt-2">{text}</p></div>)}
      <p>Questions: <a href={`mailto:${EMAIL}`} className="text-primary">{EMAIL}</a>.</p>
      <p>Also see <Link to="/terms" className="text-primary">Terms</Link>.</p>
    </section>
  </>;
}
