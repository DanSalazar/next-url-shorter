import { PrismaClient } from '@prisma/client'

function shortUrl() {
  return <div></div>
}

export async function getServerSideProps({ params }) {
  const prisma = new PrismaClient()
  const { shortUrl } = params

  const data = await prisma.Url.findUnique({
    where: { shortUrl }
  })

  await prisma.$disconnect()

  if (!data) {
    return {
      redirect: {
        destination: '/',
        permanent: false
      }
    }
  }

  return {
    redirect: {
      destination: data.url,
      permanent: false
    }
  }
}

export default shortUrl
