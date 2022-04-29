const Users = require('../models/UsersModels')
const axios = require('axios')
const database = require('../config/database')
const filtro = 'https://api-teste-lewe.herokuapp.com/api/basedata'

//const apiheroku = 'https://api-teste-lewe.herokuapp.com/api/basedata'

module.exports = {

    async store(req, res) {
        const { usuario, senha } = req.body
        const users = await Users.create({
            usuario,
            senha

        })

    },

    async index(req, res) {
        const api = axios.create({
            baseURL: filtro
        })
        try {
            // Bloco de Tratamento da API, se necessário


            //
            return res.send({ message:"Api consultada com sucesso"})
        } catch (error) {
            res.send({ error: error.message})
        }
        

    }
}

