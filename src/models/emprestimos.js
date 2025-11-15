import { model, Schema } from "mongoose";

const empretimosSchema = new Schema({
    dataEmprestimo: {type: Date, required: true},
    dataDevolucao: {type: Date, required: true},
    livro: {type: Schema.Types.ObjectId, ref: 'Livros'},
    leitor:  {type: Schema.Types.ObjectId, ref: 'Leitores'}
})

const Emprestimos = model('Emprestimos', empretimosSchema)

export {Emprestimos}