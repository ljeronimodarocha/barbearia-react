import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, TextField } from '@material-ui/core';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import Alert from '@material-ui/lab/Alert';
import Tipo from '../../api/tipo';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';



const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 220,
    },

}));

function FormularioAgendamento(props) {
    const classes = useStyles();
    const [dataInicial, setDataInicial] = useState('');
    const [tipos, setTipos] = useState([]);
    const [erros, setErros] = useState([]);
    const [corte, setCorte] = useState('');

    const tipo = new Tipo();
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
    const handleChangeCorte = (event) => {
        setCorte(event.target.value);
        console.log(event.target.value);
    };
    useEffect(() => {
        listaTipos();
    }, [])


    const a = [];

    for (const key in erros) {
        a.push(erros[key]);
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
            <form action="">
                <div className="formularioHorarios">
                    <TextField id="dataInicial" label="Inicial" type="datetime-local" InputLabelProps={{
                        shrink: true,
                    }} value={dataInicial} onChange={e => setDataInicial(e.target.value)} />
                    <FormControl className={classes.formControl}>
                        <InputLabel id="corte">Selecione um corte</InputLabel>
                        <Select
                            labelId="corte"
                            id="corte"
                            value={corte}
                            onChange={handleChangeCorte}

                        >
                            {tipos.map((tipo) => {
                                return <MenuItem key={tipo.id} value={tipo.id}>{tipo.nome}</MenuItem>
                            })}
                        </Select>

                    </FormControl >
                </div>

            </form>

        </Container >

    );

}


export default FormularioAgendamento;