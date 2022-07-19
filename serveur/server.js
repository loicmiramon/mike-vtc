const express = require('express');
const bodyParser = require('body-parser')
const routing = require('./routes/routers')
const cors = require('cors')
require('dotenv').config({path: './config/.env'})
require('./config/db')
const app = express();

// Middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('../client/build'))
app.use(cors())

// Routes
app.use('/', routing)

app.get('/', (req, res) => {
  res.render('../client/build/index.html')
})

app.listen(process.env.PORT, () => {
  console.log(`Serveur démarré à l'adresse suivante: https://localhost:${process.env.PORT}`)
})