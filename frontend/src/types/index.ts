export type ApplicationStatus = 'Suggested' | 'Pending' | 'Applied' | 'Interview' | 'Rejected' | 'Offer';

export interface AppMetric {
  label: string;
  value: string;
  hint: string;
}
