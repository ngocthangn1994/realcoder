export interface Alert {
  _id: string;
  type: 'low_battery' | 'offline' | 'smoke_detected' | 'motion_detected' | 'overheat' | 'system';
  message: string;
  severity: 'low' | 'medium' | 'high' | 'critical';
  resolved: boolean;
  createdAt: string;
}
