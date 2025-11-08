'use client'
import { fetchCategories } from '@/redux/slice/categoriesSlice';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as FaIcons from 'react-icons/fa'
import { motion } from "motion/react"
import Link from 'next/link';

const Categories = () => {
    const dispatch = useDispatch();
    const { items } = useSelector((state) => state.categories);

    useEffect(() => {
        dispatch(fetchCategories());
    }, [dispatch]);

    return (
        <div className='container mx-auto px-12 my-10'>
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 rounded-xl'
            >
                {items.map(item => {
                    const Icon = FaIcons[item.icon] || FaIcons.FaQuestionCircle;
                    return (
                        <Link key={item.id} href={'/course'}>
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                className='flex flex-col rounded-xl gap-4 cursor-pointer border p-6 h-40 text-center justify-center items-center shadow-sm hover:shadow-md transition'
                            >
                                <Icon size={28} className="text-blue-500" />
                                <span className="font-semibold line-clamp-2">{item.name}</span>
                            </motion.div>
                        </Link>
                    )
                })}
            </motion.div>
        </div>
    );
};

export default Categories;
