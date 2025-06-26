import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

export function authenticateAdmin(req: Request, res: Response, next: NextFunction) {
  const auth = req.headers.authorization;
  if (!auth) return res.status(401).json({ message: "Token ausente" });

  const token = auth.split(' ')[1];
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET!) as any;
    if (!decoded.isAdmin) return res.status(403).json({ message: "Acesso negado" });

    next();
  } catch (err) {
    return res.status(401).json({ message: "Token inválido" });
  }
}
