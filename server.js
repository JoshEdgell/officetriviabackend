const express           = require('express');
const mongoose          = require('mongoose');
const bodyParser        = require('body-parser');
const app               = express();
const PORT              = 12345;

app.use(bodyParser.json());

const questionsController = require('./controllers/questions.js');
app.use('/questions', questionsController);

mongoose.connect('mongodb://localhost:27017/office');
mongoose.connection.once('open', ()=>{
  console.log('Michael Scott, extension ' + PORT);
})

app.listen(PORT, ()=>{
  console.log('Dunder Mifflin, this is Pam');
})
