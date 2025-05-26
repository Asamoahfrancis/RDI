import { Link } from "wouter";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#1E293B] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <Link href="/" className="flex space-x-2 mb-6 items-center ">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center">
                <img
                  src="/logo.png"
                  alt="Logo"
                  className="w-full h-full rounded-lg object-cover"
                />
              </div>
              <span className="font-poppins   text-white font-bold   text-xl">
                RDI
              </span>
            </Link>

            <p className="text-[#94A3B8] mb-6">
              Bridging the gap between physical construction and digital media
              with innovative solutions.
            </p>

            <div className="flex space-x-4">
              <a
                href="#"
                className="text-[#94A3B8] hover:text-white transition-colors"
              >
                <Facebook size={18} />
              </a>
              <a
                href="#"
                className="text-[#94A3B8] hover:text-white transition-colors"
              >
                <Twitter size={18} />
              </a>
              <a
                href="#"
                className="text-[#94A3B8] hover:text-white transition-colors"
              >
                <Instagram size={18} />
              </a>
              <a
                href="#"
                className="text-[#94A3B8] hover:text-white transition-colors"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-poppins font-semibold text-lg mb-6">
              Quick Links
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/"
                  className="text-[#94A3B8] hover:text-white transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-[#94A3B8] hover:text-white transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-[#94A3B8] hover:text-white transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/portfolio"
                  className="text-[#94A3B8] hover:text-white transition-colors"
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-[#94A3B8] hover:text-white transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-poppins font-semibold text-lg mb-6">
              Services
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/services"
                  className="text-[#94A3B8] hover:text-white transition-colors"
                >
                  Commercial Construction
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-[#94A3B8] hover:text-white transition-colors"
                >
                  Residential Projects
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-[#94A3B8] hover:text-white transition-colors"
                >
                  Content Production
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-[#94A3B8] hover:text-white transition-colors"
                >
                  Digital Marketing
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-[#94A3B8] hover:text-white transition-colors"
                >
                  Integrated Solutions
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-poppins font-semibold text-lg mb-6">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mt-1 mr-3 text-[#FFC107]" />
                <span className="text-[#94A3B8]">
                  123 Business Avenue
                  <br />
                  Suite 400
                  <br />
                  San Francisco, CA 94107
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-3 text-[#3B82F6]" />
                <span className="text-[#94A3B8]">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-3 text-[#FFC107]" />
                <span className="text-[#94A3B8]">info@dualcore.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-[#94A3B8] text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} DualCore Industries. All rights
              reserved.
            </p>

            <div className="flex space-x-6">
              <a
                href="#"
                className="text-[#94A3B8] hover:text-white text-sm transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-[#94A3B8] hover:text-white text-sm transition-colors"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="text-[#94A3B8] hover:text-white text-sm transition-colors"
              >
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
