var express = require('express');
var router = express.Router();
const opts = {
  errorEventName:'error',
      logDirectory:'', // NOTE: folder must exist and be writable...
      fileNamePattern:'',
      dateFormat:'YYYY.MM.DD'
};

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});


router.post('/clientcrm', function(req, res, next) {
  let apiData = {}
  console.log('in client crm')
  opts.logDirectory = './public/logFiles/';
  opts.fileNamePattern = 'request.txt';
  // const log = require('simple-node-logger').createRollingFileLogger( opts );

  console.log(req.params);
  apiData.lastName = req.body.lastName;
  apiData.firstName = req.body.firstName;
  apiData.email = req.body.email;
  apiData.phone = req.body.phone;
  apiData.affiliateInfo = {affiliateId:'24066'};
  apiData.countryCode = req.param('country');
  // log.info('subscription to ',apiData, ' accepted at ', new Date().toJSON());
  console.log(apiData)
  res.json(apiData);

});
module.exports = router;
