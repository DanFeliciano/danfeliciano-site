"use client";

import { FormEvent, useState } from "react";

type FormValues = {
  name: string;
  email: string;
  organization: string;
  interest: string;
  problem: string;
  timeline: string;
  consent: boolean;
};

type FormErrors = Partial<Record<keyof FormValues, string>>;

const initialValues: FormValues = {
  name: "",
  email: "",
  organization: "",
  interest: "Strategic Forensics",
  problem: "",
  timeline: "Exploring options",
  consent: false,
};

const interestOptions = [
  "Strategic Forensics",
  "AI Process Redesign",
  "Policy Impact Analysis",
  "Backlog Kill",
  "Strategic Forensics Briefing",
  "Academy / Training",
  "Other",
];

const timelineOptions = [
  "Immediately",
  "30 days",
  "60-90 days",
  "Exploring options",
];

function validate(values: FormValues) {
  const errors: FormErrors = {};
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!values.name.trim()) {
    errors.name = "Name is required.";
  }

  if (!values.email.trim()) {
    errors.email = "Email is required.";
  } else if (!emailPattern.test(values.email)) {
    errors.email = "Enter a valid email address.";
  }

  if (!values.problem.trim()) {
    errors.problem = "Please describe the problem you are trying to solve.";
  }

  if (!values.consent) {
    errors.consent = "Please agree to be contacted about your inquiry.";
  }

  return errors;
}

export function ContactForm() {
  const [values, setValues] = useState<FormValues>(initialValues);
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState("");

  function updateValue<K extends keyof FormValues>(
    key: K,
    value: FormValues[K],
  ) {
    setValues((current) => ({ ...current, [key]: value }));
    setErrors((current) => ({ ...current, [key]: undefined }));
    setStatus("");
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const nextErrors = validate(values);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      setStatus("");
      return;
    }

    setValues(initialValues);
    setStatus("Thanks. Your request has been received.");
  }

  return (
    <form
      className="rounded-lg border border-slate-200 bg-white p-5 shadow-command sm:p-6"
      noValidate
      onSubmit={handleSubmit}
    >
      <div className="grid gap-5 md:grid-cols-2">
        <div>
          <label className="text-sm font-black text-charcoal" htmlFor="name">
            Name
          </label>
          <input
            aria-describedby={errors.name ? "name-error" : undefined}
            aria-invalid={errors.name ? "true" : "false"}
            autoComplete="name"
            className="mt-2 min-h-11 w-full rounded-md border border-slate-300 bg-white px-3 text-sm text-charcoal transition focus:border-signal"
            id="name"
            name="name"
            onChange={(event) => updateValue("name", event.target.value)}
            type="text"
            value={values.name}
          />
          {errors.name ? (
            <p className="mt-2 text-sm font-semibold text-red-700" id="name-error">
              {errors.name}
            </p>
          ) : null}
        </div>

        <div>
          <label className="text-sm font-black text-charcoal" htmlFor="email">
            Email
          </label>
          <input
            aria-describedby={errors.email ? "email-error" : undefined}
            aria-invalid={errors.email ? "true" : "false"}
            autoComplete="email"
            className="mt-2 min-h-11 w-full rounded-md border border-slate-300 bg-white px-3 text-sm text-charcoal transition focus:border-signal"
            id="email"
            name="email"
            onChange={(event) => updateValue("email", event.target.value)}
            type="email"
            value={values.email}
          />
          {errors.email ? (
            <p className="mt-2 text-sm font-semibold text-red-700" id="email-error">
              {errors.email}
            </p>
          ) : null}
        </div>

        <div>
          <label
            className="text-sm font-black text-charcoal"
            htmlFor="organization"
          >
            Organization
          </label>
          <input
            autoComplete="organization"
            className="mt-2 min-h-11 w-full rounded-md border border-slate-300 bg-white px-3 text-sm text-charcoal transition focus:border-signal"
            id="organization"
            name="organization"
            onChange={(event) =>
              updateValue("organization", event.target.value)
            }
            type="text"
            value={values.organization}
          />
        </div>

        <div>
          <label
            className="text-sm font-black text-charcoal"
            htmlFor="interest"
          >
            What are you interested in?
          </label>
          <select
            className="mt-2 min-h-11 w-full rounded-md border border-slate-300 bg-white px-3 text-sm text-charcoal transition focus:border-signal"
            id="interest"
            name="interest"
            onChange={(event) => updateValue("interest", event.target.value)}
            value={values.interest}
          >
            {interestOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>

        <div className="md:col-span-2">
          <label className="text-sm font-black text-charcoal" htmlFor="problem">
            What problem are you trying to solve?
          </label>
          <textarea
            aria-describedby={errors.problem ? "problem-error" : undefined}
            aria-invalid={errors.problem ? "true" : "false"}
            className="mt-2 min-h-36 w-full rounded-md border border-slate-300 bg-white px-3 py-3 text-sm leading-6 text-charcoal transition focus:border-signal"
            id="problem"
            name="problem"
            onChange={(event) => updateValue("problem", event.target.value)}
            value={values.problem}
          />
          {errors.problem ? (
            <p
              className="mt-2 text-sm font-semibold text-red-700"
              id="problem-error"
            >
              {errors.problem}
            </p>
          ) : null}
        </div>

        <div>
          <label
            className="text-sm font-black text-charcoal"
            htmlFor="timeline"
          >
            Desired timeline
          </label>
          <select
            className="mt-2 min-h-11 w-full rounded-md border border-slate-300 bg-white px-3 text-sm text-charcoal transition focus:border-signal"
            id="timeline"
            name="timeline"
            onChange={(event) => updateValue("timeline", event.target.value)}
            value={values.timeline}
          >
            {timelineOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>

        <div className="md:col-span-2">
          <label className="flex gap-3 text-sm font-semibold leading-6 text-slate-700">
            <input
              aria-describedby={errors.consent ? "consent-error" : undefined}
              aria-invalid={errors.consent ? "true" : "false"}
              checked={values.consent}
              className="mt-1 size-4 rounded border-slate-300 accent-signal"
              name="consent"
              onChange={(event) => updateValue("consent", event.target.checked)}
              type="checkbox"
            />
            <span>I agree to be contacted about my inquiry.</span>
          </label>
          {errors.consent ? (
            <p
              className="mt-2 text-sm font-semibold text-red-700"
              id="consent-error"
            >
              {errors.consent}
            </p>
          ) : null}
        </div>
      </div>

      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
        <button
          className="inline-flex min-h-11 items-center justify-center rounded-md bg-ink px-5 text-sm font-bold text-signal transition hover:bg-charcoal"
          type="submit"
        >
          Send inquiry
        </button>
        {status ? (
          <p
            aria-live="polite"
            className="text-sm font-black leading-6 text-ink"
            role="status"
          >
            {status}
          </p>
        ) : null}
      </div>
    </form>
  );
}
