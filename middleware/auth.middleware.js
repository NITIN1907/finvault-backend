const db = require('../config/db');

// Attach user from DB
exports.attachUser = (req, res, next) => {
  const userId = req.headers['user-id'];

  if (!userId) {
    return res.status(401).json({ message: 'User ID required in headers' });
  }

  const query = `
    SELECT u.*, r.name as role
    FROM users u
    JOIN roles r ON u.role_id = r.id
    WHERE u.id = ?
  `;

  db.query(query, [userId], (err, results) => {
    if (err) return res.status(500).json({ error: err.message });

    if (results.length === 0) {
      return res.status(404).json({ message: 'User not found' });
    }

    req.user = results[0];
    next();
  });
};

exports.authorizeRoles = (...allowedRoles) => {
  return (req, res, next) => {
    if (!allowedRoles.includes(req.user.role)) {
      return res.status(403).json({ message: 'Access denied' });
    }
    next();
  };
};