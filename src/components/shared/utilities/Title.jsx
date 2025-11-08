import React from 'react';

const Title = ({title,subtitle}) => {
    return (
        <div>
            <h1 className='text-4xl font-semibold text-gray-700 mb-3'>{title}</h1>
            <p className='text-md text-gray-500'>{subtitle}</p>
        </div>
    );
};

export default Title;