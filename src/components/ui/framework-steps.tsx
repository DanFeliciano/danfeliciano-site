type FrameworkStep = {
  title: string;
  description: string;
};

type FrameworkStepsProps = {
  steps: readonly FrameworkStep[];
  variant?: "light" | "dark";
};

export function FrameworkSteps({
  steps,
  variant = "light",
}: FrameworkStepsProps) {
  const isDark = variant === "dark";

  return (
    <ol className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
      {steps.map((step, index) => (
        <li
          className={`rounded-lg border p-4 ${
            isDark
              ? "border-white/10 bg-white/[0.04] text-white"
              : "border-slate-200 bg-white text-charcoal"
          }`}
          key={step.title}
        >
          <div
            className={`flex size-9 items-center justify-center rounded-md text-sm font-black ${
              isDark ? "bg-signal text-ink" : "bg-ink text-signal"
            }`}
          >
            {index + 1}
          </div>
          <h3 className="mt-4 text-base font-black leading-6">{step.title}</h3>
          <p
            className={`mt-2 text-sm leading-6 ${
              isDark ? "text-slate-300" : "text-slate-600"
            }`}
          >
            {step.description}
          </p>
        </li>
      ))}
    </ol>
  );
}
