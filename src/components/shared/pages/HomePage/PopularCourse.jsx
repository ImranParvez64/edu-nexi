/* eslint-disable react-hooks/rules-of-hooks */
'use client';
import React, { useEffect, useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCourses } from '@/redux/slice/coursesSlice';
import { fetchCategories } from '@/redux/slice/categoriesSlice';
import Title from '../../utilities/Title';
import CourseCard from '../../utilities/CourseCard';
import { motion } from "motion/react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const PopularCourse = () => {
    const dispatch = useDispatch();
    const { items: categories, loading: catLoading } = useSelector((state) => state.categories);
    const { items: courses, loading: prodLoading } = useSelector((state) => state.courses);

    const [selectedCategory, setSelectedCategory] = useState('');

    useEffect(() => {
        dispatch(fetchCategories());
        dispatch(fetchCourses());
    }, [dispatch]);

    const filteredCourses =
        selectedCategory === ''
            ? courses
            : courses.filter((course) => course.category === selectedCategory);

    // refs for navigation
    const prevRef = useRef(null);
    const nextRef = useRef(null);
    const catPrevRef = useRef(null);
    const catNextRef = useRef(null);

    const [courseSwiper, setCourseSwiper] = useState(null);
    useEffect(() => {
        if (courseSwiper && prevRef.current && nextRef.current) {
            courseSwiper.params.navigation.prevEl = prevRef.current;
            courseSwiper.params.navigation.nextEl = nextRef.current;
            courseSwiper.navigation.init();
            courseSwiper.navigation.update();
        }
    }, [courseSwiper]);
    if (catLoading || prodLoading) return <p className="text-center py-10">Loading...</p>;

    // 👇 Fix Swiper ref binding timing

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="container mx-auto px-4 md:px-12 py-10 relative "
        >
            <div className='bg-secondary p-20 rounded-4xl'>
                <Title
                    title="Popular Courses"
                    subtitle="From critical skills to technical topics, Edunexi supports your professional development."
                />

                {/* 🔹 Category Slider Section */}
                <div className="mt-8 border-b pb-3">
                    <div className="flex justify-between items-center mb-3">
                        {/* Category Swiper */}
                        <div className="flex-1 min-w-0 overflow-hidden">
                            <Swiper
                                modules={[Navigation]}
                                slidesPerView="auto"
                                spaceBetween={12}
                                navigation={{
                                    prevEl: catPrevRef.current,
                                    nextEl: catNextRef.current,
                                }}
                                onBeforeInit={(swiper) => {
                                    swiper.params.navigation.prevEl = catPrevRef.current;
                                    swiper.params.navigation.nextEl = catNextRef.current;
                                }}
                                className="flex items-center"
                            >
                                <SwiperSlide style={{ width: 'auto' }}>
                                    <button
                                        onClick={() => setSelectedCategory('')}
                                        className={`px-4 py-2 rounded-t-md transition-all duration-300 whitespace-nowrap ${selectedCategory === ''
                                            ? 'text-blue-600 border-b-4 border-blue-600 font-semibold'
                                            : 'text-gray-700 hover:text-blue-600'
                                            }`}
                                    >
                                        All
                                    </button>
                                </SwiperSlide>
                                {categories.map((category) => (
                                    <SwiperSlide key={category.id} style={{ width: 'auto' }}>
                                        <button
                                            onClick={() => setSelectedCategory(category.name)}
                                            className={`px-4 py-2 rounded-t-md transition-all duration-300 whitespace-nowrap ${selectedCategory === category.name
                                                ? 'text-blue-600 border-b-4 border-blue-600 font-semibold'
                                                : 'text-gray-700 hover:text-blue-600'
                                                }`}
                                        >
                                            {category.name}
                                        </button>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>

                        {/* 🔹 Category Nav Buttons */}
                        <div className="shrink-0 flex gap-2 ml-3">
                            <button
                                ref={catPrevRef}
                                className="w-8 h-8 md:w-9 md:h-9 rounded-full bg-gray-200 hover:bg-blue-600 hover:text-white flex justify-center items-center transition-all duration-300 shadow-sm"
                            >
                                <FaChevronLeft size={14} />
                            </button>
                            <button
                                ref={catNextRef}
                                className="w-8 h-8 md:w-9 md:h-9 rounded-full bg-gray-200 hover:bg-blue-600 hover:text-white flex justify-center items-center transition-all duration-300 shadow-sm"
                            >
                                <FaChevronRight size={14} />
                            </button>
                        </div>
                    </div>
                </div>

                {/* 🔹 Course Swiper */}
                <div className="relative mt-10">
                    <button
                        ref={prevRef}
                        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-gray-200 hover:bg-blue-600 hover:text-white flex justify-center items-center transition-all duration-300 shadow-md"
                    >
                        <FaChevronLeft />
                    </button>

                    <Swiper
                        modules={[Navigation]}
                        onSwiper={setCourseSwiper} // 👈 capture swiper instance
                        spaceBetween={20}
                        slidesPerView={1}
                        breakpoints={{
                            640: { slidesPerView: 1 },
                            768: { slidesPerView: 2 },
                            1024: { slidesPerView: 3 },
                            1280: { slidesPerView: 4 },
                        }}
                        className="mt-8"
                    >
                        {filteredCourses.length > 0 ? (
                            filteredCourses.map((course) => (
                                <SwiperSlide key={course.id}>
                                    <motion.div whileHover={{ scale: 1.03 }} transition={{ duration: 0.3 }}>
                                        <CourseCard course={course} />
                                    </motion.div>
                                </SwiperSlide>
                            ))
                        ) : (
                            <p className="text-center text-gray-500 py-10 col-span-3">
                                No courses found for this category.
                            </p>
                        )}
                    </Swiper>

                    <button
                        ref={nextRef}
                        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-gray-200 hover:bg-blue-600 hover:text-white flex justify-center items-center transition-all duration-300 shadow-md"
                    >
                        <FaChevronRight />
                    </button>
                </div>
            </div>
        </motion.div>
    );
};

export default PopularCourse;
