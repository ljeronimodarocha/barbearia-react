import React, { useEffect, useState } from 'react';
import { TextField, Container, Button } from '@material-ui/core';
import { DataGrid } from '@material-ui/data-grid';
import Alert from '@material-ui/lab/Alert';
import './estilo.css'
import Horarios from '../../api/horarios';

function FormulariohorarioFuncionamento(props) {
    const [lista, setLista] = useState('');
    const [erros, setErros] = useState('');
    const [dataInicial, setDataInicial] = useState('');
    const [dataFinal, setDataFinal] = useState('');
    const [teste, setTeste] = useState();
    const horarios = new Horarios();
    const columns = [
        {
            width: 250, field: 'dataInicial', headerName: 'Inicial',
            valueGetter: (date) => new Date(date.value).toLocaleString('pt-BR'),
        },
        {
            field: 'dataFinal',
            headerName: 'Final',
            width: 250,
            valueGetter: (date) => new Date(date.value).toLocaleString('pt-BR'),

        },
    ]
    const adicionarHorario = async (e) => {
        e.preventDefault();
        try {
            // const resposta = await horarios.cadastraHorarios(`${dataInicial}:00`.replaceAll('T', ' '),
            //     `${dataFinal}:00`.replaceAll('T', ' '));
            const resposta = await horarios.cadastraHorarios(dataInicial, dataFinal);
            await listaHorarios();
            setDataInicial('');
            setDataFinal('');
            setErros('')
        } catch (error) {
            if (error.response) {
                setErros(error.response.data)
                if (error.response.status === 401) {
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
    const listaHorarios = async () => {
        try {
            const resposta = await horarios.listaHorarios()
            setLista(resposta.data);
        } catch (error) {
            if (error.response) {
                setErros(error.response.data)
                if (error.response.status === 401) {
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
            await listaHorarios()
        }
        mostraDados()

    }, []
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
            <form action="" onSubmit={e => { adicionarHorario(e) }}>
                <div className="formularioHorarios">
                    <TextField id="dataInicial" label="Inicial" type="datetime-local" InputLabelProps={{
                        shrink: true,
                    }} value={dataInicial} onChange={e => setDataInicial(e.target.value)} />

                    <TextField id="dataFinal" label="Final" type="datetime-local" InputLabelProps={{
                        shrink: true,
                    }} value={dataFinal} onChange={e => setDataFinal(e.target.value)} />
                </div>

                <Button type="submit" className="btn-cadastrar" variant="contained" color="primary">
                    Cadastrar
                </Button>
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