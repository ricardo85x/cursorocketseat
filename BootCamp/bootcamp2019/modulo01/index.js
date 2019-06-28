const express = require('express');

const server = express();

// plugin para dar suporte ao req.body.blalba
server.use(express.json())

// Query params = ?blalba=1
// Route param = /user/1
// Request body = { "none": "bla" }

// CRUD 
let users = ['Ricardo', 'Mara', 'Ninguem']

// midleware
server.use((req, res, next ) => {

    console.time('Request')
    console.log(`methodo: ${req.method}, URL: ${req.url}`)

    next();
    console.timeEnd('Request')
    console.log('acabou!')
})

function checkUsersExist(req, res, next) {
    if (!req.body.name) {
        return res.status(400).json({
            error: 'user name is require'
        })
    }
    return next();
}

function checkUserInArray(req, res, next) {

    const user = users[req.params.index];
    if (!user) {
        return res.status(400).json({
            error: 'nenhum usuario encontrado nesta posicao'
        })
    }

    req.user = user
    return next()
}


server.get('/users', (req, res) => {
    res.json(users)
})

server.get('/users/:index', checkUserInArray,  (req, res) => {

    const nome = req.query.nome;

    const { index } = req.params

    return res.json({
        message: `buscando o usuario  ${req.user}`
    })

});



server.post('/users', checkUsersExist,  (req, res) => {
    const { name } = req.body

    users.push(name)

    
    return res.json(users)

});


server.put('/users/:index', checkUsersExist, checkUserInArray, (req, res) => {

    const { index } = req.params
    const { name } = req.body

    users[index] = name

    return res.json(users)

})

server.delete('/users/:index', checkUserInArray, (req, res) => {
    const { index } = req.params

    users.splice(index, 1)

    return res.send()
})

server.listen(3000);