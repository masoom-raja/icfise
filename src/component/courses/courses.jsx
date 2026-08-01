import {
  Handshake,
} from "lucide-react";
import { Link } from "wouter";
import Navbar from "../header";
import Footer from "../footer";
import homeImg from "../../assets/about.jpg";
import bgImg from "../../assets/fireSafety.jpg";
import CourseGrid from "./courseGrid";
import nausad from '../../asset/Nausad_ali.jpg'
import rehan from '../../asset/Rehan_fazal.jpg'
import talib from '../../asset/md_Talib.jpg'
import usman from '../../asset/usman-ali.jpg'
import sunny from '../../asset/Sunny Raja.jpg'
import upper from '../../asset/upper-banner.jpg'
import course_brocher from '../../asset/course-broucher.jpg'

export default function Courses() {
 
  const students = [
    {
      name: "Naushad Ali",
      role: "Safety Officer",
      company: "M S Arurag Enterprises",
      image: nausad,
    },
    {
      name: "Rehan Fazal",
      role: "Safety Officer",
      company: "Stencil Engineering PVT LTD",
      image: rehan,
    },
    {
      name: "Md Talib",
      role: "Safety Supervisor",
      company: "Sam India PVT LTD",
      image: talib,
    },
    {
      name: "Usman Ali",
      role: "Safety Engineer",
      company: "Adani Power Plant",
      image: usman,
    },
    {
      name: "Sunny Raja",
      role: "Safety Supervisor",
      company: "Adani Power Plant",
      image: sunny,
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-[#1e3a5f] to-[#0f172a] text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <h1 className="font-display text-5xl sm:text-6xl font-bold mb-6">
                Our Training Programs (ICFISE)
              </h1>
              <p className="text-xl text-gray-200">
                Comprehensive safety training solutions designed to prepare
                students for real-world industrial environments with practical
                knowledge and professional excellence.
              </p>
            </div>
          </div>
        </section>

        {/* Course Grid */}
       <CourseGrid/>

        {/* Process Section */}
        <section className="py-10 bg-gradient-to-br from-[#f9fafb] to-[#f3f4f6]">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-display text-4xl font-bold text-[#1e3a5f] mb-12 text-center">
                Our Admission Process (ICFISE)
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
                {[
                  {
                    step: "1",
                    title: "Enquiry",
                    desc: "Get complete details about courses, fees, and career opportunities.",
                  },
                  {
                    step: "2",
                    title: "Registration",
                    desc: "Fill out the admission form and submit required documents.",
                  },
                  {
                    step: "3",
                    title: "Admission Confirmation",
                    desc: "Complete fee payment and confirm your enrollment.",
                  },
                  {
                    step: "4",
                    title: "Training Begins",
                    desc: "Start your classes with practical and industry-focused training.",
                  },
                  {
                    step: "5",
                    title: "Certification & Placement",
                    desc: "Get certified and receive placement assistance for your career.",
                  },
                ].map((process, index) => (
                  <div key={index} className="relative h-ull">
                    <div className="p-6 bg-white rounded-lg border border-gray-200 text-center hover:border-[#d97706]/50 hover:shadow-lg transition-all duration-300 h-full">
                      <div className="w-12 h-12 bg-[#d97706] text-white rounded-full flex items-center justify-center font-display font-bold text-xl mx-auto mb-4">
                        {process.step}
                      </div>
                      <h3 className="font-display font-bold text-[#1e3a5f] mb-2">
                        {process.title}
                      </h3>
                      <p className="text-gray-600 text-sm">{process.desc}</p>
                    </div>
                    {index < 4 && (
                      <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-0.5 bg-[#d97706] transform -translate-y-1/2"></div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        {/* Success Story */}
        <section className="py-16 bg-gradient-to-r from-[#1e3a5f] to-[#0f172a] text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="font-display text-4xl font-bold mb-2">
                Our Placed Students
              </h2>
              <p className="text-xl text-gray-300 mb-2">
                Successfully placed in top companies
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 py-4">
                {students.map((student, i) => (
                  <div
                    key={i}
                    className=" bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg hover:bg-white/15 transition-all duration-300 hover:border-[#d97706]/50 group hover:shadow-2xl hover:-translate-y-2 bg-cover bg-center p-1 text-center"
                  >
                    {/* Image */}
                    <img
                      src={student.image}
                      alt={student.name}
                      className="w-fit h-fit mx-auto object-cover mb-4 p-2"
                    />

                    {/* Info */}
                    <h3 className="text-lg font-semibold text-gray-300]">
                      {student.name}
                    </h3>

                    <p className="text-sm text-gray-300">{student.role}</p>

                    <p className="text-gray-300 font-medium mt-1 text-lg">
                      {student.company}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Why Our Services Section */}
        <section
          className="py-20 bg-gradient-to-br from-[#1e3a5f] to-[#0f172a] text-[#1e3a5f] bg-cover"
          style={{ backgroundImage: `url(${bgImg})` }}
        >
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-display text-4xl font-bold mb-12 text-center">
                Why Choose Our Institute (ICFISE)
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[
                  {
                    title: "Expert Trainers",
                    desc: "Our instructors are experienced safety professionals with strong industry knowledge and practical expertise",
                  },
                  {
                    title: "Industry-Oriented Training",
                    desc: "We provide practical, real-world training aligned with current industrial safety standards and requirements",
                  },
                  {
                    title: "Modern Learning Approach",
                    desc: "We use updated tools, case studies, and hands-on demonstrations to enhance learning effectiveness",
                  },
                  {
                    title: "Placement Assistance",
                    desc: "Dedicated support for resume building, interview preparation, and job placement in top industries",
                  },
                  {
                    title: "Certification & Recognition",
                    desc: "Courses designed as per industry standards to ensure valuable certification and career growth",
                  },
                  {
                    title: "Affordable Fees",
                    desc: "Quality training at competitive fees with complete transparency and no hidden charges",
                  },
                ].map((reason, index) => (
                  <div
                    key={index}
                    className="p-6 bg-white/20 backdrop-blur-sm border border-white/20 rounded-lg hover:bg-gray/15 hover:border-[#1e3a5f]/50 transition-all duration-300"
                  >
                    <h3 className="font-display text-xl font-bold mb-2">
                      {reason.title}
                    </h3>
                    <p className="text-[#1e3a5f]">{reason.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Welcome section */}
        <section className="relative overflow-hidden py-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-center">
            {/* Right Image */}
            <div className="relative sm:h-90  sm:min-h-90 lg:min-h-screen overflow-hidden group sm:pt-10">
              <img
                src={upper}
                alt="Safety image"
                className="p-2 sm:w-140 sm:h-140 lg:h-fit object-cover group-hover:scale-105 transition-transform duration-500"
              />
               <img
                src={course_brocher}
                alt="Safety image"
                className="p-2 sm:w-140 sm:h-140 lg:h-fit object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#1e3a5f]/30 via-transparent to-transparent"></div>
            </div>
            {/* Left Content */}
            <div className="px-6 sm:px-8 lg:px-12 py-5 bg-gradient-to-br ">
              <div className="max-w-xl ">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 bg-[#d97706]/10 border border-[#d97706]/20 rounded-full px-4 py-2 lg:my-4">
                  <span className="text-lg font-semibold text-[#d97706]">
                    <Handshake className="inline" /> Welcome To{" "}
                  </span>
                </div>
                {/* <h1 className="font-display text-4xl sm:text-4xl lg:text-5xl font-bold text-[#1e3a5f] leading-tight mb-2">
                           Indian College of Fire and Industrial Safety Engineering
                        </h1> */}
                <h1 className="font-display text-3xl sm:text-3xl lg:text-4xl font-bold text-[#1e3a5f] leading-tight mb-2">
                  {" "}
                  Indian College of Fire and Industrial Safety Engineering
                </h1>
                <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                  Indian College of Fire and Industrial Safety Engineering (ICFISE) is a leading
                  safety training institute focused on developing skilled
                  professionals for industries like construction, oil & gas, and
                  manufacturing. We offer industry-oriented courses with a
                  strong focus on practical training, helping students gain
                  real-world knowledge and job-ready skills. Our mission is to
                  build competent safety officers and engineers who can
                  effectively manage workplace risks and ensure safe working
                  environments. With experienced trainers and modern teaching
                  methods, ICFISE prepares students for successful careers with
                  strong placement support.
                 <b> <br />
                   Main Branch - Main Road Basantpur,
Umashankar Complex (Near Machhli market),
Siwan Bihar,841406
                  <br />
                  Contact: +91 86995 65748
                  <br />
                  Email: icfisehse@gmail.com
                  </b>
                </p>
                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <Link
                    href="/courses"
                    className="bg-[#d97706] hover:bg-[#b45309] text-white px-8 py-6 text-base font-semibold rounded-lg transition-all duration-300 hover:shadow-xl hover:scale-105"
                  >
                    View All Courses
                  </Link>
                  <Link
                    href="/contact"
                    variant="outline"
                    className="border-2 border-[#1e3a5f] text-[#1e3a5f] hover:bg-[#1e3a5f] hover:text-white px-8 py-6 text-base font-semibold rounded-lg transition-all duration-300"
                  >
                    contact us
                  </Link>
                </div>
                {/* Trust Indicators */}
                
              </div>
            </div>
          </div>

          {/* Diagonal Divider */}
          <div
            className="absolute bottom-0 left-0 right-0 h-20 bg-white"
            style={{
              clipPath: "polygon(0 30%, 100% 0, 100% 100%, 0 100%)",
            }}
          ></div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
