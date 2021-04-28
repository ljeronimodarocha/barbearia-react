import React, { useState, useEffect } from 'react';
import Tipo from '../../api/tipo';
import { TextField, Container, Box, Button } from '@material-ui/core';
import { DataGrid } from '@material-ui/data-grid';
import Alert from '@material-ui/lab/Alert';
import './FormularioTipos.css';


function FormularioTipos(props) {
    const [nome, setNome] = useState("");
    const [tempo, setTempo] = useState(0);
    const [erros, setErros] = useState('');
    const [tipos, setTipos] = useState('');
    const tipo = new Tipo();
    const columns = [
        { width: 200, field: 'nome', headerName: 'Corte', },
        {

            field: 'tempo',
            headerName: 'Horas',
            valueGetter: (date) => {
                var hours = Math.floor(date.value / 60);
                var minutes = date.value % 60;
                return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
            },
        },
    ]
    const enviarFormulario = async (e) => {
        e.preventDefault();
        try {
            await tipo.cadastrar(nome, tempo);
            listaTipos();
            setNome('');
            setTempo('');
            setErros('');
        } catch (error) {
            if (error.response) {
                setErros(error.response.data);
                if (error.response.status === 401) {
                    sessionStorage.clear();
                    props.logadoChange();
                }
            } else if (error.request) {
                setErros(error.request);
            } else {
                setErros(error);
            }
        }
        setNome("");
        setTempo(0);
    }
    const listaTipos = async () => {
        try {
            const lista = await tipo.listar();
            setTipos(lista.data);
        } catch (error) {
            if (error.response) {
                setErros(error.response.data);
                if (error.response.status === 401) {
                    sessionStorage.clear();
                    props.logadoChange();
                }
            } else if (error.request) {
                setErros(error.request);

            } else {
                setErros(error);
            }
        }
    }

    useEffect(() => {
        async function lista() {
            await listaTipos();
        }
        lista();
    }, [])
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

            <form action="" onSubmit={e => { enviarFormulario(e) }}>
                <Box className="caixas">
                    <TextField id="Nome" fullWidth label="Tipo" value={nome} type="text" variant="outlined" onChange={e => setNome(e.target.value)} />
                </Box>
                <Box className="caixas">
                    <TextField id="Tempo" fullWidth label="Tempo" value={tempo} type="number" variant="outlined" onChange={e => setTempo(e.target.value)} />
                </Box>
                <Button type="submit" variant="contained" color="primary">
                    Cadastrar
                </Button>
            </form>
            {tipos !== '' &&
                <div className="tabela">
                    <DataGrid rows={tipos} columns={columns} autoHeight />
                </div>
            }
        </Container>
    )
}
export default FormularioTipos;