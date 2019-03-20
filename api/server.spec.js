const request = require('supertest');

const server = require('./server.js');

describe('server.js', () => {
    it.skip('return JSON', () => {
      return request(server).get('/')
      .then(res => {
        expect(res.type).toBe('application/json');
      })
      
    });

})
