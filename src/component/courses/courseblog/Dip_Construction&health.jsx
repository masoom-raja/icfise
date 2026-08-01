import { useState } from "react";
import Navbar from "../../header";
import Footer from "../../footer";
import SidebarCourses from '../sidebarCourses'
import course from "../../../asset/dip-in-construction.jpg"
import Vdo from "../../../assets/vdo.mp4"
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import ContactFrom from "../../contactForm"

export default function Dip_construction() {
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
                 Diploma in Construction Safety & Health Management
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
         <img src={course} alt="img" className="w-full h-full"/>
        {/* Title */}
        <h1 className="text-3xl sm:text-5xl font-bold text-[#1e3a5f] mb-4">
         Diploma in Construction Safety & Health Management
        </h1>



        {/* Intro */}
        <p className="text-gray-700 leading-relaxed mb-2">
          At <span className="font-semibold">Indian College of Fire and Industrial Safety Engineering (ICFISE)</span>, 
         the Diploma in Construction Safety & Health Management is designed for individuals who aspire to build a strong career in construction safety and workplace risk management. With rapid growth in infrastructure and construction sectors, the demand for trained safety professionals is continuously increasing.
        </p>

        <p className="text-gray-700 leading-relaxed mb-4">
          This program focuses on developing both technical knowledge and practical skills required to manage on-site hazards, ensure compliance with safety regulations, and maintain a safe working environment. Students are trained to identify risks, prevent accidents, and respond effectively to emergencies on construction sites.
        </p>

        {/* Course Details */}
        <div className="bg-white p-2 rounded-lg mb-10">
          <h2 className="text-2xl font-bold text-[#1e3a5f] mb-4">
            Course Details
          </h2>
          <ul className="space-y-2 text-gray-700">
            <li><strong>Course Name:</strong> Diploma in Construction Safety & Health Management</li>
            <li><strong>Duration:</strong> 1 Year</li>
            <li><strong>Eligibility:</strong> Passed from a recognized board</li>
          </ul>
        </div>

        {/* Course Description */}
        <div className="mb-10 bg-white p-2">
          <h2 className="text-2xl  font-bold text-[#1e3a5f] mb-4">
            Course Description
          </h2>
          <p className="text-gray-700 leading-relaxed">
            This course focuses on construction site safety practices, hazard identification, accident prevention, safety regulations, and emergency response management. Students gain both theoretical knowledge and practical understanding of safety systems used in construction environments.
          </p>
        </div>

        {/* Highlights */}
        <div className="mb-10 bg-white p-2">
          <h2 className="text-2xl font-bold text-[#1e3a5f] mb-6">
            Program Highlights
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-5 bg-white rounded-lg  hover:border-[#d97706]/50 transition">
              <h3 className="font-bold text-[#1e3a5f] mb-2">Industry-Oriented Curriculum</h3>
              <p className="text-gray-600 text-sm">
                Covers construction safety standards, site risk assessment, hazard control, and safety planning techniques.
              </p>
            </div>

            <div className="p-5 bg-white rounded-lg hover:border-[#d97706]/50 transition">
              <h3 className="font-bold text-[#1e3a5f] mb-2">Practical Exposure</h3>
              <p className="text-gray-600 text-sm">
                Includes hands-on training through safety drills, site simulations, and equipment handling.
              </p>
            </div>

            <div className="p-5 bg-white rounded-lg hover:border-[#d97706]/50 transition">
              <h3 className="font-bold text-[#1e3a5f] mb-2">Professional Guidance</h3>
              <p className="text-gray-600 text-sm">
                Learn from experienced trainers with real industry expertise in construction safety and health management.
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
              "Construction Safety Officer",
"Site Safety Supervisor",
"HSE (Health, Safety & Environment) Executive",
"Safety Coordinator",
"Risk Assessment Assistant",
"Project Safety Officer"
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
            <li>✔ High demand in construction and infrastructure industries</li>
            <li>✔ Practical and job-oriented training approach</li>
            <li>✔ Focus on industry safety standards and compliance</li>
            <li>✔ Placement assistance and career support</li>
          </ul>
        </div>

        {/* Conclusion */}
        <div className="flex gap-4">

      {/* Call Now */}
      <a
        href={`tel:${phone}`}
        className="px-5 py-3 bg-[#0B3C5D] text-white rounded-lg font-semibold hover:bg-[#092c44] transition"
      >
        📞 Call Now
      </a>

      {/* WhatsApp */}
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
