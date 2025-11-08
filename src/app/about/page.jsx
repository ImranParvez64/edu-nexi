import AboutCard from '@/components/shared/pages/AboutPage/AboutCard';
import OurDream from '@/components/shared/pages/AboutPage/OurDream';
import OurVision from '@/components/shared/pages/AboutPage/OurVision';
import React from 'react';

const page = () => {
    return (
        <div className='bg-secondary'>
            <div className='container mx-auto px-12 py-10 '>
                <OurDream></OurDream>
                <AboutCard></AboutCard>
                <OurVision></OurVision>
            </div>

        </div>
    );
};

export default page;