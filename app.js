const express = require('express')
const http = require('http')

require('./src/database/indexDB');


// instanciar o express
const app = express();

app.use(express.json())

const usersRoutes = require('./src/route/usersroute')


app.use(usersRoutes)


//configurar a porta e url para execução do aplicativo
app.set('url', 'http://localhost:')
app.set('porta', 3003);

http.createServer(app).listen(app.get('porta'), function(){
    console.log('Servidor rodando na porta: '+app.get('url') +app.get('porta'))
})

module.exports = app;