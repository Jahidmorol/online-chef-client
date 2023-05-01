import React from 'react';
import shef from '../../../assets/shef.png'

const Home = () => {
    return (
        <div className='bg-yellow-600 md:flex flex-col items-center justify-between h-screen'>
            <img src={shef} style={{height: '40rem'}} alt="" />
            <div>
                <h2 className="text-3xl"></h2>
            </div>
        </div>
    );
};

export default Home;