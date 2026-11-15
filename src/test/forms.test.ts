import { describe, expect, it } from "vitest";
import { contactSchema, quoteSchema } from "@/lib/forms/schemas";

const quote = { name: "A", email: "a@b.co", phone: "606-555-1234", business_name: "B", town: "Monticello", business_type: "Marina", needs: "Starter site" };

describe("form rules", () => {
  it("contact phone is optional", () => expect(contactSchema.safeParse({ name: "A", email: "a@b.co", message: "hi" }).success).toBe(true));
  it("contact requires a message", () => expect(contactSchema.safeParse({ name: "A", email: "a@b.co", message: "" }).success).toBe(false));
  it("quote requires phone", () => expect(quoteSchema.safeParse({ ...quote, phone: "" }).success).toBe(false));
  it("quote accepts full input", () => expect(quoteSchema.safeParse(quote).success).toBe(true));
  it("quote rejects unknown business type", () => expect(quoteSchema.safeParse({ ...quote, business_type: "Bank" }).success).toBe(false));
});
