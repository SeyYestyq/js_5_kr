const express = require('express');
const app = express();
const  port = 3000;

app.use(express.json());
app.use(express.static('public_html'));
app.use((req, res, next) =>{
    console.log(`[log] Запрос получен: ${new Date().toLocaleTimeString()} - Метод: :${req.method} - url: ${req.url}`);
    next();
});

const notesRouter  =require('./routes/notesRoutes');
app.use('/api/notes', notesRouter);

// app.get('/', (req, res) => {
//     res.send('Сервер запущен и готов к работе ');
// });

app.listen(port, () =>{
    console.log(`Сервер запущен на порту ${port}`);
});