'use client'
import React from 'react';
import Title from '../../utilities/Title';
import Image from 'next/image';
import { motion } from "framer-motion";

const Payment = () => {
    const payments = [
        {
            id: 1,
            name: "Bkash",
            number: "01912300964",
            img: "https://bdcalling-academy.netlify.app/assets/bkash-BMe3TrJK.webp",
        },
        {
            id: 2,
            name: "Nagad",
            number: "01602390164",
            img: "https://bdcalling-academy.netlify.app/assets/nagad-p4DK4R9o.png",
        },
        {
            id: 3,
            name: "Rocket",
            number: "01518994570",
            img: "https://bdcalling-academy.netlify.app/assets/rocket-DXOM5Y4e.png",
        },
    ];

    return (
        <div className='mx-auto container px-6 md:px-12 my-10'>
            <Title title={"Our Payment Method"} />
            
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10'>
                {payments.map((method) => (
                    <motion.div
                        key={method.id}
                        whileHover={{ scale: 1.05, boxShadow: "0 10px 20px rgba(0,0,0,0.1)" }}
                        className='border rounded-xl p-8 flex flex-col justify-center items-center bg-white hover:border-blue-500 transition-all duration-300'
                    >
                        <Image
                            src={method.img}
                            alt={method.name}
                            width={120}
                            height={100}
                            className='object-contain'
                        />
                        <p className='text-gray-700 font-semibold text-lg mt-4'>{method.number}</p>
                        <p className='text-blue-600 font-medium text-sm mt-1'>{method.name}</p>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Payment;
