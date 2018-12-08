const request = require('supertest');

const app = require('../app'); //reference to you app.js file

const assert = require('assert');

describe('Test script-pusher.js', function() {
    it('should call copy-get-started', function(done) {
        request(app)
            .get('/copy-get-started')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, done);
    });

    it('should check remove-known-host', function(done) {
        request(app)
            .get('/remove-known-host')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect({ result: 'success', route: '/remove-known-host' })
            .expect(200, done);
    });

    // At the bottom of our describe call:
    it('should check script-pusher/run-script Version Check', function(done) {
        this.timeout(5000);
        request(app)
            .get('/script-pusher/run-script?script=VersionCheck')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200)
            .then(result => {
                assert.deepStrictEqual(result.body.result, 'success');
                assert.deepStrictEqual(result.body.code, 1);
                const present = result.body.allData.includes('Ubuntu');
                assert.ok(present);
                done();
            });
    });
});
