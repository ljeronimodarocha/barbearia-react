import React, { Component } from 'react';
import Usuario from '../../api/usuario';
import "./estilo.css";

class FormularioUsuairo extends Component {
    constructor(props) {
        super(props)
        this.nome = "";
        this.email = "";
        this.sexo = "";
        this.funcao = "";
        this.senha = "";
        //let currentValue = props.curentValue || "mascolino";
    }

    _handleMudancaNome(event) {
        event.stopPropagation();
        this.nome = event.target.value;
    }
    _handleMudancaEmail(event) {
        event.stopPropagation();
        this.email = event.target.value;
    }

    _handleMudancaSexo(event) {
        event.stopPropagation();
        this.sexo = event.target.value;
    }
    _handleMudancaFuncao(event) {
        event.stopPropagation();
        this.funcao = event.target.value;
    }
    _handleMudancaSenha(event) {
        event.stopPropagation();
        this.senha = event.target.value;
    }



    async _handleSubmit(event) {
        event.preventDefault();
        const usuario = new Usuario();
        let res = await  usuario.cadastrar(this.nome, this.email, this.sexo, this.funcao, this.senha)
        console.log(res);
        event.target.reset();
       
    }
    state = {}
    render() {
        return (
            <form onSubmit={this._handleSubmit.bind(this)} className="formulario">
                <label htmlFor="nome">Nome</label>
                <input type="text" id="nome" onChange={this._handleMudancaNome.bind(this)}/>
                <label htmlFor="email">Email</label>
                <input type="email" id="email" onChange={this._handleMudancaEmail.bind(this)} />
                <label htmlFor="sexo">Sexo</label>
                <select id="sexo"  required onChange={this._handleMudancaSexo.bind(this)} >
                    
                    <option value="mascolino">Mascolino</option>
                    <option value="feminino">Feminino</option>
                </select>
                <label htmlFor="funcao">funcao</label>
                <input type="text" id="funcao" onChange={this._handleMudancaFuncao.bind(this)} />
                <label htmlFor="senha">Senha</label>
                <input type="password" id="senha" onChange={this._handleMudancaSenha.bind(this)} />
                <button className="btnCadastrar" >Cadastrar</button>
            </form>
        );
    }
}

export default FormularioUsuairo;

