const userService = require('./user.service');
const { validateUser } = require('../../utils/validator');

// CREATE USER
exports.createUser = (req, res) => {
  const error = validateUser(req.body);
  if (error) {
    return res.status(400).json({ message: error });
  }

  const { name, email, role_id } = req.body;

  if (!name || !email || !role_id) {
    return res.status(400).json({ message: 'All fields required' });
  }

  userService.createUser(req.body, (err, result) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }

    res.status(201).json({
      message: 'User created successfully',
      userId: result.insertId
    });
  });
};

// GET USERS
exports.getUsers = (req, res) => {
  userService.getUsers((err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }

    res.json(results);
  });
};