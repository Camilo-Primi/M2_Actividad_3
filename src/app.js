const express = require('express');
const app = express();

// Esto permite que tu servidor entienda el formato JSON que le envíes
app.use(express.json());

// "Base de datos" temporal en memoria
let items = [
    { id: 1, nombre: 'Primer Item' },
    { id: 2, nombre: 'Segundo Item' }
];

// 1. Endpoint GET: Leer todos los items
app.get('/items', (req, res) => {
    res.status(200).json(items);
});

// 2. Endpoint POST: Crear un nuevo item
app.post('/items', (req, res) => {
    const nuevoItem = {
        id: items.length + 1,
        nombre: req.body.nombre
    };
    items.push(nuevoItem);
    res.status(201).json(nuevoItem);
});

// 3. Endpoint DELETE: Borrar un item por ID
app.delete('/items/:id', (req, res) => {
    const id = parseInt(req.params.id);
    items = items.filter(item => item.id !== id);
    res.status(200).json({ mensaje: `Item ${id} eliminado` });
});

// Configuración del puerto
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

// Exportamos para las pruebas unitarias que te pide la tarea
module.exports = app;
