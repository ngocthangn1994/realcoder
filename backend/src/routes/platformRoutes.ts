import { Router } from 'express';
import { requireAuth, requireRole } from '../middleware/authMiddleware';
import { Job } from '../models/Job';
import { SavedJob } from '../models/SavedJob';
import { DelegatedJob } from '../models/DelegatedJob';
import { ApplicationAnswer, Notification, Preference } from '../models/AppMetaModels';
import { EmailMessage, EmailThread } from '../models/InboxModels';
import { Task } from '../models/Task';
import { Subscription } from '../models/BillingModels';
import { SubscriptionPlan } from '../models/SubscriptionPlan';
import { ChatThread } from '../models/ChatThread';
import { ChatMessage } from '../models/ChatMessage';

const router = Router();

router.get('/jobs', requireAuth, async (req, res) => {
  const jobs = await Job.find().sort({ postedAt: -1 }).limit(100);
  res.json({ items: jobs });
});

router.post('/jobs/:id/save', requireAuth, async (req, res) => {
  const saved = await SavedJob.findOneAndUpdate(
    { clientId: req.user!.id, jobId: req.params.id },
    { $set: { status: 'saved' } },
    { upsert: true, new: true }
  );
  res.json(saved);
});

router.post('/jobs/:id/delegate', requireAuth, async (req, res) => {
  const delegated = await DelegatedJob.create({
    clientId: req.user!.id,
    assistantId: req.body.assistantId,
    jobId: req.params.id,
    status: 'new',
    notes: req.body.notes || ''
  });
  res.status(201).json(delegated);
});

router.get('/inbox', requireAuth, async (req, res) => {
  const threads = await EmailThread.find({ userId: req.user!.id }).sort({ updatedAt: -1 });
  const messages = await EmailMessage.find({}).sort({ createdAt: -1 }).limit(30);
  res.json({ threads, messages });
});

router.get('/chat/threads', requireAuth, async (req, res) => {
  const threads = await ChatThread.find({ participantIds: req.user!.id }).sort({ updatedAt: -1 });
  res.json({ items: threads });
});

router.get('/chat/threads/:id/messages', requireAuth, async (req, res) => {
  const messages = await ChatMessage.find({ threadId: req.params.id }).sort({ createdAt: 1 });
  res.json({ items: messages });
});

router.post('/chat/threads/:id/messages', requireAuth, async (req, res) => {
  const message = await ChatMessage.create({ threadId: req.params.id, senderId: req.user!.id, body: req.body.body, attachments: req.body.attachments || [] });
  res.status(201).json(message);
});

router.get('/plans', async (_req, res) => {
  const plans = await SubscriptionPlan.find({ active: true }).sort({ priceMonthly: 1 });
  res.json({ items: plans });
});

router.post('/billing/subscribe', requireAuth, async (req, res) => {
  const sub = await Subscription.create({
    userId: req.user!.id,
    planId: req.body.planId,
    status: 'active',
    provider: process.env.STRIPE_SECRET_KEY ? 'stripe' : 'mock',
    currentPeriodStart: new Date(),
    currentPeriodEnd: new Date(Date.now() + 1000 * 60 * 60 * 24 * 30)
  });
  res.json({ success: true, subscription: sub });
});

router.get('/application-answers', requireAuth, async (req, res) => {
  const answers = await ApplicationAnswer.findOne({ userId: req.user!.id });
  res.json({ answers });
});

router.put('/application-answers', requireAuth, async (req, res) => {
  const answers = await ApplicationAnswer.findOneAndUpdate({ userId: req.user!.id }, { $set: { answers: req.body.answers } }, { upsert: true, new: true });
  res.json(answers);
});

router.get('/notifications', requireAuth, async (req, res) => {
  const items = await Notification.find({ userId: req.user!.id }).sort({ createdAt: -1 }).limit(50);
  res.json({ items });
});

router.get('/account/preferences', requireAuth, async (req, res) => {
  const prefs = await Preference.findOne({ userId: req.user!.id });
  res.json(prefs);
});

router.put('/account/preferences', requireAuth, async (req, res) => {
  const prefs = await Preference.findOneAndUpdate({ userId: req.user!.id }, { $set: req.body }, { upsert: true, new: true });
  res.json(prefs);
});

router.get('/assistant/dashboard', requireAuth, requireRole('assistant', 'admin'), async (req, res) => {
  const delegatedCount = await DelegatedJob.countDocuments({ assistantId: req.user!.id, status: { $in: ['new', 'in_progress', 'needs_client_input'] } });
  const dueToday = await Task.countDocuments({ assistantId: req.user!.id, dueAt: { $lte: new Date() }, status: { $ne: 'done' } });
  res.json({ delegatedCount, dueToday });
});

router.get('/admin/overview', requireAuth, requireRole('admin'), async (_req, res) => {
  const [users, jobs, delegated, chats] = await Promise.all([
    (await import('../models/User')).User.countDocuments(),
    Job.countDocuments(),
    DelegatedJob.countDocuments(),
    ChatThread.countDocuments()
  ]);
  res.json({ users, jobs, delegated, chats });
});

export default router;
