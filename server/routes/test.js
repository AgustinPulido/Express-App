var express = require('express');
var router = express.Router();

const testController = require('../controllers/test');

/* GET users listing. */
router.get('/', testController.test);
router.get('/users', testController.getUsers);

module.exports = router;