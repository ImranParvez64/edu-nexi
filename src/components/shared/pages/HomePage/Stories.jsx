'use client'
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSuccess } from '@/redux/slice/successSlice';
import Title from '../../utilities/Title';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const Stories = () => {
  const dispatch = useDispatch();
  const { items, loading, error } = useSelector((state) => state.success);

  useEffect(() => {
    dispatch(fetchSuccess());
  }, [dispatch]);

  return (
    <div className="container mx-auto px-6 md:px-12 mt-10 mb-10">
      <div className='bg-secondary p-8 md:p-20 rounded-4xl'>
        <Title
          title={"Success Stories"}
          subtitle={
            "The presence of our students in the ever expanding IT industry motivates us, drives us to guide more people towards a sustainable future."
          }
        />

        {/* Cards Container */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mt-8"
        >
          {items.slice(0, 4).map((item) => (
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

        {/* Button Animation */}
        <motion.div
          className="flex justify-center items-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Link href="/success">
            <Button variant="outline" className="text-lg px-8 py-3 rounded-full">
              See More
            </Button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default Stories;
