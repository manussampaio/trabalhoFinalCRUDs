import {Autores} from "../models/autores.js";

//get
const buscarAutores = async (req, res) => {
    const response = await Autores.find()
    console.log('Buscando Autores')
    res.json(response)
}

//get com id 
const buscarAutoresPorID = async (req, res) => {
    const {id} = req.params
    const response = await Autores.findById(id)
    console.log('Buscando Autores')
    res.json(response)
}

//post
const adicionarAutor = (req, res) => {
    const {nome, nacionalidade, dataNascimento} = req.body
    console.log(req.body)

    if (!nome, !nacionalidade, !dataNascimento){
        res.status(422).json({
            error: true,
            message: "Dados Inválidos!"
        })
        return
    }

    const autor = new Autores({
        nome, nacionalidade, dataNascimento
    })
    autor.save().then(
        () => res.status(201).json({
            error: false,
            message: "Autor Adicinado!",
            autor: autor
        })
    ).catch((err) => {
        res.status(422).json({
            error: true,
            message: "Dados Inválidos!"
        })
    })
}

//put
const atualizarAutor = async (req, res) => {
    const {id} = req.params
    const {nome, nacionalidade, dataNascimento} = req.body
    const response = await Autores.findByIdAndUpdate(id, {nome, nacionalidade, dataNascimento})
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
const deletarAutor = async (req, res) => {
    const {id} = req.params
    const response = await Autores.findByIdAndDelete(id)
    if (response){
        res.json({
            error: false,
            message: "Autor deletado!"
        })
    } else{
        res.json({
            error: true,
            message: "Autor NÃO deletado!"
        })
    }
}

export {buscarAutores, buscarAutoresPorID, adicionarAutor, atualizarAutor, deletarAutor}