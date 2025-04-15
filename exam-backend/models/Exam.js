const mongoose = require('mongoose');

const QuestionSchema = new mongoose.Schema({
  type: String,
  enonce: String,
  media: String,
  reponse: String,
  tolerance: Number,
  options: [String],
  bonnes_reponses: [Number],
  note: Number,
  duree: Number
});

const ExamSchema = new mongoose.Schema({
  titre: String,
  description: String,
  public: String,
  questions: [QuestionSchema]
}, { timestamps: true });

module.exports = mongoose.model('Exam', ExamSchema);
