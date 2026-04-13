export type ApplicationStatus = 'Suggested' | 'Pending' | 'Applied' | 'Interview' | 'Rejected' | 'Offer';

export interface ApplicationItem { id: string; company: string; role: string; source: string; dateApplied: string; status: ApplicationStatus; note: string; evidenceCount: number; }
export interface JobMatch { id: string; title: string; company: string; location: string; matchScore: number; matchedSkills: string[]; missingSkills: string[]; reason: string; status: ApplicationStatus; }
export interface MessageItem { id: string; senderRole: 'client' | 'assistant'; content: string; timestamp: string; }
