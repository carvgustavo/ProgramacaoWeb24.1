const express = require('express');
const app = express();
const calculadoraRoutes = require('./src/routes/calculadoraRoutes');

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));

app.use('/', express.static(__dirname + '/src/views'));
app.use('/', calculadoraRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor iniciado na porta ${PORT}`);
});
