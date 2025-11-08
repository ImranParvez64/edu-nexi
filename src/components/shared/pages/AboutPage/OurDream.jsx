import Image from 'next/image';
import React from 'react';

const OurDream = () => {
    return (
        <div className='flex gap-10'>
            <div className='flex gap-4 w-1/2'>
                <div>
                    <Image
                        src={"https://bdcalling-academy.netlify.app/assets/02-CXv_Hool.jpg"}
                        alt='pic'
                        width={350}
                        height={480}
                        className='rounded-md'
                    ></Image>
                </div>
                <div className='flex flex-col gap-4'>
                    <div>
                        <Image
                            src={"https://bdcalling-academy.netlify.app/assets/022-BMf3KZSU.jpg"} alt='pic'
                            width={350}
                            height={240}
                            className='rounded-md'
                        ></Image>
                    </div>
                    <div>
                        <Image
                            src={"https://bdcalling-academy.netlify.app/assets/033-BNEOtBzJ.jpg"} alt='pic'
                            width={350}
                            height={240}
                            className='rounded-md'
                        ></Image>
                    </div>
                </div>
            </div>
            <div className='w-1/2 flex flex-col gap-3'>
                <h1 className='text-4xl font-semibold text-gray-700'>Our Dream <span className='text-yellow-500'>Our Purpose</span></h1>
                <p className='text-primary/80 font-bold mb-4'>Hub of skill development. We are committed to building a skilled and digitally empowered Bangladesh.</p>
                <p className='text-gray-600 mb-4'>Our courses cover a wide range of in-demand IT fields, including web development, software development, networking, cybersecurity, database management, multimedia, programming, marketing, and design. Whether you’re a student, professional, entrepreneur, or homemaker looking to upskill, our flexible training programs are designed to help you achieve your goals.

                </p>
                <p className='text-gray-600 mb-4'>
                    At Bdcalling Academy, we believe in practical learning, industry-relevant training, and a supportive community. Our mission is to bridge the skills gap, foster innovation, and create opportunities for the next generation of digital pioneers.

                </p>
                <p className='text-gray-600 mb-4'>
                    We’re the best place to build your IT career! We offer a variety of expert-led courses to boost your tech skills and help you grow. Learn from real-world professionals, gain hands-on experience, and turn your dreams into reality. Start your journey with Bdcalling Academy today!
                </p>

            </div>
        </div>
    );
};

export default OurDream;