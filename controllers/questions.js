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

//Create questions route
router.post('/', (req,res)=>{
  Questions.create(req.body, (err, createdQuestion)=>{
    res.json(createdQuestion);
  })
});

//This route is used to check an answer.  It takes in an object with a single key-value pair {guess:choice} to check against the 'correct' key of the found question
router.put('/check/:id', (req,res)=>{
  Questions.findById(req.params.id, (err,foundQuestion)=>{
    if (req.body.guess === foundQuestion.correct) {
      res.send('correct');
    } else {
      res.send('incorrect');
    }
  })
});

router.put('/flag/:id', (req,res)=>{
  // console.log(req.body.flagText);
  Questions.findById(req.params.id, (err,foundQuestion)=>{
    foundQuestion.flags.push(req.body.flagText);
    foundQuestion.flagNumber += 1;
    Questions.findByIdAndUpdate(req.params.id, foundQuestion, {new:true}, (err,updatedQuestion)=>{
      res.json(updatedQuestion);
    })
  })
})

router.get('/:id', (req,res)=>{
  Questions.findById(req.params.id, (err,foundQuestion)=>{
    res.send(foundQuestion);
  })
})

//Delete questions route
router.delete('/:id', (req,res)=>{
  Questions.findByIdAndRemove(req.params.id, (err,deletedQuestion)=>{
    res.send('deleted');
  })
})

module.exports = router;
