import dotenv from 'dotenv';

dotenv.config();

export const env = {
  port: Number(process.env.PORT) || 5000,
  nodeEnv: process.env.NODE_ENV || 'development',
  mongoUri: process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/smart_home_platform',
  homeAssistantUrl: process.env.HOME_ASSISTANT_URL || '',
  homeAssistantToken: process.env.HOME_ASSISTANT_TOKEN || ''
};
