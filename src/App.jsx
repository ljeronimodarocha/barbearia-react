import React, { Component } from 'react';
import "./App.css"
import Login from './component/login/Login';
import Logout from './component/logout/Logout'
import Header from './component/header/Header'
import FormularioUsuairo from './component/cadastro-usuario/Formulario-usuario'
import FormularioTipos from './component/tiposAgendamento/FormularioTipos'
import {
    Switch,
    Route,
    BrowserRouter,
} from "react-router-dom";
import ListaAgendamentos from './component/lista-agendamentos/ListaAgendamentos';
import FormulariohorarioFuncionamento from './component/horarioFuncionamento/FormulariohorarioFuncionamento';

class App extends Component {
    constructor(props) {
        super(props)
        this.handleLogadoChange = this.handleLogadoChange.bind(this);
        this.state = {
            logado: false
        }
       
    }
    handleLogadoChange() {
        this.setState({
            logado: !this.state.logado
        })

    }
    componentDidMount(){
        const jwt = sessionStorage.getItem('jwt');
        if (jwt !== null) {
            this.setState({ logado: true })
        }
    }
    render() {
        return (
            <section className="container">
                <BrowserRouter>
                    <Header logado={this.state.logado} />
                    {!this.state.logado &&
                        <Switch>
                            <Route path="/sobre">
                            </Route>
                            <Route path="/login">
                                <Login logadoChange={this.handleLogadoChange} />
                            </Route>
                            <Route path="/registrar">
                                <FormularioUsuairo />
                            </Route>

                        </Switch>
                    }
                    {this.state.logado &&
                        <Switch>
                            <Route path="/logout">
                                <Logout logadoChange={this.handleLogadoChange} />
                            </Route>
                            <Route path="/agendamentos" >
                                <ListaAgendamentos logadoChange={this.handleLogadoChange} />
                            </Route>
                            <Route path="/horario-funcionamento">
                                <FormulariohorarioFuncionamento logadoChange={this.handleLogadoChange} />
                            </Route>
                            <Route path="/tipos">
                                <FormularioTipos logadoChange={this.handleLogadoChange}/>
                            </Route>
                        </Switch>
                    }
                </BrowserRouter>
            </section>
        )


    }
}

export default App;