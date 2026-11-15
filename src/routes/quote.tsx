import { seo, breadcrumbLd } from "@/lib/seo";
import { createFileRoute, Link } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { useState } from "react";
import { PageHero } from "@/components/site/Layout";
import { BUSINESS_TYPES, NEEDS, quoteSchema } from "@/lib/forms/schemas";
import { submitQuote } from "@/lib/forms/submit.functions";

export const Route = createFileRoute("/quote")({
  head: () =>
    seo({
      path: "/quote",
      title: "Get a Website Quote | Bluegrass Digital Forge",
      description: "A few quick questions for your Lake Cumberland area project. Flat price proposal from the local Monticello builder.",
      jsonLd: [breadcrumbLd([["Home", "/"], ["Get a Quote", "/quote"]])],
    }),
  component: Quote,
});

const field = "w-full rounded-xl border border-input bg-background px-4 py-3 text-base text-foreground outline-none focus:border-primary";
const steps = [
  { title: "About you", fields: ["name", "email", "phone"] },
  { title: "Your business", fields: ["business_name", "town"] },
  { title: "Business type & needs", fields: ["business_type", "needs"] },
  { title: "Anything else?", fields: ["notes"] },
] as const;

type Data = Record<string, string>;

function Chips({ label, options, value, onChange }: { label: string; options: readonly string[]; value: string; onChange: (v: string) => void }) {
  return (
    <fieldset>
      <legend className="mb-2 text-sm font-semibold">{label}</legend>
      <div className="grid grid-cols-2 gap-2 sm:flex sm:flex-wrap" role="radiogroup" aria-label={label}>
        {options.map((o) => (
          <button type="button" role="radio" aria-checked={value === o} key={o} onClick={() => onChange(o)}
            className={`rounded-full border px-4 py-2.5 text-sm ${value === o ? "bg-copper border-transparent text-primary-foreground" : "border-border hover:border-primary"}`}>{o}</button>
        ))}
      </div>
    </fieldset>
  );
}

function Quote() {
  const send = useServerFn(submitQuote);
  const [step, setStep] = useState(0);
  const [d, setD] = useState<Data>({});
  const [errors, setErrors] = useState<Data>({});
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">("idle");
  const set = (k: string) => (v: string) => setD((p) => ({ ...p, [k]: v }));

  function validate(fields: readonly string[]) {
    const r = quoteSchema.safeParse(d);
    const errs: Data = {};
    if (!r.success) for (const i of r.error.issues) { const k = String(i.path[0]); if (fields.includes(k) && !errs[k]) errs[k] = i.message; }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  }

  async function next(e: React.FormEvent) {
    e.preventDefault();
    if (!validate(steps[step]!.fields)) return;
    if (step < steps.length - 1) return setStep(step + 1);
    const r = quoteSchema.safeParse(d);
    if (!r.success) return;
    setStatus("sending");
    try { await send({ data: r.data }); setStatus("done"); } catch { setStatus("error"); }
  }

  const Err = ({ k }: { k: string }) => (errors[k] ? <p className="mt-1 text-sm text-destructive">{errors[k]}</p> : null);
  const inp = (k: string, label: string, type = "text", req = true) => (
    <div>
      <label className="mb-1.5 block text-sm font-semibold" htmlFor={k}>{label}{req && " *"}</label>
      <input id={k} type={type} value={d[k] ?? ""} onChange={(e) => set(k)(e.target.value)} className={field} />
      <Err k={k} />
    </div>
  );

  return (
    <>
      <PageHero eyebrow="Custom quote — Monticello KY website designer" title="Get a Website Quote">
        Four quick steps for your Lake Cumberland area project. Flat price proposal from the local Monticello builder. Real responses, no automated fluff.
      </PageHero>
      <section className="mx-auto max-w-2xl px-5 pb-20">
        {status === "done" ? (
          <div role="status" className="rounded-3xl border border-primary bg-card p-10 text-center">
            <p className="text-copper font-display text-3xl font-bold">Quote request received.</p>
            <p className="mt-3 text-muted-foreground">Thanks{d["name"] ? `, ${d["name"].split(" ")[0] ?? ""}` : ""}! I'll review your project and get back to you with a flat-price proposal.</p>
          </div>
        ) : (
          <>
            <div className="mb-6 flex gap-2">{steps.map((s, i) => <div key={s.title} className={`h-1.5 flex-1 rounded-full ${i <= step ? "bg-copper" : "bg-muted"}`} />)}</div>
            <form noValidate onSubmit={next} className="space-y-5 rounded-3xl border border-border bg-card p-6 sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Step {step + 1} of {steps.length} · {steps[step]!.title}</p>
              {step === 0 && <>{inp("name", "Your name")}{inp("email", "Email", "email")}{inp("phone", "Phone", "tel")}</>}
              {step === 1 && <>{inp("business_name", "Business name")}{inp("town", "Town (e.g. Monticello, Jamestown)")}</>}
              {step === 2 && <>
                <div><Chips label="Type of business *" options={BUSINESS_TYPES} value={d["business_type"] ?? ""} onChange={set("business_type")} /><Err k="business_type" /></div>
                <div><Chips label="What do you need? *" options={NEEDS} value={d["needs"] ?? ""} onChange={set("needs")} /><Err k="needs" /></div>
              </>}
              {step === 3 && (
                <div>
                  <label htmlFor="notes" className="mb-1.5 block text-sm font-semibold">Notes (optional)</label>
                  <textarea id="notes" rows={5} placeholder="Menus, bookings, galleries, timeline, current website…" value={d["notes"] ?? ""} onChange={(e) => set("notes")(e.target.value)} className={field} />
                </div>
              )}
              {status === "error" && <p className="text-sm text-destructive">Something went wrong sending your request. Please try again.</p>}
              <div className="flex items-center justify-between pt-2">
                <button type="button" disabled={step === 0} onClick={() => { setErrors({}); setStep(step - 1); }} className="py-3 text-muted-foreground disabled:opacity-30">← Back</button>
                <button disabled={status === "sending"} className="bg-copper rounded-full px-7 py-3 font-semibold text-primary-foreground disabled:opacity-60">
                  {step === steps.length - 1 ? (status === "sending" ? "Sending…" : "Send request →") : "Continue →"}
                </button>
              </div>
            </form>
          </>
        )}
        <p className="mt-6 text-center"><Link to="/services" className="text-primary">← Back to Services & Pricing</Link></p>
      </section>
    </>
  );
}
