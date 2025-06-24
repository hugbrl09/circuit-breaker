const express = require('express');
const app = express();
app.use(express.json());

app.get('/auth', (req, res) => {
//   res.json({ message: 'Login autorizado!' });
  res.json({
    // method: req.method,
    // url: `http://localhost:4001${req.originalUrl}`,
    // // headers: req.headers,
    // data: req.body
    message: 'Login autorizado!'
  });
});

app.listen(4001, () => {
  console.log('Auth Service rodando na porta 4001 🔐');
});
