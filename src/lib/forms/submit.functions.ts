import { createServerFn } from "@tanstack/react-start";
import { contactSchema, quoteSchema } from "./schemas";

export const submitContact = createServerFn({ method: "POST" })
  .inputValidator((input: unknown) => contactSchema.parse(input))
  .handler(async ({ data }) => {
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    const { error } = await supabaseAdmin.from("contact_submissions").insert({
      name: data.name, email: data.email, phone: data.phone || null, message: data.message,
    });
    if (error) throw new Error("Could not save your message. Please try again.");
    return { ok: true };
  });

export const submitQuote = createServerFn({ method: "POST" })
  .inputValidator((input: unknown) => quoteSchema.parse(input))
  .handler(async ({ data }) => {
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    const { error } = await supabaseAdmin.from("quote_requests").insert({ ...data, notes: data.notes || null });
    if (error) throw new Error("Could not save your request. Please try again.");
    return { ok: true };
  });
