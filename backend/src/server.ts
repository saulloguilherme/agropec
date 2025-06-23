import express from 'express';
import { Event } from './models/Event';

const app = express();
app.use(express.json());

app.post('/events', async (req, res) => {
  const event = await Event.create(req.body);
  res.json(event);
});

app.get('/events', async (req, res) => {
  const events = await Event.findAll();
  res.json(events);
});

app.listen(3001, () => {
  console.log('Backend rodando em http://localhost:3001');
});