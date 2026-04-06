const dashboardService = require('./dashboard.service');

// SUMMARY
exports.getSummary = (req, res) => {
  dashboardService.getSummary((err, results) => {
    if (err) return res.status(500).json({ error: err.message });

    const data = results[0] || {};
    const totalIncome = data.total_income || 0;
    const totalExpense = data.total_expense || 0;

    res.json({
      total_income: totalIncome,
      total_expense: totalExpense,
      net_balance: totalIncome - totalExpense
    });
  });
};

// CATEGORY
exports.getCategoryTotals = (req, res) => {
  dashboardService.getCategoryTotals((err, results) => {
    if (err) return res.status(500).json({ error: err.message });

    res.json(results);
  });
};

// MONTHLY
exports.getMonthlyTrends = (req, res) => {
  dashboardService.getMonthlyTrends((err, results) => {
    if (err) return res.status(500).json({ error: err.message });

    res.json(results);
  });
};

// RECENT
exports.getRecent = (req, res) => {
  dashboardService.getRecent((err, results) => {
    if (err) return res.status(500).json({ error: err.message });

    res.json(results);
  });
};