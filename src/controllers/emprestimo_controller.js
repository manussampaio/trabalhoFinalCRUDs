import {Emprestimos} from "../models/emprestimos.js";

//get
const buscarEmprestimos = async (req, res) => {
    try{
        const response = await Emprestimos.find()
        console.log('Buscando Emprestimos')
        res.json(response)
    } catch {
        (err) => {
            res.send('Erro ao buscar emprestimo!')
        } 
    }
}

//get com id 
const buscarEmprestimosPorID = async (req, res) => {
    try{
    const {id} = req.params
    const response = await Emprestimos.findById(id)
    console.log('Buscando Emprestimos por ID')
    res.json(response)
    } catch {
        (err) => {
            res.send('Erro ao buscar emprestimo por ID!')
        } 
    }
}

//post
const adicionarEmprestimo = (req, res) => {
    const {dataEmprestimo, dataDevolucao, livro, leitor} = req.body
    console.log(req.body)

    if (!dataEmprestimo, !dataDevolucao, !livro, !leitor){
        res.status(422).json({
            error: true,
            message: "Dados Inválidos!"
        })
        return
    }

    const emprestimo = new Emprestimos({
        dataEmprestimo, dataDevolucao, livro, leitor
    })
    emprestimo.save().then(
        () => res.status(201).json({
            error: false,
            message: "Emprestimo Adicionado!",
            emprestimo: emprestimo
        })
    ).catch((err) => {
        res.status(422).json({
            error: true,
            message: "Dados Inválidos!"
        })
    })
}

//put
const atualizarEmprestimo = async (req, res) => {
    const {id} = req.params
    const {dataEmprestimo, dataDevolucao, livro, leitor} = req.body
    const response = await Emprestimos.findByIdAndUpdate(id, {dataEmprestimo, dataDevolucao, livro, leitor})
    if (response){
        res.json({
            error: false,
            message: "Alteração feita!"
        })
    } else{
        res.json({
            error: true,
            message: "Alteração NÃO realizada!"
        })
    }
    res.json(response)
}

//delete
const deletarEmprestimo = async (req, res) => {
    const {id} = req.params
    const response = await Emprestimos.findByIdAndDelete(id)
    if (response){
        res.json({
            error: false,
            message: "Emprestimo deletado!"
        })
    } else{
        res.json({
            error: true,
            message: "Emprestimo NÃO deletado!"
        })
    }
}

export {buscarEmprestimos, buscarEmprestimosPorID, adicionarEmprestimo, atualizarEmprestimo, deletarEmprestimo}