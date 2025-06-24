const express = require('express');
const router = express.Router();

const authService = require('../services/authService');
const userService = require('../services/userService');
const productService = require('../services/productService');

router.all('/auth', async (req, res) => {
  try {
    const result = await authService.fire(req);
    res.status(result.status || 200).json(result.data || result);
  } catch (err) {
    res.status(503).json({ message: 'Serviço de autenticação indisponível' });
  }
});

router.all('/users', async (req, res) => {
  try {
    const result = await userService.fire(req);
    res.status(result.status || 200).json(result.data || result);
  } catch (err) {
    res.status(503).json({ message: 'Serviço de usuários indisponível' });
  }
});

router.all('/products', async (req, res) => {
  try {
    const result = await productService.fire(req);
    res.status(result.status || 200).json(result.data || result);
  } catch (err) {
    res.status(503).json({ message: 'Serviço de produtos indisponível' });
  }
});

module.exports = router;
