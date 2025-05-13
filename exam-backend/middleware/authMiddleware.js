const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  const token = req.headers['authorization'];
  if (!token) return res.status(403).json({ erreur: 'Token requis' });

  try {
    const decoded = jwt.verify(token, 'SECRET123');
    req.userId = decoded.userId;
    next();
  } catch (err) {
    res.status(401).json({ erreur: 'Token invalide' });
  }
};
