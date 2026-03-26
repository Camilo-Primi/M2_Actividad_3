const request = require('supertest');
const app = require('../src/app');

describe('Pruebas CRUD', () => {
    test('Debe listar los items', async () => {
        const res = await request(app).get('/items');
        expect(res.statusCode).toBe(200);
    });
});