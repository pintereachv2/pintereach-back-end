const request = require('supertest');

const server = require('./article-routes.js');

describe('GET', () => {
    it.skip('return JSON', () => {
      return request(server).get('/api/articles')
      .then(res => {
        expect(res.type).toBe('application/json');
      })
      
    });

    it.skip('should give a 422 status', () => {
        const data = {title: 'Something', content: 'url'}
        return request(server).post('/articles').send(data)
        .then(res => {
            expect(res.status).toEqual(200);
         })
    })


})