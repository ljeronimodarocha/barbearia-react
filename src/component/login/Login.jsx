import React, { Component } from 'react';
import Usuario from '../../api/usuario';
import './Login.css'
import Alert from '@material-ui/lab/Alert';
import  { Redirect } from 'react-router-dom'


class Login extends Component {
    constructor(props) {
        super(props);
        this.email = "";
        this.senha = "";
        this.state = { erros: {} };
    }

    _handleMudancaEmail(event) {
        event.stopPropagation();
        this.email = event.target.value;
    }
    _handleMudancaSenha(event) {
        event.stopPropagation();
        this.senha = event.target.value;
    }
    async _handleLogin(event) {
        event.preventDefault();
        const usuario = new Usuario();
        try {
            const res = await usuario.login(this.email, this.senha);
            sessionStorage.setItem('jwt', res.headers['authorization']);
            this.props.logadoChange();
            return <Redirect to='/agendamentos'  />;
        } catch (error) {
            if (error.response) {
                this.setState({ erros: error.response.data });
            } else if (error.request) {
                this.setState({ erros: error.request });
            } else {
                this.setState({ erros: error });
            }
        }
    }
    render() {
        const a = [];
        for (const key in this.state.erros) {
            a.push(this.state.erros[key]);
        }
        return (
            <section>
                {a.map((value) => {
                    return (
                        <><Alert severity="error">{value}</Alert></>
                    );
                })}
                <form action="" className="formulario" onSubmit={this._handleLogin.bind(this)}>
                    <label htmlFor="email">Email: </label>
                    <input type="email" id="email" onChange={this._handleMudancaEmail.bind(this)} />
                    <label htmlFor="senha">Senha</label>
                    <input type="password" id="senha" onChange={this._handleMudancaSenha.bind(this)} />
                    <button className="btnLogin">Logar</button>
                </form>
            </section>
        );
    }
}

export default Login;