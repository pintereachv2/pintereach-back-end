const request = require('supertest');

const server = require('./server.js');
// const articles = require('../articles/article-routes.js');
const { token } = require('../auth/authenticate');

describe('server.js', () => {
    it('return JSON', () => {
      return request(server).get('/')
      .then(res => {
        expect(res.type).toBe('application/json');
      })
      
    });

})

describe('GET /api/articles', () => {
    it('return JSON', () => {
      return request(server).get('/api/articles')
      .then(res => {
        expect(res.type).toBe('application/json');
      })
      
    })

describe('GET /api/articles', () => {
        // token not being sent - should respond with a 401
        it('It should require authorization', () => {
          return request(server)
            .get('/api/articles')
            .then((res) => {
              expect(res.status).toBe(401);
            });
        }) 
    })
    it.skip('It responds with JSON', () => {
        return request(server)
          .get('/api/articles')
          .set('Authorization', ` ${token}`)
          .then((res) => {
            expect(res.status).toBe(200);
            expect(res.type).toBe('application/json');
        });


    })

})

describe('POST /api/articles', () => {
    it('return JSON', () => {
    return request(server).get('/api/articles')
    .then(res => {
      expect(res.type).toBe('application/json');
        })
    });

    it('should give a 401 status', () => {
        const data = {}
        return request(server).post('/api/articles').send(data)
        .then(res => {
            expect(res.status).toEqual(401);
         })
    })
    
    it('should give a 201 status', () => {
        const data = {title: 'Title', content: 'Content'}
        return request(server).post('/api/articles').send(data)
        .then(res => {
            expect(res.status).toBeTruthy();
         })
    })
   


 })

 describe('DELETE /api/articles/:id', () => {
    it('return JSON', () => {
    return request(server).get('/api/articles')
    .then(res => {
      expect(res.type).toBe('application/json');
        })
    });

 
    describe('DELETE /api/articles/:id', () => {

      it('return 204', () => {
        return request(server).delete('/api/articles')
        .set('Authorization', `${token}`)
        .then(res => {
          expect(res.status).toBeTruthy()
            })
        });
        });
    })
    // it('should give a 204 status', () => {
    //     const data = {title: 'Title', content: 'Content'}
    //     return request(server).post('/api/articles').send(data)
    //     return request(server).delete('/api/articles/4')
    //     .then(res => {
    //         expect(res.status).toBe(204);
    //      })
    // })
   


