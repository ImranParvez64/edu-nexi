// app/courses/page.jsx
import React, { Suspense } from "react";
import OthersHero from "@/components/shared/utilities/OthersHero";
import ClientCategoryHandler from "./ClientCategoryHandler"; // client component

export default function CoursesPage() {
  return (
    <div className="bg-secondary px-4 md:px-12 lg:px-24 mx-auto py-10">
      {/* Hero section */}
     <div className="mb-10">
       <OthersHero
        title="Discover Your Next Skill"
        subtitle="Unlock a wide range of practical, in-demand courses designed to align with your career goals. Whether you’re taking your first step into tech or advancing your expertise, our learning paths are crafted by industry experts to ensure you gain real-world knowledge that truly makes a difference."
      />
     </div>

      {/* Main content */}
      <Suspense fallback={<p className="text-center text-gray-500 animate-pulse">Loading courses...</p>}>
        <ClientCategoryHandler />
      </Suspense>
    </div>
  );
}
