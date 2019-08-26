const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const path = require('path');
const port = process.env.PORT || 5000;

dotenv.config();

// Load config files
const app = express()
//Middleware
app.use(cors())

app.get('/', (req, res) => res.send('It works'))

app.listen(port, async () => {
  console.log(`Server started on port ${port}`);
})