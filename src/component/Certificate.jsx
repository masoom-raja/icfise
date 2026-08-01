import { useState } from "react";
import { Mail, Phone, MapPin, Clock, ChevronRight } from "lucide-react";
import Navbar from "./header";
import Footer from "./footer";
import SideCourse from "./courses/sidebarCourses";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Vdo from "../assets/vdo.mp4";
import VerifyCertificate from "./verifyCertificate"
import DownloadCertificate from "./downloadCertificate";
export default function CertificateSection() {
  const videos = [
    { url: Vdo },
    { url: Vdo },
    { url: Vdo },
    //   { url: "https://youtube.com/embed/_vEYqeccz0A?si=iErQDH7gH77o5-NH" },
    //   { url: "https://youtube.com/embed/_vEYqeccz0A?si=iErQDH7gH77o5-NH" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-[#1e3a5f] to-[#0f172a] text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <h1 className="font-display text-4xl sm:text-6xl font-bold mb-6">
                Certificate Verification & Download
              </h1>
              <p className="text-xl text-gray-200">
                Easily verify your certificate details or download your official certificate by entering your ID. Fast, secure, and accessible anytime.
              </p>
            </div>
          </div>
        </section>
        {/* Certificate section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-[#1e3a5f] mb-10">
              Certificate Services
            </h2>

            {/* Main Container */}
            <div className="flex flex-col lg:flex-row gap-8 items-start">
           <VerifyCertificate/>

              {/* 🔹 Download */}
             <DownloadCertificate/>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 bg-white ">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Information */}
              <div className="lg:col-span-1">
                <h2 className="font-display text-3xl font-bold text-[#1e3a5f] mb-8">
                  Contact Information
                </h2>

                <div className="space-y-8">
                  {/* Address */}
                  <div className="flex gap-4 p-6 bg-gradient-to-br from-[#f9fafb] to-[#f3f4f6] rounded-lg border border-gray-200 hover:border-[#d97706]/50 hover:shadow-lg transition-all duration-300">
                    <MapPin className="w-6 h-6 text-[#d97706] flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-display font-bold text-[#1e3a5f] mb-2">
                        Institute Address
                      </h3>
                      <p className="text-gray-700 text-sm">
                        Main Road Basantpur
                        
                        <br />
                        UmaShanker Complex, (near machhali markert)
                        <br />
                        Siwan, Bihar 841406
                      </p>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex gap-4 p-6 bg-gradient-to-br from-[#f9fafb] to-[#f3f4f6] rounded-lg border border-gray-200 hover:border-[#d97706]/50 hover:shadow-lg transition-all duration-300">
                    <Phone className="w-6 h-6 text-[#d97706] flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-display font-bold text-[#1e3a5f] mb-2">
                        Phone
                      </h3>
                      <a
                        href="tel:+919876543210"
                        className="text-gray-700 hover:text-[#d97706] transition-colors font-semibold"
                      >
                        +91 86995 65748
                      </a>
                      <p className="text-gray-600 text-sm mt-1">
                        Available Monday To Saturday
                      </p>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex gap-4 p-6 bg-gradient-to-br from-[#f9fafb] to-[#f3f4f6] rounded-lg border border-gray-200 hover:border-[#d97706]/50 hover:shadow-lg transition-all duration-300">
                    <Mail className="w-6 h-6 text-[#d97706] flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-display font-bold text-[#1e3a5f] mb-2">
                        Email
                      </h3>
                      <a
                        href="mailto:info@buildcoreconstruction.com"
                        className="text-gray-700 hover:text-[#d97706] transition-colors font-semibold"
                      >
                        icfisehse@gmail.com
                      </a>
                      <p className="text-gray-600 text-sm mt-1">
                        Response within 24 hours
                      </p>
                    </div>
                  </div>

                  {/* Working Hours */}
                  <div className="flex gap-4 p-6 bg-gradient-to-br from-[#f9fafb] to-[#f3f4f6] rounded-lg border border-gray-200 hover:border-[#d97706]/50 hover:shadow-lg transition-all duration-300">
                    <Clock className="w-6 h-6 text-[#d97706] flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-display font-bold text-[#1e3a5f] mb-2">
                        Opening Hours
                      </h3>
                      <p className="text-gray-700 text-sm">
                        Monday – Saturday
                        <br />
                        8:00 AM – 6:00 PM
                      </p>
                    </div>
                  </div>
                  
                  {/* Feedback Student
                  <h2 className="text-3xl text-center text-[#1e3a5f] text-bold" >Our Happy Student</h2> */}
                  {/* <div className="flex bg-gradient-to-br from-[#f9fafb] to-[#f3f4f6] rounded-lg border border-gray-200 hover:border-[#d97706]/50 hover:shadow-lg transition-all duration-300">                 
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
                          <div className="w-full h-75 overflow-hidden rounded-lg bg-black">
                            <video
                              src={video.url}
                              controls
                              muted
                              playsInline
                              preload="metadata"
                              className="w-full h-full object-cover"
                            />
                          </div>
                        </SwiperSlide>
                      ))}
                    </Swiper>
                  </div> */}
                </div>
              </div>
              {/* popular courses */}
              <SideCourse />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
