const request = require('supertest');

const app = require('../app'); //reference to you app.js file

describe('Test index.js', function() {
    //foo route tests
    it('should call foo route', function(done) {
        request(app)
            .get('/foo')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, done);
    });

    it('should check foo route and check JSON', function(done) {
        request(app)
            .get('/foo')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect({ file: 'api.js', result: 'success', status: 'bar' })
            .expect(200, done);
    });

    //createEducate route tests
    it('should call create-educate route', function(done) {
        request(app)
            .get('/create-educate')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, done);
    });

    it('should check foo route and check JSON', function(done) {
        request(app)
            .get('/create-standard')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect({ result: 'success', route: '/create-educate' })
            .expect(200, done);
    });

    //createStandard route tests
    it('should call create-standard route', function(done) {
        request(app)
            .get('/create-standard')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, done);
    });

    it('should check foo route and check JSON', function(done) {
        request(app)
            .get('/create-standard')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect({ result: 'success', route: '/create-standard' })
            .expect(200, done);
    });
});
