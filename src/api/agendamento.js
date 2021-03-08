const axios = require('axios');

export default class Agendamento {
    header = {
        'Content-type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('jwt')}`
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

}