/* eslint-disable react-hooks/rules-of-hooks */
"use client";

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import { fetchCategories } from "@/redux/slice/categoriesSlice";
import { fetchCourses } from "@/redux/slice/coursesSlice";
import OthersHero from "@/components/shared/utilities/OthersHero";
import FilterSidebar from "@/app/courses/FilterSidebar";
import CourseCard from "@/components/shared/utilities/CourseCard";

const Page = () => {
  const dispatch = useDispatch();
  const searchParams = useSearchParams();
  const categoryFromUrl = searchParams.get("category");

  const { items: categories, loading: catLoading } = useSelector(
    (state) => state.categories
  );
  const { items: courses, loading: prodLoading } = useSelector(
    (state) => state.courses
  );
  const { selectedCategory, searchQuery } = useSelector(
    (state) => state.filter
  );

  // 🟢 Load data once
  useEffect(() => {
    if (!categories.length) dispatch(fetchCategories());
    if (!courses.length) dispatch(fetchCourses());
  }, [dispatch]);

  // 🟢 Update category from URL
  useEffect(() => {
    if (categoryFromUrl) {
      dispatch({
        type: "filter/setSelectedCategory",
        payload: categoryFromUrl,
      });
    }
  }, [categoryFromUrl, dispatch]);

  // 🧮 Filter Logic
  const filteredCourses = courses.filter((course) => {
    const matchCategory =
      selectedCategory === "All" || course.category === selectedCategory;
    const matchSearch = course.title
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    return matchCategory && matchSearch;
  });

  // 🔧 Animation variants (stable reusables)
  const fadeInLeft = {
    hidden: { opacity: 0, x: -40 },
    visible: { opacity: 1, x: 0 },
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="bg-secondary px-4 md:px-12 lg:px-24 mx-auto py-10">
      <OthersHero
        title="Discover Your Next Skill"
        subtitle="Unlock a wide range of practical, in-demand courses designed to align with your career goals. Whether you’re taking your first step into tech or advancing your expertise, our learning paths are crafted by industry experts to ensure you gain real-world knowledge that truly makes a difference."
      />

      <div className="flex flex-col md:flex-row justify-between gap-10 py-10">
        {/* Sidebar */}
        <motion.div
          variants={fadeInLeft}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.4, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
          className="w-full md:w-[35%] lg:w-[25%]"
        >
          <FilterSidebar categories={categories} loading={catLoading} />
        </motion.div>

        {/* Courses */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.4, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.2 }}
          className="w-full md:w-[65%] lg:w-[75%] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8"
        >
          {prodLoading ? (
            <p className="col-span-full text-center text-gray-500 animate-pulse">
              Loading courses...
            </p>
          ) : filteredCourses.length > 0 ? (
            filteredCourses.map((course) => (
              <motion.div
                key={course.id}
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <CourseCard course={course} />
              </motion.div>
            ))
          ) : (
            <p className="col-span-full text-center text-gray-500">
              No courses found.
            </p>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default Page;
