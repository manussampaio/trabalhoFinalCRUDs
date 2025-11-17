import express from 'express';
import mongoose from 'mongoose';
import {livrosRouter} from "./routes/livros_router.js";
import {autoresRouter} from "./routes/autores_router.js";
import {leitoresRouter} from "./routes/leitores_router.js";
import {emprestimosRouter} from "./routes/emprestimo_router.js";


const app = express();

app.use(express.json());
app.use("/", livrosRouter)
app.use("/", autoresRouter)
app.use("/", leitoresRouter)
app.use("/", emprestimosRouter)


mongoose.connect('mongodb://localhost:27017/trabalhoCRUD')
    .then(() => console.log('Conectado ao MongoDB'))
    .catch((error) => ('Erro ao conectar no MongoDB'))


app.listen(3333, () => console.log('O servidor está rodando na porta http://localhost:3333'));