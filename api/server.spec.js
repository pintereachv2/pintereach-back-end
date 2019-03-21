const request = require('supertest');

const server = require('./server.js');

describe('server.js', () => {
    it('return JSON', () => {
      return request(server).get('/')
      .then(res => {
        expect(res.type).toBe('application/json');
      })
      
    });

})

describe('routes', () => {
    it('return JSON', () => {
      return request(server).get('/api/articles')
      .then(res => {
        expect(res.type).toBe('application/json');
      })
      
    })
})
