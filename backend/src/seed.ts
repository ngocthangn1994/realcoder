import bcrypt from 'bcryptjs';
import { connectDB } from './config/db';
import { User } from './models/User';
import { SubscriptionPlan } from './models/SubscriptionPlan';
import { Job } from './models/Job';
import { EmailThread, EmailMessage } from './models/InboxModels';
import { ChatThread } from './models/ChatThread';
import { ChatMessage } from './models/ChatMessage';
import { Subscription } from './models/BillingModels';
import { Resume } from './models/Resume';
import { SearchFilter } from './models/SearchFilter';
import { ApplicationAnswer, Notification, Preference } from './models/AppMetaModels';
import { DelegatedJob } from './models/DelegatedJob';
import { Task } from './models/Task';

async function run() {
  await connectDB();
  await Promise.all([
    User.deleteMany({}), SubscriptionPlan.deleteMany({}), Job.deleteMany({}), EmailThread.deleteMany({}), EmailMessage.deleteMany({}),
    ChatThread.deleteMany({}), ChatMessage.deleteMany({}), Subscription.deleteMany({}), Resume.deleteMany({}), SearchFilter.deleteMany({}),
    ApplicationAnswer.deleteMany({}), Notification.deleteMany({}), Preference.deleteMany({}), DelegatedJob.deleteMany({}), Task.deleteMany({})
  ]);

  const passwordHash = await bcrypt.hash('Password123!', 10);
  const [client, assistant, admin] = await User.create([
    { fullName: 'Ava Client', email: 'client@applyflow.dev', passwordHash, role: 'client' },
    { fullName: 'Mason Assistant', email: 'assistant@applyflow.dev', passwordHash, role: 'assistant' },
    { fullName: 'Noah Admin', email: 'admin@applyflow.dev', passwordHash, role: 'admin' }
  ]);

  const plans = await SubscriptionPlan.create([
    { name: 'AI Basic', priceMonthly: 29, applicationLimit: 25, assistantSupportLevel: 'none', features: ['AI matching', 'Resume insights'], active: true },
    { name: 'Human Assistant Starter', priceMonthly: 149, applicationLimit: 60, assistantSupportLevel: 'shared', features: ['Manual apply support', 'Chat'], active: true },
    { name: 'Human Assistant Growth', priceMonthly: 299, applicationLimit: 140, assistantSupportLevel: 'dedicated', features: ['Priority queue', 'Proof reports'], active: true },
    { name: 'Human Assistant Premium', priceMonthly: 549, applicationLimit: 999, assistantSupportLevel: 'concierge', features: ['White-glove execution', 'Advanced docs'], active: true }
  ]);

  const jobs = await Job.create(Array.from({ length: 30 }).map((_, i) => ({
    source: 'seed',
    sourceUrl: `https://jobs.example.com/${i + 1}`,
    externalId: `seed-${i + 1}`,
    title: ['Frontend Engineer', 'Product Designer', 'Data Analyst'][i % 3],
    company: ['Northbeam', 'Pilotworks', 'MintLayer'][i % 3],
    location: ['New York, NY', 'Remote (US)', 'Austin, TX'][i % 3],
    remoteType: ['remote', 'hybrid', 'onsite'][i % 3],
    salaryMin: 90000 + i * 1500,
    salaryMax: 120000 + i * 2000,
    description: 'Build delightful product experiences with modern tooling.',
    requirements: ['3+ years experience', 'TypeScript', 'Communication'],
    skills: ['typescript', 'react', 'next.js', 'node.js'],
    postedAt: new Date(Date.now() - i * 86400000),
    metadata: { seniority: i % 2 ? 'mid' : 'senior' }
  })));

  await Subscription.create({ userId: client._id, planId: plans[1]._id, status: 'active', provider: 'mock', currentPeriodStart: new Date(), currentPeriodEnd: new Date(Date.now() + 86400000 * 30) });
  await Resume.create([
    { userId: client._id, title: 'Software Engineer Resume', fileUrl: '/uploads/resume-1.pdf', parsedText: 'React TypeScript Node distributed systems', parsedData: { skills: ['React', 'TypeScript'] }, isDefault: true },
    { userId: client._id, title: 'Product Resume', fileUrl: '/uploads/resume-2.pdf', parsedText: 'Product strategy roadmap analytics', parsedData: { skills: ['Product Strategy'] }, isDefault: false }
  ]);

  await SearchFilter.create([
    { userId: client._id, name: 'Primary Remote SWE', roleTitles: ['Software Engineer'], locations: ['Remote'], keywords: ['React', 'Node'], isPrimary: true },
    { userId: client._id, name: 'NYC Product', roleTitles: ['Product Manager'], locations: ['New York, NY'], keywords: ['B2B SaaS'] }
  ]);

  await ApplicationAnswer.create({ userId: client._id, answers: { workAuthorizationStatus: 'US Citizen', sponsorshipFuture: 'No', legalAuthorizationCountry: 'Yes', locationsOpen: 'US major cities', relocationOpen: 'Yes', workMode: 'Remote + Hybrid', salaryRange: '$140k-$180k', targetTitles: 'Senior Software Engineer', seniorityLevel: 'Senior', industries: 'Fintech, Healthtech', earliestStartDate: '2 weeks', contractComfort: 'Yes', travelOpen: 'Up to 15%', veteranStatus: 'Prefer not to say', visaSupport: 'No' } });

  await EmailThread.create(Array.from({ length: 10 }).map((_, i) => ({ userId: client._id, subject: `Application update #${i + 1}`, labels: [i % 2 ? 'follow-up' : 'interview invite'], unread: i % 3 === 0 })));
  const firstThread = await EmailThread.findOne({ userId: client._id });
  if (firstThread) await EmailMessage.create({ threadId: firstThread._id, sender: 'Talent Team', body: 'Thanks for applying. Please complete the assessment.', statusTag: 'assessment', read: false });

  const chats = await ChatThread.create([
    { clientId: client._id, assistantId: assistant._id, participantIds: [client._id, assistant._id], isPremiumUnlocked: true, lastMessageAt: new Date() },
    { clientId: client._id, assistantId: assistant._id, participantIds: [client._id, assistant._id], isPremiumUnlocked: true, lastMessageAt: new Date() },
    { clientId: client._id, assistantId: assistant._id, participantIds: [client._id, assistant._id], isPremiumUnlocked: true, lastMessageAt: new Date() }
  ]);
  await ChatMessage.create({ threadId: chats[0]._id, senderId: assistant._id, body: 'I delegated three great matches and started applications today.' });

  await DelegatedJob.create({ clientId: client._id, assistantId: assistant._id, jobId: jobs[0]._id, status: 'in_progress', notes: 'Need portfolio link.' });
  await Task.create({ clientId: client._id, assistantId: assistant._id, title: 'Generate tailored resume for Northbeam role', priority: 'high', dueAt: new Date(Date.now() + 86400000) });

  await Preference.create({ userId: client._id, emailUpdates: true, whatsappUpdates: false, dailyProgressReport: true, escalationAlerts: true, autoGenerateDocuments: true, assistantUpdates: true });
  await Notification.create([
    { userId: client._id, title: 'Assistant assigned', body: 'Mason is now managing your delegated applications.', type: 'assistant_assigned' },
    { userId: client._id, title: '3 jobs delegated', body: 'Your assistant started three applications today.', type: 'application_progress' }
  ]);

  console.log('Seed complete with demo accounts: client/assistant/admin@applyflow.dev Password123!');
  process.exit(0);
}

run();
