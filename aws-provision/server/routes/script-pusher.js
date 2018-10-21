var express = require('express');
var router = express.Router();

//copyGetStarted
router.get('/copy-get-started', function(request, response) {
  response.send({result: 'success'});
});

//runGetStarted 
router.get('/run-get-started', function(request, response) {
  response.send({result: 'success'});
});

//removeKnownHost 
router.get('/remove-known-host', function(request, response) {
  response.send({result: 'success'});
});

module.exports = router;
