import { model, Schema } from "mongoose";

const leitoresSchema = new Schema({
    nome: {type: String, required: true},
    email: {type: String, required: true},
    telefone: {type: Number, required: true},
    endereco: {type: String, required: true},
    cidade: {type: String, required: true},
    uf: {type: String, required: true},
    dataNascimento: {type: Date, required: true}
})

const Leitores = model('Leitores', leitoresSchema)

export {Leitores}