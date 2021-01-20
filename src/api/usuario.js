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

}

export class UsuarioObject {
    nome;
    email;
    senha

}