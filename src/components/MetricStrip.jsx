export function MetricStrip({ metrics }) {
  return (
    <dl className="metric-strip">
      {metrics.map((metric) => (
        <div key={metric.label}>
          <dt>{metric.label}</dt>
          <dd>{metric.value}</dd>
          <span>{metric.delta}</span>
        </div>
      ))}
    </dl>
  );
}
