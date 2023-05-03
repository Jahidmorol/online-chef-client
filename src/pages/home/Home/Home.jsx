import React from 'react';
import { useLoaderData, useNavigation } from 'react-router-dom';
import shef from '../../../assets/shef.png'
import Loading from '../../shared/Loading';
import Chefs from '../chefs/Chefs';

const Home = () => {
    const navigation = useNavigation();
  if (navigation.state === "loading") {
    return <Loading></Loading>;
  }

    const chefs = useLoaderData();
    return (
        <div>
            <div className='bg-yellow-600 md:flex items-center justify-between h-screen'>
            <img src={shef} className="w-100 md:w-6/12" alt="" />
            <div>
                <h2 className="text-6xl"> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis, modi!</h2>
            </div>
        </div>
        <Chefs chefs={chefs}> </Chefs>
        </div>
    );
};

export default Home;