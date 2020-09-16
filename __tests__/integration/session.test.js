const request = require('supertest');
const app = require('../../src/app');
const truncate = require('../utils/truncate');
const factory = require('../factories')
//should receive JWT token when authenticated with valid credentials
describe('Authentication', () => {
    beforeEach(async () => {
        await truncate();
    });
    it('should authenticate with valid credentials', async () => {
       const user = await factory.create('User', {
            password: '123456'
        });
        const response = await request(app)
            .post('/sessions')
            .send({
                email: user.email,
                password: '123456'
            });

        expect(response.status).toBe(200);
    });
    it('should not authenticate with invalid credentials', async () => {
        const user = await factory.create('User', {
            password: '123456'
        });
        const response = await request(app)
            .post('/sessions')
            .send({
                email: user.email,
                password: '1234e66'
            });
        expect(response.status).toBe(401);
    });

    it('should return jwt token when authenticated', async () => {
        const user = await factory.create('User', {
            password: '123456'
        });
        const response = await request(app)
            .post('/sessions')
            .send({
                email: user.email,
                password: '123456'
            });
        expect(response.body).toHaveProperty('token');
    });

    it('should be able to acess private routes when authenticated', async () => {
        const user = await factory.create('User', {
            password: '123456'
        });
        const response = await request(app)
            .get('/dashboard')
            .set('Authorization', `Bearer ${user.generateToken()}`)
            
        expect(response.status).toBe(200);
    });

    it('should not be able to acess private routes when not authenticated (without jwt token)', async () => {
        const response = await request(app)
            .get('/dashboard')
            
        expect(response.status).toBe(401);
    });

    it('should not be able to acess private routes with invalid jwt token', async () => {
        const response = await request(app)
            .get('/dashboard')
            .set('Authorization', `Bearer 123456`)
            
        expect(response.status).toBe(401);
    });
});
