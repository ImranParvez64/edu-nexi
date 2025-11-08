/* eslint-disable react-hooks/exhaustive-deps */
'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { motion } from 'framer-motion';

const Quete = () => {
    const success = [
        { "id": 1, "bgColor": "#F0E8D5", "stats": { "coursesCompleted": 1200, "successRate": "85%", "title": "Career Placement in Agriculture & Nutrition", "details": "Our Agriculture & Nutrition courses ensure students gain hands-on knowledge in handling fresh produce, herbs, and organic farming practices. With a structured curriculum, our graduates are ready to enter the job market and contribute effectively in both retail and agricultural sectors, leading to a high career placement rate." } },
        { "id": 2, "bgColor": "#E7EAF3", "stats": { "coursesCompleted": 950, "successRate": "78%", "title": "Career Opportunities in Grains & Pulses Industry", "details": "Students who complete our courses in Rice, Flour & Pulses are trained in food quality assessment, storage techniques, and retail management. This practical skillset allows graduates to seamlessly enter the food supply chain sector, achieving significant placement and career growth." } },
        { "id": 3, "bgColor": "#F3E8E8", "stats": { "coursesCompleted": 870, "successRate": "82%", "title": "Career Success in Oil & Spice Management", "details": "The Oil, Ghee & Spices program equips students with knowledge about culinary oils, ghee production, spice processing, and quality control. Graduates are highly sought after in food industries, ensuring strong placement opportunities and real-world skill application." } },
        { "id": 4, "bgColor": "#D8EBE5", "stats": { "coursesCompleted": 1340, "successRate": "88%", "title": "Career in Snacks & Beverage Industry", "details": "Our Snacks & Beverages course prepares students for careers in food production, beverage management, and quality assurance. With interactive workshops and practical exposure, students achieve high employment rates in top food and beverage companies." } },
        { "id": 5, "bgColor": "#FFF3E2", "stats": { "coursesCompleted": 760, "successRate": "80%", "title": "Dairy & Bakery Career Pathways", "details": "The Dairy & Bakery program teaches students modern techniques in milk processing, cheese making, baking, and confectionery production. Graduates are well-prepared for careers in the food industry with strong placement support." } },
        { "id": 6, "bgColor": "#E8F4F8", "stats": { "coursesCompleted": 590, "successRate": "75%", "title": "Career in Meat, Fish & Egg Processing", "details": "This program provides hands-on training in meat handling, fish processing, and quality management. Students gain essential knowledge that opens opportunities in food processing units, poultry farms, and retail outlets, ensuring meaningful placements." } },
        { "id": 7, "bgColor": "#F8EDEB", "stats": { "coursesCompleted": 910, "successRate": "83%", "title": "Household & Cleaning Product Career Opportunities", "details": "Graduates of the Household & Cleaning program are trained in detergent formulation, cleaning product management, and retail operations. Their practical skills and industry exposure contribute to high placement success." } },
        { "id": 8, "bgColor": "#E9F7EF", "stats": { "coursesCompleted": 1030, "successRate": "87%", "title": "Career in Personal Care & Hygiene Industry", "details": "Students of the Personal Care program learn soap making, shampoo formulation, oral care, and skincare product development. This leads to high employability in cosmetic and personal care sectors with strong placement rates." } },
        { "id": 9, "bgColor": "#FDEEF4", "stats": { "coursesCompleted": 680, "successRate": "76%", "title": "Career in Baby & Kids Products", "details": "The Baby & Kids program equips students with knowledge about baby food, diapers, and baby skincare products. Graduates can successfully join retail, manufacturing, and childcare-related industries, ensuring a solid career placement rate." } },
        { "id": 10, "bgColor": "#EEF6FF", "stats": { "coursesCompleted": 840, "successRate": "79%", "title": "Stationery & Miscellaneous Product Careers", "details": "Our Stationery & Others program provides hands-on experience in stationery management, battery & bulb retail, and kitchen accessories. Students are well-prepared for jobs in retail and distribution sectors, ensuring consistent career placement." } }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 },
        },
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100 } },
    };

    return (
        <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="container mx-auto relative px-6 lg:px-12 py-10"
        >
            <Swiper
                spaceBetween={25}
                slidesPerView={3}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                modules={[Navigation, Autoplay]}
                breakpoints={{
                    320: { slidesPerView: 1 },
                    640: { slidesPerView: 1 },
                    768: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 },
                    1280: { slidesPerView: 4 },
                }}
            >
                {success.map(item => (
                    <SwiperSlide key={item.id}>
                        <motion.div
                            variants={cardVariants}
                            whileHover={{ scale: 1.03 }}
                            className="p-6 rounded-2xl shadow-md flex flex-col justify-between h-[280px]"
                            style={{ backgroundColor: item.bgColor }}
                        >
                            <div>
                                <h3 className="font-semibold text-base mb-2">{item.stats.title}</h3>
                                <p className="text-sm leading-relaxed line-clamp-4">{item.stats.details}</p>
                            </div>
                            <div className="flex justify-between items-center text-sm font-medium mt-4">
                                <span>Completed: {item.stats.coursesCompleted}</span>
                                <span>Success: {item.stats.successRate}</span>
                            </div>
                        </motion.div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </motion.div>
    );
};

export default Quete;
