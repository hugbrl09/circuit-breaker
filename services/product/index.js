const express = require('express');
const app = express();
app.use(express.json());

app.get('/products/all', (req, res) => {
  //   res.json([{ id: 1, name: 'Teclado' }, { id: 2, name: 'Mouse' }]);
  res.json({
    method: req.method,
    url: `http://localhost:4003${req.originalUrl}`,
    // headers: req.headers,
    // data: req.body
    data: {
      products: [
        { id: 1, name: 'Teclado' },
        { id: 2, name: 'Mouse' }
      ]
    }
  });
});

app.listen(4003, () => {
  console.log('Product Service rodando na porta 4003 📦');
});
