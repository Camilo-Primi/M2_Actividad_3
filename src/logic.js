// Funciones existentes
const validarEmail = (email) => email.includes('@');
const calcularIVA = (precio) => precio * 0.19;
const esNombreValido = (nombre) => nombre.length > 3;
const formatearPrecio = (valor) => `$${valor.toFixed(2)}`;

// TDD: Estas funciones las definimos después de escribir los tests
const calcularDescuento = (precio, desc) => precio - (precio * (desc / 100));
const generarSaludo = (nombre) => `Hola, ${nombre}`;

module.exports = { validarEmail, calcularIVA, esNombreValido, formatearPrecio, calcularDescuento, generarSaludo };
