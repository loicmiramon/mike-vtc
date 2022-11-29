const express = require('express');
const routing = require('./routes/routers')
const cors = require('cors')
require('dotenv').config({path: './config/.env'})
const app = express();


// Middlewares
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static('../client/build'))

// Routes
app.use('/', routing)

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname,'../client/build/index.html'))
})

app.listen(process.env.PORT, () => {
  console.log(`Serveur démarré à l'adresse suivante: https://localhost:${process.env.PORT}`)
})