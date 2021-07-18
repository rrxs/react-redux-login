import React, { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { loginAsync, selectAuthState } from '../redux/authSlice';

function Login() {
  const dispatch = useAppDispatch();
  const { loading } = useAppSelector(selectAuthState);

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const onSubmit = (e: any) => {
    e.preventDefault();
    dispatch(loginAsync({ username, password }));
  };

  const changeUsername = (v: any) => {
    setUsername(v.target.value);
  };
  const changePassword = (v: any) => {
    setPassword(v.target.value);
  };

  return (
    <>
      <div id="wrapper">
        <h2>Login now!</h2>
        <form onSubmit={onSubmit}>
          <input placeholder="username" type="text" name="username" onChange={changeUsername} />
          <input placeholder="password" type="password" name="password" onChange={changePassword} />
          <button type="submit">Login</button>
          {loading && <div>Loading...</div>}
        </form>
      </div>
    </>
  );
}

export default Login;
