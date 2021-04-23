
import React, { useEffect, useState } from 'react';
import { TextField, Container, Button } from '@material-ui/core';

function FormularioAgendamento(props) {
    const [dataInicial, setDataInicial] = useState('');
    const [dataFinal, setDataFinal] = useState('');
    return (<Container maxWidth="sm">
        <form action="">
        <div className="formularioHorarios">
                    <TextField id="dataInicial" label="Inicial" type="datetime-local" InputLabelProps={{
                        shrink: true,
                    }} value={dataInicial} onChange={e => setDataInicial(e.target.value)} />

                    <TextField id="dataFinal" label="Final" type="datetime-local" InputLabelProps={{
                        shrink: true,
                    }} value={dataFinal} onChange={e => setDataFinal(e.target.value)} />
                </div>

        </form>

    </Container>

    );

}

export default FormularioAgendamento;