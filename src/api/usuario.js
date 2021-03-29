const axios = require('axios');

export default class Usuario {

    header = {
        'Content-type': 'application/json',
    }
    instance = axios.create({
        baseURL: 'http://localhost:3000/',
        withCredentials: true,
        //timeout: 10000000,
        headers: this.header,
    })
    async cadastrar(nome, email, sexo, tipo, senha) {
        return await this.instance.post('usuarios', {
                nome: nome,
                email: email,
                sexo: sexo,
                tipo: tipo,
                senha: senha,
            })
            .then(function(response) {
                return response;
            })
    }


    async login(email, senha) {
        return await this.instance.post('usuario/login', {
            email: email,
            senha: senha,
        }).then((res) => {
            return res;
        })

    }

}

export class UsuarioObject {
    nome;
    email;
    senha

}