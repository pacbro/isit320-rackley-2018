var AWS = require('aws-sdk');

const createInstance = (instanceParams) => {

    // Create a promise on an EC2 service object
    var instancePromise = new AWS.EC2({apiVersion: '2016-11-15'}).runInstances(instanceParams).promise();

    // Handle promise's fulfilled/rejected states
    instancePromise.then(
        function (data) {
            console.log(data);
            var instanceId = data.Instances[0].InstanceId;
            console.log("Created instance", instanceId);
            // Add tags to the instance
            var date = new Date().toISOString();
            tagParams = {
                Resources: [instanceId], Tags: [
                    {
                        Key: 'Name',
                        Value: 'isit320-' + date
                    }
                ]
            };
            // Create a promise on an EC2 service object
            var tagPromise = new AWS.EC2({apiVersion: '2016-11-15'}).createTags(tagParams).promise();
            // Handle promise's fulfilled/rejected states
            tagPromise.then(
                function (data) {
                    console.log("Instance tagged");
                }).catch(
                function (err) {
                    console.error(err, err.stack);
                });
        }).catch(
        function (err) {
            console.error(err, err.stack);
        });
};

module.exports = createInstance;