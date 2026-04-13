import { User } from '../../models/User';
import { Application } from '../../models/Application';

export const listClients = () => User.find({ role: 'client' }).populate('assignedAssistantId subscriptionPlanId');

export const getClientDetail = (id: string) => User.findById(id).populate('assignedAssistantId subscriptionPlanId');

export const assignAssistant = (id: string, assistantId: string) =>
  User.findByIdAndUpdate(id, { assignedAssistantId: assistantId }, { new: true });

export const listAllApplications = () => Application.find().populate('userId assistantId').sort({ createdAt: -1 });
