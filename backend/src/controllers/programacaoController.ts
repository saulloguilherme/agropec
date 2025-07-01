// controllers/programacaoController.ts
import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export async function criarProgramacaoDia(req: Request, res: Response): Promise<void> {
  try {
    const { data, eventos } = req.body;

    const dia = await prisma.programacaoDia.create({
      data: {
        data,
        eventos: {
          create: eventos.map((evento: any) => ({
            horario: evento.horario,
            titulo: evento.titulo,
          })),
        },
      },
      include: { eventos: true }
    });

    res.status(201).json(dia);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao criar programação' });
  }
}

export async function listarProgramacaoCompleta(req: Request, res: Response): Promise<void> {
  try {
    const programacao = await prisma.programacaoDia.findMany({
      include: { eventos: true },
      orderBy: { id: 'asc' }
    });

    res.json(programacao);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao listar programação' });
  }
}

export async function deletarTodaProgramacao(req: Request, res: Response): Promise<void> {
  try {
    await prisma.evento.deleteMany();
    await prisma.programacaoDia.deleteMany();

    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: 'Erro ao deletar programação' });
  }
}
