const express           = require('express');
const mongoose          = require('mongoose');
const bodyParser        = require('body-parser');
const app               = express();
const PORT              = process.env.PORT || 3000;
const mongoUri = process.env.MONGODB_URI || 'mongodb://localhost:27017/office';

app.use(bodyParser.json());
app.use(express.static('public'));

const questionsController = require('./controllers/questions.js');
app.use('/questions', questionsController);

app.get('/', (req,res)=>{
  res.render(index.html);
});

mongoose.connect(mongoUri);
mongoose.connection.once('open', ()=>{
  console.log('Michael Scott, extension ' + PORT);
})

app.listen(PORT, ()=>{
  console.log('Dunder Mifflin, this is Pam');
})
