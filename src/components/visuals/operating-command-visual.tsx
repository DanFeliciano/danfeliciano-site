const signals = [
  ["Backlog aging", "72%", "bg-signal"],
  ["Cycle-time drag", "48%", "bg-amber"],
  ["AI readiness", "61%", "bg-emerald-400"],
] as const;

const commandRows = [
  ["Constraint", "Intake rules creating avoidable rework"],
  ["Decision", "Segment demand before adding capacity"],
  ["Cadence", "Daily recovery rhythm with weekly executive review"],
] as const;

export function OperatingCommandVisual() {
  return (
    <div className="rounded-lg border border-white/15 bg-white/5 p-4 shadow-command">
      <div className="mb-4 flex items-center justify-between gap-4 text-xs font-semibold text-slate-300">
        <span>Operating signal map</span>
        <span className="text-right text-signal">Live diagnostic view</span>
      </div>

      <div className="grid gap-3">
        {signals.map(([label, value, color]) => (
          <div
            key={label}
            className="rounded-md border border-white/10 bg-ink/70 p-3"
          >
            <div className="mb-2 flex justify-between gap-4 text-xs text-slate-300">
              <span>{label}</span>
              <strong className="text-white">{value}</strong>
            </div>
            <div className="h-2 rounded-full bg-white/10">
              <div
                className={`h-2 rounded-full ${color}`}
                style={{ width: value }}
              />
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 grid gap-3 sm:grid-cols-3">
        {commandRows.map(([item, detail]) => (
          <div
            key={item}
            className="rounded-md border border-white/10 bg-white/[0.03] p-3"
          >
            <div className="text-xs font-bold text-white">{item}</div>
            <div className="mt-2 text-[11px] leading-5 text-slate-300">
              {detail}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 rounded-md border border-signal/30 bg-signal/10 p-3 text-xs font-semibold leading-5 text-slate-100">
        Command readout: stabilize the queue, remove rule friction, and automate
        only after the workflow is visible.
      </div>
    </div>
  );
}
