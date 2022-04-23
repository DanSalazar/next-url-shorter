export default function handler(req, res) {
  if (req.method !== 'POST') res.status(404)  
  const url = req.body.url
  res.status(200).json({ url })
}
