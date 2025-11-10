/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/rules-of-hooks */
'use client'
import { Button } from '@/components/ui/button';
import { fetchCourses } from '@/redux/slice/coursesSlice';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const page = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const { items } = useSelector((state) => state.courses);

    useEffect(() => {
        if (items.length === 0) dispatch(fetchCourses());
    }, [dispatch, items.length]);

    const courses = items.find((p) => p.id === Number(id));
    if (!courses) return <p className="p-8">Loading product...</p>;



    return (
        <div className='bg-secondary'>
            <div className=" container mx-auto px-40 py-15">
                <div className='flex items-center justify-between'>
                    <div className=' w-[40%] space-y-3'>
                        <h4 className='font-semibold text-gray-500'>Introducing to our</h4>
                        <h1 className='font-semibold text-4xl text-gray-700'>{courses.title}</h1>
                        <div className='flex gap-4'>
                            <div className='border px-8 py-2 rounded-sm text-center'>
                                <h3 className='font-semibold text-gray-600'>{courses.duration}</h3>
                                <p className='text-sm text-gray-400'>Duration</p>
                            </div>
                            <div className='border px-8 py-2 rounded-sm text-center'>
                                <h3 className='font-semibold text-gray-600'>{courses.lectures}+</h3>
                                <p className='text-sm text-gray-400'>Lectures</p>
                            </div>
                            <div className='border px-8 py-2 rounded-sm text-center'>
                                <h3 className='font-semibold text-gray-600'>{courses.projects}+</h3>
                                <p className='text-sm text-gray-400'>Projects</p>
                            </div>
                        </div>
                        <p className='text-sm text-gray-500'>{courses.description}</p>
                        <div className='flex  justify-between items-center'>
                            <p className='text-xl font-semibold  text-gray-700'>Course Fee: <span className='text-primary'> ${courses.offerPrice}</span> <span className='line-through ml-1 text-sm'>${courses.fee}</span></p>
                            <Button className="cursor-pointer" size={"lg"}>Enroll Now</Button>
                        </div>
                    </div>
                    <div className='w-[50%] flex justify-end'>
                        <img src={courses.img} alt={courses.title} className='rounded-md w-[80%]' />
                    </div>
                </div>
                <div className='mt-10 flex justify-between'>
                    <div className='w-[60%]'>
                        <h1 className='text-3xl font-semibold text-gray-700'>Course Overview:</h1>
                        <p className='mt-4 ml-6 mb-10 text-gray-600'>{courses.courseOverview}</p>
                        <h1 className='text-3xl font-semibold text-gray-700'>Course Details:</h1>
                        <ul className='mt-4 space-y-2 list-disc ml-10 text-gray-600'>
                            <li>{courses.courseIncludes[0]}</li>
                            <li>{courses.courseIncludes[1]}</li>
                            <li>{courses.courseIncludes[2]}</li>
                            <li>{courses.courseIncludes[3]}</li>
                            <li>{courses.courseIncludes[4]}</li>
                        </ul>
                    </div>
                    <div className='mt-10'>
                        <Link href={"https://www.hscgpa5fest.com/register"}>
                            <img src="https://tpc.googlesyndication.com/simgad/11125877057347505383" alt="" className='rounded-md w-100' />
                        </Link>
                    </div>
                </div>
                <div className='mt-10 flex justify-center items-center'>
                    <Link href={"https://www.hscgpa5fest.com/register"}>
                        <img src="https://tpc.googlesyndication.com/simgad/18289690623524841039" alt="" className='rounded-md' />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default page;