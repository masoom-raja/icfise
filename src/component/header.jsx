import { useState } from "react";
import { Link } from "wouter";
import { Menu, X,Phone,UserCog } from "lucide-react";
import logo from '../asset/icfise-logo-new.png'



export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/courses", label: "Courses" },
    { href: "/about", label: "About" },
    { href: "/certificate", label: "Certificate" },
    { href: "/contact", label: "Contact Us" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-[#0B3C5D] border-b border-gray-200 shadow-sm text-white">
      <div className="container mx-auto px-4 py-2">
        <div className="flex items-center justify-between py-1">

          {/* Logo */}
          {/* <Link href="/" className="flex items-center gap-2 group">
            <div className="w-14 h-14 rounded-full flex items-center justify-center">
              <img src={logo} alt="logo" />
                 <h1 className="text-4xl px-4 sm:inline hidden">NISE</h1>

            </div>
             <span className="text-4xl px-4 sm:inline md:hidden">NISE</span>

            
          </Link> */}
          <Link href="/" className="flex items-center gap-2">
  <img
    src={logo}
    alt="logo"
    className="h-16 w-16 sm:h-18 sm:w-18 object-contain"
  />

  <span className="text-2xl sm:text-3xl font-bold hidden sm:block">
    ICFISE
  </span>
</Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8 ">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-white hover:text-[#f48b14] transition-colors duration-300 font-small text-[17px]"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA Button & Mobile Menu */}
          <div className="flex items-center gap-4">

            {/* Desktop Button */}
            <button className="hidden sm:inline-flex bg-[#d97706] hover:bg-[#b45309] text-white px-4 py-2 rounded-lg text-sm font-medium transition">
                             <Phone className="w-5 h-5 text-[#fffdfa] flex-shrink-0 mr-2" />

              <a href="tel:+919876543210" className="text-white hover:text-[#ffffff] transition-colors text-sm">
                  Call now
                </a>
            </button>
            <Link href="/login">
            <button className="hidden lg:inline-flex bg-[#d97706] hover:bg-[#b45309] text-white px-4 py-2 rounded-lg text-sm font-medium transition">
                             <UserCog className="w-5 h-5 text-[#fffdfa] flex-shrink-0 mr-2" />
                             Admin
            </button>
            </Link>
            
            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              {isOpen ? (
                <X className="w-6 h-6 text-white" />
              ) : (
                <Menu className="w-6 h-6 text-white" />
              )}
            </button>

          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden pb-4 border-t border-gray-200">

            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block py-3 px-4 text-white hover:text-[#f48b14] transition-colors"
              >
                {link.label}
              </Link>
            ))}

            <Link href="/contact">
            <button className="w-full mt-4 bg-[#d97706] hover:bg-[#b45309] text-white py-2 rounded-lg font-medium">
              Register Now
            </button>
</Link>
      <Link href="/login">
            <button className="w-full mt-4 bg-[#d97706] hover:bg-[#b45309] text-white py-2 rounded-lg font-medium">
              Admin
            </button>
</Link>
          </div>
        )}

      </div>
    </nav>
  );
}