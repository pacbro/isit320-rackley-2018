var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    'use strict';
    res.render('index', { title: 'server' });
});

/* Set up a route called foo. */
router.get('/foo', function(request, response) {
    var message = { result: 'success', status: 'bar', file: 'api.js' };
    console.log('Foo called:\n' + JSON.stringify(message, null, 4));
    response.send(message);
});

//createEducate
router.get('/create-educate', function(request, response) {
    response.send({ result: 'success' });
});

//createAwsStandardAccount
router.get('/create-standard', function(request, response) {
    response.send({ result: 'success' });
});

//associateElasticIP
router.get('/create-standard', function(request, response) {
    response.send({ result: 'success' });
});

module.exports = router;
