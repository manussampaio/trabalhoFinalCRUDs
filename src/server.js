import express from 'express';
import mongoose from 'mongoose';

const app = express();
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/trabalhoCRUD')
    .then(() => console.log('Conectado ao MongoDB'))
    .catch((error) => ('Erro ao conectar no MongoDB'))


app.listen(3333, () => console.log('O servidor está rodando na porta http://localhost:3333'));