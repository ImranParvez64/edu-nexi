/* eslint-disable @next/next/no-img-element */
'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from "framer-motion";

const OurConcern = () => {
  const cat = [
    { id: 1, catName: "Working with", logo: "https://www.creativeitinstitute.com/images/cit_partner/1_partner_logo_1663044423.png" },
    { id: 2, catName: "Working with", logo: "https://www.creativeitinstitute.com/images/cit_partner/3_partner_logo_1663044423.png" },
    { id: 3, catName: "Working with", logo: "https://www.creativeitinstitute.com/images/cit_partner/4_partner_logo_1663044423.png" },
    { id: 4, catName: "Working with", logo: "https://www.creativeitinstitute.com/images/cit_partner/5_partner_logo_1663044423.png" },
    { id: 5, catName: "Working with", logo: "https://www.creativeitinstitute.com/images/cit_partner/6_partner_logo_1663044423.png" },
    { id: 6, catName: "Members of", logo: "https://www.creativeitinstitute.com/images/cit_partner/1_partner_logo_1663044599.png" },
    { id: 7, catName: "Members of", logo: "https://www.creativeitinstitute.com/images/cit_partner/4_partner_logo_1663044599.png" },
    { id: 8, catName: "Our Concerns", logo: "https://www.creativeitinstitute.com/images/cit_partner/9_partner_logo_1663044837.png" },
    { id: 9, catName: "Our Concerns", logo: "https://www.creativeitinstitute.com/images/cit_partner/2_partner_logo_1663044837.png" },
    { id: 10, catName: "Our Concerns", logo: "https://www.creativeitinstitute.com/images/cit_partner/11_partner_logo_1663044837.png" },
  ];

  const categories = [...new Set(cat.map(item => item.catName))];
  const [activeCategory, setActiveCategory] = useState(categories[0]);
  const filteredData = cat.filter(item => item.catName === activeCategory);

  return (
    <div className="container mx-auto px-6 md:px-12 py-10">
      <h1 className="text-3xl sm:text-4xl text-gray-700 font-bold mb-10">
        3000+ Companies Are <br className="hidden sm:block" /> Connected to Us
      </h1>

      {/* Category Tabs */}
      <div className="flex flex-wrap gap-4 mb-10">
        {categories.map((category, index) => (
          <motion.button
            key={index}
            whileTap={{ scale: 0.95 }}
            onClick={() => setActiveCategory(category)}
            className={`px-6 py-2  font-semibold rounded-xl border transition-all duration-300 
              ${activeCategory === category
                ? 'bg-blue-600 text-white border-blue-600 shadow-md shadow-blue-200'
                : 'bg-white text-gray-700 border-gray-300 hover:bg-blue-50 hover:border-blue-400'}`}
          >
            {category}
          </motion.button>
        ))}
      </div>

      {/* Logos */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4 }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 justify-items-center"
        >
          {filteredData.map(item => (
            <motion.div
              key={item.id}
              whileHover={{ scale: 1.05 }}
              className="p-4 bg-white rounded-xl hover:shadow-lg transition-all duration-300 border border-gray-100 flex justify-center items-center"
            >
              <img
                src={item.logo}
                alt={item.catName}
                className="w-36 sm:w-44 h-20 object-contain"
              />
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default OurConcern;
