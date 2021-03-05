import React from 'react';
import { TextField,Container } from '@material-ui/core';
import './FormulariohorarioFuncionamento.css'

function FormulariohorarioFuncionamento() {
    return (
        <Container maxWidth="sm">
            <form action="" className="formularioHorarios">
                <TextField id="dataInicial" label="Inicial" type="datetime-local" InputLabelProps={{
                    shrink: true,
                }} />

                <TextField id="dataFinal" label="Final" type="datetime-local" InputLabelProps={{
                    shrink: true,
                }} />
            </form>
        </Container>
    )
}

export default FormulariohorarioFuncionamento;