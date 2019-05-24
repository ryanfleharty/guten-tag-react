import React from 'react';
import logo from './logo.svg';
import './App.css';
import AuthGateway from './AuthGateway/AuthGateway';

class App extends React.Component {
    constructor(){
        super();
        this.state = {
            loggedIn: false,
            username: null
        }
    }
    render(){
        return (
            <div className="App">
                <AuthGateway></AuthGateway>
            </div>
          );
    }

}

export default App;