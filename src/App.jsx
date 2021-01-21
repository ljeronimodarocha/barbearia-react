import React, { Component } from 'react';
import FormularioUsuairo from './component/cadastro-usuario/Formulario-usuario';
import "./App.css"
import Login from './component/login/Login';
import Logout from './component/logout/Logout'

class App extends Component {
    constructor(props) {
        super(props)
        this.state = { TOKEN: localStorage.getItem('TOKEN') }
    }

    render() {
        const TOKEN = this.state.TOKEN;
        if (TOKEN == null) {
            return (
                <section className="container">
                    <Login />
                </section>
            )
        }else{
            return (
                <Logout />
            )
        }
    }
}

export default App;