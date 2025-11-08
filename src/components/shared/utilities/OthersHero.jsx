import React from 'react';

const OthersHero = ({title,subtitle}) => {
    return (
        <div className='mx-auto flex flex-col w-200 justify-center text-center items-center'>
            <h1 className='text-5xl font-semibold text-primary mb-4'>{title}</h1>
            <p className='text-gray-600'>{subtitle}</p>
        </div>
    );
};

export default OthersHero;