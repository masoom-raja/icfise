import { ChevronRight } from "lucide-react";
import { Link } from "wouter";

// const courses = [
//   "Diploma in Industrial Safety & Fire management",
//   "Diploma in Construction Safety and Health Management",
//   "Advance Diploma in Industrial Safety",
//   "PG Diploma in Industrial Safety management",
//   "PG Diploma in Fire and Safety management",
//   "IOSH Managing Safely",
//   "Confined Space Safety",
//   "OSHA 30 HOURS - General Industry Training",
//   "First Aid & CPR Training",
//   "Basic Scaffolding Competent Person",
// ];

 const courses = [
        {
          title: "Diploma in Industrial Safety & Fire management",
          href:"/dip-industrial-fire"
        },
          {
          title: "Diploma in Construction Safety and Health Management",
             href:"/dip-construction-health"
        },
        {
         
          title: "Advance Diploma in Industrial Safety",
          href:"/advanceDiploma"
        },
          {
          title: "PG Diploma in Industrial Safety management",
           href:"/pg_Dip_industrial"
        },
        {
           title: "PG Diploma in Fire and Safety management",
           href:"/pg_Dip_fire"
        },
        {
          title: "IOSH Managing Safely",
            href:"/iOSH"
        },
          {
          title: "Confined Space Safety",
            href:"/confinedSpace"
        },
     
        {
          title: "OSHA 30 HOURS - General Industry Training",
            href:"/oSHA"
        },
      
      
         {
          title: "First Aid & CPR Training",
            href:"/firstAid"
        },
         {
          title: "Basic Scaffolding Competent Person",
          href:"/BasicScaf"
        },
      ];
function PopularCourses() {
  return (
    <section className="py-2 bg-gray-50">
      <div className="container mx-auto px-4 max-w-2xl">

        {/* Title */}
        <h2 className="text-3xl font-bold text-[#1e3a5f] mb-8 text-center">
          Popular Courses
        </h2>

        {/* List */}
        <div className="space-y-4">
          {courses.map((course, index) => (
            <Link
              key={index}
              to={course.href}
              className="flex items-center justify-between p-4 bg-white border rounded-lg shadow-sm hover:shadow-md hover:border-[#d97706]/50 transition-all duration-300 group"
            >
              <span className="text-gray-800 font-medium">
                {course.title}
              </span>

              <ChevronRight className="w-5 h-5 text-[#0B3C5D] group-hover:translate-x-1 transition" />
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}

export default PopularCourses;