import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "wouter";

const navItems = [
  { href: "/", label: "Home", activeColor: "text-[#B45309]" },
  { href: "/about", label: "About", activeColor: "text-[#B45309]" },
  {
    href: "/construction",
    label: "Construction",
    activeColor: "text-[#EA580C]",
  },
  { href: "/media", label: "Media", activeColor: "text-[#9333EA]" },
  {
    href: "/solar",
    label: "Solar Technology",
    activeColor: "text-[#047857]",
  },
  { href: "/contact", label: "Contact", activeColor: "text-[#B45309]" },
];

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [location] = useLocation();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [location]);

  return (
    <header
      className={`sticky top-0 z-50 border-b border-slate-200/80 bg-white/95 backdrop-blur-md transition-all ${
        scrolled ? "py-1 shadow-lg" : "py-2 shadow-sm"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between gap-6">
          <Link
            href="/"
            className="flex shrink-0 items-center gap-2"
            aria-label="RichDad Investments home"
          >
            <div className="flex h-14 w-14 items-center justify-center overflow-hidden rounded-lg sm:h-16 sm:w-16">
              <img
                src="/logo.png"
                alt="RichDad Investments"
                className="h-full w-full object-cover"
              />
            </div>
            <span className="relative font-poppins text-xl font-semibold text-[#0F172A]">
              RDI
              <span className="absolute -bottom-1 left-0 h-[3px] w-full rounded-full bg-gradient-to-r from-[#F97316] via-[#A855F7] to-[#10B981]" />
            </span>
          </Link>

          <nav
            className="hidden items-center gap-5 xl:flex"
            aria-label="Primary navigation"
          >
            {navItems.map((item) => {
              const isActive = location === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={isActive ? "page" : undefined}
                  className={`nav-link whitespace-nowrap text-sm 2xl:text-base ${
                    isActive ? item.activeColor : ""
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <button
            type="button"
            className="rounded-lg p-2 text-[#0F172A] transition-colors hover:bg-slate-100 hover:text-[#B45309] xl:hidden"
            onClick={() => setMobileMenuOpen((open) => !open)}
            aria-label={
              mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"
            }
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        <nav
          id="mobile-navigation"
          className={`xl:hidden ${mobileMenuOpen ? "block" : "hidden"}`}
          aria-label="Mobile navigation"
        >
          <div className="grid gap-1 border-t border-slate-100 py-3">
            {navItems.map((item) => {
              const isActive = location === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={isActive ? "page" : undefined}
                  className={`rounded-lg px-3 py-3 font-medium transition-colors hover:bg-slate-50 ${
                    isActive ? item.activeColor : "text-[#0F172A]"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
