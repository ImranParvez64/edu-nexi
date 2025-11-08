import Image from 'next/image';
import React from 'react';
import { FaRegHandPointRight } from 'react-icons/fa';
import { MdBrightness1 } from 'react-icons/md';
import { motion } from 'framer-motion';

const MentorsCard = ({ item,index }) => {
    return (
        <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.1, delay: index * 0.1 }}
            whileHover={{
                scale: 1.03,
                boxShadow: '0 6px 20px rgba(0,0,0,0.08)',
            }}
            className='p-6 border border-gray-200 rounded-2xl flex flex-col sm:flex-row gap-6 transition-all duration-300 cursor-pointer shadow'
        >
            <div className='w-full sm:w-1/3'>
                <Image
                    src={item.img}
                    alt={item.name}
                    height={300}
                    width={300}
                    className='rounded-2xl object-cover w-full h-full'
                />
            </div>
            <div className='flex flex-col justify-center'>
                <h1 className='text-xl md:text-2xl font-semibold'>{item.name}</h1>
                <div className='flex flex-wrap text-sm md:text-[15px] font-semibold gap-1 text-primary mt-1'>
                    <p>{item.designation}</p>
                    <p>-</p>
                    <p>{item.category}</p>
                </div>
                <div className='flex gap-2 items-center mt-3 text-sm md:text-base'>
                    <FaRegHandPointRight className='text-primary' />
                    <p>{item.experience}</p>
                </div>
                <div className='mt-4'>
                    <h1 className='flex gap-1 items-center font-semibold text-base md:text-xl'>
                        <MdBrightness1 className='text-sm text-primary' />
                        Speciality:
                    </h1>
                    <p className='mt-1 text-sm md:text-base'>{item.specialty}</p>
                </div>
            </div>
        </motion.div>
    );
};

export default MentorsCard;