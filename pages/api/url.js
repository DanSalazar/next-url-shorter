export default function handler(req, res) {
  if (req.method !== 'POST') res.status(404)  
  const url = req.body.url
  const shortUrl = Math.random().
    toString(32)
    .substr(2, 6)
  res.status(200).json({ url, shortUrl })
}
