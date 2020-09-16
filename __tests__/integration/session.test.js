const request = require('supertest');
const app = require('../../src/app');
const { User } = require('../../src/app/models');
const truncate = require('../utils/truncate');

//should receive JWT token when authenticated with valid credentials
describe('Authentication', () => {
    beforeEach(async () => {
        await truncate();
    });
    it('should authenticate with valid credentials', async () => {
       const user = await User.create({
            name: 'Kamila',
            email: 'vkamila54@outlook.com',
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
        const user = await User.create({
             name: 'Kamila',
             email: 'vkamila54@outlook.com',
             password: '1234646'
        });
        const response = await request(app)
            .post('/sessions')
            .send({
                email: user.email,
                password: '1234e66'
            });
        expect(response.status).toBe(401);
    });
});
