import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';

const prisma = new PrismaClient();

async function main() {
  const admin = await prisma.user.findFirst({ where: { isAdmin: true } });
  if (!admin) {
    const senhaHash = await bcrypt.hash("agropec", 10);
    await prisma.user.create({
      data: {
        email: "admin@gmail.com",
        senha: senhaHash,
        isAdmin: true,
      },
    });
    console.log("Admin criado!");
  }
}

main().catch(console.error).finally(() => prisma.$disconnect());
