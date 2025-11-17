import { model, Schema } from "mongoose";

const autoresSchema = new Schema({
    nome: {type: String, required: true},
    nacionalidade: {type: String, required: true},
    dataNascimento: {type: Date, required: true}
})

const Autores = model('Autores', autoresSchema)

export {Autores}