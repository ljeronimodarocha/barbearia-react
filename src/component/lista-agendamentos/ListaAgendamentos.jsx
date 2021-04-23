import React, { Component } from 'react';
import { DataGrid } from '@material-ui/data-grid';

import FormularioAgendamento from '../FormularioAgendamento/FormularioAgendamento'
import Agendamento from '../../api/agendamento';
import './ListaAgendamento.css';
import Alert from '@material-ui/lab/Alert';

class ListaAgendamentos extends Component {
    constructor(props) {
        super(props);
        this.state = { lista: [], erros: [] }
    }
    async componentDidMount() {
        const agendamento = new Agendamento();
        try {
            const lista = await agendamento.listaAgendamentos();
            this.setState({ lista: [lista] })
            console.log(this.state.lista);
        } catch (error) {
            if (error.response) {
                this.setState({ erros: error.response.data })
                console.log(error.response);
                if (error.response.status === 401) {
                    sessionStorage.clear();
                    this.props.logadoChange();
                }
            } else if (error.request) {
                this.setState({ erros: error.request })
            } else {
                this.setState({ erros: error })
            }

        }
    }
    render() {
        const columns = [
            {
                width: 250, field: 'dataInicial', headerName: 'Data Inicial',
                valueGetter: (date) => new Date(date.value).toLocaleString('pt-BR', {timeZone:"UTC"}),
            },
            {
                field: 'dataFinal',
                headerName: 'Data Final',
                width: 250,
                valueGetter: (date) => new Date(date.value).toLocaleString('pt-BR', {timeZone:"UTC"}),

            },
            {
                field: "Nome",
                headerName: 'Nome',
                width: 250,
                valueGetter: (data) => data.row.Usuario.nome,
            },
            {
                field: "Email",
                headerName: 'Email',
                width: 250,
                valueGetter: (data) => data.row.Usuario.email,
            },
            
        ]
        const a = [];
        for (const key in this.state.erros) {
            a.push(this.state.erros[key])
        }
        return <div className="container">
            {a.map((value) => {
                return (
                    <><Alert severity="error">{value}</Alert></>
                );
            })}
        <FormularioAgendamento />


            {this.state.lista &&
                <div className="tabela">
                    <DataGrid rows={this.state.lista} columns={columns} autoHeight />
                </div>
            }

        </div>
    }
}


export default ListaAgendamentos;