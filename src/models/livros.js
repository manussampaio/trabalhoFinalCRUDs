import { model, Schema } from "mongoose";

const livrosSchema = new Schema({
    titulo: {type: String, required: true},
    anoPublicacao: {type: Number, required: true},
    genero: {type: String, required: true},
    autor: {type: Schema.Types.ObjectId, ref: "Autores", required: true}
})

const Livros = model('Livros', livrosSchema)

export {Livros}