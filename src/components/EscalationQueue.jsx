import { CheckCircle2, UserPlus } from 'lucide-react';

function readableEscalationId(id) {
  return id.replaceAll('-', ' ');
}

export function EscalationQueue({ items, selectedRiskId, onAcknowledge, onAssign }) {
  return (
    <section className="panel escalation-panel" aria-labelledby="escalation-heading">
      <div className="panel-heading">
        <div>
          <p className="label">Threshold triggers</p>
          <h2 id="escalation-heading">Escalation Queue</h2>
        </div>
      </div>

      <div className="escalation-list">
        {items.map((item) => (
          <article
            key={item.id}
            className={`escalation-item ${item.riskId === selectedRiskId ? 'is-linked' : ''}`}
          >
            <div>
              <strong>{item.trigger}</strong>
              <p>{item.nextAction}</p>
              <span>{item.status}</span>
            </div>
            <div className="escalation-meta">
              <span>{item.owner}</span>
              <b>{item.probability}%</b>
            </div>
            <div className="escalation-actions">
              <button
                type="button"
                onClick={() => onAcknowledge(item.id)}
                aria-label={`Acknowledge ${readableEscalationId(item.id)}`}
              >
                <CheckCircle2 size={14} aria-hidden="true" />
                Ack
              </button>
              <button
                type="button"
                onClick={() => onAssign(item.id)}
                aria-label={`Assign ${readableEscalationId(item.id)}`}
              >
                <UserPlus size={14} aria-hidden="true" />
                Assign
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
