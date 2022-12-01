const express = require('express');
const app = express();
const port = 8000;
var cors = require('cors');

app.use(cors());

app.get('/users', (req, res) => {
  res.send({
    users: [
      {
        name: 'John',
        age: 20,
      },
      {
        name: 'tamer',
        age: 21,
      },
    ],
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
