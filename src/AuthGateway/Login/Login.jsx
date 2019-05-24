import React from 'react';

function Login(props){
    return (
        <div>
            <button onClick={props.toggleLogin}>New User? Register</button>
        </div>
    )
}

export default Login;