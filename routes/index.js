var express = require('express');
var router = express.Router();

let landing = require('../controller/home')
/* GET home page. */
router.get('/', landing.home);   

module.exports = router;
