const db = require('../../config/db');

exports.createUser = (data, callback) => {
  const { name, email, role_id } = data;

  const query = `
    INSERT INTO users (name, email, role_id)
    VALUES (?, ?, ?)
  `;

  db.query(query, [name, email, role_id], callback);
};

exports.getUsers = (callback) => {
  const query = `
    SELECT u.id, u.name, u.email, u.status, r.name AS role
    FROM users u
    JOIN roles r ON u.role_id = r.id
  `;

  db.query(query, callback);
};