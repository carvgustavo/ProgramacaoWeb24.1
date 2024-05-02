const express = require('express');
const path = require('path');
const app = express();
const port = 8080;

// Configuração para servir arquivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// Configuração para analisar o corpo das solicitações POST
app.use(express.urlencoded({ extended: true }));

// Rota para renderizar o formulário
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/views/index.html'));
});

// Rota para lidar com os dados enviados pelo formulário
app.post('/dados', (req, res) => {
  const { nome, endereco, telefone, dataAgendamento } = req.body;
  res.render(path.join(__dirname, '/views/dados.html'), {
    nome,
    endereco,
    telefone,
    dataAgendamento
  });
});

app.listen(port, () => {
  console.log(`Aplicação rodando em http://localhost:${port}`);
});
