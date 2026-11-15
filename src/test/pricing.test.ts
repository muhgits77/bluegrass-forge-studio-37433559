import { describe, expect, it } from "vitest";
import { pricing, businessSuiteRange } from "@/lib/pricing";
describe("Product prices", () => {
  it("starts website templates at $129", () => expect(pricing.websiteTemplateFrom).toBe(129));
  it("starts calculators at $99", () => expect(pricing.calculatorFrom).toBe(99));
  it("sets Business Suites to $2,500–$4,500", () => expect(businessSuiteRange).toBe("$2,500–$4,500"));
});
