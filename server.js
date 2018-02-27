const express           = require('express');
const mongoose          = require('mongoose');
const bodyParser        = require('body-parser');
const app               = express();
const PORT              = 12345;

app.use(bodyParser.json());
app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,OPTIONS,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type, X-Auth-Token, Accept');
  next()
})

const questionsController = require('./controllers/questions.js');
app.use('/questions', questionsController);

mongoose.connect('mongodb://localhost:27017/office');
mongoose.connection.once('open', ()=>{
  console.log('Michael Scott, extension ' + PORT);
})

app.listen(PORT, ()=>{
  console.log('Dunder Mifflin, this is Pam');
})
