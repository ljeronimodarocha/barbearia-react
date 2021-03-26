import React, { Component } from 'react';
import './Header.css'
import {
    Link
} from "react-router-dom";

class Header
    extends Component {
    state = {}
    render() {

        return (
            <nav className="menu-header" >
                <ul>
                    <li>sobre</li>
                    {!this.props.logado &&
                        <>
                            <li><Link to="/registrar">Registrar</Link></li>
                            <li><Link to="/login">Login</Link></li>
                        </>
                    }
                    {this.props.logado &&
                        <>
                            <li><Link to="/logout">Logout</Link></li>
                            <li><Link to="/agendamentos">Agendamentos</Link></li>
                            <li><Link to="/tipos">Tipos</Link></li>
                            <li><Link to="/horario-funcionamento">Horarios Livres</Link></li>
                        </>
                    }
                </ul>
            </nav>
        );

    }
}

export default Header
    ;