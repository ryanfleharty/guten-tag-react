import React from 'react';
import './App.css';
import AuthGateway from './AuthGateway/AuthGateway';
import PostsContainer from './PostsContainer/PostsContainer';

class App extends React.Component {
    constructor(){
        super();
        this.state = {
            loggedIn: false,
            username: null
        }
    }
    handleRegister = async (formData) => {
        console.log(formData);
        const response = await fetch("http://localhost:8080/users", {
            method: "POST",
            body: JSON.stringify(formData),
            headers: {
                "Content-Type": "application/json"
            },
            credentials: "include"
        })
        console.log(response);
        const parsedResponse = await response.json();
        console.log(parsedResponse);
        if(response.status === 200){
            this.setState({
                username: parsedResponse.username,
                loggedIn: true
            })
        }
    }
    render(){
        return (
            <div className="App">
                { this.state.loggedIn ? 
                    <PostsContainer></PostsContainer> 
                    : 
                    <AuthGateway handleRegister={this.handleRegister}></AuthGateway>}
                
            </div>
          );
    }

}

export default App;