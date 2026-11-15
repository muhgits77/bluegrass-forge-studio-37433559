import type { Demo } from "@/lib/portfolio";

export function DemoCard({ demo }: { demo: Demo }) {
  return (
    <a href={demo.url} target="_blank" rel="noreferrer" className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition hover:-translate-y-1 hover:border-primary">
      <div className="aspect-[16/10] overflow-hidden bg-muted">
        <img src={demo.image} alt={`${demo.title} website demo`} loading="lazy" className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
      </div>
      <div className="flex flex-1 flex-col p-5">
        <span className="text-xs font-semibold uppercase tracking-widest text-primary">{demo.category}</span>
        <h3 className="mt-2 font-display text-xl font-bold">{demo.title}</h3>
        <p className="mt-2 line-clamp-3 text-sm text-muted-foreground">{demo.description}</p>
        <span className="mt-auto pt-4 text-sm font-semibold text-primary">Open live site ↗</span>
      </div>
    </a>
  );
}
