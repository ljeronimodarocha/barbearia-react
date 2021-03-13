import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

class Logout extends Component {
    constructor(props) {
        super(props)
        localStorage.clear(); //for localStorage
        sessionStorage.clear(); //for sessionStorage

    }
    componentDidMount() {
        this.props.logadoChange();
        return (<Redirect to="/login" />);
    }

    render() {
        return (<></>)
    }
}

export default Logout;