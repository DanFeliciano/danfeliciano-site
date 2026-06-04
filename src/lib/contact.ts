export type ContactFormValues = {
  name: string;
  email: string;
  organization: string;
  role: string;
  problemType: string;
  problemDescription: string;
  desiredTimeline: string;
  consent: boolean;
};

export type RequiredContactField =
  | "name"
  | "email"
  | "organization"
  | "problemType"
  | "problemDescription"
  | "consent";

export type ContactFormErrors = Partial<Record<RequiredContactField, string>>;

export const initialContactValues: ContactFormValues = {
  name: "",
  email: "",
  organization: "",
  role: "",
  problemType: "",
  problemDescription: "",
  desiredTimeline: "",
  consent: false,
};

export const problemTypeOptions = [
  "Work is piling up",
  "We are wasting too much time",
  "Customers are slipping through the cracks",
  "Everything depends on me",
  "We need AI or automation help",
  "We need team training",
  "We need policy or regulatory analysis",
  "Speaking or workshop request",
  "Other",
] as const;

export const desiredTimelineOptions = [
  "Immediately",
  "30 days",
  "60-90 days",
  "Exploring options",
] as const;

export const contactEmail = "dan@danfeliciano.com";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validateContactForm(values: ContactFormValues) {
  const errors: ContactFormErrors = {};

  if (!values.name.trim()) {
    errors.name = "Name is required.";
  }

  if (!values.email.trim()) {
    errors.email = "Email is required.";
  } else if (!emailPattern.test(values.email.trim())) {
    errors.email = "Enter a valid email address.";
  }

  if (!values.organization.trim()) {
    errors.organization = "Organization is required.";
  }

  if (!(problemTypeOptions as readonly string[]).includes(values.problemType)) {
    errors.problemType = "Choose the kind of problem you are trying to solve.";
  }

  if (!values.problemDescription.trim()) {
    errors.problemDescription =
      "Describe what is getting stuck, delayed, missed, or repeated.";
  }

  if (!values.consent) {
    errors.consent = "Consent is required before sending your inquiry.";
  }

  return errors;
}

export function buildContactEmailText(values: ContactFormValues) {
  return [
    `Name: ${values.name.trim()}`,
    `Email: ${values.email.trim()}`,
    `Organization: ${values.organization.trim()}`,
    `Role: ${optionalText(values.role)}`,
    `Problem type: ${values.problemType}`,
    "",
    "Problem description:",
    values.problemDescription.trim(),
    "",
    `Desired timeline: ${optionalText(values.desiredTimeline)}`,
    "Consent confirmation: Visitor agreed to be contacted about this inquiry.",
    "Source page: /contact",
  ].join("\n");
}

export function buildContactMailtoHref(values: ContactFormValues) {
  const subject = `Website inquiry: ${values.problemType}`;

  return `mailto:${contactEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(buildContactEmailText(values))}`;
}

function optionalText(value: string) {
  return value.trim() || "Not provided";
}
