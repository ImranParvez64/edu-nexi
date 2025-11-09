"use client";
import React from "react";
import { motion } from "framer-motion";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt, FaMapMarkerAlt, FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import OthersHero from "@/components/shared/utilities/OthersHero";

const page = () => {
  const items = [
    {
      id: 1,
      icon: <MdEmail />,
      title: "Contact With Gmail",
      info: "info@edunexi.com",
    },
    {
      id: 2,
      icon: <FaPhoneAlt />,
      title: "Contact With Phone",
      info: "+88 01912300964",
    },
    {
      id: 3,
      icon: <FaMapMarkerAlt />,
      title: "Location",
      info: "Daisy Garden, House 14 (Level-5), Block A, Main Road, Banasree, Dhaka",
    },
  ];

  return (
    <div className="bg-secondary py-10 overflow-hidden">
      <div className="container mx-auto px-4 md:px-12">
        {/* ===== Hero Section ===== */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <OthersHero
            title={"Connect With Our Team"}
            subtitle={
              "Unlock a wide range of practical, in-demand courses designed to match your career goals. Whether you're taking your first step into tech or advancing your skills, our learning paths are crafted by industry experts to ensure you gain real-world knowledge that truly matters."
            }
          />
        </motion.div>

        {/* ===== Contact Info Cards ===== */}
        <motion.div
          className="grid md:grid-cols-3 gap-6 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}
        >
          {items.map((item) => (
            <motion.div
              key={item.id}
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="p-8 flex flex-col justify-center items-center text-center border-gray-200 border-2 rounded-2xl  transition-all"
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-4xl text-primary mb-3">{item.icon}</div>
              <h2 className="font-semibold text-gray-800">{item.title}</h2>
              <p className="text-gray-700 mt-1">{item.info}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* ===== Contact Form + Map ===== */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Contact Form */}
          <motion.div
            className=" p-8 rounded-2xl  border-gray-200 border-2"
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">
              Send Us a Message
            </h2>
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:border-primary"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:border-primary"
                />
              </div>
              <input
                type="text"
                placeholder="Subject"
                className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:border-primary"
              />
              <textarea
                rows="4"
                placeholder="Your message here..."
                className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:border-primary"
              ></textarea>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="bg-primary text-white font-medium py-3 px-6 rounded-lg w-full hover:bg-primary/90 transition"
              >
                ✉️ Send Message
              </motion.button>
            </form>
          </motion.div>

          {/* Google Map */}
          <motion.div
            className="rounded-2xl overflow-hidden shadow-sm"
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3648.742289314516!2d90.42624637528108!3d23.865479778586804!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c7d1a9c8c22d%3A0xa9a8d8b203a9b6c8!2sBanasree!5e0!3m2!1sen!2sbd!4v1698920910561!5m2!1sen!2sbd"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </motion.div>
        </div>

        {/* ===== Follow Us Section ===== */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
          <div className="flex justify-center gap-5 text-primary text-2xl">
            <motion.a whileHover={{ scale: 1.2 }} href="#"><FaFacebookF /></motion.a>
            <motion.a whileHover={{ scale: 1.2 }} href="#"><FaInstagram /></motion.a>
            <motion.a whileHover={{ scale: 1.2 }} href="#"><FaLinkedinIn /></motion.a>
            <motion.a whileHover={{ scale: 1.2 }} href="#"><FaTwitter /></motion.a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default page;
