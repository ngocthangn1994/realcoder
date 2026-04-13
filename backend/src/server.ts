import { app } from './app';
import { env } from './config/env';
import { connectDb } from './config/db';

const start = async () => {
  await connectDb();
  app.listen(env.PORT, () => {
    console.log(`ApplyFlow API listening on http://localhost:${env.PORT}`);
  });
};

start().catch((error) => {
  console.error(error);
  process.exit(1);
});
