import { Activity, BellDot, FileText, GitBranch, Landmark } from 'lucide-react';

const navItems = [
  { label: 'Command', icon: Activity, active: true },
  { label: 'Briefings', icon: FileText, active: false },
  { label: 'Escalations', icon: BellDot, active: false },
  { label: 'Signals', icon: GitBranch, active: false },
  { label: 'Governance', icon: Landmark, active: false },
];

export function NavRail() {
  return (
    <nav className="nav-rail" aria-label="Primary">
      {navItems.map((item) => {
        const Icon = item.icon;
        return (
          <button
            key={item.label}
            type="button"
            className={`nav-item ${item.active ? 'is-active' : 'is-muted'}`}
            aria-current={item.active ? 'page' : undefined}
            disabled={!item.active}
            title={item.active ? item.label : `${item.label} unavailable in prototype`}
          >
            <Icon size={18} aria-hidden="true" />
            <span>{item.label}</span>
          </button>
        );
      })}
    </nav>
  );
}
