const financeService = require('./finance.service');
const { validateFinance } = require('../../utils/validator');

// CREATE
exports.createRecord = (req, res) => {
  const error = validateFinance(req.body); // ✅ correct place
  if (error) {
    return res.status(400).json({ message: error });
  }

  const { user_id, amount, type, category, record_date } = req.body;

  if (!user_id || !amount || !type || !category || !record_date) {
    return res.status(400).json({ message: 'Required fields missing' });
  }

  financeService.createRecord(req.body, (err, result) => {
    if (err) return res.status(500).json({ error: err.message });

    res.status(201).json({
      message: 'Record created',
      id: result.insertId
    });
  });
};

// GET
exports.getRecords = (req, res) => {
  financeService.getRecords(req.query, (err, results) => {
    if (err) return res.status(500).json({ error: err.message });

    res.json(results);
  });
};

// UPDATE
exports.updateRecord = (req, res) => {
  financeService.updateRecord(req.params.id, req.body, (err) => {
    if (err) return res.status(500).json({ error: err.message });

    res.json({ message: 'Record updated' });
  });
};

// DELETE
exports.deleteRecord = (req, res) => {
  financeService.deleteRecord(req.params.id, (err) => {
    if (err) return res.status(500).json({ error: err.message });

    res.json({ message: 'Record deleted' });
  });
};