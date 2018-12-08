var express = require('express');
var router = express.Router();
const qs = require('query-string');

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
    response.send({
        result: 'success',
        route: '/create-educate',
        instanceData: {
            InstanceId,
            KeyName,
            Architecture
        },
        allocationIds: {
            educate: 'educate'
        },
        regions: {
            region
        }
    });
});

//createAwsStandardAccount
router.get('/create-standard', function(request, response) {
    response.send({
        result: 'success',
        route: '/create-standard',
        instanceData: {
            InstanceId,
            KeyName,
            Architecture
        },
        allocationIds: {
            standard: 'standard'
        },
        regions: {
            region
        }
    });
});

//associateElasticIP
router.get(
    '/associate-elastic-ip?instanceId=xxx&allocationId=yyy&region=zzz',
    function(request, response) {
        response.send({ result: 'success' });
        const values = qs.parse(this.props.location.search);
        response.send({
            result: 'success',
            route: '/associate-elastic-ip' + values,
            InstanceId: values.instanceId,
            allocationId: values.allocationId,
            regions: values.region
        });
    }
);

router.get('/get-instance-status?instanceId=xxx', function(request, response) {
    const values = qs.parse(this.props.location.search);
    response.send({
        result: 'success',
        route: '/get-instance-status' + values,
        InstanceId: values.InstanceId
    });
});

router.get('/reboot-instance', function(request, response) {
    response.send({ result: 'success' });
});

module.exports = router;
