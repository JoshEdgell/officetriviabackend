const mongoose          = require('mongoose');

const questionSchema = mongoose.Schema({
  question: String,
  answers: Array,
  correct: Number,
  flagNumber: Number,
  flags: Array
});

const Questions = mongoose.model('Question', questionSchema);

module.exports = Questions;
