import { apiClient } from './client';
import { Alert } from '../types/alert';

export const getAlerts = () => apiClient<Alert[]>('/api/alerts');
