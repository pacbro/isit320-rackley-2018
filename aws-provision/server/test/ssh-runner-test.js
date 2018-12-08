const request = require('supertest');

const app = require('../app'); //reference to you app.js file

describe('Test ssh-runner', function() {
    it('should call run-get-started route', function(done) {
        request(app)
            .get('/run-get-started')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, done);
    });

    it('should check run-ubuntu-setup route and check JSON', function(done) {
        request(app)
            .get('/run-ubuntu-setup')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect({ result: 'success', route: 'run-ubuntu-setup' })
            .expect(200, done);
    });

    it('should check call-cpu-info route and check JSON', function(done) {
        request(app)
            .get('/call-cpu-info')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect({ result: 'success', route: 'call-cpu-info' })
            .expect(200, done);
    });
});
