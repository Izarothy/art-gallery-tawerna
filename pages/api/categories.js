import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  const categories = await prisma.categories.findMany();
  if (req.method === 'GET') {
    res.status(200).json(categories);
  }
}
