import React, { useEffect, useState } from 'react';
import { TextField, Container } from '@material-ui/core';
import { DataGrid } from '@material-ui/data-grid';
import Alert from '@material-ui/lab/Alert';
import './FormulariohorarioFuncionamento.css'
import Horarios from '../../api/horarios';

function FormulariohorarioFuncionamento(props) {
    const [lista, setLista] = useState('');
    const [erros, setErros] = useState('');
    const horarios = new Horarios();
    const columns = [
        { width: 250, field: 'dataInicial', headerName: 'Inicial' },
        {
            field: 'dataFinal',
            headerName: 'Final',
            width: 250,
            
        },
    ]
    const listaHorarios = async () => {
        try {
            const resposta = await horarios.listaHorarios()
            setLista(resposta.data);

        } catch (error) {
            if (error.response) {
                setErros(error.response.data)
                if (error.response.status == '401') {
                    sessionStorage.clear();
                    props.logadoChange();
                }
            } else if (error.request) {
                setErros(error.request)

            } else {
                setErros(error)
            }
        }
    }
    useEffect(() => {
        async function mostraDados() {
            if (lista === '' && erros === '') {
                await listaHorarios()
            }
        }
        mostraDados()
        console.log(lista);
    }
    )
    const a = [];
    for (const key in erros) {
        a.push(erros[key])
    }
    return (
        <Container maxWidth="sm">
            {erros !== '' &&
                a.map((value) => {
                    return (
                        <><Alert severity="error">{value}</Alert></>
                    );
                })
            }
            <form action="" className="formularioHorarios">
                <TextField id="dataInicial" label="Inicial" type="datetime-local" InputLabelProps={{
                    shrink: true,
                }} />

                <TextField id="dataFinal" label="Final" type="datetime-local" InputLabelProps={{
                    shrink: true,
                }} />
            </form>
            {lista !== '' &&
                <div className="tabela">
                    <DataGrid rows={lista} columns={columns} autoHeight />
                </div>
            }
        </Container>
    )
}

export default FormulariohorarioFuncionamento;