const Client = require('ssh2').Client;
const qs = require('query-string');
const elfUtils = require('elven-code').elfUtils;
const hostAddress = '35.175.4.96';

let allData = '';

const runCpuInfo = (hostAddress, response) => {
    var conn = new Client();
    conn.on('ready', function() {
        console.log('Client :: ready');
        conn.exec('~/CpuInfo', function(err, stream) {
            if (err) throw err;
            stream
                .on('close', function(code, signal) {
                    console.log(
                        'Stream :: close :: code: ' +
                            code +
                            ', signal: ' +
                            signal
                    );
                    conn.end();
                    response.send({ result: 'success', allData: allData });
                })
                .on('data', function(data) {
                    console.log('STDOUT: ' + data);
                    allData += data;
                })
                .stderr.on('data', function(data) {
                    console.log('STDERR: ' + data);
                    allData += data;
                });
        });
    }).connect({
        host: hostAddress,
        port: 22,
        username: 'ubuntu',
        privateKey: require('fs').readFileSync(
            process.env.HOME + '/.ssh/isit320-rackley.pem'
        )
    });
};

router.get('/run-get-started', function(request, response) {
    console.log('run-get-started called in ssh-runner', hostAddress);
    getSshIp()
        .then(result => {
            runUptime(result.hostName, result.identityFile, response);
        })
        .catch(err => {
            response.send(err);
        });
});

router.get('/call-cpu-info', (request, response) => {
    response.send({
        result: 'success',
        route: '/call-cpu-info'
    });
});

router.get('/run-ubuntu-setup', (request, response) => {
    response.send({
        result: 'success',
        route: '/run-ubuntu-setup'
    });
});

runCpuInfo(hostAddress, response);

module.exports = router;
