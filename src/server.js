const express = require('express'); // Busca o pacote express 
const path = require('path'); // Evitará erros em diferentes OS
const pages = require('./pages')
 
const server = express(); // Iniciando o express

server
    // Utilizar body do req
    .use(express.urlencoded({ extended: true }))

    // Utilizando arquivos estáticos
    .use(express.static('public'))

    // Configurar template engines
    .set('views', path.join(__dirname, 'views'))
    .set('view engine', 'hbs')

    // Rotas da aplicação
    .get('/', pages.index)
    .get('/orphanages', pages.orphanages)
    .get('/orphanage', pages.orphanage)
    .get('/create-orphanage', pages.createOrphanage)
    
    .post('/save-orphanage', pages.saveOrphanage)

// Ligar o servidor
server.listen(5500)