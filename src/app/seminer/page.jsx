'use client';
/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable @next/next/no-img-element */
import OthersHero from '@/components/shared/utilities/OthersHero';
import { motion } from 'framer-motion';
import React from 'react';

const page = () => {
    const seminars = [
        {
            id: 1,
            title: "UI/UX Design Bootcamp",
            instructor: "Md. Abu Sayeed",
            time: "16:00 PM",
            date: "2025-12-12",
            mode: "Offline",
            type: "Seminar",
            status: "Event Started",
            image: "https://i.ibb.co/zWvWjS9X/GD-Card-1.jpg",
        },
        {
            id: 2,
            title: "MERN Stack Career Roadmap",
            instructor: "Sakibul Hasan",
            time: "15:30 PM",
            date: "2025-12-18",
            mode: "Offline",
            type: "Seminar",
            status: "Event Started",
            image: "https://i.ibb.co/XZ78JQ9f/Mern-card.jpg",
        },
        {
            id: 3,
            title: "Digital Marketing Trends 2025",
            instructor: "Ashraf Hossain",
            time: "16:00 PM",
            date: "2025-11-25",
            mode: "Offline",
            type: "Seminar",
            status: "Event Started",
            image: "https://i.ibb.co/GvS6k4FJ/DM-caed.jpg",
        },
    ];

    return (
        <div className='py-10 bg-secondary'>
            <OthersHero title={"Explore the World of IT"} subtitle={"Whether you’re a student or a professional, our seminars and events are designed to inspire, educate, and prepare you for a successful tech career. Connect with industry experts, expand your knowledge, and gain practical insights into the latest tech trends. Stay updated, stay ahead — explore, learn, and grow with Bdcalling."}></OthersHero>
            <div className="max-w-5xl mx-auto space-y-4 mt-10">
                {seminars.map((seminar, index) => (
                    <motion.div
                        key={seminar.id}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.2 }}
                        viewport={{ once: true }}
                        className="flex items-center justify-between bg-[#E8F1FC] rounded-sm border border-gray-200 p-4 shadow-sm"
                    >
                        <div className="flex items-center gap-4">
                                <p className="text-gray-300 font-bold text-xl">
                                    {String(seminar.id).padStart(2, '0')}
                                </p>
                            <div className="relative">
                                <img
                                    src={seminar.image}
                                    alt={seminar.title}
                                    className="w-30 h-20 rounded-lg object-cover"
                                />
                            </div>
                            <div>
                                <div className="flex gap-2 mb-1">
                                    <span className="text-xs bg-white text-gray-700 px-2 py-[2px] rounded-md">{seminar.mode}</span>
                                    <span className="text-xs bg-white text-gray-700 px-2 py-[2px] rounded-md">{seminar.type}</span>
                                </div>
                                <h3 className="font-semibold text-gray-800">{seminar.title}</h3>
                                <p className="text-sm text-gray-500">{seminar.instructor}</p>
                            </div>
                        </div>

                        <div className="text-center">
                            <p className="font-semibold text-gray-700">{seminar.time}</p>
                            <p className="text-sm text-gray-500">{seminar.date}</p>
                        </div>

                        <div className="flex flex-col items-center justify-center">
                            <button className=" text-sm border border-gray-300 rounded-sm px-3 py-1 hover:bg-gray-100">
                                Register
                            </button>
                            <p className="text-xs text-red-500 mt-1 ">{seminar.status}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default page;