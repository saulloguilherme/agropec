import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();


export async function listarEventos(req: Request, res: Response) {
  try {
    const eventos = await prisma.evento.findMany();
    res.json(eventos);
  } catch (error) {
    res.status(500).json({ error: "Erro ao listar eventos" });
  }
}


export async function obterEvento(req: Request, res: Response) {
  const { id } = req.params;
  try {
    const evento = await prisma.evento.findUnique({ where: { id: Number(id) } });
    if (!evento) {
      res.status(404).json({ error: "Evento não encontrado" });
      return;
    }
    res.json(evento);
  } catch (error) {
    res.status(500).json({ error: "Erro ao buscar evento" });
  }
}


export async function criarEvento(req: Request, res: Response) {
  const { titulo, descricao, data, local } = req.body;
  try {
    const novoEvento = await prisma.evento.create({
      data: {
        titulo,
        descricao,
        data: new Date(data),
        local
      }
    });
    res.status(201).json(novoEvento);
  } catch (error) {
    res.status(500).json({ error: "Erro ao criar evento" });
  }
}


export async function atualizarEvento(req: Request, res: Response) {
  const { id } = req.params;
  const { titulo, descricao, data, local } = req.body;
  try {
    const eventoAtualizado = await prisma.evento.update({
      where: { id: Number(id) },
      data: {
        titulo,
        descricao,
        data: new Date(data),
        local
      }
    });
    res.json(eventoAtualizado);
  } catch (error) {
    res.status(500).json({ error: "Erro ao atualizar evento" });
  }
}


export async function deletarEvento(req: Request, res: Response) {
  const { id } = req.params;
  try {
    await prisma.evento.delete({ where: { id: Number(id) } });
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: "Erro ao deletar evento" });
  }
}
