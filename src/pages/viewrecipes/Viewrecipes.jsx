import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Viewrecipes = () => {
    const viewrecipes = useLoaderData();
    console.log(viewrecipes);
    return (
        <div>
            <p>its viewrecipes component</p>
        </div>
    );
};

export default Viewrecipes;