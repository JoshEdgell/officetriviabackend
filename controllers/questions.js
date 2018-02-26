const express             = require('express');
const Questions           = require('../models/questions.js');
const router              = express.Router();

//This route sends an array of all question ids ()
router.get('/', (req,res)=>{
  Questions.find({}, (err,foundQuestions)=>{
    idArray = [];
    for (let i = 0; i < foundQuestions.length; i++){
      idArray.push(foundQuestions[i]._id);
    }
    res.json(idArray);
  })
});

//This route is used to check an answer.  It takes in an object with a single key-value pair {guess:choice} to check against the 'correct' key of the found question
router.put('/check/:id', (req,res)=>{
  // console.log(req.body.guess);
  let correct = false;
  Questions.findById(req.params.id, (err,foundQuestion)=>{
    // console.log(foundQuestion.correct);
    if (req.body.guess === foundQuestion.correct) {
      correct = true;
    }
    console.log(correct);
  })
  res.send('received');
})

router.post('/', (req,res)=>{
  Questions.create(req.body, (err, createdQuestion)=>{
    res.json(createdQuestion);
  })
});

module.exports = router;
