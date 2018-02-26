const express           = require('express');
const app               = express();
const PORT              = 12345;

const questionsController = require('./controllers/questions.js');
app.use('/questions', questionsController);

app.listen(PORT, ()=>{
  console.log('Dunder Mifflin, this is Pam');
  console.log('Michael Scott, extension ' + PORT)
})
