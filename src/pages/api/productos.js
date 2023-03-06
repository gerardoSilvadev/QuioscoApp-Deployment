import { PrismaClient } from "@prisma/client"

export default async function handler(req, res) {
  const prisma = new PrismaClient()
  const producto = await prisma.producto.findMany()
  res.status(200).json(producto)
}
