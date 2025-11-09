"use client";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSearchQuery, setSelectedCategory } from "@/redux/slice/filterSlice";
import { motion } from "framer-motion";
import { FiSearch } from "react-icons/fi";

export default function FilterSidebar({ categories }) {
  const dispatch = useDispatch();
  const { searchQuery, selectedCategory } = useSelector((state) => state.filter);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="bg-white p-5 rounded-lg shadow-md"
    >
      {/* 🔍 Search Box */}
      <div className="relative mb-5">
        <FiSearch className="absolute top-3 left-3 text-gray-400" />
        <input
          type="text"
          placeholder="Search courses..."
          value={searchQuery}
          onChange={(e) => dispatch(setSearchQuery(e.target.value))}
          className="w-full pl-10 pr-3 py-2 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary"
        />
      </div>

      {/* 📂 Categories */}
      <div className="bg-white border rounded-lg">
        <div className="px-4 py-3 border-b font-semibold text-gray-700 bg-gray-50 rounded-t-md">
          Categories
        </div>
        <div className="p-3 flex flex-col gap-4">
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              name="category"
              checked={selectedCategory === "All"}
              onChange={() => dispatch(setSelectedCategory("All"))}
              className="accent-primary"
            />
            <span
              className={`text-sm ${
                selectedCategory === "All" ? "text-primary font-medium" : ""
              }`}
            >
              All
            </span>
          </label>

          {categories?.map((cat) => (
            <motion.label
              key={cat.id}
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="flex items-center gap-2 cursor-pointer"
            >
              <input
                type="checkbox"
                name="category"
                checked={selectedCategory === cat.name}
                onChange={() => dispatch(setSelectedCategory(cat.name))}
                className="accent-primary"
              />
              <span
                className={`text-sm ${
                  selectedCategory === cat.name
                    ? "text-primary font-medium"
                    : ""
                }`}
              >
                {cat.name}
              </span>
            </motion.label>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
