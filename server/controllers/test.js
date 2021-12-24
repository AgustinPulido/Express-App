'use strict'

const fetch = require('node-fetch');

//TESTER
function test(req, res) {
    res.send({
        mensaje: 'API Funcionando, test exitoso',
    });
}

function getUsers(req, res) {
    fetch(`https://61b92e0638f69a0017ce5ee1.mockapi.io/users`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(res => res.json())
        .then(json => {
            return res.status(200).send({
                message: 'Apicall exitoso',
                json: json,
            });
        })
        .catch(error => res.status(401).send(error));
}

module.exports = {
    test,
    getUsers
}