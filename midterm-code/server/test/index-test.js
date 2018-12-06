const request = require('supertest');

const app = require('../app'); //reference to you app.js file

describe('Test index.js', function() {

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
            .expect({ file: 'api.js', result: 'success', 'status': 'bar' })
            .expect(200, done);
    });

});

