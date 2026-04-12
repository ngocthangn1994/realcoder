import { AppMetric, ApplicationStatus } from '@/types';

export const trustMetrics: AppMetric[] = [
  { label: 'Customers helped', value: '2,400+', hint: 'Across tech, finance, healthcare' },
  { label: 'Applications submitted', value: '185k+', hint: 'Human-verified submissions only' },
  { label: 'Interview callbacks', value: '31%', hint: 'Average client response rate' },
  { label: 'Satisfaction score', value: '4.9/5', hint: 'Trusted concierge support' }
];

export const applicationRows: Array<{ company: string; role: string; source: string; dateApplied: string; status: ApplicationStatus; note: string; evidenceCount: number; }> = [
  { company: 'Notion', role: 'Product Designer', source: 'Company Site', dateApplied: '2026-04-08', status: 'Applied', note: 'Follow-up in 5 days.', evidenceCount: 2 },
  { company: 'Ramp', role: 'Growth PM', source: 'LinkedIn', dateApplied: '2026-04-10', status: 'Pending', note: 'Assistant drafting custom answers.', evidenceCount: 1 },
  { company: 'Figma', role: 'Senior Designer', source: 'Referral Portal', dateApplied: '2026-04-11', status: 'Interview', note: 'Phone screen confirmed.', evidenceCount: 3 }
];
