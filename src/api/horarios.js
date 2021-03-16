const axios = require('axios');
export default class horarios {
    header = {
        'Content-type': 'application/json',
        'Authorization': `Bearer ${sessionStorage.getItem('jwt')}`
    }
    instance = axios.create({
        baseURL: 'http://localhost:3000/',
        //timeout: 10000000,
        headers: this.header,
    })

    async listaHorarios() {
        return await this.instance.get('horarios', {
            header: this.header
        }).then((res) => {
            return res;
        })

    }

}