const db = require('../../config/db');

// CREATE
exports.createRecord = (data, callback) => {
  const { user_id, amount, type, category, note, record_date } = data;

  const query = `
    INSERT INTO financial_records 
    (user_id, amount, type, category, note, record_date)
    VALUES (?, ?, ?, ?, ?, ?)
  `;

  db.query(query, [user_id, amount, type, category, note, record_date], callback);
};

// GET (with filters)
exports.getRecords = (filters, callback) => {
  let query = `SELECT * FROM financial_records WHERE 1=1`;
  let values = [];

  if (filters.type) {
    query += ` AND type = ?`;
    values.push(filters.type);
  }

  if (filters.category) {
    query += ` AND category = ?`;
    values.push(filters.category);
  }

  if (filters.startDate && filters.endDate) {
    query += ` AND record_date BETWEEN ? AND ?`;
    values.push(filters.startDate, filters.endDate);
  }

  db.query(query, values, callback);
};

// UPDATE
exports.updateRecord = (id, data, callback) => {
  const { amount, type, category, note } = data;

  const query = `
    UPDATE financial_records
    SET amount=?, type=?, category=?, note=?
    WHERE id=?
  `;

  db.query(query, [amount, type, category, note, id], callback);
};

// DELETE
exports.deleteRecord = (id, callback) => {
  const query = `DELETE FROM financial_records WHERE id=?`;
  db.query(query, [id], callback);
};