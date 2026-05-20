import { RefreshCw, ShieldAlert } from 'lucide-react';

export function CommandBar({
  audiences,
  selectedAudience,
  onAudienceChange,
  onGenerate,
  isGenerating,
  lastRefreshLabel,
}) {
  return (
    <header className="command-bar">
      <div className="brand-lockup">
        <div className="brand-mark">
          <ShieldAlert size={19} aria-hidden="true" />
        </div>
        <div>
          <p className="label">Executive Intelligence Engine</p>
          <h1>Command Center</h1>
        </div>
      </div>

      <div className="command-actions">
        <div className="refresh-state" aria-live="polite">
          {lastRefreshLabel}
        </div>
        <label className="audience-control">
          <span>Executive audience</span>
          <select
            value={selectedAudience}
            onChange={(event) => onAudienceChange(event.target.value)}
            aria-label="Executive audience"
          >
            {audiences.map((audience) => (
              <option key={audience.id} value={audience.id}>
                {audience.label}
              </option>
            ))}
          </select>
        </label>
        <button
          type="button"
          className="primary-action"
          onClick={onGenerate}
          disabled={isGenerating}
        >
          <RefreshCw size={16} aria-hidden="true" />
          {isGenerating ? 'Generating...' : 'Generate Briefing'}
        </button>
      </div>
    </header>
  );
}
