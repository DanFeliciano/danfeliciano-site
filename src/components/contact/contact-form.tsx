"use client";

import { FormEvent, useState } from "react";
import {
  buildContactMailtoHref,
  desiredTimelineOptions,
  initialContactValues,
  problemTypeOptions,
  validateContactForm,
  type ContactFormErrors,
  type ContactFormValues,
} from "@/lib/contact";

export { desiredTimelineOptions, problemTypeOptions };

export function ContactForm() {
  const [values, setValues] =
    useState<ContactFormValues>(initialContactValues);
  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [status, setStatus] = useState("");
  const [emailHref, setEmailHref] = useState("");

  function updateValue<K extends keyof ContactFormValues>(
    key: K,
    value: ContactFormValues[K],
  ) {
    setValues((current) => ({ ...current, [key]: value }));
    setErrors((current) => ({ ...current, [key]: undefined }));
    setStatus("");
    setEmailHref("");
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const nextErrors = validateContactForm(values);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      setStatus("");
      return;
    }

    const nextEmailHref = buildContactMailtoHref(values);

    setEmailHref(nextEmailHref);
    setStatus(
      "Your email draft is ready. Please send it from your email app to complete the inquiry.",
    );

    try {
      window.open(nextEmailHref, "_self");
    } catch {
      // The visible draft link remains available if a browser blocks mailto.
    }
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
            aria-required="true"
            autoComplete="name"
            className="mt-2 min-h-11 w-full rounded-md border border-slate-300 bg-white px-3 text-sm text-charcoal transition focus:border-signal focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-signal"
            id="name"
            name="name"
            onChange={(event) => updateValue("name", event.target.value)}
            required
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
            aria-required="true"
            autoComplete="email"
            className="mt-2 min-h-11 w-full rounded-md border border-slate-300 bg-white px-3 text-sm text-charcoal transition focus:border-signal focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-signal"
            id="email"
            name="email"
            onChange={(event) => updateValue("email", event.target.value)}
            required
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
            aria-describedby={
              errors.organization ? "organization-error" : undefined
            }
            aria-invalid={errors.organization ? "true" : "false"}
            aria-required="true"
            autoComplete="organization"
            className="mt-2 min-h-11 w-full rounded-md border border-slate-300 bg-white px-3 text-sm text-charcoal transition focus:border-signal focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-signal"
            id="organization"
            name="organization"
            onChange={(event) =>
              updateValue("organization", event.target.value)
            }
            required
            type="text"
            value={values.organization}
          />
          {errors.organization ? (
            <p
              className="mt-2 text-sm font-semibold text-red-700"
              id="organization-error"
            >
              {errors.organization}
            </p>
          ) : null}
        </div>

        <div>
          <label className="text-sm font-black text-charcoal" htmlFor="role">
            Role
          </label>
          <input
            autoComplete="organization-title"
            className="mt-2 min-h-11 w-full rounded-md border border-slate-300 bg-white px-3 text-sm text-charcoal transition focus:border-signal focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-signal"
            id="role"
            name="role"
            onChange={(event) => updateValue("role", event.target.value)}
            type="text"
            value={values.role}
          />
        </div>

        <div className="md:col-span-2">
          <label
            className="text-sm font-black text-charcoal"
            htmlFor="problemType"
          >
            What kind of problem are you trying to solve?
          </label>
          <select
            aria-describedby={errors.problemType ? "problemType-error" : undefined}
            aria-invalid={errors.problemType ? "true" : "false"}
            aria-required="true"
            className="mt-2 min-h-11 w-full rounded-md border border-slate-300 bg-white px-3 text-sm text-charcoal transition focus:border-signal focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-signal"
            id="problemType"
            name="problemType"
            onChange={(event) => updateValue("problemType", event.target.value)}
            required
            value={values.problemType}
          >
            <option value="">Select a problem type</option>
            {problemTypeOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          {errors.problemType ? (
            <p
              className="mt-2 text-sm font-semibold text-red-700"
              id="problemType-error"
            >
              {errors.problemType}
            </p>
          ) : null}
        </div>

        <div className="md:col-span-2">
          <label
            className="text-sm font-black text-charcoal"
            htmlFor="problemDescription"
          >
            What is getting stuck, delayed, missed, or repeated?
          </label>
          <p className="mt-2 text-sm leading-6 text-slate-600" id="problem-help">
            What is happening, what have you already tried, and what
            consequence is becoming difficult to ignore?
          </p>
          <textarea
            aria-describedby={
              errors.problemDescription
                ? "problem-help problemDescription-error"
                : "problem-help"
            }
            aria-invalid={errors.problemDescription ? "true" : "false"}
            aria-required="true"
            className="mt-2 min-h-36 w-full rounded-md border border-slate-300 bg-white px-3 py-3 text-sm leading-6 text-charcoal transition focus:border-signal focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-signal"
            id="problemDescription"
            name="problemDescription"
            onChange={(event) =>
              updateValue("problemDescription", event.target.value)
            }
            required
            value={values.problemDescription}
          />
          {errors.problemDescription ? (
            <p
              className="mt-2 text-sm font-semibold text-red-700"
              id="problemDescription-error"
            >
              {errors.problemDescription}
            </p>
          ) : null}
        </div>

        <div className="md:col-span-2">
          <label
            className="text-sm font-black text-charcoal"
            htmlFor="desiredTimeline"
          >
            Desired timeline
          </label>
          <select
            className="mt-2 min-h-11 w-full rounded-md border border-slate-300 bg-white px-3 text-sm text-charcoal transition focus:border-signal focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-signal"
            id="desiredTimeline"
            name="desiredTimeline"
            onChange={(event) =>
              updateValue("desiredTimeline", event.target.value)
            }
            value={values.desiredTimeline}
          >
            <option value="">Select a timeline</option>
            {desiredTimelineOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>

        <div className="md:col-span-2">
          <div className="flex gap-3">
            <input
              aria-describedby={errors.consent ? "consent-error" : undefined}
              aria-invalid={errors.consent ? "true" : "false"}
              aria-required="true"
              checked={values.consent}
              className="mt-1 h-5 w-5 rounded border-slate-300 text-ink focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-signal"
              id="consent"
              name="consent"
              onChange={(event) => updateValue("consent", event.target.checked)}
              required
              type="checkbox"
            />
            <label
              className="text-sm font-bold leading-6 text-charcoal"
              htmlFor="consent"
            >
              I agree to be contacted about my inquiry.
            </label>
          </div>
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
          className="inline-flex min-h-11 items-center justify-center rounded-md bg-ink px-5 text-sm font-bold text-signal transition hover:bg-charcoal focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-signal"
          type="submit"
        >
          Prepare Email to Dan
        </button>
        {status ? (
          <div aria-live="polite" className="grid gap-2" role="status">
            <p className="text-sm font-black leading-6 text-ink">{status}</p>
            {emailHref ? (
              <a
                className="text-sm font-black text-ink underline decoration-signal decoration-2 underline-offset-4 focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-signal"
                href={emailHref}
              >
                Open Email Draft
              </a>
            ) : null}
          </div>
        ) : null}
      </div>
    </form>
  );
}
