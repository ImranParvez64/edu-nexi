'use client'
import React from 'react';
import Title from '../../utilities/Title';
import { motion } from 'framer-motion';
import { FaHandshake, FaBriefcase, FaPlayCircle } from "react-icons/fa";

const Exclusive = () => {
    const exclusive = [
        {
            id: 1,
            title: "Lifetime Support",
            icon: FaHandshake,
            colorGradient: "linear-gradient(135deg, #FDEBEB 0%, #FAF9F6 100%)",
            description: "The bond between Creative IT and its students is lifelong. We strengthen our bond by providing lifelong support that helps you overcome any problem in your career path even after completing your course. The personalized feedback that you receive from us helps you grow every day."
        },
        {
            id: 2,
            title: "Job Placement Support",
            icon: FaBriefcase,
            colorGradient: "linear-gradient(135deg, #E6F7F1 0%, #FAFFF8 100%)",
            description: "Our career placement department is ready to help you find a lucrative job. We ensure your resume reaches the right hiring managers. This department has helped more than 42,000 students find jobs in competitive global platforms, successfully raising the job placement rate to 46% in 2024."
        },
        {
            id: 3,
            title: "Class Videos",
            icon: FaPlayCircle,
            colorGradient: "linear-gradient(135deg, #EEFDF9 0%, #FBFFF9 100%)",
            description: "No need to worry if you miss a topic in the class. We record most of our classes so that students who miss a session can still get the information they need. Our motto is to provide a flexible learning experience to help you improve your competence gradually."
        }
    ];

    return (
        <div className="py-12 container px-12 mx-auto rounded-4xl">
            <Title
                title="Exclusive Solutions that Set Us Apart"
                subtitle="Our aim is to make your learning experience the best possible by providing you with additional facilities that will help you to grow without bounds."
            />

            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                viewport={{ once: true, amount: 0.2 }}
                className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10"
            >
                {exclusive.map((item) => {
                    const Icon = item.icon;
                    return (
                        <motion.div
                            key={item.id}
                            whileHover={{ scale: 1.05, rotate: 1 }}
                            transition={{ type: 'spring', stiffness: 200 }}
                            style={{
                                background: item.colorGradient
                            }}
                            className="flex flex-col rounded-xl gap-4 cursor-pointer border p-8 text-center justify-center items-center shadow-sm hover:shadow-lg transition-all duration-300"
                        >
                            <Icon size={36} className="text-blue-600" />
                            <span className="font-semibold text-lg">{item.title}</span>
                            <p className="text-gray-600 text-sm">{item.description}</p>
                        </motion.div>
                    );
                })}
            </motion.div>
        </div>
    );
};

export default Exclusive;
