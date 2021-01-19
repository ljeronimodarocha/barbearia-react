import React, { Component } from 'react';
import Usuario, { UsuarioObject } from '../../api/usuario';
import "./estilo.css";

class FormularioUsuairo extends Component {
    
    // cadastrarUsuario(event) {
    //     const a = new Usuario();
    //     let usuarioObject = UsuarioObject();
    //     usuarioObject.nome = 
    //     event.preventDefault();
    //     a.cadastrar()
    // }

    constructor(){
        super();
        this.usuario = {
            nome:'',
            email:'',
            senha:''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event){
        event.preventDefault();
        console.log(event.target);
    }
    state = {}
    render() {
        return (
            <form onSubmit={this.handleSubmit} className="formulario">
                <label htmlFor="nome">Nome</label>
                <input type="text" id="nome" value={this.usuario.nome}/>
                <label htmlFor="email">Email</label>
                <input type="email" id="email" value={this.usuario.email}/>
                <label htmlFor="senha">Senha</label>
                <input type="password" id="senha"  value={this.usuario.senha}/>
                <button className="btnCadastrar"  >Cadastrar</button>
            </form>
        );
    }
}

export default FormularioUsuairo;

