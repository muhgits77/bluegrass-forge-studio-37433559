import { seo, breadcrumbLd } from "@/lib/seo";
import { createFileRoute, Link } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { useState } from "react";
import { EMAIL, PageHero } from "@/components/site/Layout";
import { contactSchema } from "@/lib/forms/schemas";
import { submitContact } from "@/lib/forms/submit.functions";

export const Route = createFileRoute("/contact")({
  head: () =>
    seo({
      path: "/contact",
      title: "Contact | Bluegrass Digital Forge",
      description: "Talk to the Monticello KY website designer serving Lake Cumberland businesses. Real replies, usually within a few hours.",
      jsonLd: [breadcrumbLd([["Home", "/"], ["Contact", "/contact"]])],
    }),
  component: Contact,
});

const field = "w-full rounded-xl border border-input bg-background px-4 py-3 text-foreground outline-none focus:border-primary";

function Contact() {
  const send = useServerFn(submitContact);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">("idle");

  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const values = Object.fromEntries(new FormData(e.currentTarget));
    const parsed = contactSchema.safeParse(values);
    if (!parsed.success) {
      setErrors(Object.fromEntries(parsed.error.issues.map((i) => [String(i.path[0]), i.message])));
      return;
    }
    setErrors({});
    setStatus("sending");
    try {
      await send({ data: parsed.data });
      setStatus("done");
    } catch {
      setStatus("error");
    }
  }

  const Err = ({ k }: { k: string }) => (errors[k] ? <p className="mt-1 text-sm text-destructive">{errors[k]}</p> : null);

  return (
    <>
      <PageHero eyebrow="Contact — Monticello KY website designer" title="Contact Bluegrass Digital Forge">
        Serving Lake Cumberland businesses across Wayne, Pulaski, Russell & McCreary counties. I usually reply within a few hours. Outside Kentucky? Custom work is available anywhere, all by email.
      </PageHero>
      <section className="mx-auto max-w-2xl px-5 pb-20">
        {status === "done" ? (
          <div role="status" className="rounded-3xl border border-primary bg-card p-10 text-center">
            <p className="text-copper font-display text-3xl font-bold">Message received.</p>
            <p className="mt-3 text-muted-foreground">Thanks for reaching out — I'll get back to you soon from Monticello.</p>
          </div>
        ) : (
          <form noValidate onSubmit={submit} className="space-y-4 rounded-3xl border border-border bg-card p-8">
            <div><input name="name" placeholder="Your name *" aria-label="Your name" className={field} /><Err k="name" /></div>
            <div><input type="email" name="email" placeholder="Email *" aria-label="Email" className={field} /><Err k="email" /></div>
            <div><input type="tel" name="phone" placeholder="Phone (optional)" aria-label="Phone" className={field} /><Err k="phone" /></div>
            <div><textarea name="message" rows={5} placeholder="Message *" aria-label="Message" className={field} /><Err k="message" /></div>
            {status === "error" && <p className="text-sm text-destructive">Something went wrong sending your message. Please try again.</p>}
            <button disabled={status === "sending"} className="bg-copper w-full rounded-full py-3.5 font-semibold text-primary-foreground disabled:opacity-60">
              {status === "sending" ? "Sending…" : "Send message →"}
            </button>
          </form>
        )}
        <p className="mt-6 text-center text-muted-foreground">Prefer email? <a className="text-primary" href={`mailto:${EMAIL}`}>{EMAIL}</a></p>
        <p className="mt-2 text-center"><Link to="/quote" className="text-primary">Or get a full custom quote →</Link></p>
      </section>
    </>
  );
}
