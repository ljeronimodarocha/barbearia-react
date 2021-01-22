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
                        <li><Link to="/registrar">Registrar</Link></li>
                    }
                    {!this.props.logado &&
                        <li><Link to="/login">Login</Link></li>
                    }
                    {this.props.logado &&
                        <li><Link to="/logout">Logout</Link></li>
                    }
                </ul>
            </nav>
        );

    }
}

export default Header
    ;