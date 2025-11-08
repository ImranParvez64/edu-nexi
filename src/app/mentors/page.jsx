/* eslint-disable react-hooks/rules-of-hooks */
'use client'
import OthersHero from '@/components/shared/utilities/OthersHero';
import { fetchMentors } from '@/redux/slice/mentorSlice';
import Image from 'next/image';
import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { motion } from 'framer-motion';
import MentorsCard from '@/components/shared/pages/mentors/MentorsCard';

const page = () => {
    const dispatch = useDispatch();
    const { items } = useSelector((state) => state.mentors);

    useEffect(() => {
        dispatch(fetchMentors());
    }, [dispatch]);

    return (
        <div className='bg-secondary'>
            <div className='container mx-auto px-6 md:px-12 py-8'>
                <OthersHero
                    title={'Our Mentors'}
                    subtitle={
                        'Behind the leading IT skill development platform, masterminds of industry leaders are working. From the management to the expert mentors, highly skilled people are dedicated to your skill advancement.'
                    }
                />
                <div className='grid grid-cols-1 sm:grid-cols-2  gap-8 mt-10'>
                    {items.map((item,index) => (
                            <MentorsCard key={item.id} index={index}  item={item}></MentorsCard>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default page;
