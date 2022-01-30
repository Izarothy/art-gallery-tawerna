import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  const arts = await prisma.arts.findMany();
  if (req.method === 'GET') {
    res.status(200).json(arts);
  }
}
