var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'NodeJS Shopping Mall' });
});

router.get('/users',function(req,res,next){});

module.exports = router;
