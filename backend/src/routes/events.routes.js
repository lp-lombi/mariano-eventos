const express = require('express')
const { createContact, getEvents } = require('../controllers/events.controller')

const router = express.Router()

router.get('/events', getEvents)
router.post('/contact', createContact)

module.exports = router
