import {Leitores} from "../models/leitores.js";

//get
const buscarLeitores = async (req, res) => {
    const response = await Leitores.find()
    console.log('Buscando Leitores')
    res.json(response)
}

//get com id 
const buscarLeitoresPorID = async (req, res) => {
    const {id} = req.params
    const response = await Leitores.findById(id)
    console.log('Buscando Leitores por ID')
    res.json(response)
}

//post
const adicionarLeitores = (req, res) => {
    const {nome, email, telefone, endereco, dataNascimento} = req.body
    console.log(req.body)

    if (!nome, !email, !telefone, !endereco, !dataNascimento){
        res.status(422).json({
            error: true,
            message: "Dados Inválidos!"
        })
        return
    }

    const leitor = new Leitores({
        nome, email, telefone, endereco, dataNascimento
    })
    leitor.save().then(
        () => res.status(201).json({
            error: false,
            message: "Leitor Adicinado!",
            leitor: leitor
        })
    ).catch((err) => {
        res.status(422).json({
            error: true,
            message: "Dados Inválidos!"
        })
    })
}

//put
const atualizarLeitores = async (req, res) => {
    const {id} = req.params
    const {nome, email, telefone, endereco, dataNascimento} = req.body
    const response = await Leitores.findByIdAndUpdate(id, {nome, email, telefone, endereco, dataNascimento})
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
const deletarLeitor = async (req, res) => {
    const {id} = req.params
    const response = await Leitores.findByIdAndDelete(id)
    if (response){
        res.json({
            error: false,
            message: "Leitor deletado!"
        })
    } else{
        res.json({
            error: true,
            message: "Leitor NÃO deletado!"
        })
    }
}


export {buscarLeitores, buscarLeitoresPorID, adicionarLeitores, atualizarLeitores, deletarLeitor}