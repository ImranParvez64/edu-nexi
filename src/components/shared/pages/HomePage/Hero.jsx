
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import React from 'react';
import { FaBookOpen } from 'react-icons/fa';
import { TfiAgenda } from "react-icons/tfi";

const Hero = () => {
    return (
        <div className='bg-[#E6F0FF]'>
            <div className="container mx-auto px-4 md:px-12">
                <div className='flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10 lg:gap-0 py-12'>

                    {/* Left: Text Content */}
                    <div className='w-full lg:w-1/2 space-y-6 lg:space-y-8'>
                        <p className='flex items-center gap-2 text-lg font-bold'>
                            <TfiAgenda className='text-[#1F6CF0]' />
                            Unlock Your Brilliance
                        </p>
                        <h1 className='text-3xl sm:text-4xl md:text-5xl font-bold leading-[1.4]'>
                            Turn into an IT Expert & <br /> Own the <span className='text-[#1F6CF0]'>Digital Space</span>
                        </h1>
                        <p className='text-sm sm:text-base md:text-base lg:text-lg'>
                            At Edunexi IT, we aim to transform talent into valuable assets. With expert mentors and an up-to-date curriculum, we’re here to elevate your learning journey. Choose from over 45 cutting-edge courses and kickstart your path to success.
                        </p>
                        <div className='flex flex-col sm:flex-row gap-4 sm:gap-6'>
                            <Link href={'/courses'}>
                                <Button className='w-full sm:w-auto flex items-center justify-center gap-2'>
                                    <FaBookOpen /> Browse Course
                                </Button>
                            </Link>
                            <Link href={'/seminer'}>
                                <Button variant={"outline"} className='w-full sm:w-auto flex items-center justify-center gap-2'>
                                    <FaBookOpen /> Join Free Seminar
                                </Button>
                            </Link>
                        </div>
                    </div>

                    {/* Right: Video */}
                    <div className='w-full lg:w-1/2 mt-6 lg:mt-0 flex justify-center'>
                        <div className='w-full max-w-[660px] aspect-video rounded-2xl overflow-hidden border border-white'>
                            <iframe
                                className='w-full h-full'
                                src="https://www.youtube.com/embed/aaGKqW5zREU?si=xqCGttWJFNcEKDBS"
                                title="YouTube video player"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                referrerPolicy="strict-origin-when-cross-origin"
                                allowFullScreen
                            ></iframe>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Hero;
