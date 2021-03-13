const axios = require('axios');

export default class tipo {
    header = {
        'Content-type': 'application/json',
        'Authorization': `Bearer ${sessionStorage.getItem('jwt')}`
    }
    instance = axios.create({
        baseURL: 'http://localhost:3000/',
        //timeout: 10000000,
        headers: this.header,
    })

    async cadastrar(nome, tempo) {
        return await this.instance.post('tipos', {
                nome: nome,
                tempo: tempo,
            })
            .then((response) => {
                return response;
            })
    }
    async listar() {
        return await this.instance.get('tipos')
            .then((response) => {
                return response;
            })
    }
}