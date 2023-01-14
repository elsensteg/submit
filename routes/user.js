const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.get('/:id', userController.getUserById);
router.get('/', userController.getUser);
router.post('/', userController.saveUser);
router.post('/update', userController.updateUser);
router.get('/delete/:id', userController.deleteUser);

module.exports = router;