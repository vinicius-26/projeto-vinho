import express from 'express';

const app = express ();

app.get('/users', (req, res) => {
  return res.json([])
})

const port = process.env.PORT || 3333

app.listen(port, () => {
    console.log('Servidor Rodando na porta '+port+'...')
})