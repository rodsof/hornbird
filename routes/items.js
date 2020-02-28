  
const express = require('express');
const router = express.Router();
const itemController = require('../controllers/itemController');
const auth = require('../middleware/auth');

// get all the items
router.get('/', 
    auth,
    itemController.getItems
)
module.exports = router;
