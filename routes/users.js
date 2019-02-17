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
  const log = require('simple-node-logger').createRollingFileLogger( opts );
  

  apiData.lastName = req.body.lastName;
  log.info('subscription to ',apiData, ' accepted at ', new Date().toJSON());
  console.log(apiData)
  res.json(req.body);
  // fs.writeFile("/logFiles/request.txt", apiData, function(err) {
  //     if(err) {
  //         return console.log(err);
  //     }

  //     console.log("The file was saved!");
  //     res.json(req.body);
  // });

});
module.exports = router;
