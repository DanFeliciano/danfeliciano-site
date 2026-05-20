export function SignalMap({ nodes }) {
  return (
    <section className="panel signal-panel" aria-labelledby="signal-heading">
      <div className="panel-heading">
        <div>
          <p className="label">Evidence network</p>
          <h2 id="signal-heading">Strategic Signal Map</h2>
        </div>
      </div>
      <div className="signal-map">
        <div className="signal-core">Selected risk</div>
        {nodes.map((node, index) => (
          <div
            key={node.id}
            className={`signal-node node-${index} tone-${node.tone} ${node.active ? 'is-active' : ''}`}
          >
            {node.label}
          </div>
        ))}
      </div>
    </section>
  );
}
