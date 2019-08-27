const express = require('express')
const router = express.Router()
const nodemailer = require('../config/nodemailer');

router.post('/', (req, res) => {
  const { clientData } = req.body
  nodemailer.sendEmail(clientData)
  res.sendStatus(200)
})

module.exports = router