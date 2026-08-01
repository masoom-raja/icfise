import { CheckCircle2, Users, Zap, Clock, DollarSign, Shield, Award, TrendingUp, Briefcase,Settings,BookOpen,HardHat} from "lucide-react";
import { Link } from "wouter";
import Navbar from "./header";
import homeImg from '../assets/home_IMG.png'
import bgImg from '../assets/fireSafety.jpg'
import { useState } from "react";
import Footer from './footer'
import CourseGrid from "./courses/courseGrid";
import Yousuf from '../asset/yousuf-ali.jpg'
import irfan from '../asset/irfan-alam.jpg'
import imran from '../asset/imran-ali.jpg'
import rohit from '../asset/rohit-kumar.jpg'
import amzad from '../asset/amzad_ali.jpg'


export default function Hero() {
    const students = [
  {
    name: "Yousuf Ali",
    role: "Safety Officer",
    company: "Adani Power Plant",
    image: Yousuf,
  },
  {
    name: "Amzad Ali",
    role: "HSE Engineer",
    company: "Adani power plant",
    image: amzad,
  },
  {
    name: "Irfan Ali",
    role: "Safety Supervisor",
    company: "Litura electrical technology Pvt Ltd",
    image: irfan,
  },
   {
    name: "Imran Ali",
    role: "Safety Supervisor",
    company: "Adani Power Plant",
    image: imran,
  },
   {
    name: "Rohit Kumar",
    role: "Safety Officer",
    company: "Renew Rajasthan Pvt Ltd",
    image: rohit,
  },
];
    
  const highlights = [
    { icon: Users, label: "Experienced Trainers", desc: "10+ years of industry expertise",Sub_desc:"Learn from certified safety professionals with real-world experience in construction, oil & gas, and industrial safety." },
    { icon: BookOpen, label: "Industry-Relevant Curriculum", desc: "Aligned with current safety standards",Sub_desc:"Courses are designed as per national and international safety guidelines to ensure job-ready skills." },
    { icon: HardHat, label: "Practical Training Approach", desc: "Hands-on learning with real scenarios",Sub_desc:"We focus on practical exposure, site-based case studies, and real-life hazard management training." },
    { icon: Briefcase, label: "Placement Assistance", desc: "Strong industry connections",Sub_desc:"Dedicated support for job placement with leading companies in safety and construction sectors." },
    { icon: DollarSign, label: "Affordable Course Fees", desc: "Quality education at reasonable cost",Sub_desc:"We provide professional safety training accessible to students from all backgrounds." },
    { icon:Settings,label:"Modern Training Facilities",desc:"Updated tools & learning environment",sub_desc:"Equipped with modern safety equipment, labs, and digital learning resources."}
  ];

  const stats = [
    { number: "500+", label: "Students Trained", icon:Users },
    { number: "100%", label: "Placement Assistance Rate", icon: Award },
    { number: "5+", label: "Years of Excellence", icon: TrendingUp },
    { number: "100+", label: "Industry Tie-ups", icon:Briefcase  },
  ];

  const testimonials = [
    {
      name: "Rohit Kumar",
      role: "Safety Officer",
      text: "The training at Indian College of Fire and Industrial Safety Engineering completely transformed my career. The practical sessions and expert guidance helped me secure a job immediately after completing the course.",
      rating: 5,
    },
    {
      name: "Amzad Ansari",
      role: "HSE Engineer",
      text: "Highly professional trainers and industry-relevant curriculum. The institute focuses on real-world safety practices which made me confident during interviews.",
      rating: 5,
    },
    {
      name: "Imran Ali",
      role: "Safety Supervisor",
      text: "Best institute for safety courses. The placement support and hands-on training are excellent. I highly recommend this institute to anyone serious about a career in safety",
      rating: 5,
    },
     {
      name: "Yousuf Ali",
      role: "Safety Officer",
      text: "Best institute for safety courses. The placement support and hands-on training are excellent. I highly recommend this institute to anyone serious about a career in safety",
      rating: 5,
    },
     {
      name: "Usman Ali",
      role: "Safety Officer",
      text: "Best institute for safety courses. The placement support and hands-on training are excellent. I highly recommend this institute to anyone serious about a career in safety",
      rating: 5,
    },
  ];


  const [showAll,setshowAll]=useState(false)
  const visibleReview = showAll ? testimonials : testimonials.slice(0,2)
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section - Premium Design */}
        <section className="relative overflow-hidden "
       >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-center">
            {/* Left Content */}
            <div className="px-6 sm:px-8 lg:px-12 py-5 bg-gradient-to-br ">
              <div className="max-w-xl ">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 bg-[#d97706]/10 border border-[#d97706]/20 rounded-full px-4 py-2 lg:my-4">
                  <span className="w-2 h-2 bg-[#d97706] rounded-full animate-pulse"></span>
                  <span className="text-sm font-semibold text-[#d97706]">Professional Training Institute</span>
                </div>

                {/* <h1 className="font-display text-4xl sm:text-4xl lg:text-5xl font-bold text-[#1e3a5f] leading-tight mb-2">
                   Indian College of Fire and Industrial Safety Engineering
                </h1> */}
                <h1 className="font-display text-3xl sm:text-3xl lg:text-4xl font-bold text-[#1e3a5f] leading-tight mb-2">Professional Safety Training for a Safer Future</h1>
                <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                    Get certified in Industrial Safety and build a successful career in construction, manufacturing, and industrial sectors. ICFISE provides industry-recognized training programs designed for real-world safety excellence.                </p>
                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <Link href="/courses" className="bg-[#d97706] hover:bg-[#b45309] text-white px-8 py-6 text-base font-semibold rounded-lg transition-all duration-300 hover:shadow-xl hover:scale-105">
                    View All Courses
                  </Link>
                  <Link href="/contact" variant="outline" className="border-2 border-[#1e3a5f] text-[#1e3a5f] hover:bg-[#1e3a5f] hover:text-white px-8 py-6 text-base font-semibold rounded-lg transition-all duration-300">
                    Apply Now
                  </Link>
                  
                </div>

                {/* Trust Indicators */}
                <div className="flex items-center gap-6 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#d97706]" />
                    <span>Industry Certified</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#d97706]" />
                    <span>Expert Trainers</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative h-90  min-h-90 lg:min-h-screen overflow-hidden group">
              <img
                src={homeImg}
                alt="Safety image"
                className="w-full h-full lg:h-fit object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#1e3a5f]/30 via-transparent to-transparent"></div>
            </div>
          </div>

          {/* Diagonal Divider */}
          <div className="absolute bottom-0 left-0 right-0 h-20 bg-white" style={{
            clipPath: "polygon(0 30%, 100% 0, 100% 100%, 0 100%)",
          }}></div>
        </section>

        {/* Statistics Section */}
        <section className="py-10 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div key={index} className="text-center">
                    <Icon className="w-8 h-8 text-[#d97706] mx-auto mb-3" />
                    <div className="font-display text-4xl font-bold text-[#1e3a5f] mb-2">
                      {stat.number}
                    </div>
                    <p className="text-gray-600 text-sm">{stat.label}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
  {/* Services Grid */}
      <CourseGrid/>

        {/* Company Introduction Section */}
        <section className="py-5 bg-cover"
        style={{backgroundImage:`url(${bgImg})`}}>
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-5">
                <h2 className="font-display text-2xl sm:text-5xl font-bold text-[#1e3a5f] mb-6">
                  Why Indian College of Fire and Industrial Safety Engineering?
                </h2>
                <p className="lg:text-xl text-[#1e3a5f] leading-relaxed">
                Indian College of Fire and Industrial Safety Engineering is dedicated to providing high-quality education in industrial safety, occupational health, and environmental management.                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
                <div className="p-8 bg-gradient-to-br bg-white/40 rounded-lg border border-gray-200 hover:border-[#d97706]/50 hover:shadow-lg transition-all duration-300">
                  <div className="w-12 h-12 bg-[#d97706] rounded-lg flex items-center justify-center mb-4">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-display text-2xl font-bold text-[#1e3a5f] mb-4">
                    Our Expertise
                  </h3>
                  <p className="text-[#1e3a5f] leading-relaxed ">
                    From foundational safety training to advanced professional certifications, we deliver excellence at every stage of learning. Our programs cover industrial safety, fire safety, health & environment, and specialized safety courses, with a strong track record of training and placing students across multiple industries and locations.
                  </p>
                </div>

                <div className="p-8 bg-gradient-to-br bg-white/40 rounded-lg border border-gray-200 hover:border-[#d97706]/50 hover:shadow-lg transition-all duration-300">
                  <div className="w-12 h-12 bg-[#d97706] rounded-lg flex items-center justify-center mb-4">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-display text-2xl font-bold text-[#1e3a5f] mb-4">
                    Our Commitment
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    At ICFISE, we are committed to building strong and lasting relationships with our students by providing quality training, maintaining transparency, and ensuring the highest standards of education and safety practices. We focus on timely course completion, practical learning, and career support. Your success is our achievement.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Key Highlights Section */}
        <section className="py-20 bg-gradient-to-br from-[#1e3a5f] to-[#0f172a] text-white relative overflow-hidden"  >
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#d97706]/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#d97706]/10 rounded-full blur-3xl"></div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-16">
              <h2 className="font-display text-xl sm:text-5xl font-bold mb-4">
                Why Choose Indian College of Fire and Industrial Safety Engineering?
              </h2>
              <p className="sm:text-xl text-gray-300 max-w-2xl mx-auto">
                Our commitment to professional training, industry relevance, and student success makes us a leading safety education institute.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" >
              {highlights.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div
                    key={index}
                    className="p-8 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg hover:bg-white/15 transition-all duration-300 hover:border-[#d97706]/50 group hover:shadow-2xl hover:-translate-y-2 bg-cover bg-center "
                  
                  >
                    <Icon className="w-12 h-12 text-[#d97706] mb-4 group-hover:scale-110 transition-transform duration-300" />
                    <h3 className="font-display text-xl font-bold mb-2">
                      {item.label}
                    </h3>
                    <p className="text-gray-200 text-sm mb-3">
                      {item.desc}
                    </p>
                    <p className="text-gray-300 text-sm">
                      {item.Sub_desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="font-display text-4xl sm:text-5xl font-bold text-[#1e3a5f] mb-4">
                What Our Students Say
              </h2>
              <p className="text-xl text-gray-600">
                Trusted by hundreds of successful students placed across construction, oil & gas, and industrial sectors
              </p>
            </div>
              {/* desktop view */}
              <div className="grid-cols-1 md:grid-cols-3 gap-8 hidden sm:grid ">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="p-8 bg-gradient-to-br from-[#f9fafb] to-[#f3f4f6] rounded-lg border border-gray-200 hover:border-[#d97706]/50 hover:shadow-lg transition-all duration-300"
                >
                  {/* Rating */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} className="text-[#d97706] text-lg">★</span>
                    ))}
                  </div>

                  {/* Quote */}
                  <p className="text-gray-700 mb-6 leading-relaxed italic">
                    "{testimonial.text}"
                  </p>

                  {/* Author */}
                  <div>
                    <h4 className="font-display font-bold text-[#1e3a5f]">
                      {testimonial.name}
                    </h4>
                    <p className="text-gray-600 text-sm">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              ))}
            </div>

             {/* mobile view */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:hidden">
              {visibleReview.map((testimonial, index) => (
                <div
                  key={index}
                  className="p-8 bg-gradient-to-br from-[#f9fafb] to-[#f3f4f6] rounded-lg border border-gray-200 hover:border-[#d97706]/50 hover:shadow-lg transition-all duration-300"
                >
                  {/* Rating */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} className="text-[#d97706] text-lg">★</span>
                    ))}
                  </div>

                  {/* Quote */}
                  <p className="text-gray-700 mb-6 leading-relaxed italic">
                    "{testimonial.text}"
                  </p>

                  {/* Author */}
                  <div>
                    <h4 className="font-display font-bold text-[#1e3a5f]">
                      {testimonial.name}
                    </h4>
                    <p className="text-gray-600 text-sm">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              ))}
            </div>
             {testimonials.length > 2 && (
          <div className="text-center mt-6 sm:hidden">
            <button
              onClick={() => setshowAll(!showAll)}
              className="px-6 py-2 bg-[#0B3C5D] text-white rounded sm"
            >
              {showAll ? "Show Less" : "Read More"}
            </button>
          </div>
        )}
          </div>
        </section>

        {/* Success Story */}
        <section className="py-16 bg-gradient-to-r from-[#1e3a5f] to-[#0f172a] text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="font-display text-4xl font-bold mb-2">
                Our Top Placed Students
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

              <p className="text-sm text-gray-300">
                {student.role}
              </p>

              <p className="text-gray-300 font-medium mt-1 text-lg">
                {student.company}
              </p>
            </div>
          ))}
        </div>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link href="/courses" className="bg-[#d97706] hover:bg-[#b45309] text-white px-8 py-6 text-base font-semibold rounded-lg transition-all duration-300 hover:shadow-lg hover:scale-105">
                  Enroll courses
                </Link>
                <Link href="/contact">
                  <a>
                    <button className="border-2 border-white text-white hover:bg-white hover:text-[#1e3a5f] px-8 py-6 text-base font-semibold rounded-lg transition-all duration-300 w-full">
                      Contact Us
                    </button>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
