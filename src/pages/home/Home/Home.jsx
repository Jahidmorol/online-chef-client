import React from 'react';
import shef from '../../../assets/shef.png'

const Home = () => {
    return (
        <div className='bg-yellow-600 md:flex items-center justify-between h-screen'>
            <img src={shef} className="w-100 md:w-6/12" alt="" />
            <div>
                <h2 className="text-6xl"> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis, modi!</h2>
            </div>
        </div>
    );
};

export default Home;