import React, { useEffect, useState } from 'react';
import { Container, TextField } from '@material-ui/core';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import Alert from '@material-ui/lab/Alert';
import Tipo from '../../api/tipo';
import Agendamento from '../../api/agendamento'
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import './estilo.css';

function FormularioAgendamento(props) {
    const [dataInicial, setDataInicial] = useState('');
    const [tipos, setTipos] = useState([]);
    const [erros, setErros] = useState([]);
    const [corte, setCorte] = useState('');

    const tipo = new Tipo();
    const agendamento = new Agendamento()
    const listaTipos = async () => {
        try {
            const resultado = await tipo.listar();
            setTipos(resultado.data);
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

    const enviar = async (event) => {
        event.preventDefault();
        try {
            //debugger
            const resultado = await agendamento.cadastrar(dataInicial.replace('T', ' '), corte);
            props.updateList();
        } catch (error) {
            if (error.response) {
                if (error.response.status === 401) {
                    setErros(error.response.data);
                    sessionStorage.clear();
                    props.logadoChange();
                } else {
                    setErros(error.response.data);
                    console.log(error.response.data);
                }
            } else if (error.request) {
                setErros(error.request);
            } else {
                setErros(error);
            }

        }
    }
    useEffect(() => {
        listaTipos();
    }, [])


    const a = [];

    for (const key in erros) {
        a.push(erros[key]);
    }
    return (
        <Container maxWidth="sm">
            {erros.length > 1 &&
                <><Alert severity="error">{erros}</Alert></>
            }
            <form action="" onSubmit={e => { enviar(e) }}>
                <div className="formularioHorarios">
                    <TextField id="dataInicial" label="Inicial" type="datetime-local" InputLabelProps={{
                        shrink: true,
                    }} value={dataInicial} onChange={e => setDataInicial(e.target.value)} />
                    <FormControl className="formControl">
                        <InputLabel id="corte">Selecione um corte</InputLabel>
                        <Select
                            labelId="corte"
                            id="corte"
                            value={corte}
                            onChange={event => { setCorte(event.target.value) }}
                        >
                            {tipos.map((tipo) => {
                                return <MenuItem key={tipo.id} value={tipo.id}>{tipo.nome}</MenuItem>
                            })}
                        </Select>
                    </FormControl >
                    <Button variant="contained" type="submit" className="btnAdicionar" color="primary">
                        Adicionar
                    </Button>
                </div>

            </form>

        </Container >

    );

}


export default FormularioAgendamento;