export interface ScenarioStep {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  location: string;
  iconName: 'Bike' | 'Clock' | 'AlertTriangle' | 'ShieldAlert';
  consequences: {
    target: string;
    impact: string;
    badgeText: string;
  }[];
}

export interface ProblemCard {
  id: string;
  title: string;
  icon: string;
  summary: string;
  detail: string;
  stat?: string;
  statLabel?: string;
}

export interface SolutionPillar {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  bullets: string[];
  statusBadge: string;
  isProposedOnly?: boolean;
}

export interface PilotPhaseData {
  phase: number;
  weeks: string;
  title: string;
  subtitle: string;
  tasks: string[];
  highlight: string;
}

export interface BudgetItemData {
  id: string;
  category: string;
  amount: number;
  description: string;
  percentage: number;
}

export interface ImpactMetricData {
  id: string;
  value: string;
  label: string;
  subtitle: string;
  description: string;
}

export interface SourceCitation {
  id: string;
  authorOrOrg: string;
  title: string;
  context: string;
  type: 'gt_fact' | 'external_research' | 'proposal_spec';
  url?: string;
}

export interface PledgeFormData {
  name: string;
  email: string;
  role: 'student' | 'faculty' | 'staff' | 'visitor' | 'sga';
  transitMode: 'scooter_rental' | 'personal_bike' | 'personal_scooter' | 'pedestrian';
  comments?: string;
}
