const express = require('express');
const router = express.Router();
const chartController = require('../controllers/chartController');
const auth = require('../middleware/auth');

// api/charts
router.get('/',
    auth,
    chartController.getCharts // hay que verificar que el usuario este autenticado para asociarlo al proyecto
);


module.exports = router;