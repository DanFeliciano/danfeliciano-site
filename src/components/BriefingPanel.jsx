import { FileText, ListChecks, MessageSquareText, Radar } from 'lucide-react';

export function BriefingPanel({ risk, briefing, isFresh }) {
  return (
    <aside className={`briefing-panel ${isFresh ? 'is-fresh' : ''}`} aria-label="Briefing detail">
      <div className="panel-heading">
        <div>
          <p className="label">Intelligence briefing</p>
          <h2>{risk.status}</h2>
        </div>
      </div>

      <section className="briefing-block bbluf">
        <div className="block-icon">
          <FileText size={16} aria-hidden="true" />
        </div>
        <div>
          <h3>BBLUF</h3>
          <p>{briefing.bbluf}</p>
        </div>
      </section>

      <section className="briefing-block">
        <div className="block-icon">
          <Radar size={16} aria-hidden="true" />
        </div>
        <div>
          <h3>Second-order implications</h3>
          <ul>
            {risk.implications.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="briefing-block">
        <div className="block-icon">
          <ListChecks size={16} aria-hidden="true" />
        </div>
        <div>
          <h3>Recommended decisions</h3>
          <ul>
            {briefing.decisions.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="briefing-block">
        <div className="block-icon">
          <MessageSquareText size={16} aria-hidden="true" />
        </div>
        <div>
          <h3>Talking points</h3>
          <ul>
            {risk.talkingPoints.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="evidence-trail">
        <h3>Evidence trail</h3>
        {risk.evidence.map((item) => (
          <p key={item}>{item}</p>
        ))}
      </section>
    </aside>
  );
}
