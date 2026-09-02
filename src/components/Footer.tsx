import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { Link } from "wouter";

const Footer = () => {
  return (
    <footer className="bg-[#0F172A] px-4 py-12 text-white sm:py-16">
      <div className="container mx-auto">
        <div className="mb-12 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link
              href="/"
              className="mb-5 flex items-center gap-3"
              aria-label="RichDad Investments home"
            >
              <div className="h-12 w-12 overflow-hidden rounded-lg">
                <img
                  src="/logo.png"
                  alt="RichDad Investments"
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
              <span className="font-poppins text-xl font-bold">RDI</span>
            </Link>

            <p className="max-w-xs leading-relaxed text-slate-400">
              Building spaces, shaping stories, and powering progress through
              three specialized divisions.
            </p>

            <div className="mt-6 flex gap-3">
              {[
                { label: "Facebook", icon: Facebook },
                { label: "Instagram", icon: Instagram },
                { label: "LinkedIn", icon: Linkedin },
              ].map((social) => (
                <a
                  key={social.label}
                  href="#"
                  aria-label={social.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 text-slate-400 transition-colors hover:bg-white/10 hover:text-white"
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h2 className="mb-5 font-poppins text-lg font-semibold">
              Our Divisions
            </h2>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/construction"
                  className="text-slate-400 transition-colors hover:text-[#FB923C]"
                >
                  Construction
                </Link>
              </li>
              <li>
                <Link
                  href="/media"
                  className="text-slate-400 transition-colors hover:text-[#C084FC]"
                >
                  Media Production
                </Link>
              </li>
              <li>
                <Link
                  href="/solar"
                  className="text-slate-400 transition-colors hover:text-[#FBBF24]"
                >
                  Solar Technology
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-slate-400 transition-colors hover:text-white"
                >
                  Request a Consultation
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="mb-5 font-poppins text-lg font-semibold">Company</h2>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/"
                  className="text-slate-400 transition-colors hover:text-white"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-slate-400 transition-colors hover:text-white"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-slate-400 transition-colors hover:text-white"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="mb-5 font-poppins text-lg font-semibold">Contact</h2>
            <address className="not-italic">
              <ul className="space-y-4 text-slate-400">
                <li className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-[#FBBF24]" />
                  <span>
                    45 Independence Avenue
                    <br />
                    North Ridge, Accra, Ghana
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="h-5 w-5 shrink-0 text-[#C084FC]" />
                  <a href="tel:+233301234567" className="hover:text-white">
                    +233 (0) 30 123 4567
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <Mail className="mt-0.5 h-5 w-5 shrink-0 text-[#34D399]" />
                  <a
                    href="mailto:info@richdadinvestments.com"
                    className="break-all hover:text-white"
                  >
                    info@richdadinvestments.com
                  </a>
                </li>
              </ul>
            </address>
          </div>
        </div>

        <div className="border-t border-slate-700 pt-8 text-center sm:text-left">
          <p className="text-sm text-slate-400">
            &copy; {new Date().getFullYear()} RichDad Investments. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
