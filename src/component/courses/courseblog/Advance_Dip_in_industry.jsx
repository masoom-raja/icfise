import { useState } from "react";
import Navbar from "../../header";
import Footer from "../../footer";
import SidebarCourses from '../sidebarCourses'
import course from "../../../asset/advance-diploma-industrial.jpg"
import Vdo from "../../../assets/vdo.mp4"
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import ContactFrom from "../../contactForm"

export default function AdvanceDiplomaIndustrial() {
    const phone ="+918699565748"
      const videos = [
        { url: Vdo },
        { url: Vdo },
        { url: Vdo },]


  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-[#1e3a5f] to-[#0f172a] text-white py-10 md:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <h1 className="font-display text-4xl sm:text-6xl font-bold md:mb-6">
                 About
              </h1>
              <p className="text-xl text-gray-200">
                  Advance Diploma in Industrial Safety
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-2 md:py-20 bg-white">
          <div className="container mx-auto px-2 md:px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-5">

{/* About course */}

 <section className="py-4 bg-gradient-to-br from-[#f9fafb] to-[#f3f4f6] col-span-2">
  <div className="container mx-auto px-4 max-w-8xl">
    <img src={course} alt="img" className="w-full h-full" />

    {/* Title */}
    <h1 className="text-3xl sm:text-5xl font-bold text-[#1e3a5f] mb-4">
      Advance Diploma in Industrial Safety
    </h1>

    {/* Intro */}
    <p className="text-gray-700 leading-relaxed mb-2">
      At <span className="font-semibold">Indian College of Fire and Industrial Safety Engineering (ICFISE)</span>, 
      the Advance Diploma in Industrial Safety is designed for individuals who want to build advanced 
      expertise in industrial safety, hazard control, and risk management. With industries becoming 
      more complex, the need for trained safety professionals is rapidly increasing across various sectors.
    </p>

    <p className="text-gray-700 leading-relaxed mb-4">
      This program focuses on developing strong technical knowledge along with practical skills required 
      to manage workplace safety effectively. Students are trained to identify hazards, implement 
      preventive measures, and ensure compliance with safety standards in real industrial environments.
    </p>

    {/* Course Details */}
    <div className="bg-white p-2 rounded-lg mb-10">
      <h2 className="text-2xl font-bold text-[#1e3a5f] mb-4">
        Course Details
      </h2>
      <ul className="space-y-2 text-gray-700">
        <li><strong>Course Name:</strong> Advance Diploma in Industrial Safety</li>
        <li><strong>Duration:</strong> 1 Year</li>
        <li><strong>Eligibility:</strong> Passed from a recognized board or equivalent qualification</li>
      </ul>
    </div>

    {/* Course Description */}
    <div className="mb-10 bg-white p-2">
      <h2 className="text-2xl font-bold text-[#1e3a5f] mb-4">
        Course Description
      </h2>
      <p className="text-gray-700 leading-relaxed">
        This course focuses on advanced industrial safety concepts including hazard identification, 
        risk assessment, accident investigation, safety audits, and regulatory compliance. Students 
        gain both theoretical knowledge and practical understanding required to manage safety operations 
        in industrial workplaces.
      </p>
    </div>

    {/* Highlights */}
    <div className="mb-10 bg-white p-2">
      <h2 className="text-2xl font-bold text-[#1e3a5f] mb-6">
        Program Highlights
      </h2>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="p-5 bg-white rounded-lg hover:border-[#d97706]/50 transition">
          <h3 className="font-bold text-[#1e3a5f] mb-2">Advanced Safety Curriculum</h3>
          <p className="text-gray-600 text-sm">
            Covers industrial safety standards, occupational health, risk management, and safety audit systems.
          </p>
        </div>

        <div className="p-5 bg-white rounded-lg hover:border-[#d97706]/50 transition">
          <h3 className="font-bold text-[#1e3a5f] mb-2">Practical Exposure</h3>
          <p className="text-gray-600 text-sm">
            Hands-on training through industrial case studies, safety drills, and real-time scenario-based learning.
          </p>
        </div>

        <div className="p-5 bg-white rounded-lg hover:border-[#d97706]/50 transition">
          <h3 className="font-bold text-[#1e3a5f] mb-2">Professional Guidance</h3>
          <p className="text-gray-600 text-sm">
            Learn from experienced trainers with strong industry knowledge in safety and risk management.
          </p>
        </div>
      </div>
    </div>

    {/* Career Opportunities */}
    <div className="mb-10">
      <h2 className="text-2xl font-bold text-[#1e3a5f] mb-4">
        Career Opportunities
      </h2>

      <ul className="grid sm:grid-cols-2 gap-3 text-gray-700">
        {[
          "Senior Safety Officer",
          "HSE Manager",
          "Industrial Safety Engineer",
          "Safety Auditor",
          "Risk Management Executive",
          "Compliance Officer",
        ].map((role, index) => (
          <li key={index} className="flex items-center gap-2">
            <span className="text-[#d97706]">✔</span> {role}
          </li>
        ))}
      </ul>
    </div>

    {/* Why Choose */}
    <div className="mb-10">
      <h2 className="text-2xl font-bold text-[#1e3a5f] mb-4">
        Why Choose This Course?
      </h2>

      <ul className="space-y-2 text-gray-700">
        <li>✔ High demand for advanced safety professionals</li>
        <li>✔ Industry-focused and practical training</li>
        <li>✔ Opportunities for higher-level roles</li>
        <li>✔ Placement support and career guidance</li>
      </ul>
    </div>

    {/* CTA */}
    <div className="flex gap-4">
      <a
        href={`tel:${phone}`}
        className="px-5 py-3 bg-[#0B3C5D] text-white rounded-lg font-semibold hover:bg-[#092c44] transition"
      >
        📞 Call Now
      </a>

      <a
        href={`https://wa.me/${phone.replace("+", "")}`}
        target="_blank"
        rel="noopener noreferrer"
        className="px-5 py-3 bg-[#25D366] text-white rounded-lg font-semibold hover:bg-[#1da851] transition"
      >
        💬 WhatsApp
      </a>
    </div>
  </div>
</section>
    <section>

              <SidebarCourses/>
              <div className="py-2"></div>
              <ContactFrom  />
              

                  {/* <p className="text-2xl text-center my-4 text-[#1e3a5f]">Our Placed Student</p>
                <div className="flex bg-gradient-to-br from-[#f9fafb] to-[#f3f4f6] rounded-lg border border-gray-200 hover:border-[#d97706]/50 hover:shadow-lg transition-all duration-300">                
                                    <Swiper
                                      spaceBetween={20}
                                      slidesPerView={1.1} // mobile
                                      breakpoints={{
                                        640: { slidesPerView: 2 },
                                        1024: { slidesPerView: 3 },
                                      }}
                                    >
                                      {videos.map((video, index) => (
                                        <SwiperSlide key={index}>
                                          <div className="w-full h-50 overflow-hidden rounded-lg bg-black">
                                            <video
                                              src={video.url}
                                              controls
                                              muted
                                              playsInline
                                              preload="metadata"
                                              className="w-50 h-50 object-cover"
                                            />
                                          </div>
                                        </SwiperSlide>
                                      ))}
                                    </Swiper>
                                  </div> */}

    </section>
  
   
    
      {/* Contact Form */}
               
              {/* Contact Information */}
              {/* <div className="lg:col-span-1">
                <h2 className="font-display text-3xl font-bold text-[#1e3a5f] mb-8">
                  Contact Information
                </h2>

                <div className="space-y-8"> */}
                  {/* Address
                  <div className="flex gap-4 p-6 bg-gradient-to-br from-[#f9fafb] to-[#f3f4f6] rounded-lg border border-gray-200 hover:border-[#d97706]/50 hover:shadow-lg transition-all duration-300">
                    <MapPin className="w-6 h-6 text-[#d97706] flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-display font-bold text-[#1e3a5f] mb-2">
                        Institute Address
                      </h3>
                      <p className="text-gray-700 text-sm">
                        F-96, Main Kalindi Kunj Road<br />
                        Near Jamia Co-Operative Bank<br />
                         New Delhi – 110025 India
                      </p>
                    </div>
                  </div>

                  {/* Phone */}
                  {/* <div className="flex gap-4 p-6 bg-gradient-to-br from-[#f9fafb] to-[#f3f4f6] rounded-lg border border-gray-200 hover:border-[#d97706]/50 hover:shadow-lg transition-all duration-300">
                    <Phone className="w-6 h-6 text-[#d97706] flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-display font-bold text-[#1e3a5f] mb-2">
                        Phone
                      </h3>
                      <a href="tel:+919876543210" className="text-gray-700 hover:text-[#d97706] transition-colors font-semibold">
                        +91 79709 67389
                      </a>
                      <p className="text-gray-600 text-sm mt-1">Available Monday To Saturday</p>
                    </div>
                  </div> */}

                  {/* Email */}
                  {/* <div className="flex gap-4 p-6 bg-gradient-to-br from-[#f9fafb] to-[#f3f4f6] rounded-lg border border-gray-200 hover:border-[#d97706]/50 hover:shadow-lg transition-all duration-300">
                    <Mail className="w-6 h-6 text-[#d97706] flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-display font-bold text-[#1e3a5f] mb-2">
                        Email
                      </h3>
                      <a href="mailto:info@buildcoreconstruction.com" className="text-gray-700 hover:text-[#d97706] transition-colors font-semibold">
                        asr.28ali@gmail.com
                      </a>
                      <p className="text-gray-600 text-sm mt-1">Response within 24 hours</p>
                    </div>
                  </div> */}

                  {/* Working Hours */}
                  {/* <div className="flex gap-4 p-6 bg-gradient-to-br from-[#f9fafb] to-[#f3f4f6] rounded-lg border border-gray-200 hover:border-[#d97706]/50 hover:shadow-lg transition-all duration-300">
                    <Clock className="w-6 h-6 text-[#d97706] flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-display font-bold text-[#1e3a5f] mb-2">
                        Opening Hours
                      </h3>
                      <p className="text-gray-700 text-sm">
                        Monday – Saturday<br />
                        9:00 AM – 6:00 PM 
                      </p>
                    </div>
                  </div>
                </div> */} 
              {/* </div> */}
  
            </div>
          </div>
        </section>

        {/* Trust Indicators */}
        <section className="py-16 bg-gradient-to-br from-[#1e3a5f] to-[#0f172a] text-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
              {[
                { icon: "✓", title: " 500+", desc: "Students Trained" },
                { icon: "✓", title: "100%", desc: "Placement Assistance Rate" },
                { icon: "✓", title: "5+", desc: "Years of Excellence" },
                { icon: "✓", title: "100+", desc: "Industry Tie-ups" },
              ].map((indicator, index) => (
                <div key={index}>
                  <div className="text-4xl text-[#d97706] font-bold mb-2">{indicator.icon}</div>
                  <h3 className="font-display font-bold mb-1">{indicator.title}</h3>
                  <p className="text-gray-300 text-sm">{indicator.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
