var AWS = require('aws-sdk');

AWS.config.credentials.get(function () {
    var accessKeyId = AWS.config.credentials.accessKeyId;
    var secretAccessKey = AWS.config.credentials.secretAccessKey;
    console.log("Access Key:", AWS.config.credentials.accessKeyId);
    console.log("Secret Access Key:", AWS.config.credentials.secretAccessKey);
});

//AWS.config.loadFromPath(process.env.HOME + '/.aws/config-aws.json');
AWS.config.update({region:'us-east-1'});

console.log(AWS.config);

// Create EC2 service object
var ec2 = new AWS.EC2({apiVersion: '2016-11-15'});

// AMI is amzn-ami-2011.09.1.x86_64-ebs
var instanceParams = {
    BlockDeviceMappings: [
        {
            DeviceName: "/dev/sda1",
            Ebs: {
                VolumeSize: 16,
                VolumeType: 'gp2'
            }
        }
    ],
    ImageId: 'ami-0ac019f4fcb7cb7e6',
    InstanceType: 't2.micro',
    KeyName: 'isit320-ec2-rackley',
    SecurityGroupIds: ['sg-0ed718e4db3160105'],
    MinCount: 1,
    MaxCount: 1
};

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