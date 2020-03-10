const express = require('express');
const router = express.Router();
const alarmController = require('../controllers/alarmController');
const auth = require('../middleware/auth');
router.post('/',
    auth,
    alarmController.sendEmail
);
module.exports = router;
