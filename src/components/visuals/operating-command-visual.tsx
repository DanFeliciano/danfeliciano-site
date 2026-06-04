const signals = [
  ["Owner bottleneck", "72%", "bg-signal"],
  ["Manual follow-up", "54%", "bg-amber"],
  ["Backlog pressure", "61%", "bg-emerald-400"],
] as const;

const commandRows = [
  ["Find", "Where work waits, repeats, or depends on one person"],
  ["Fix", "Clarify ownership, handoffs, follow-up, and flow"],
  ["Automate", "Use AI where it saves time instead of adding noise"],
] as const;

export function OperatingCommandVisual() {
  return (
    <div className="min-w-0 overflow-hidden rounded-lg border border-white/15 bg-white/5 p-3 shadow-command sm:p-4">
      <div className="mb-3 flex items-center justify-between gap-4 text-xs font-semibold text-slate-300 sm:mb-4">
        <span>Bottleneck snapshot</span>
        <span className="hidden text-right text-signal sm:inline">
          Owner/operator view
        </span>
      </div>

      <div className="grid gap-2 sm:gap-3">
        {signals.map(([label, value, color]) => (
          <div
            key={label}
            className="rounded-md border border-white/10 bg-ink/70 p-2.5 sm:p-3"
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

      <div className="mt-4 hidden gap-3 sm:grid sm:grid-cols-3">
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

      <div className="mt-4 hidden rounded-md border border-signal/30 bg-signal/10 p-3 text-xs font-semibold leading-5 text-slate-100 sm:block">
        Readout: find what is slowing the business down, fix the work, and use
        the right tool only where it makes the work easier to run.
      </div>
    </div>
  );
}
