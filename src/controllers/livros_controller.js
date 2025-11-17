import {Livros} from "../models/livros.js";

//get
const buscarLivro = async (req, res) => {
    const response = await Livros.find()
    console.log('Buscando Livros')
    res.json(response)
}

//get com id 
const buscarLivroPorID = async (req, res) => {
    const {id} = req.params
    const response = await Livros.findById(id)
    console.log('Buscando Livros')
    res.json(response)
}

//post
const adicionarLivro = (req, res) => {
    const {titulo, anoPublicacao, genero, autor} = req.body
    console.log(req.body)

    if (!titulo, !anoPublicacao, !genero, !autor){
        res.status(422).json({
            error: true,
            message: "Dados Inválidos!"
        })
        return
    }

    const livro = new Livros({
        titulo, anoPublicacao, genero, autor
    })
    livro.save().then(
        () => res.status(201).json({
            error: false,
            message: "Livro Adicinado!",
            livro: livro
        })
    ).catch((err) => {
        res.status(422).json({
            error: true,
            message: "Dados Inválidos!"
        })
    })
}

//put
const atualizarLivro = async (req, res) => {
    const {id} = req.params
    const {titulo, anoPublicacao, genero, autor} = req.body
    const response = await Livros.findByIdAndUpdate(id, {titulo, anoPublicacao, genero, autor})
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
const deletarLivro = async (req, res) => {
    const {id} = req.params
    const response = await Livros.findByIdAndDelete(id)
    if (response){
        res.json({
            error: false,
            message: "Livro deletado!"
        })
    } else{
        res.json({
            error: true,
            message: "Livro NÃO deletado!"
        })
    }
}

export {buscarLivro, buscarLivroPorID, adicionarLivro, atualizarLivro, deletarLivro}