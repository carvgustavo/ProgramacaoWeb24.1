const express = require('express');
const router = express.Router();
const calculadoraController = require('../controller/calculadoraController');

router.post('/calcular', calculadoraController.calcularOperacao);

module.exports = router;
