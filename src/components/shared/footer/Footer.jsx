'use client'
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { motion } from "framer-motion";
import { FaFacebookSquare, FaInstagramSquare, FaLinkedin, FaYoutube, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
    const linkVariants = {
        hover: {
            scale: 1.05,
            color: "#2563eb",
            transition: { type: "spring", stiffness: 300 },
        },
    };

    return (
        <div className='bg-accent border-t'>
            <div className='container mx-auto px-6 md:px-12 py-10'>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 border-b mb-10 pb-10 gap-10'>
                    {/* Logo & About */}
                    <div className='lg:col-span-2'>
                        <Image
                            src="https://i.ibb.co.com/d4LpZZcw/Adobe-Express-file-3.png"
                            alt="logo"
                            width={180}
                            height={60}
                            className="object-contain"
                        />
                        <p className='text-md mt-5 text-gray-500'>
                            Edunexi is one of Bangladesh’s top online learning platforms, providing high-quality courses designed to help you build practical skills and achieve your career goals.
                        </p>
                        <div className='flex text-3xl gap-4 mt-4 text-gray-700'>
                            <motion.div whileHover={{ scale: 1.2, color: "#2563eb" }}>
                                <Link href="https://www.facebook.com/"><FaFacebookSquare /></Link>
                            </motion.div>
                            <motion.div whileHover={{ scale: 1.2, color: "#2563eb" }}>
                                <Link href="https://www.linkedin.com/"><FaLinkedin /></Link>
                            </motion.div>
                            <motion.div whileHover={{ scale: 1.2, color: "#2563eb" }}>
                                <Link href="https://www.instagram.com/"><FaInstagramSquare /></Link>
                            </motion.div>
                            <motion.div whileHover={{ scale: 1.2, color: "#2563eb" }}>
                                <Link href="https://www.youtube.com/"><FaYoutube /></Link>
                            </motion.div>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className='col-span-1'>
                        <h1 className='border-b font-semibold text-gray-700 mb-5 text-xl'>Quick Links</h1>
                        <ul className='text-gray-600 space-y-2'>
                            {["Home", "About us", "Contact us", "Courses", "Blog"].map((item, i) => (
                                <motion.li key={i} variants={linkVariants} whileHover="hover" className='cursor-pointer'>
                                    <Link href="#">{item}</Link>
                                </motion.li>
                            ))}
                        </ul>
                    </div>

                    {/* Categories */}
                    <div className='col-span-1'>
                        <h1 className='border-b font-semibold text-gray-700 mb-5 text-xl'>Course Categories</h1>
                        <ul className='text-gray-600 space-y-2'>
                            {["Software Development", "Digital Marketing", "Networking", "Graphics Design", "Web Development"].map((cat, i) => (
                                <motion.li key={i} variants={linkVariants} whileHover="hover" className='cursor-pointer'>
                                    <Link href="#">{cat}</Link>
                                </motion.li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className='lg:col-span-2'>
                        <h1 className='border-b font-semibold text-gray-700 mb-5 text-xl'>Contact Info</h1>
                        <ul className='text-gray-600 space-y-3'>
                            <li className='flex items-center gap-3'>
                                <FaPhoneAlt className='text-blue-600 shrink-0' />
                                <span>+88 01912300964</span>
                            </li>
                            <li className='flex items-center gap-3'>
                                <FaEnvelope className='text-blue-600 shrink-0' />
                                <span>info@edunexi.com</span>
                            </li>
                            <li className='flex items-start gap-3'>
                                <FaMapMarkerAlt className='text-blue-600 mt-1 shrink-0' />
                                <span>Daisy Garden, House 14, Block A, Banasree, main road, Dhaka-1219</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Copyright */}
                <div className='text-center font-semibold text-gray-600 text-sm md:text-base'>
                    <p>Copyright © 2025 Edunexi. All Rights Reserved by Imran Parvez.</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;
