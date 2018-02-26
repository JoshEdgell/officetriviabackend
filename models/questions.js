const mongoose          = require('mongoose');

const questionSchema = mongoose.Schema({
  question: String,
  answers: Array,
  correct: Number
});

const Questions = mongoose.model('Question', questionSchema);

module.exports = Questions;
