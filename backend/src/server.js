const express = require('express')
const cors = require('cors')
const routes = require('./routes/events.routes')

const app = express()
const PORT = process.env.PORT || 3001

app.use(cors())
app.use(express.json())

app.get('/api/health', (_req, res) => {
    res.json({ status: 'ok' })
})

app.use('/api', routes)

app.listen(PORT, () => {
    console.log(`Backend escuchando en http://localhost:${PORT}`)
})
