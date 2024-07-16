import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import globalErrorHandler from './app/middlewares/globalErrorhandler';
import notFound from './app/middlewares/notFound';
import router from './app/routes';

const app: Application = express();

// Enable CORS
app.use(cors({
  origin: ['http://localhost:5173','https://assignment4-client.vercel.app','https://assignment4-client-q1m1ol8il-shajada-nirobs-projects.vercel.app'], // replace with your frontend origin
  credentials: true, // if your frontend needs to send cookies or authentication headers
}));

// Body parsers
app.use(express.json());

// Application routes
app.use('/api', router);

// Example controller and route
const getAController = (req: Request, res: Response) => {
  res.send('Welcome to car washing');
};
app.get('/', getAController);

// Global error handler
app.use(globalErrorHandler);

// Not found handler
app.use(notFound);

export default app;
