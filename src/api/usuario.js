const axios = require('axios').default;

export default class Usuario {


    header = {
        'Content-type': 'application/json'
    }
    async cadastrar(nome, email, sexo, funcao, senha) {
            const json = JSON.stringify({
                nome: nome,
                email: email,
                sexo: sexo,
                funcao: funcao,
                senha: senha,
            })
            return await fetch('http://localhost:3000/usuarios', {
                    method: 'POST',
                    headers: this.header,
                    body: json
                })
                .then(json)
                .then((data) => {
                    return data;
                })
        }
        // async login(email, senha) {
        //     const json = JSON.stringify({
        //         email: email,
        //         senha: senha,
        //     })
        //     return await fetch('http://localhost:3000/usuario/login', {
        //             method: 'POST',
        //             headers: this.header,
        //             body: json
        //         })
        //         .then((response) => { return response })

    // }

    async login(email, senha) {
        return await axios.post('http://localhost:3000/usuario/login', {
            email: email,
            senha: senha
        }).then(function(response) {
            console.log(response);
            return response;
        }).catch((error) => {
            console.log(error);
            return error;
        })
    }

}

export class UsuarioObject {
    nome;
    email;
    senha

}