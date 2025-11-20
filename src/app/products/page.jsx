/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/rules-of-hooks */
'use client'
import OthersHero from '@/components/shared/utilities/OthersHero';
import { fetchProducts } from '@/redux/slice/productsSlice';
import { motion } from 'framer-motion';
import Link from 'next/link';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const page = () => {
  const dispatch = useDispatch();
  const { items, loading } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;

  return (
    <div className="bg-secondary py-10">
      <div className="container mx-auto">
        <OthersHero
          title={"Our Products Collection"}
          subtitle={
            "Discover a World of Knowledge, Inspiration, and Growth Through Every Page You Read."
          }
        />

        {/* === GRID === */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-6 mt-10 px-4">
          {items.map((item, index) => (
            <motion.div
              key={item.id}
              className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 flex flex-col items-center justify-between relative overflow-hidden group"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08, duration: 0.4 }}
              whileHover={{ scale: 1.02 }}
            >
              {/* === Special Tag === */}
              {item.special && (
                <motion.span
                  className="absolute top-3 left-3 bg-[#F97316] text-white text-[11px] font-semibold px-3 py-[3px] rounded-full shadow-md tracking-wider uppercase"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  {item.special}
                </motion.span>
              )}

              {/* === Image === */}
              <div className="w-full flex items-center justify-center bg-gray-50 py-6 group-hover:bg-gray-100 transition-all duration-300">
                <motion.img
                  src={item.img}
                  alt={item.name}
                  className="w-28 h-36 object-contain transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* === Info Section === */}
              <div className="p-3 text-center">
                <p className="text-xs text-gray-400 uppercase tracking-widest">
                  {item.category}
                </p>
                <h1 className="text-sm font-semibold text-gray-800 leading-tight group-hover:text-[#1F6CF0] transition">
                  {item.title}
                </h1>
                <p className="text-gray-600 text-sm mt-1">
                  <span className="font-bold text-[#1F6CF0]">${item.offerPrice || item.price}</span>
                  {item.offerPrice && (
                    <span className="text-xs text-gray-400 line-through ml-2">${item.price}</span>
                  )}
                </p>
              </div>

              {/* === Bottom Button (Now) === */}
              <Link href={`/products/${item.id}`} className="w-full p-2 border-t cursor-pointer">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full bg-[#1F6CF0] text-white text-xs py-2 rounded-lg font-medium tracking-wider uppercase shadow-md hover:bg-[#1558C0] transition"
                >
                  view details
                </motion.button>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default page;
