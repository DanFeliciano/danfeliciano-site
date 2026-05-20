import { describe, expect, it } from 'vitest';
import {
  audiences,
  escalationItems,
  getAudienceBriefing,
  getConnectedSignals,
  riskSignals,
} from './intelligence.js';

describe('intelligence data', () => {
  it('contains exactly three ranked executive risks', () => {
    expect(riskSignals).toHaveLength(3);
    expect(riskSignals.map((risk) => risk.rank)).toEqual([1, 2, 3]);
  });

  it('provides role-specific briefing language for each audience', () => {
    for (const risk of riskSignals) {
      for (const audience of audiences) {
        const briefing = getAudienceBriefing(risk.id, audience.id);
        expect(briefing.bbluf).toContain(audience.shortLabel);
        expect(briefing.decisions.length).toBeGreaterThan(0);
      }
    }
  });

  it('connects every risk to visible signal nodes', () => {
    for (const risk of riskSignals) {
      const nodes = getConnectedSignals(risk.id);
      const activeNodes = nodes.filter((node) => node.active);
      expect(nodes.length).toBeGreaterThanOrEqual(7);
      expect(activeNodes.length).toBeGreaterThanOrEqual(3);
    }
  });

  it('contains actionable escalation items', () => {
    expect(escalationItems.length).toBeGreaterThanOrEqual(3);
    expect(escalationItems.every((item) => item.owner && item.nextAction)).toBe(true);
  });
});
