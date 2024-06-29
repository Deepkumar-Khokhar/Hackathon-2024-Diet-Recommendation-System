const express = require('express');
const { getProfile, updateProfile } = require('../controllers/profileController');
const protect = require('../utils/authMiddleware');
const router = express.Router();

router.route('/').get(protect, getProfile).put(protect, updateProfile);

module.exports = router;
