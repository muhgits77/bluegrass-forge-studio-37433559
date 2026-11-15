import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { EMAIL, PageHero } from "@/components/site/Layout";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact | Bluegrass Digital Forge" },
      { name: "description", content: "Talk to the Monticello KY website designer serving Lake Cumberland businesses. Real replies, usually within a few hours." },
      { property: "og:title", content: "Contact Bluegrass Digital Forge" },
      { property: "og:description", content: "Real replies from Monticello, KY." },
    ],
  }),
  component: Contact,
});

const field = "w-full rounded-xl border border-input bg-background px-4 py-3 text-foreground outline-none focus:border-primary";

function Contact() {
  const [check, setCheck] = useState("");
  const [err, setErr] = useState("");
  function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    if (check.trim() !== "9") return setErr("Quick check answer isn't right — try again.");
    const body = `Name: ${f.get("name")}\nBusiness: ${f.get("business")}\nEmail: ${f.get("email")}\n\n${f.get("message")}`;
    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent("Website inquiry")}&body=${encodeURIComponent(body)}`;
  }
  return (
    <>
      <PageHero eyebrow="Contact — Monticello KY website designer" title="Contact Bluegrass Digital Forge">
        Serving Lake Cumberland businesses across Wayne, Pulaski, Russell & McCreary counties. I usually reply within a few hours. Outside Kentucky? Custom work is available anywhere, all by email.
      </PageHero>
      <section className="mx-auto max-w-2xl px-5 pb-20">
        <form onSubmit={submit} className="space-y-4 rounded-3xl border border-border bg-card p-8">
          <input required name="name" placeholder="Your name" className={field} />
          <input name="business" placeholder="Business (optional)" className={field} />
          <input required type="email" name="email" placeholder="Email" className={field} />
          <textarea required name="message" rows={5} placeholder="Message" className={field} />
          <label className="block text-sm text-muted-foreground">Quick check — what is 4 + 5?
            <input required value={check} onChange={(e) => setCheck(e.target.value)} className={`${field} mt-2`} />
          </label>
          {err && <p className="text-sm text-destructive">{err}</p>}
          <button className="bg-copper w-full rounded-full py-3.5 font-semibold text-primary-foreground">Send message →</button>
        </form>
        <p className="mt-6 text-center text-muted-foreground">Prefer email? <a className="text-primary" href={`mailto:${EMAIL}`}>{EMAIL}</a></p>
        <p className="mt-2 text-center"><Link to="/quote" className="text-primary">Or get a full custom quote →</Link></p>
      </section>
    </>
  );
}
