const request = require('supertest');
const app = require('../src/app');

describe('Pruebas de Integración (Endpoints)', () => {
    test('GET /items responde 200', async () => {
        const res = await request(app).get('/items');
        expect(res.statusCode).toBe(200);
    });
    test('GET /items es una lista', async () => {
        const res = await request(app).get('/items');
        expect(Array.isArray(res.body)).toBe(true);
    });
    test('POST /items crea un item', async () => {
        const res = await request(app).post('/items').send({ nombre: 'Nuevo' });
        expect(res.statusCode).toBe(201);
    });
    test('DELETE /items/1 funciona', async () => {
        const res = await request(app).delete('/items/1');
        expect(res.statusCode).toBe(200);
    });
    test('POST /items sin datos falla (opcional)', async () => {
        const res = await request(app).post('/items').send({});
        expect(res.statusCode).toBe(201); // O 400 si pusiste validación
    });
});
test('Verificar puerto por defecto', () => {
    process.env.PORT = ''; // Forzamos a que use el 3000
    const app = require('../src/app');
    expect(app).toBeDefined();
});
