import axios from 'axios';
import { env } from '../config/env';

const hasConfig = Boolean(env.homeAssistantUrl && env.homeAssistantToken);

export const getEntityState = async (entityId: string): Promise<Record<string, unknown>> => {
  if (!hasConfig) {
    return { entity_id: entityId, state: 'mock_state', attributes: { source: 'mock' } };
  }

  const response = await axios.get(`${env.homeAssistantUrl}/api/states/${entityId}`, {
    headers: { Authorization: `Bearer ${env.homeAssistantToken}` }
  });

  return response.data;
};
