import React from 'react';
import {useAppDispatch} from "../app/hooks";
import {logoutAsync} from "../redux/authSlice";

function Dashboard() {
    const dispatch = useAppDispatch();
    return (
        <>
            <div>Dashboard</div>
            <button onClick={() => {
                dispatch(logoutAsync())
            }}>Logout</button>
        </>
    );
}

export default Dashboard;
