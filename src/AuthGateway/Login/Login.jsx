import React, {useState} from 'react';

function Login({toggleLogin, handleLogin}){
    // Thank you to Will for knowing how to do this VV
    const [username, setUsername] = useState(null);
    const [password, setPassword] = useState(null);

    return (
        <div>
            <button onClick={toggleLogin}>New User? Register</button>
            <form onSubmit={(e)=>{
                e.preventDefault();
                handleLogin({username, password});
            }}>
                <input type="text" onChange={e => setUsername(e.target.value)}/>
                <input type="password" onChange={e => setPassword(e.target.value)}/>
                <input type="submit" value="Login"/>
            </form>
        </div>
    )
}

export default Login;