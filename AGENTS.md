<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.

## What Lovable manages

Rules outside this block are the project's own. Change the pieces below in
Lovable, not by hand. With the [Lovable MCP](https://mcp.lovable.dev)
connected, `send_message` asks Lovable to do it; otherwise ask the user to
use the editor.

- **Database.** Do not add or edit `supabase/migrations/` or `drizzle/`.
  Ask Lovable to change the schema.
- **Generated files.** Do not edit a file whose header says it is automatically
  generated.
- **AI gateway.** Keep model calls on Lovable's gateway, and keep
  `LOVABLE_API_KEY` out of browser code.
- **Connectors.** Lovable provides native connectors. `list_connectors` shows
  which are enabled; `add_connector` only returns the dashboard link. When a
  connector is enabled, calls go through the connector gateway and need
  `LOVABLE_API_KEY`. When Lovable does not provide one, users can bring their
  own key and store it in Secrets.
- **Secrets.** Lovable manages them. Do not put secret values in the repo.
<!-- LOVABLE:END -->

- Site pages share header/footer and buttons from src/components/site/Layout.tsx, mounted once in __root; portfolio entries live in src/lib/portfolio.ts so the home and work pages stay in sync.
- Product pricing is centralized in src/lib/pricing.ts so pages and metadata share the same values.
- Keep this parallel imported site noindex in the root head until explicitly cleared for indexing; the original live site remains unchanged.
- Specialty pages (marina, fishing guide, food truck, restaurant, contractor) render one SpecialtyPage component from per-niche content in src/lib/specialties.ts so they stay consistent.
- Contact and quote forms validate with shared zod schemas (src/lib/forms/schemas.ts) and save via server functions using the admin client; tables have RLS on with no public policies so visitors cannot read submissions.
