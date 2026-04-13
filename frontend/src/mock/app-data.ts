export const dashboardStats = [
  { label: 'Matched jobs', value: 86 },
  { label: 'Saved jobs', value: 24 },
  { label: 'Delegated jobs', value: 18 },
  { label: 'Applied jobs', value: 11 },
  { label: 'Response rate', value: '19%' }
];

export const onboardingQuestions = [
  'What is your current work authorization status?',
  'Will you require sponsorship now or in the future?',
  'Are you legally authorized to work in the country you are applying in?',
  'What locations are you open to?',
  'Are you open to relocation?',
  'Are you open to remote, hybrid, or onsite roles?',
  'What salary range are you targeting?',
  'What job titles are you targeting?',
  'What seniority level are you targeting?',
  'What industries are you interested in?',
  'What is your earliest start date?',
  'Are you comfortable with contract roles?',
  'Are you open to travel for work?',
  'Do you identify as a veteran? (optional)',
  'Do you need visa support or immigration assistance? (optional)'
];

export const jobs = Array.from({ length: 12 }).map((_, i) => ({
  id: i + 1,
  title: ['Senior Frontend Engineer', 'Product Designer', 'Data Analyst'][i % 3],
  company: ['Northbeam', 'Evermint', 'CloudRiver'][i % 3],
  location: ['Remote (US)', 'New York, NY', 'Austin, TX'][i % 3],
  remoteType: ['Remote', 'Hybrid', 'Onsite'][i % 3],
  salary: `$${110 + i * 5}k - $${145 + i * 5}k`,
  matchScore: 92 - i,
  skills: ['TypeScript', 'React', 'Collaboration']
}));
