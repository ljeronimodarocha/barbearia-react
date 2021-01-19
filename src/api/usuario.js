export default class Usuario {
    constructor() {

    }

    header = {
        'Content-type': 'application/json'
    }
    cadastrar(usuario) {
        const json = JSON.stringify({
            nome: usuario.nome,
            email: usuario.email,
            senha: usuario.senha,
        })
        return fetch('http://localhost:3000/usuarios', {
                method: 'POST',
                headers: this.header,
                body: json
            })
            .then(resp => {
                return resp.body;
            }).catch((err) => {
                console.log(err);
            })
    }

}

export class UsuarioObject {
    nome;
    email;
    senha

}