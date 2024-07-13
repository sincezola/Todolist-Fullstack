import express from 'express';

const app = express();
const port = 3333;

app.get('/', (req, res) => {
  res.send('Tudo funcionando no get!');
});

app.post('/', (req, res) => {
  res.send('Tudo funcionando no post!');
});

app.listen(port, () => console.log(`Server up in port ${port}`));
