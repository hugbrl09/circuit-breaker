const express = require('express');
const app = express();
app.use(express.json());

app.get('/users', (req, res) => {
  //   res.json([{ id: 1, name: 'João' }, { id: 2, name: 'Maria' }]);
  res.json({
    // method: req.method,
    // url: `http://localhost:4002${req.originalUrl}`,
    // // headers: req.headers,
    // // data: req.body

      users: [
        { id: 1, name: 'João' },
        { id: 2, name: 'Maria' }
      ]

  });
});

app.listen(4002, () => {
  console.log('User Service rodando na porta 4002 👤');
});
