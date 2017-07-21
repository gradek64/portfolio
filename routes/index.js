var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

  var msg = process.env.MESSAGE || 'Default message!';
  res.render('index', { title: msg });
});

module.exports = router;
