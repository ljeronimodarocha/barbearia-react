import React, { Component } from 'react';
import FormularioUsuairo from './component/cadastro-usuario/formulario-usuario';
import "./App.css"

class App extends Component {
    state = {  }
    render() { 
        return ( 
            <section className="container">
                <FormularioUsuairo />
            </section>
         );
    }
}
 
export default App;