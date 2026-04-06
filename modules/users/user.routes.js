const express = require('express');
const router = express.Router();

const userController = require('./user.controller');
const { attachUser, authorizeRoles } = require('../../middleware/auth.middleware');

// ✅ Apply globally
router.use(attachUser);

// Only admin can create users
router.post('/', authorizeRoles('admin'), userController.createUser);

// Only admin can view users
router.get('/', authorizeRoles('admin'), userController.getUsers);

module.exports = router;