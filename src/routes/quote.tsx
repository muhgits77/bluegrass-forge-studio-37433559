import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { EMAIL, PageHero } from "@/components/site/Layout";

export const Route = createFileRoute("/quote")({
  head: () => ({
    meta: [
      { title: "Get a Website Quote | Bluegrass Digital Forge" },
      { name: "description", content: "A few quick questions for your Lake Cumberland area project. Flat price proposal from the local Monticello builder." },
      { property: "og:title", content: "Get a Free Website Quote" },
      { property: "og:description", content: "Flat price proposal from the Monticello, KY builder. Takes a few minutes." },
    ],
  }),
  component: Quote,
});

const field = "w-full rounded-xl border border-input bg-background px-4 py-3 text-foreground outline-none focus:border-primary";
const steps = ["Your info", "Your business", "What you need", "Timing & budget"] as const;

function Chips({ name, options, value, onChange }: { name: string; options: string[]; value: string; onChange: (v: string) => void }) {
  return (
    <div className="flex flex-wrap gap-2" role="radiogroup" aria-label={name}>
      {options.map((o) => (
        <button type="button" key={o} onClick={() => onChange(o)} className={`rounded-full border px-4 py-2 text-sm ${value === o ? "bg-copper border-transparent text-primary-foreground" : "border-border hover:border-primary"}`}>{o}</button>
      ))}
    </div>
  );
}

function Quote() {
  const [step, setStep] = useState(0);
  const [d, setD] = useState<Record<string, string>>({});
  const set = (k: string) => (v: string) => setD((p) => ({ ...p, [k]: v }));
  const inp = (k: string, ph: string, type = "text", req = true) => (
    <input required={req} type={type} placeholder={ph} value={d[k] ?? ""} onChange={(e) => set(k)(e.target.value)} className={field} />
  );
  function next(e: React.FormEvent) {
    e.preventDefault();
    if (step < steps.length - 1) return setStep(step + 1);
    const body = Object.entries(d).map(([k, v]) => `${k}: ${v}`).join("\n");
    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(`Quote request — ${d["business"] ?? ""}`)}&body=${encodeURIComponent(body)}`;
  }
  return (
    <>
      <PageHero eyebrow="Custom quote — Monticello KY website designer" title="Get a Website Quote">
        A few quick questions for your Lake Cumberland area project. Flat price proposal from the local Monticello builder. Real responses, no automated fluff.
      </PageHero>
      <section className="mx-auto max-w-2xl px-5 pb-20">
        <div className="mb-6 flex gap-2">{steps.map((s, i) => <div key={s} className={`h-1.5 flex-1 rounded-full ${i <= step ? "bg-copper" : "bg-muted"}`} />)}</div>
        <form onSubmit={next} className="space-y-4 rounded-3xl border border-border bg-card p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Step {step + 1} of {steps.length} · {steps[step]}</p>
          {step === 0 && <>{inp("name", "Your name *")}{inp("business", "Business name *")}{inp("email", "Email *", "email")}{inp("phone", "Phone (optional)", "tel", false)}</>}
          {step === 1 && <>
            <p className="text-sm text-muted-foreground">What kind of business?</p>
            <Chips name="Business type" options={["Restaurant", "Food truck", "Marina", "Fishing guide", "Lake house rental", "Contractor", "Retail shop", "Other"]} value={d["type"] ?? ""} onChange={set("type")} />
            {inp("town", "Town (e.g. Monticello, Jamestown)")}
            {inp("current", "Current website, if any", "text", false)}
          </>}
          {step === 2 && <>
            <p className="text-sm text-muted-foreground">Which package sounds right?</p>
            <Chips name="Package" options={["Starter Site ($1,200)", "Business Suite (from $2,500)", "Not sure"]} value={d["package"] ?? ""} onChange={set("package")} />
            <textarea rows={4} placeholder="Tell me about what you need — menus, bookings, galleries…" value={d["details"] ?? ""} onChange={(e) => set("details")(e.target.value)} className={field} />
          </>}
          {step === 3 && <>
            <p className="text-sm text-muted-foreground">When do you want to launch?</p>
            <Chips name="Timeline" options={["ASAP", "1–2 months", "Before lake season", "Just exploring"]} value={d["timeline"] ?? ""} onChange={set("timeline")} />
            <p className="text-sm text-muted-foreground">Interested in the $79/mo care plan?</p>
            <Chips name="Care plan" options={["Yes", "No", "Maybe"]} value={d["care"] ?? ""} onChange={set("care")} />
          </>}
          <div className="flex justify-between pt-4">
            <button type="button" disabled={step === 0} onClick={() => setStep(step - 1)} className="text-muted-foreground disabled:opacity-30">← Back</button>
            <button className="bg-copper rounded-full px-7 py-3 font-semibold text-primary-foreground">{step === steps.length - 1 ? "Send request →" : "Continue →"}</button>
          </div>
        </form>
        <p className="mt-6 text-center"><Link to="/services" className="text-primary">← Back to Services & Pricing</Link></p>
      </section>
    </>
  );
}
