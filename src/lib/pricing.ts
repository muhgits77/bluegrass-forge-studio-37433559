export const pricing = { websiteTemplateFrom: 129, calculatorFrom: 99, businessSuiteMin: 2500, businessSuiteMax: 4500 } as const;
export const businessSuiteRange = `$${pricing.businessSuiteMin.toLocaleString("en-US")}–$${pricing.businessSuiteMax.toLocaleString("en-US")}`;
