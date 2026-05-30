import { Document, Schema, model } from 'mongoose';

export interface IAutomationRule extends Document {
  name: string;
  triggerType: string;
  condition: string;
  action: string;
  enabled: boolean;
}

const automationRuleSchema = new Schema<IAutomationRule>(
  {
    name: { type: String, required: true, trim: true },
    triggerType: { type: String, required: true, trim: true },
    condition: { type: String, required: true, trim: true },
    action: { type: String, required: true, trim: true },
    enabled: { type: Boolean, default: true }
  },
  { timestamps: true }
);

export const AutomationRule = model<IAutomationRule>('AutomationRule', automationRuleSchema);
