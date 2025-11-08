import React from 'react';
import {
  FaGraduationCap,
  FaLaptopCode,
  FaBriefcase,
  FaUsers,
  FaChartLine,
  FaBuilding,
} from 'react-icons/fa';

export default function AboutCard() {
  const stats = [
    { id: 1, icon: FaGraduationCap, number: '3,800+', title: 'Successful Students' },
    { id: 2, icon: FaLaptopCode, number: '2,000+', title: 'Expert Freelancers' },
    { id: 3, icon: FaBriefcase, number: '1,350+', title: 'Skilled Job Holders' },
    { id: 4, icon: FaUsers, number: '600+', title: 'Industry Expert' },
    { id: 5, icon: FaChartLine, number: '92%', title: 'Success Ratio' },
    { id: 6, icon: FaBuilding, number: '10+', title: 'Companies' },
  ];

  return (
    <section className="py-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {stats.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className="flex flex-col hover:shadow items-center text-center p-6 rounded-lg border border-gray-300 "
              >
                <div className="p-3 rounded-full bg-[#EFF6FF] mb-2">
                  <Icon className="text-3xl text-primary" />
                </div>

                <div className="text-2xl font-semibold text-primary">{item.number}</div>
                <div className="text-sm text-gray-500 mt-1">{item.title}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
