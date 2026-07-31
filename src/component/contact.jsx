import { Mail, Phone, MapPin, Clock } from "lucide-react";
import Navbar from "./header";
import Footer from "./footer";
import ContactFrom from './contactForm'


export default function Contact() {

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-[#1e3a5f] to-[#0f172a] text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <h1 className="font-display text-5xl sm:text-6xl font-bold mb-6">
                Get in Touch
              </h1>
              <p className="text-xl text-gray-200">
Ready to build your career in safety management? We’re here to guide you. Contact our team today to get complete details about courses, admissions, certifications, and placement support.              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
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
                        F-96, Main Kalindi Kunj Road<br />
                        Near Jamia Co-Operative Bank<br />
                         New Delhi – 110025 India
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
                      <a href="tel:+919876543210" className="text-gray-700 hover:text-[#d97706] transition-colors font-semibold">
                        +91 79709 67389
                      </a>
                      <p className="text-gray-600 text-sm mt-1">Available Monday To Saturday</p>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex gap-4 p-6 bg-gradient-to-br from-[#f9fafb] to-[#f3f4f6] rounded-lg border border-gray-200 hover:border-[#d97706]/50 hover:shadow-lg transition-all duration-300">
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
                  </div>

                  {/* Working Hours */}
                  <div className="flex gap-4 p-6 bg-gradient-to-br from-[#f9fafb] to-[#f3f4f6] rounded-lg border border-gray-200 hover:border-[#d97706]/50 hover:shadow-lg transition-all duration-300">
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
                </div>
              </div>

              {/* Contact Form */}
              <ContactFrom/>
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
