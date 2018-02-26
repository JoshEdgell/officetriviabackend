const express             = require('express');
const router              = express.Router();

router.get('/', (req,res)=>{
  res.send('poop');
});

module.exports = router;
