import cors from 'cors';
import express from 'express';
import morgan from 'morgan';
import alertRoutes from './routes/alertRoutes';
import deviceRoutes from './routes/deviceRoutes';
import healthRoutes from './routes/healthRoutes';
import thermostatRoutes from './routes/thermostatRoutes';
import { errorMiddleware } from './middleware/errorMiddleware';
import { notFoundMiddleware } from './middleware/notFoundMiddleware';

const app = express();
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

app.use('/health', healthRoutes);
app.use('/api/devices', deviceRoutes);
app.use('/api/thermostat', thermostatRoutes);
app.use('/api/alerts', alertRoutes);

app.use(notFoundMiddleware);
app.use(errorMiddleware);

export default app;
