import { AlertTriangle, ArrowUpRight } from 'lucide-react';
import { MetricStrip } from './MetricStrip.jsx';

export function RiskCard({ risk, isSelected, onSelect }) {
  return (
    <button
      type="button"
      className={`risk-card ${isSelected ? 'is-selected' : ''}`}
      onClick={() => onSelect(risk.id)}
      aria-pressed={isSelected}
    >
      <span className="rank">0{risk.rank}</span>
      <div className="risk-card-main">
        <div className="risk-card-header">
          <span className={`severity severity-${risk.severity.toLowerCase()}`}>
            <AlertTriangle size={14} aria-hidden="true" />
            {risk.severity}
          </span>
          <span>{risk.category}</span>
        </div>
        <h3>{risk.title}</h3>
        <p>{risk.recommendedAction}</p>
        <MetricStrip metrics={risk.metrics} />
      </div>
      <div className="risk-card-score">
        <strong>{risk.importance}</strong>
        <span>Strategic importance</span>
        <em>
          {risk.trend}
          <ArrowUpRight size={13} aria-hidden="true" />
        </em>
      </div>
    </button>
  );
}
