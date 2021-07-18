import React from 'react';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { logoutAsync, selectAuthState } from '../redux/authSlice';

function Dashboard() {
  const dispatch = useAppDispatch();

  const { fullName } = useAppSelector(selectAuthState);

  return (
    <>
      <h2>Dashboard</h2>
      <div>
        Welcome, <strong>{fullName}</strong>.
      </div>
      <hr />
      <button
        onClick={() => {
          dispatch(logoutAsync());
        }}
      >
        Logout
      </button>
    </>
  );
}

export default Dashboard;
