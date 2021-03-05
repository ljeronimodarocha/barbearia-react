import React, { Component } from 'react';
import Agendamento from '../../api/agendamento'
import './ListaAgendamento.css'

class ListaAgendamentos extends Component {
    constructor(props) {
        super(props);
        this.state = { lista: [] }
    }

    async componentDidMount() {
        let a = new Agendamento()
        this.setState({ lista: await a.listaAgendamentos() })
        
       
    }
    render() {
        {
            return <><table className="tabela-lista-agendamento">
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Email</th>
                        <th>Data Agendamento</th>
                    </tr>
                </thead>
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
            </table>
            </>
        }
    }
}

export default ListaAgendamentos;