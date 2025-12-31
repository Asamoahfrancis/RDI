import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [location] = useLocation();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`sticky top-0 z-50 bg-white shadow-md transition-all ${
        scrolled ? "py-2" : "py-3"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-18 h-18 rounded-lg flex items-center justify-center">
              <img
                src="/logo.png"
                alt="Logo"
                className="w-full h-full rounded-lg object-cover"
              />
            </div>
            <span className="relative font-poppins font-semibold text-xl text-[#0F172A]">
              RDI
              <span className="absolute left-0 -bottom-1 w-full h-[3px] bg-gradient-to-r from-[#FFC107] to-[#9C27B0] rounded-full" />
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className={`nav-link ${location === "/" ? "text-[#FFC107]" : ""}`}
            >
              Home
            </Link>
            <Link
              href="/about"
              className={`nav-link ${
                location === "/about" ? "text-[#FFC107]" : ""
              }`}
            >
              About
            </Link>
            <Link
              href="/construction"
              className={`nav-link ${
                location === "/construction" ? "text-[#3B82F6]" : ""
              }`}
            >
              Construction
            </Link>
            <Link
              href="/media"
              className={`nav-link ${
                location === "/media" ? "text-[#3B82F6]" : ""
              }`}
            >
              Media
            </Link>
            <Link
              href="/contact"
              className={`nav-link ${
                location === "/contact" ? "text-[#FFC107]" : ""
              }`}
            >
              Contact
            </Link>
          </nav>

          {/* CTA Button
          <Link href="/contact" className="hidden md:block">
            <Button className="bg-[#10B981] hover:bg-opacity-90 text-white px-5 py-2.5 rounded-lg font-medium transition-all transform hover:scale-105">
              Get Quote
            </Button>
          </Link> */}

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="md:hidden text-[#0F172A] hover:text-[#FFC107]"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <nav
          className={`md:hidden mt-4 pb-4 ${
            mobileMenuOpen ? "block" : "hidden"
          }`}
        >
          <div className="flex flex-col space-y-4">
            <Link
              href="/"
              className={`font-medium ${
                location === "/"
                  ? "text-[#FFC107]"
                  : "text-[#0F172A] hover:text-[#FFC107]"
              } transition-colors`}
              onClick={closeMobileMenu}
            >
              Home
            </Link>
            <Link
              href="/about"
              className={`font-medium ${
                location === "/about"
                  ? "text-[#FFC107]"
                  : "text-[#0F172A] hover:text-[#FFC107]"
              } transition-colors`}
              onClick={closeMobileMenu}
            >
              About
            </Link>
            <Link
              href="/construction"
              className={`font-medium ${
                location === "/construction"
                  ? "text-[#3B82F6]"
                  : "text-[#0F172A] hover:text-[#3B82F6]"
              } transition-colors`}
              onClick={closeMobileMenu}
            >
              Construction
            </Link>
            <Link
              href="/media"
              className={`font-medium ${
                location === "/media"
                  ? "text-[#3B82F6]"
                  : "text-[#0F172A] hover:text-[#3B82F6]"
              } transition-colors`}
              onClick={closeMobileMenu}
            >
              Media
            </Link>
            <Link
              href="/contact"
              className={`font-medium ${
                location === "/contact"
                  ? "text-[#FFC107]"
                  : "text-[#0F172A] hover:text-[#FFC107]"
              } transition-colors`}
              onClick={closeMobileMenu}
            >
              Contact
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
