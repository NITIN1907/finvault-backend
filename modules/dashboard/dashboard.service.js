const db = require('../../config/db');

// TOTAL INCOME & EXPENSE
exports.getSummary = (callback) => {
  const query = `
    SELECT 
      SUM(CASE WHEN type='income' THEN amount ELSE 0 END) AS total_income,
      SUM(CASE WHEN type='expense' THEN amount ELSE 0 END) AS total_expense
    FROM financial_records
  `;

  db.query(query, callback);
};

// CATEGORY-WISE TOTAL
exports.getCategoryTotals = (callback) => {
  const query = `
    SELECT category, SUM(amount) as total
    FROM financial_records
    GROUP BY category
  `;

  db.query(query, callback);
};

// MONTHLY TREND
exports.getMonthlyTrends = (callback) => {
  const query = `
    SELECT 
      DATE_FORMAT(record_date, '%Y-%m') as month,
      SUM(amount) as total
    FROM financial_records
    GROUP BY month
    ORDER BY month
  `;

  db.query(query, callback);
};

// RECENT TRANSACTIONS
exports.getRecent = (callback) => {
  const query = `
    SELECT * FROM financial_records
    ORDER BY created_at DESC
    LIMIT 5
  `;

  db.query(query, callback);
};