// src/index.ts
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import programacaoRoutes from './routes/programaçao';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Rotas
app.use('/programacao', programacaoRoutes);

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
