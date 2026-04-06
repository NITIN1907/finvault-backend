const express = require('express');
const router = express.Router();

const controller = require('./dashboard.controller');
const { attachUser, authorizeRoles } = require('../../middleware/auth.middleware');

// ✅ FIXED ROUTES
router.get(
  '/summary',
  attachUser,
  authorizeRoles('analyst', 'admin'),
  controller.getSummary
);

router.get(
  '/categories',
  attachUser,
  authorizeRoles('analyst', 'admin'),
  controller.getCategoryTotals
);

router.get(
  '/monthly',
  attachUser,
  authorizeRoles('analyst', 'admin'),
  controller.getMonthlyTrends
);

router.get(
  '/recent',
  attachUser,
  authorizeRoles('analyst', 'admin'),
  controller.getRecent
);

module.exports = router;