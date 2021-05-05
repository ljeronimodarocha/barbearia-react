const axios = require('axios');

export default class Agendamento {
    header = {
        'Content-type': 'application/json',
        'Authorization': `Bearer ${sessionStorage.getItem('jwt')}`
    }
    instance = axios.create({
        baseURL: 'http://localhost:3000/',
        //timeout: 10000000,
        headers: this.header,
    })

    async listaAgendamentos() {
        return await this.instance.get('agendamentos', {
            header: this.header
        }).then((res) => {
            return res.data;
        })
    }
    async cadastrar(dataInicial, corteId) {
        return await this.instance.post('agendamentos', {
            dataInicial: dataInicial,
            tipo: corteId
        }).then((res) => {
            return res;
        })
    }

}