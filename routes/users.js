var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});


router.post('/clientcrm', function(req, res, next) {
  let apiData = {}
  apiData.lastName = req.body.lastName;
  
  res.json(req.body)
});
module.exports = router;
