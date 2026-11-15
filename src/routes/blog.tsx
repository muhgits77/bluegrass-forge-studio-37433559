import { seo, breadcrumbLd } from "@/lib/seo";
import { createFileRoute } from "@tanstack/react-router";
import { CopperButton, PageHero } from "@/components/site/Layout";

export const Route = createFileRoute("/blog")({
  head: () =>
    seo({
      path: "/blog",
      title: "Blog | Bluegrass Digital Forge",
      description: "Website tips for Lake Cumberland businesses from a Monticello, KY website designer. More posts coming soon.",
      jsonLd: [breadcrumbLd([["Home", "/"], ["Blog", "/blog"]])],
    }),
  component: Blog,
});

function Blog() {
  return (
    <>
      <PageHero eyebrow="Blog" title="More posts are coming soon.">
        Practical website tips for Lake Cumberland marinas, guides, restaurants, food trucks, and trades — written from Monticello. Have a question you'd like answered here? Send it my way.
      </PageHero>
      <section className="mx-auto max-w-5xl px-5 pb-24"><CopperButton to="/contact">Ask a question →</CopperButton></section>
    </>
  );
}
