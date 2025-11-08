'use client'
import React from 'react';
import { motion } from 'framer-motion';
import { FaChartLine, FaBullseye, FaBookOpen, FaUserFriends } from 'react-icons/fa';
import Image from 'next/image';

export default function MissionVision() {
    const info = [
        {
            id: 1,
            icon: FaChartLine,
            text: "To be the world’s leading IT training platform, developing a skilled workforce with a diverse range of technical expertise to shape the future of the global tech industry.",
        },
        {
            id: 2,
            icon: FaBullseye,
            text: "Our goal is to create over 5,000 job opportunities by 2030, actively contributing to building the Digital Bangladesh and helping to lower the nation's unemployment rate.",
        },
        {
            id: 3,
            icon: FaBookOpen,
            text: "We’re committed to equipping individuals with practical technical skills, developing the core foundation for career success in a rapidly changing tech world.",
        },
        {
            id: 4,
            icon: FaUserFriends,
            text: "We provide industry-focused training that opens up a variety of IT career paths, empowering more people to excel in the IT sector and make a meaningful impact.",
        },
    ];

    return (
        <section className="py-8">
            <h1 className='text-4xl font-semibold text-gray-700 mb-6'>Our Mission <span className='text-yellow-500'> & Vision</span></h1>
            <div className='bg-[#e8f1fc] p-10 rounded-3xl flex gap-6'>
                <div className='w-1/2'>
                 <Image
                  src={"https://bdcalling-academy.netlify.app/assets/seminar02-DFpOha7I.png"}
                  alt='pic' 
                  width={600} 
                  height={4800} 
                  className='rounded-md' >
                 </Image>
                </div>
                <div className="container mx-auto px-4 space-y-4 w-1/2">
                    {info.map((item, index) => {
                        const Icon = item.icon;
                        return (
                            <motion.div
                                key={item.id}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.1, delay: index * 0.2 }}
                                whileHover={{ scale: 1.03, backgroundColor: 'rgba(30,144,255,0.07)' }}
                                className="flex items-start gap-4 p-6 rounded-lg border border-gray-300  bg-transparent transition-all duration-300 cursor-default"
                            >
                                <div className="p-3 rounded-full bg-[#bbd3f8] shrink-0">
                                    <Icon className="text-2xl text-primary" />
                                </div>
                                <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                                    {item.text}
                                </p>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}