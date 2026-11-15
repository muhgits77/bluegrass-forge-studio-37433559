import { seo, breadcrumbLd } from "@/lib/seo";
import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageHero } from "@/components/site/Layout";
import { DemoCard } from "@/components/site/DemoCard";
import { demos } from "@/lib/portfolio";

export const Route = createFileRoute("/work")({
  head: () =>
    seo({
      path: "/work",
      title: "Website Demos & Portfolio | Bluegrass Digital Forge",
      description: "Live website demos for Lake Cumberland restaurants, food trucks, guides, retailers and trades \u2014 handcrafted in Monticello, KY.",
      jsonLd: [breadcrumbLd([["Home", "/"], ["My Work", "/work"]])],
    }),
  component: Work,
});

function Work() {
  const cats = ["All", ...Array.from(new Set(demos.map((d) => d.category)))];
  const [cat, setCat] = useState("All");
  const list = cat === "All" ? demos : demos.filter((d) => d.category === cat);
  return (
    <>
      <PageHero eyebrow="My work" title="Live demos for real Kentucky businesses">
        Flat one-time pricing and full ownership of the code. Click any card to open the live site.
      </PageHero>
      <div className="mx-auto max-w-7xl px-5 pb-20">
        <div className="flex flex-wrap gap-2">
          {cats.map((c) => (
            <button key={c} onClick={() => setCat(c)} className={`rounded-full border px-4 py-2 text-sm ${c === cat ? "bg-copper border-transparent text-primary-foreground" : "border-border text-muted-foreground hover:border-primary"}`}>{c}</button>
          ))}
        </div>
        <h2 className="sr-only">Portfolio demos</h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">{list.map((d) => <DemoCard key={d.title} demo={d} />)}</div>
      </div>
    </>
  );
}
