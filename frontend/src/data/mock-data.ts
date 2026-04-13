import { ApplicationItem, JobMatch, MessageItem } from '@/types';

export const kpis = [
  { label: 'Applications this month', value: '42' },
  { label: 'Interview callbacks', value: '9' },
  { label: 'Profile completion', value: '92%' },
  { label: 'Avg. match score', value: '86%' }
];

export const applications: ApplicationItem[] = [
  { id: 'a1', company: 'Notion', role: 'Senior Product Designer', source: 'Career Site', dateApplied: '2026-04-01', status: 'Interview', note: 'Recruiter screen scheduled.', evidenceCount: 2 },
  { id: 'a2', company: 'Stripe', role: 'Product Designer II', source: 'Career Site', dateApplied: '2026-03-29', status: 'Applied', note: 'Assistant submitted with referral note.', evidenceCount: 1 },
  { id: 'a3', company: 'Vercel', role: 'Design Systems Lead', source: 'LinkedIn', dateApplied: '2026-03-27', status: 'Pending', note: 'Waiting for hiring manager confirmation.', evidenceCount: 0 }
];

export const matches: JobMatch[] = [
  { id: 'm1', title: 'Senior UX Designer', company: 'Figma', location: 'Remote (US)', matchScore: 91, matchedSkills: ['Design Systems', 'Figma'], missingSkills: ['SQL'], reason: 'Excellent portfolio alignment with SaaS flows.', status: 'Suggested' },
  { id: 'm2', title: 'Product Designer', company: 'Ramp', location: 'NYC / Remote', matchScore: 87, matchedSkills: ['Product Thinking', 'Prototyping'], missingSkills: ['Fintech domain'], reason: 'Strong metric-driven case studies.', status: 'Pending' }
];

export const messages: MessageItem[] = [
  { id: '1', senderRole: 'assistant', content: 'Applied to Stripe and uploaded screenshot proof.', timestamp: '10:32 AM' },
  { id: '2', senderRole: 'client', content: 'Great, please prioritize remote-first roles this week.', timestamp: '10:35 AM' }
];
