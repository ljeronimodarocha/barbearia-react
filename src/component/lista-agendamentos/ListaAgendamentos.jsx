import React, { Component } from 'react';
import Agendamento from '../../api/agendamento';
import './ListaAgendamento.css';
import Alert from '@material-ui/lab/Alert';

class ListaAgendamentos extends Component {
    constructor(props) {
        super(props);
        this.state = { lista: [], erros: [] }
    }
    async componentDidMount() {
        const a = new Agendamento();
        try {
            const lista = await a.listaAgendamentos();
            this.setState({ lista: lista })
        } catch (error) {
            if (error.response) {
                this.setState({ erros: error.response.data })
            } else if (error.request) {
                this.setState({ erros: error.request })
            } else {
                this.setState({ erros: error })
            }
        }
    }
    render() {

        return <div className="container">
            <><Alert severity="error">{this.state.erros}</Alert></>
            <table className="tabela-lista-agendamento ">
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Email</th>
                        <th>Data Agendamento</th>
                    </tr>
                </thead>
                {!this.state.lista &&
                    <tbody>
                        {this.state.lista.map((agendamento) => {
                            return (
                                <tr key={agendamento.id}>
                                    <th>
                                        {agendamento.nome}
                                    </th>
                                    <th>
                                        {agendamento.email}
                                    </th>
                                    <th>
                                        {agendamento.dataAgendamento}
                                    </th>
                                </tr>
                            )
                        })}
                    </tbody>
                }
            </table>

        </div>
    }
}


export default ListaAgendamentos;