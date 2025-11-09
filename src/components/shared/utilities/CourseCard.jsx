'use client'
import Image from 'next/image';
import React from 'react';
import { FaStar } from 'react-icons/fa6';

const CourseCard = ({ course }) => {
    return (
        <div className="w-full ">
            <div className="p-4 border rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer bg-white">
                <Image
                    src={course.img}
                    alt={course.title}
                    width={400}
                    height={200}
                    className="object-cover rounded-lg mb-4 w-full h-[180px]"
                />
                <h3 className="font-semibold text-base sm:text-lg line-clamp-1">{course.title}</h3>
                <p className="text-xs text-gray-400 font-semibold mb-2">{course.category}</p>
                <div className="mt-3 flex flex-wrap gap-2 text-xs items-center">
                    <button className="rounded-md px-2 py-1 bg-[#6E8CFB] text-white">
                        {course.duration}
                    </button>
                    <div className="text-gray-500 border flex items-center px-2 py-1 rounded-md gap-1">
                        <FaStar className="text-yellow-400" />{course.rating}
                    </div>
                    <div className="border px-2 py-1 text-gray-500 rounded-md">
                        {course.totalRatings} ratings
                    </div>
                </div>
                <div className="flex gap-2 mt-4 font-semibold text-md items-center">
                    <p className="text-[#2A3FFF]">${course.offerPrice}</p>
                    <p className="line-through text-gray-500">${course.fee}</p>
                </div>
            </div>
        </div>
    );
};

export default CourseCard;
