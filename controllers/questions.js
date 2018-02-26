const express             = require('express');
const Questions           = require('../models/questions.js');
const router              = express.Router();

router.get('/', (req,res)=>{
  Questions.find({}, (err,foundQuestions)=>{
    idArray = [];
    for (let i = 0; i < foundQuestions.length; i++){
      idArray.push(foundQuestions[i]._id);
    }
    console.log(idArray);
    res.json(idArray);
    // res.json(foundQuestions);
  })
})

router.post('/', (req,res)=>{
  Questions.create(req.body, (err, createdQuestion)=>{
    res.json(createdQuestion);
  })
});

module.exports = router;
