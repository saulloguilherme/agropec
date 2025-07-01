import { Router } from 'express';
import { listarEventos, obterEvento, criarEvento, atualizarEvento, deletarEvento } from '../controllers/eventoController';

const router = Router();

router.get('/eventos', listarEventos);
router.get('/eventos/:id', obterEvento);
router.post('/eventos', criarEvento);
router.put('/eventos/:id', atualizarEvento);
router.delete('/eventos/:id', deletarEvento);

export default router;
