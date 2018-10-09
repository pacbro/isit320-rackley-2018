#!/usr/bin/env node

const program = require('commander');
const getAwsInstanceParams = require('./GetAwsInstanceParams');
const createInstance = require('./AwsPromise');
const associate = require('./AssociateElasticIp');

program
    .version('0.1.0')
    .option('-a, --associate', 'Associate Elastic IP')
    .option('-c, --create', 'Use your AWS account')
    .option('-e, --educate', 'Use AWS Educate account')
    .option('-p, --provision', 'Provision AWS instance pointed to by ec2-bc')
    .parse(process.argv);

const NO_COMMAND_SPECIFIED = process.argv.length < 3;
if (NO_COMMAND_SPECIFIED) {
    program.help();
    return;
}

if (program.create) {
    console.log('peppers');
    const awsInstanceParams = getAwsInstanceParams.awsCharlie();
    createInstance(awsInstanceParams);
}

if (program.associate) {
    associate();
}

if (program.provision) {
    console.log('To Provision your instance, just type the word Provision at the shell prompt.');
    console.log('Provision is part of JsObjects is linked from the ~/bin directory.');
}

if (program.educate) console.log('  - educate');


