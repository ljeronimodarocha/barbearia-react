import React, { Component } from 'react';
import Usuario from '../../api/usuario';
import './Login.css'
//import  { Redirect } from 'react-router-dom'


class Login extends Component {
    constructor(props) {
        super(props);
        this.email = "";
        this.senha = "";
        
    }

    _handleMudancaEmail(event) {
        event.stopPropagation();
        this.email = event.target.value;
    }
    _handleMudancaSenha(event) {
        event.stopPropagation();
        this.senha = event.target.value;
    }
    async _handleLogin(event){
        event.preventDefault();
        const usuario = new Usuario();
        let res = await usuario.login(this.email, this.senha);
        console.log(res);
        if(res.status === 204){
            localStorage.setItem('jwt', res.data['token'])
            this.props.logadoChange();
        }
    }
    render() {
       
        return (
            <section>
                <form action="" className="formulario" onSubmit={this._handleLogin.bind(this)}>
                    <label htmlFor="email">Email: </label>
                    <input type="email" id="email" onChange={this._handleMudancaEmail.bind(this)}/>
                    <label htmlFor="senha">Senha</label>
                    <input type="password" id="senha" onChange={this._handleMudancaSenha.bind(this)}/>
                    <button className="btnLogin">Logar</button>
                </form>
            </section>
        );
    }
}

export default Login;