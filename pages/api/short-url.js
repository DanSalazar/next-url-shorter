import { PrismaClient } from '@prisma/client'
import { startsWithHttp } from '../../utils'

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405)
  const prisma = new PrismaClient()
  const url = startsWithHttp(req.body.url)
    ? req.body.url
    : 'https://' + req.body.url
  const shortUrl = Math.random().toString(32).substr(2, 6)

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
    return res.status(500)
  }
}
