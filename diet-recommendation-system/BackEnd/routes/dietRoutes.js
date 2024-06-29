const express = require('express');
const { getDietPlan, updateDietPlan } = require('../controllers/dietController');
const protect = require('../utils/authMiddleware');
const router = express.Router();

router.route('/').get(protect, getDietPlan).put(protect, updateDietPlan);

module.exports = router;
