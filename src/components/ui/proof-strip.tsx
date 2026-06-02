type ProofStripProps = {
  items: readonly string[];
};

export function ProofStrip({ items }: ProofStripProps) {
  return (
    <section
      aria-label="Proof points"
      className="border-y border-white/10 bg-graphite text-white"
    >
      <div className="mx-auto grid w-full max-w-site gap-px px-5 py-4 sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
        {items.map((item) => (
          <div
            key={item}
            className="rounded-lg border border-white/10 bg-white/[0.03] p-4 text-sm font-semibold leading-6 text-slate-100"
          >
            <span className="mb-3 block h-1.5 w-8 rounded-full bg-signal" />
            {item}
          </div>
        ))}
      </div>
    </section>
  );
}
