import { model, Schema } from "mongoose";

const livrosSchema = new Schema({
    titulo: {type: String, required: true},
    anoPublicacao: {type: Date, required: true},
    genero: {type: String, required: true},
    autor: {type: Schema.Types.ObjectId, ref: 'Autores'}
})

const Livros = model('Livros', livrosSchema)

export {Livros}