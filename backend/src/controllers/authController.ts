import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function login(req: Request, res: Response): Promise<void> {
  const { email, senha } = req.body;

  const user = await prisma.user.findUnique({ where: { email } });
  if (!user) {
    res.status(401).json({ error: "Usuário não encontrado" });
    return;
  }

  const match = await bcrypt.compare(senha, user.senha);
  if (!match) {
    res.status(401).json({ error: "Senha inválida" });
    return;
  }

  const token = jwt.sign({ id: user.id, isAdmin: user.isAdmin }, process.env.JWT_SECRET!, {
    expiresIn: '1d',
  });

  res.json({ token });
}
