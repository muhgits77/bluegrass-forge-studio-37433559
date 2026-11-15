import { z } from "zod";

export const BUSINESS_TYPES = ["Restaurant", "Food truck", "Marina", "Guide", "Contractor", "Other"] as const;
export const NEEDS = ["Starter site", "Full suite", "Template help", "Other"] as const;

const phone = z.string().trim().max(30).regex(/^[0-9+().\-\s]*$/, "Enter a valid phone number");

export const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Enter a valid email").max(255),
  phone: phone.optional().or(z.literal("")),
  message: z.string().trim().min(1, "Message is required").max(2000),
});

export const quoteSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Enter a valid email").max(255),
  phone: phone.min(7, "Phone is required"),
  business_name: z.string().trim().min(1, "Business name is required").max(150),
  town: z.string().trim().min(1, "Town is required").max(100),
  business_type: z.enum(BUSINESS_TYPES, { message: "Pick a business type" }),
  needs: z.enum(NEEDS, { message: "Pick what you need" }),
  notes: z.string().trim().max(2000).optional().or(z.literal("")),
});

export type ContactInput = z.infer<typeof contactSchema>;
export type QuoteInput = z.infer<typeof quoteSchema>;
