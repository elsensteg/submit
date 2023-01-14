const express = require('express');
const router = express.Router();
const displayUserController = require('../controllers/displayUserController');


router.get('/', displayUserController.displayEntries);



module.exports = router;