
import express from 'express';
import {
  criarProgramacaoDia,
  listarProgramacaoCompleta,
  deletarTodaProgramacao
} from '../controllers/programacaoController';

const router = express.Router();

router.post('/', criarProgramacaoDia);
router.get('/', listarProgramacaoCompleta);
router.delete('/', deletarTodaProgramacao);

export default router;
