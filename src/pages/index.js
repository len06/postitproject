import React from 'react';
import { Outlet } from 'react-router';
const Home = () => {
    return(
        <div   
            style={{
                display: 'flex',
                justifyContent: 'Right',
                alignItems: 'Right',
                height: '100vh'
        }}
        >
            <h1>PostEats</h1>
            <Outlet/>
        </div>
    );
};

export default Home;