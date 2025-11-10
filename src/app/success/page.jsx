/* eslint-disable react-hooks/rules-of-hooks */
'use client'
import OthersHero from '@/components/shared/utilities/OthersHero';
import { fetchSuccess } from '@/redux/slice/successSlice';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { motion } from 'framer-motion';


const page = () => {
    const dispatch = useDispatch();
    const { items, loading, error } = useSelector((state) => state.success);

    useEffect(() => {
        dispatch(fetchSuccess());
    }, [dispatch]);

    return (
        <div className='bg-secondary'>
            <div className='container mx-auto py-10'>
                <OthersHero title={"Our Success Stories"} subtitle={"Discover how real people turned their dreams into achievements through passion, effort, and guidance."}></OthersHero>
                {/* Cards Container */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                    viewport={{ once: true, amount: 0.2 }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mt-8"
                >
                    {items.map((item) => (
                        <motion.div
                            key={item.id}
                            whileHover={{ scale: 1.03 }}
                            transition={{ duration: 0.3, ease: 'easeOut' }}
                            className="overflow-hidden rounded-3xl shadow-lg bg-white"
                        >
                            <iframe
                                src={item.iframe}
                                title={item.title}
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                referrerPolicy="strict-origin-when-cross-origin"
                                allowFullScreen
                                className="rounded-3xl h-[450px] w-full"
                            />
                        </motion.div>
                    ))}
                </motion.div>
            </div>

        </div>
    );
};

export default page;