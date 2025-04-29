import express from 'express';

const app = express();

app.get('/', (req, res) => {
    res.send('Hola');

});

app.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
});