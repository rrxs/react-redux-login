import React, {useEffect, useState} from 'react';
import {useAppDispatch} from "../app/hooks";
import {loginAsync } from "../redux/authSlice";

function Login() {
    const dispatch = useAppDispatch();

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const onSubmit = (e: any) => {
        e.preventDefault();
        dispatch(loginAsync({username, password}))
    }

    const changeUsername = (v: any) => {
        setUsername(v.target.value)
    }
    const changePassword = (v: any) => {
        setPassword(v.target.value)
    }

    return (
        <>
            <div id="wrapper">
                <div>Login now!</div>
                <form onSubmit={onSubmit}>
                    <input type="text" name="username" onChange={changeUsername}/>
                    <input type="password" name="password" onChange={changePassword}/>
                    <button type="submit">Login</button>
                </form>
            </div>
        </>
    );
}

export default Login;
