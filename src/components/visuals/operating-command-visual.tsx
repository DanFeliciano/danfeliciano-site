const operatingLenses = [
  ["Make the decision", "Expose risk, assumptions, and tradeoffs."],
  ["Understand the numbers", "Trace financial pressure to its operating cause."],
  ["Fix the work", "Remove delays, rework, and broken handoffs."],
  ["See the signals", "Turn scattered data into measures that drive action."],
  ["Automate the right work", "Save time without automating a bad process."],
] as const;

export function OperatingCommandVisual() {
  return (
    <div className="min-w-0 overflow-hidden rounded-lg border border-white/15 bg-white/5 p-3 shadow-command sm:p-4">
      <div className="mb-3 flex items-center justify-between gap-4 text-xs font-semibold text-slate-300 sm:mb-4">
        <span>Business operating view</span>
        <span className="hidden text-right text-signal sm:inline">
          Decide · Diagnose · Improve
        </span>
      </div>

      <div className="grid gap-2">
        {operatingLenses.map(([label, detail], index) => (
          <div
            key={label}
            className="grid grid-cols-[2rem_1fr] gap-3 rounded-md border border-white/10 bg-ink/70 p-2.5 sm:grid-cols-[2rem_0.8fr_1.2fr] sm:items-center sm:p-3"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-md bg-signal text-xs font-black text-ink">
              {String(index + 1).padStart(2, "0")}
            </span>
            <strong className="text-xs leading-5 text-white sm:text-sm">
              {label}
            </strong>
            <span className="col-start-2 text-[11px] leading-5 text-slate-300 sm:col-start-3">
              {detail}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
