// src/app.ts
import express, { Express } from 'express';
import todoRoutes from './routes/todoRoutes';
import cors from 'cors';


const app: Express = express();
const PORT = 3000;

// Health check endpoint
app.get('/health', (req, res) => {
  res.status(200).send('OK');
});

app.use(cors());
app.use(express.json()); // Middleware to parse JSON bodies
app.use('/api', todoRoutes); // Mount the todo routes under the /api prefix

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
