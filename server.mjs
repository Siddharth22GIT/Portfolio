import express from 'express'
import cors from 'cors'

const app = express()

// In-memory store just so you can see received messages if needed
const messages = []

app.use(
  cors({
    origin: process.env.CLIENT_ORIGIN || 'http://localhost:5175',
  }),
)
app.use(express.json())

app.get('/api/health', (_req, res) => {
  res.json({ ok: true })
})

app.post('/api/contact', (req, res) => {
  const { name, email, message } = req.body || {}

  if (!name || !email || !message) {
    return res.status(400).json({ ok: false, error: 'Missing required fields' })
  }

  const entry = {
    name,
    email,
    message,
    createdAt: new Date().toISOString(),
  }

  messages.push(entry)
  console.log('📩 New contact message:', entry)

  return res.json({ ok: true })
})

app.get('/api/contact', (_req, res) => {
  res.json({ ok: true, messages })
})

const PORT = process.env.PORT || 4000
app.listen(PORT, () => {
  console.log(`Contact API listening on http://localhost:${PORT}`)
})


