const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const path = require('path');
const bodyParser = require('body-parser')
const port = process.env.PORT || 5000;

dotenv.config();
const app = express()

//Middleware
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

// Load routes
const sendEmail = require('./routes/sendEmail')
app.use('/sendEmail', sendEmail)

// Static file for production
const clientAppPathProd = path.join(__dirname, '../', 'client/build');
app.use('/', express.static(clientAppPathProd));

app.listen(port, async () => {
  console.log(`Server started on port ${port}`);
})