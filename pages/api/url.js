import { PrismaClient } from '@prisma/client'

export default async function handler(req, res) {
  if (req.method !== 'POST') res.status(405)
  const prisma = new PrismaClient()
  const url = req.body.url
  const shortUrl = Math.random().
    toString(32)
    .substr(2, 6)

  try {
    const data = await prisma.Url.create({
      data: {
        url,
        shortUrl
      }
    })

    prisma.$disconnect()

    return res.status(200).send(data)
  } catch (error) {
    return res.status(500).send(error)
  }
}
