const { validarEmail, calcularIVA, esNombreValido, formatearPrecio, calcularDescuento, generarSaludo } = require('../src/logic');

describe('Pruebas Unitarias (Mínimo 10)', () => {
    test('Email con @ es válido', () => expect(validarEmail('a@b.com')).toBe(true));
    test('Email sin @ es inválido', () => expect(validarEmail('ab.com')).toBe(false));
    test('IVA de 100 es 19', () => expect(calcularIVA(100)).toBe(19));
    test('IVA de 200 es 38', () => expect(calcularIVA(200)).toBe(38));
    test('Nombre "Ana" es inválido (corto)', () => expect(esNombreValido('Ana')).toBe(false));
    test('Nombre "Juan" es válido', () => expect(esNombreValido('Juan')).toBe(true));
    test('Precio 10 es $10.00', () => expect(formatearPrecio(10)).toBe('$10.00'));
    test('Precio 5.5 es $5.50', () => expect(formatearPrecio(5.5)).toBe('$5.50'));
    
    // TDD: Funcionalidades nuevas
    test('Descuento del 10% a 100 es 90', () => expect(calcularDescuento(100, 10)).toBe(90));
    test('Saludo debe incluir el nombre', () => expect(generarSaludo('Camilo')).toBe('Hola, Camilo'));
});
