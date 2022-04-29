const Sequelize = require('sequelize')
const dbConfig = require('../config/database.js')

const conexao = new Sequelize(dbConfig)
const users = require('../models/UsersModels')


try{
    //conexao.authenthicate();
    console.log('Conexão estabelecida!')
} catch (error) {
    console.log('Conexão não estabelecida =(')
}

users.init(conexao)

module.exports = conexao