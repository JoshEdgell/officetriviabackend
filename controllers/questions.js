const express             = require('express');
const Questions           = require('../models/questions.js');
const router              = express.Router();

router.post('/', (req,res)=>{
  Questions.create(req.body, (err, createdQuestion)=>{
    res.json(createdQuestion);
  })
});

module.exports = router;
