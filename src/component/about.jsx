import { Heart, Eye, Shield, Users, Award, Zap } from "lucide-react";
import Navbar from "./header";
import Footer from "./footer";
import aboutimg from '../assets/about.jpg'
import aboutimg1 from '../assets/aboutBg.jpeg'

import homeimg from '../assets/home_IMG.png'

export default function About() {
  const values = [
    {
      icon: Heart,
      title: "Integrity",
      description: "We maintain transparency and honesty in every project, building trust with our clients and partners through clear communication and ethical practices.",
    },
    {
      icon: Shield,
      title: "Quality",
      description: "We never compromise on materials or construction standards, ensuring durability and excellence. Every project meets or exceeds industry benchmarks.",
    },
    {
      icon: Users,
      title: "Safety",
      description: "Ensuring worker and site safety is our top priority. We follow strict OSHA guidelines and maintain zero-accident records on most projects.",
    },
    {
      icon: Eye,
      title: "Customer Satisfaction",
      description: "Our goal is to build lasting relationships with our clients through exceptional service, timely delivery, and continuous support.",
    },
  ];

  const teamMembers = [
    {
      role: "Director",
      name: "Afsar Ali",
desc: "Director of ICFISE with strong expertise in safety education, industrial training, and career development. Leading the institute with a vision to create skilled safety professionals.",      mob: "8699565748",
      email: "info.ICFISE.india@gmail.com",
      expertise: "ICFISE Directior",
    },
    {
      role: "Managing Director",
      name: "Shadab Malik",
      desc: "Managing Director of ICFISE with expertise in institute operations, student development, and safety training management. Dedicated to delivering quality education and professional growth opportunities.",
      mob: "9456642304",
      email: "ICFISE@gmail.com",
      expertise: "ICFISE Managing Director",
    },

  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className=" text-white py-5 w-full bg-cover"
        style={{backgroundImage:`url(${aboutimg})`}}>
          <div className="container mx-auto px-2 ">
            <div className="max-w-3xl">
              <h1 className="font-display text-5xl sm:text-6xl font-bold mb-6 bg-black/40 rounded-xl p-2">
                About Indian College of Fire and Industrial Safety Engineering (ICFISE)
              </h1>
              <p className="text-xl text-gray-200  bg-black/40 rounded-xl p-2">
                A fast-growing safety training institute dedicated to developing skilled safety professionals with practical knowledge and industry expertise. Trusted by hundreds of students across construction, oil & gas, and industrial sectors.
              </p>
            </div>
          </div>
        </section>

        {/* Who We Are Section */}
        <section className="py-5 bg-white ">
          <div className="container px-4 sm:flex sm:flex-row">
              <div className="flex-1 pt-5 sm:ml-15">
              <h2 className="font-display text-4xl font-bold text-[#1e3a5f] mb-2    ">
                Who We Are
              </h2>
              <div className="text-lg text-gray-700">
                <p>
                 Indian College of Fire and Industrial Safety Engineering (ICFISE) is established with the vision of delivering high-quality safety education and professional training. The institute prepares students with industry-relevant knowledge, practical skills, and a strong professional foundation.
                </p>
              <p className="py-2">Indian College of Fire and Industrial Safety Engineering (ICFISE) provides industry-oriented safety education and skill-based training.</p>
              </div>
            </div>
            <div className="flex-1 sm:ml-15 ">
             <img src={aboutimg1} alt="img" />
            </div>
          
          </div>
        </section>

        {/* Mission & Vision Section */}
        <section className="py-10 bg-gradient-to-br from-[#a5bace] to-[#f3f4f6]"
        style={{ backgroundImage:`url(${homeimg})`}}>
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Mission */}
              <div className="p-8 bg-neutral-100 rounded-lg border border-gray-300 shadow-sm hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 bg-[#d97706] rounded-lg flex items-center justify-center mb-6">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-display text-2xl font-bold text-[#1e3a5f] mb-4">
                  Our Mission
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  To provide high-quality safety education and practical training that prepares students for real-world industrial challenges. We are committed to building skilled safety professionals who can ensure safe working environments across construction, oil & gas, and industrial sectors.
                </p>
                <div className="pt-4 border-t border-gray-200">
                  <p className="text-sm text-gray-600">
                    <strong>Our Promise:</strong> Every student is trained with industry-relevant skills, practical exposure, and complete career support without compromising on quality
                  </p>
                </div>
              </div>

              {/* Vision */}
              <div className="p-8 bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 bg-[#d97706] rounded-lg flex items-center justify-center mb-6">
                  <Eye className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-display text-2xl font-bold text-[#1e3a5f] mb-4">
                  Our Vision
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                    To become one of the most trusted safety training institutes known for excellence, professionalism, and industry-oriented education. We aim to be the preferred choice for students aspiring to build successful careers in safety management.
                </p>
                <div className="pt-4 border-t border-gray-200">
                  <p className="text-sm text-gray-600">
                    <strong>Our Goal:</strong> To lead the safety education sector by delivering innovative training, promoting a strong safety culture, and ensuring maximum student placement success.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Core Values Section */}
        {/* <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="font-display text-4xl font-bold text-[#1e3a5f] mb-4">
                  Our Core Values
                </h2>
                <p className="text-xl text-gray-600">
                  These principles guide every decision we make and every project we undertake
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {values.map((value, index) => {
                  const Icon = value.icon;
                  return (
                    <div key={index} className="p-8 bg-gradient-to-br from-[#f9fafb] to-[#f3f4f6] rounded-lg border border-gray-200 hover:border-[#d97706]/50 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                      <Icon className="w-10 h-10 text-[#d97706] mb-4" />
                      <h3 className="font-display text-xl font-bold text-[#1e3a5f] mb-3">
                        {value.title}
                      </h3>
                      <p className="text-gray-700 leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section> */}


        {/* Team Section */}
        <section className="py-20 bg-gradient-to-br from-[#1e3a5f] to-[#0f172a] text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="font-display text-4xl font-bold mb-4">
                  Our Leadership Team
                </h2>
                <p className="text-xl text-gray-300">
                  Experienced professionals dedicated to excellence
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {teamMembers.map((member, index) => (
                  <div key={index} className="p-6 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg hover:bg-white/15 transition-all duration-300 hover:border-[#d97706]/50 hover:shadow-xl hover:-translate-y-1">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="font-display text-xl font-bold mb-1">
                          {member.role}
                        </h3>
                        <p className="text-[#d97706] font-semibold text-lg">
                          {member.name}
                        </p>
                          <p className="text-[#d97706] font-semibold text-sm">                      
                         Email : {member.email}
                        </p>
                          <p className="text-[#d97706] font-semibold text-sm">
                          Mobile : {member.mob}
                        </p>
                      </div>
                      <Award className="w-6 h-6 text-[#d97706]" />
                    </div>
                    <p className="text-gray-300 text-sm mb-4">
                      {member.desc}
                    </p>
                    <div className="pt-4 border-t border-white/10">
                      <span className="inline-block bg-[#d97706]/20 text-[#d97706] text-xs font-semibold px-3 py-1 rounded-full">
                        {member.expertise}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Achievements Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-display text-4xl font-bold text-[#1e3a5f] mb-12 text-center">
                Our Achievements
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  { icon: Award, title: "Industry Recognition", desc: "Recognized for excellence in safety education and professional training programs" },
                  { icon: Shield, title: "Placement Success", desc: "Successfully guiding students toward career opportunities in safety and industrial sectors" },
                  { icon: Zap, title: "Practical Training Excellence", desc: "Providing industry-focused practical training with modern safety learning methods" },
                ].map((achievement, index) => {
                  const Icon = achievement.icon;
                  return (
                    <div key={index} className="text-center p-8 bg-gradient-to-br from-[#f9fafb] to-[#f3f4f6] rounded-lg border border-gray-200 hover:border-[#d97706]/50 hover:shadow-lg transition-all duration-300">
                      <Icon className="w-12 h-12 text-[#d97706] mx-auto mb-4" />
                      <h3 className="font-display text-xl font-bold text-[#1e3a5f] mb-2">
                        {achievement.title}
                      </h3>
                      <p className="text-gray-700">
                        {achievement.desc}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
