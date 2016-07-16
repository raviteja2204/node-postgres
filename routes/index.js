var express = require('express');
var router = express.Router();
var conditions = require('./conditions');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/getConditions', conditions.getConditions, conditions.queryDB);
router.get('/getDoctors', conditions.getDoctors, conditions.queryDB);

module.exports = router;
