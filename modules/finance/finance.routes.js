const express = require('express');
const router = express.Router();

const controller = require('./finance.controller');
const { attachUser, authorizeRoles } = require('../../middleware/auth.middleware');

// ✅ Apply attachUser to ALL routes
router.use(attachUser);

// CREATE → admin only
router.post('/', authorizeRoles('admin'), controller.createRecord);

// GET → all roles
router.get('/', authorizeRoles('viewer', 'analyst', 'admin'), controller.getRecords);

// UPDATE → admin only
router.put('/:id', authorizeRoles('admin'), controller.updateRecord);

// DELETE → admin only
router.delete('/:id', authorizeRoles('admin'), controller.deleteRecord);

module.exports = router;