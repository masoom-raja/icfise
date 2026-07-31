import { Link } from "wouter";
import { Mail, Phone, MapPin,Youtube, Instagram, Linkedin  } from "lucide-react";
import logo from '../assets/logo_nise.png'


export default function Footer() {
  return (
    <footer className="bg-[#1e3a5f] text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-12 h-12 rounded-lg flex items-center justify-center">
                <img src={logo} alt="logo" />
              </div>
              <span className="font-display text-xl font-bold">ICFISE</span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Shaping Careers in Indian College of Fire and Industrial Safety Engineering with Practical Training, Expert Guidance, and Real-World Experience
            </p>
            <div className="flex gap-5 py-5 text-[#d97706]"><Youtube/> <Instagram/> <Linkedin/></div>
            
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { href: "/", label: "Home" },
                { href: "/about", label: "About Us" },
                { href: "/courses", label: "Courses" },
                { href: "/contact", label: "Contact us" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>
                    <a className="text-gray-300 hover:text-[#d97706] transition-colors text-sm">
                      {link.label}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-bold text-lg mb-4">Highly Enroll Courses</h4>
            <ul className="space-y-2">
              {[
                "Diploma in industrial safety",
                "PG Diploma in industrial safety",
                "Advance Diploma in industrial safety",
                "Advance Diploma in fire & industrial safety",
              ].map((service) => (
                <li key={service}>
                  <span className="text-gray-300 text-sm">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display font-bold text-lg mb-4">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#d97706] flex-shrink-0 mt-0.5" />
                <span className="text-gray-300 text-sm">
                  F-96, Main Kalindi Kunj Road,
Near Jamia Co-Operative Bank,
New Delhi – 110025
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#d97706] flex-shrink-0" />
                <a href="tel:+919876543210" className="text-gray-300 hover:text-[#d97706] transition-colors text-sm">
                  +91 79709 67389
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#d97706] flex-shrink-0" />
                <a href="mailto:info@buildcoreconstruction.com" className="text-gray-300 hover:text-[#d97706] transition-colors text-sm">
                  asr.28ali@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2026 Indian College of Fire and Industrial Safety Engineering. All rights reserved.
            </p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-[#d97706] transition-colors text-sm">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-[#d97706] transition-colors text-sm">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
