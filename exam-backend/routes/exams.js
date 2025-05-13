const express = require('express');
const router = express.Router();
const Exam = require('../models/Exam');

// Créer un examen
router.post('/', async (req, res) => {
  try {
    const exam = new Exam(req.body);
    await exam.save();
    res.status(201).json(exam);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Ajouter question à un examen
router.post('/:id/questions', async (req, res) => {
  try {
    const exam = await Exam.findById(req.params.id);
    exam.questions.push(req.body);
    await exam.save();
    res.status(200).json(exam);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
