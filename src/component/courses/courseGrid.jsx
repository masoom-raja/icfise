import { Link } from "wouter";
import dip_industrial from "../../asset/dip_in_fire.jpg";
import dip_construction from "../../asset/dip-in-construction.jpg"
import Adv_dip from "../../asset/advance-diploma-industrial.jpg"
import pg_dip_industrial from "../../asset/pg-diploma-industrial.jpg"
import pg_dip_fire from "../../asset/pg_dp_in_fire.jpg"
import iosh from "../../asset/IOSH.jpg"
import confind from "../../asset/confined_space.jpg"
import osha from "../../asset/osha-30h.jpg"
import first_aid from "../../asset/first-aid-cpr.jpg"
import basic_scaf from "../../asset/basic-scaff.jpg"

export default function courseGrid() {

     const courses = [
        {
          Img: dip_industrial,
          title: "Diploma in Industrial Safety & Fire management",
          benefits:
            "High job demand, Industry certification, Practical training, Career growth",
          href:"/dip-industrial-fire"
        },
          {
          Img: dip_construction,
          title: "Diploma in Construction Safety and Health Management",
          benefits:
            "Practical training, High job demand, Emergency response skills, Career opportunities",
            href:"/dip-construction-health"
        },
        {
          Img: Adv_dip,
          title: "Advance Diploma in Industrial Safety",
          benefits:
            "High salary roles, Advanced expertise, Leadership opportunities, Global career scope",
            href:"/advanceDiploma"
        },
          {
          Img: pg_dip_industrial,
          title: "PG Diploma in Industrial Safety management",
          benefits:
            "Advanced expertise, High career growth, Industry recognition, Leadership opportunities",
            href:"/pg_Dip_industrial"
        },
        {
          Img: pg_dip_fire,
          title: "PG Diploma in Fire and Safety management",
          benefits:
            "Advanced expertise, High career growth, Industry recognition, Leadership opportunities",
            href:"/pg_Dip_fire"
        },
        {
          Img: iosh,
          title: "IOSH Managing Safely",
          benefits:
            "Global certification, Career advancement, Practical safety skills, Improved workplace safety",
            href:"/iOSH"
        },
          {
          Img: confind,
          title: "Confined Space Safety",
          benefits:
            "Hazard awareness, Safety compliance, Practical skills, Industrial job opportunities",
            href:"/confinedSpace"
        },
     
        {
          Img: osha,
          title: "OSHA 30 HOURS - General Industry Training",
          benefits:
            "Global certification, Industry recognition, Compliance knowledge, Enhanced job opportunities",
            href:"/oSHA"
        },
      
      
         {
          Img: first_aid,
          title: "First Aid & CPR Training",
          benefits:
            "Life-saving skills, Emergency readiness, Workplace safety compliance, Increased confidence",
            href:"/firstAid"
        },
         {
          Img: basic_scaf,
          title: "Basic Scaffolding Competent Person",
          benefits:
            "Site safety expertise, Risk prevention, High demand skill, Career opportunities",
            href:"/BasicScaf"
        },
      ];

  return (
      <section className="py-10 bg-white">
              <div className="container mx-auto px-4">
         <p className="font-display text-4xl font-bold text-[#1e3a5f] mb-2 text-center py-2 md:pt-4">Popular Courses</p>
         <h3 className="font-display text-2xl font-bold text-[#d97706] mb-2 text-center">Training Available</h3>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {courses.map((courses, index) => {
                    return (
                      <div
                        key={index}
                        className="p-8 bg-gradient-to-br from-[#f9fafb] to-[#f3f4f6] rounded-lg border border-gray-200 hover:border-[#d97706]/50 hover:shadow-xl transition-all duration-300 group hover:-translate-y-2 flex flex-col"
                      >
                        {/* Icon */}
                        <img
                          src={courses.Img}
                          className="w-full h-full text-[#d97706] mb-1 group-hover:scale-110 transition-transform duration-300"
                        />
    
                        {/* Title */}
                        <h3 className="sm:text-2xl font-bold text-[#1e3a5f]">
                          {courses.title}
                        </h3>
    
                        {/* Description */}
                        {/* <p className="text-gray-700 text-sm">
                  {courses.description}
                </p> */}
    
                        {/* List */}
                        {/* <ul className="space-y-2 mb-4">
                  {service.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#d97706] mt-1" />
                      <span className="text-sm text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul> */}
    
                        {/* Benefits */}
                        <p className="text-xs text-gray-600 mb-2 py-2">
                          <strong>Key Benefits:</strong> {courses.benefits}
                        </p>
    
                        {/* Buttons (BOTTOM FIX) */}
                        <div className="mt-auto flex gap-1">
                          <Link href='/contact' className="flex-1 px-1 py-2 bg-[#0B3C5D] text-white rounded hover:bg-[#092c44] transition text-center">
                            Enquiry Now
                          </Link>
    
                          <Link className="flex-1 px-1 py-2 border border-[#0B3C5D] text-[#0B3C5D] rounded hover:bg-[#0B3C5D] hover:text-white transition text-center"
                           href={courses.href}>
                            View Course
                          </Link>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </section>
  )
}

