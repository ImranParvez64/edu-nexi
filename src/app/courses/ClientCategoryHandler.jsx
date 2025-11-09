// app/courses/ClientCategoryHandler.jsx
"use client";

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "next/navigation";
import { fetchCourses } from "@/redux/slice/coursesSlice";
import { fetchCategories } from "@/redux/slice/categoriesSlice";
import CourseCard from "@/components/shared/utilities/CourseCard";
import FilterSidebar from "@/app/courses/FilterSidebar";

export default function ClientCategoryHandler() {
  const dispatch = useDispatch();
  const searchParams = useSearchParams();
  const categoryFromUrl = searchParams.get("category");

  const { items: courses, loading: coursesLoading } = useSelector(
    state => state.courses
  );
  const { items: categories, loading: catLoading } = useSelector(
    state => state.categories
  );
  const { selectedCategory, searchQuery } = useSelector(
    state => state.filter
  );

  // Fetch courses and categories once
  useEffect(() => {
    if (!categories.length) dispatch(fetchCategories());
    if (!courses.length) dispatch(fetchCourses());
  }, [dispatch]);

  // Set category from URL
  useEffect(() => {
    if (categoryFromUrl) {
      dispatch({ type: "filter/setSelectedCategory", payload: categoryFromUrl });
    }
  }, [categoryFromUrl, dispatch]);

  // Filter courses
  const filteredCourses = courses.filter(course => {
    const matchCategory =
      selectedCategory === "All" || course.category === selectedCategory;
    const matchSearch = course.title
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    return matchCategory && matchSearch;
  });

  return (
    <div className="flex flex-col md:flex-row gap-10">
      {/* Sidebar */}
      <div className="w-full md:w-[35%] lg:w-[25%]">
        <FilterSidebar categories={categories} loading={catLoading} />
      </div>

      {/* Courses */}
      <div className="w-full md:w-[65%] lg:w-[75%] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
        {coursesLoading ? (
          <p className="col-span-full text-center text-gray-500 animate-pulse">
            Loading courses...
          </p>
        ) : filteredCourses.length > 0 ? (
          filteredCourses.map(course => (
            <CourseCard key={course.id} course={course} />
          ))
        ) : (
          <p className="col-span-full text-center text-gray-500">
            No courses found.
          </p>
        )}
      </div>
    </div>
  );
}
