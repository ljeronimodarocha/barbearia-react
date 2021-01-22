import React, { Component } from 'react';

class Logout extends Component {
    constructor(props){
        super(props)
        localStorage.removeItem('jwt')
    }

    render() {
        return (<>Logout</>);
    }
}

export default Logout;