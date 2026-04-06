const { events } = require('../data/events')

function getEvents(_req, res) {
    res.json(events)
}

function createContact(req, res) {
    const { name, phone, message } = req.body

    if (!name || !phone || !message) {
        return res.status(400).json({ error: 'Faltan datos requeridos' })
    }

    console.log('Nueva consulta:', { name, phone, message })
    return res.status(201).json({ ok: true, message: 'Consulta recibida' })
}

module.exports = {
    getEvents,
    createContact,
}
