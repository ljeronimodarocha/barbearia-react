import React, { Component } from 'react';
import "./App.css"
import Login from './component/login/Login';
import Logout from './component/logout/Logout'
import Header from './component/header/Header'
import FormularioUsuairo from './component/cadastro-usuario/Formulario-usuario'
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

class App extends Component {
    constructor(props) {
        super(props)
        this.handleLogadoChange = this.handleLogadoChange.bind(this);
        this.state = {
            logado: localStorage.getItem('jwt')
        }
    }
    handleLogadoChange(valor) {
        this.setState({
            logado: localStorage.getItem('jwt')
        }
        )
    }
    render() {
        return (
            <section className="container">
                <Router>
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
                                <Logout />
                            </Route>
                        </Switch>
                    }
                </Router>
            </section>
        )


    }
}

export default App;