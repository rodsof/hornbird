const express = require("express");
const router = express.Router();
const datasetController = require("../controllers/datasetController");
const auth = require("../middleware/auth");

// api/dataset
router.get('/', 
auth,
datasetController.getDataset);

router.post('/',
datasetController.createDataset
);

module.exports = router;
