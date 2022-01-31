import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === 'GET') {
    const arts = await prisma.arts.findMany();
    res.status(200).json(arts);
  }
  if (req.method === 'POST') {
    const art = await prisma.arts.create({
      data: {
        ...req.body,
      },
    });
    res.status(201).json(art);
  }
}
