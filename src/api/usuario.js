const axios = require('axios');

export default class Usuario {

    header = {
        'Content-type': 'application/json',
    }
    instance = axios.create({
        baseURL: 'http://localhost:3000/',
        withCredentials: true,
        //timeout: 10000000,
        //headers: this.header,
    })
    async cadastrar(nome, email, sexo, funcao, senha) {
            const json = JSON.stringify({
                nome: nome,
                email: email,
                sexo: sexo,
                funcao: funcao,
                senha: senha,
            })
            return await this.instance.post('usuarios', {
                    method: 'POST',
                    headers: this.header,
                    body: json
                })
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
        //         .then((response) => {
        //             return response
        //         })

    // }


    async login(email, senha) {
        return await this.instance.post('usuario/login', {
                email: email,
                senha: senha,
            }).then((res) => {
                return res
            })
            .catch((error) => {
                return error;
            })
    }

}

export class UsuarioObject {
    nome;
    email;
    senha

}