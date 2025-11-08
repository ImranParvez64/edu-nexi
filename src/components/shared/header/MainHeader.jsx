"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { FaBookOpenReader } from "react-icons/fa6";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

const MainHeader = () => {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Courses", path: "/courses" },
    { name: "Mentors", path: "/mentors" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="w-full border-b bg-white/80 backdrop-blur-md sticky top-0 z-50 shadow-sm">
      <div className="flex flex-wrap container mx-auto px-4 md:px-12 py-2 items-center justify-between">
        <div className="shrink-0">
          <Image
            src="https://i.ibb.co.com/d4LpZZcw/Adobe-Express-file-3.png"
            alt="logo"
            width={180}
            height={60}
            className="object-contain"
          />
        </div>

        <nav className="hidden lg:flex items-center gap-8 text-[16px] font-semibold">
          {navItems.map((item, index) => {
            const isActive = pathname === item.path;
            return (
              <motion.div
                key={index}
                whileHover={{ y: -2 }}
                transition={{ type: "spring", stiffness: 250 }}
                className="relative group"
              >
                <Link
                  href={item.path}
                  className={`relative py-1 transition-colors duration-300 ${
                    isActive ? "text-[#1F6CF0]" : "text-gray-700"
                  } hover:text-[#1F6CF0]`}
                >
                  {item.name}
                  <motion.span
                    layoutId="activeUnderline"
                    className={`absolute left-0 -bottom-1 h-0.5 bg-[#1F6CF0] transition-all duration-300 ${
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </Link>
              </motion.div>
            );
          })}
        </nav>

        <div className="lg:hidden flex items-center gap-4">
          <div
            className="text-3xl text-gray-700 hover:text-[#1F6CF0] transition-all duration-300 cursor-pointer"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            ☰
          </div>
        </div>

        <div className="hidden lg:flex">
          <Link href="/products">
            <Button className="bg-[#1F6CF0] hover:bg-[#1557c8] text-white gap-2">
              <FaBookOpenReader />
              Browse Our E-book
            </Button>
          </Link>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white w-full border-t border-gray-200 shadow-md">
          <div className="flex flex-col items-start gap-4 px-6 py-4">
            {navItems.map((item, index) => {
              const isActive = pathname === item.path;
              return (
                <Link
                  key={index}
                  href={item.path}
                  className={`w-full py-2 text-gray-700 transition-colors duration-300 ${
                    isActive ? "text-[#1F6CF0]" : "hover:text-[#1F6CF0]"
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              );
            })}
            <Link href="/products" className="w-full mt-2">
              <Button
                className="w-full bg-[#1F6CF0] hover:bg-[#1557c8] text-white gap-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                <FaBookOpenReader />
                Browse Our E-book
              </Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default MainHeader;
