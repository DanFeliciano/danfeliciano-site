import { useMemo, useState } from 'react';
import { BriefingPanel } from './components/BriefingPanel.jsx';
import { CommandBar } from './components/CommandBar.jsx';
import { EscalationQueue } from './components/EscalationQueue.jsx';
import { NavRail } from './components/NavRail.jsx';
import { RiskCard } from './components/RiskCard.jsx';
import { SignalMap } from './components/SignalMap.jsx';
import {
  audiences,
  escalationItems,
  getAudienceBriefing,
  getConnectedSignals,
  getRiskById,
  riskSignals,
} from './data/intelligence.js';

export default function App() {
  const [selectedRiskId, setSelectedRiskId] = useState(riskSignals[0].id);
  const [selectedAudience, setSelectedAudience] = useState('ceo');
  const [isGenerating, setIsGenerating] = useState(false);
  const [lastRefreshLabel, setLastRefreshLabel] = useState('Updated 08:40 ET');
  const [freshBriefing, setFreshBriefing] = useState(false);
  const [queueItems, setQueueItems] = useState(escalationItems);

  const selectedRisk = getRiskById(selectedRiskId);
  const briefing = getAudienceBriefing(selectedRiskId, selectedAudience);
  const signalNodes = getConnectedSignals(selectedRiskId);

  const exposureTotal = useMemo(
    () =>
      riskSignals.reduce(
        (total, risk) => total + Number(risk.financialExposure.replace(/[$M]/g, '')),
        0,
      ),
    [],
  );

  function handleGenerateBriefing() {
    setIsGenerating(true);
    setFreshBriefing(false);
    window.setTimeout(() => {
      setIsGenerating(false);
      setFreshBriefing(true);
      setLastRefreshLabel('Refreshed just now');
    }, 450);
  }

  function updateEscalation(id, status) {
    setQueueItems((items) =>
      items.map((item) => (item.id === id ? { ...item, status } : item)),
    );
  }

  return (
    <div className="app-shell">
      <CommandBar
        audiences={audiences}
        selectedAudience={selectedAudience}
        onAudienceChange={setSelectedAudience}
        onGenerate={handleGenerateBriefing}
        isGenerating={isGenerating}
        lastRefreshLabel={lastRefreshLabel}
      />
      <div className="workspace">
        <NavRail />
        <main className="command-grid">
          <section className="cockpit" aria-labelledby="matters-heading">
            <div className="cockpit-header">
              <div>
                <p className="label">Priority intelligence</p>
                <h2 id="matters-heading">What Matters Now</h2>
              </div>
              <div className="exposure-total">
                <span>Financial exposure</span>
                <strong>${exposureTotal.toFixed(1)}M</strong>
              </div>
            </div>

            <div className="risk-stack">
              {riskSignals.map((risk) => (
                <RiskCard
                  key={risk.id}
                  risk={risk}
                  isSelected={risk.id === selectedRiskId}
                  onSelect={setSelectedRiskId}
                />
              ))}
            </div>

            <div className="lower-grid">
              <EscalationQueue
                items={queueItems}
                selectedRiskId={selectedRiskId}
                onAcknowledge={(id) =>
                  updateEscalation(id, 'Acknowledged by executive office')
                }
                onAssign={(id) => updateEscalation(id, 'Assigned for mitigation')}
              />
              <SignalMap nodes={signalNodes} />
            </div>
          </section>

          <BriefingPanel risk={selectedRisk} briefing={briefing} isFresh={freshBriefing} />
        </main>
      </div>
    </div>
  );
}
