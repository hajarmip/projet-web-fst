const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

exports.inscription = async (req, res) => {
  const { nom, email, motDePasse } = req.body;
  const hashedPwd = await bcrypt.hash(motDePasse, 10);
  try {
    const user = await User.create({ nom, email, motDePasse: hashedPwd });
    res.status(201).json({ message: 'Utilisateur créé', user });
  } catch (err) {
    res.status(400).json({ erreur: 'Email déjà utilisé' });
  }
};

exports.connexion = async (req, res) => {
  const { email, motDePasse } = req.body;
  const user = await User.findOne({ email });
  if (!user) return res.status(401).json({ erreur: 'Email invalide' });

  const isMatch = await bcrypt.compare(motDePasse, user.motDePasse);
  if (!isMatch) return res.status(401).json({ erreur: 'Mot de passe incorrect' });

  const token = jwt.sign({ userId: user._id }, 'SECRET123', { expiresIn: '1h' });
  res.json({ token, message: 'Connexion réussie' });
};
