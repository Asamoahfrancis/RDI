import { useState } from "react";
import {
  Check,
  Hammer,
  HardHat,
  Wrench,
  Shield,
  Clock,
  ChevronRight,
  Award,
  Users,
  TrendingUp,
} from "lucide-react";
import { Link } from "wouter";
import Seo from "../components/Seo";

const constructionServices = [
  {
    title: "Commercial Construction",
    description:
      "Complete construction services for office buildings, retail spaces, warehouses, and other commercial properties with focus on functionality and efficiency.",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
  },
  {
    title: "Residential Construction",
    description:
      "From single-family homes to multi-unit developments, we create living spaces that combine comfort, style, and durability.",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
  },
  {
    title: "Renovation & Remodeling",
    description:
      "Transform existing spaces with our expert renovation services, whether updating a single room or an entire building.",
    image:
      "https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?w=800&q=80",
  },
  {
    title: "Project Management",
    description:
      "End-to-end project management ensuring your construction stays on schedule, within budget, and meets all quality standards.",
    image:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80",
  },
  {
    title: "Design-Build Services",
    description:
      "Integrated design and construction services for a seamless experience from concept through completion.",
    image:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80",
  },
  {
    title: "Green Building",
    description:
      "Sustainable construction practices using eco-friendly materials and energy-efficient designs for environmentally responsible buildings.",
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
  },
];

const Services = () => {
  const [hoveredService, setHoveredService] = useState<number | null>(null);
  const [activeProcess, setActiveProcess] = useState(0);

  return (
    <>
      <Seo
        title="Construction Services in Ghana | RichDad Investments"
        description="Explore commercial and residential construction, renovation, design-build, project management, and sustainable building services from RichDad Investments."
      />

      {/* Hero Section with Parallax Effect */}
      <section className="relative bg-gradient-to-br from-[#1E293B] via-[#334155] to-[#1E293B] py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-[#F97316] rounded-full blur-3xl animate-pulse"></div>
          <div
            className="absolute bottom-20 right-10 w-96 h-96 bg-[#F97316] rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "1s" }}
          ></div>
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="mb-6 font-poppins text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl">
            Construction Services
          </h1>
          <p className="text-[#CBD5E1] text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed mb-8">
            Building excellence with precision, quality, and innovation. From
            concept to completion, we deliver exceptional construction
            solutions.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center group cursor-pointer">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-[#F97316] bg-opacity-10 rounded-2xl mb-4 group-hover:bg-[#F97316] transition-all duration-300 group-hover:rotate-12">
                <Award className="h-8 w-8 text-[#F97316] group-hover:text-white transition-colors" />
              </div>
              <div className="text-4xl font-bold text-[#1E293B] mb-2">250+</div>
              <div className="text-[#64748B]">Projects Completed</div>
            </div>

            <div className="text-center group cursor-pointer">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-[#F97316] bg-opacity-10 rounded-2xl mb-4 group-hover:bg-[#F97316] transition-all duration-300 group-hover:rotate-12">
                <Users className="h-8 w-8 text-[#F97316] group-hover:text-white transition-colors" />
              </div>
              <div className="text-4xl font-bold text-[#1E293B] mb-2">500+</div>
              <div className="text-[#64748B]">Happy Clients</div>
            </div>

            <div className="text-center group cursor-pointer">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-[#F97316] bg-opacity-10 rounded-2xl mb-4 group-hover:bg-[#F97316] transition-all duration-300 group-hover:rotate-12">
                <HardHat className="h-8 w-8 text-[#F97316] group-hover:text-white transition-colors" />
              </div>
              <div className="text-4xl font-bold text-[#1E293B] mb-2">50+</div>
              <div className="text-[#64748B]">Expert Workers</div>
            </div>

            <div className="text-center group cursor-pointer">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-[#F97316] bg-opacity-10 rounded-2xl mb-4 group-hover:bg-[#F97316] transition-all duration-300 group-hover:rotate-12">
                <TrendingUp className="h-8 w-8 text-[#F97316] group-hover:text-white transition-colors" />
              </div>
              <div className="text-4xl font-bold text-[#1E293B] mb-2">98%</div>
              <div className="text-[#64748B]">Success Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us with Interactive Cards */}
      <section className="py-20 bg-gradient-to-b from-[#F8FAFC] to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-poppins font-bold text-4xl md:text-5xl mb-4">
              Why Choose Us
            </h2>
            <p className="text-[#64748B] text-lg max-w-2xl mx-auto">
              We combine decades of experience with cutting-edge techniques to
              deliver superior results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="group cursor-pointer">
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-[#F97316] bg-opacity-10 rounded-2xl mb-4 group-hover:bg-[#F97316] transition-all duration-300 group-hover:scale-110">
                  <Shield className="h-8 w-8 text-[#F97316] group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-poppins font-semibold text-xl mb-2">
                  Quality First
                </h3>
                <p className="text-[#64748B]">
                  Uncompromising standards in every project we undertake
                </p>
              </div>
            </div>

            <div className="group cursor-pointer">
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-[#F97316] bg-opacity-10 rounded-2xl mb-4 group-hover:bg-[#F97316] transition-all duration-300 group-hover:scale-110">
                  <Clock className="h-8 w-8 text-[#F97316] group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-poppins font-semibold text-xl mb-2">
                  On-Time Delivery
                </h3>
                <p className="text-[#64748B]">
                  We respect deadlines and deliver projects as promised
                </p>
              </div>
            </div>

            <div className="group cursor-pointer">
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-[#F97316] bg-opacity-10 rounded-2xl mb-4 group-hover:bg-[#F97316] transition-all duration-300 group-hover:scale-110">
                  <HardHat className="h-8 w-8 text-[#F97316] group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-poppins font-semibold text-xl mb-2">
                  Expert Team
                </h3>
                <p className="text-[#64748B]">
                  Skilled professionals with years of industry experience
                </p>
              </div>
            </div>

            <div className="group cursor-pointer">
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-[#F97316] bg-opacity-10 rounded-2xl mb-4 group-hover:bg-[#F97316] transition-all duration-300 group-hover:scale-110">
                  <Wrench className="h-8 w-8 text-[#F97316] group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-poppins font-semibold text-xl mb-2">
                  Full Service
                </h3>
                <p className="text-[#64748B]">
                  Complete solutions from design to final handover
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Services Section with Images */}
      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-poppins font-bold text-4xl md:text-5xl mb-4">
              Our Services
            </h2>
            <p className="text-[#64748B] text-lg max-w-2xl mx-auto">
              Comprehensive construction solutions tailored to your needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {constructionServices.map((service, index) => (
              <div
                key={index}
                className="group cursor-pointer"
                onMouseEnter={() => setHoveredService(index)}
                onMouseLeave={() => setHoveredService(null)}
              >
                <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                  {/* Image */}
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1E293B] via-[#1E293B]/50 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-300"></div>

                    {/* Icon overlay */}
                    <div
                      className={`absolute top-4 right-4 w-12 h-12 bg-[#F97316] rounded-xl flex items-center justify-center transition-all duration-300 ${
                        hoveredService === index ? "scale-110 rotate-12" : ""
                      }`}
                    >
                      <Check className="h-6 w-6 text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="bg-white p-6">
                    <h3 className="font-poppins font-semibold text-xl mb-3 text-[#1E293B] group-hover:text-[#F97316] transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-[#64748B] leading-relaxed mb-4">
                      {service.description}
                    </p>
                    <button className="text-[#F97316] font-semibold flex items-center gap-2 group-hover:gap-3 transition-all">
                      Learn More
                      <ChevronRight className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Process Section */}
      <section className="py-20 bg-gradient-to-b from-[#F8FAFC] to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="mb-4 font-poppins text-3xl font-bold sm:text-4xl md:text-5xl">
              Our Process
            </h2>
            <p className="text-[#64748B] text-lg max-w-2xl mx-auto">
              A streamlined approach that ensures your project runs smoothly
              from start to finish
            </p>
          </div>

          {/* Process Timeline */}
          <div className="max-w-5xl mx-auto mb-12">
            <div className="flex justify-between items-center mb-8">
              {[0, 1, 2, 3].map((step) => (
                <button
                  key={step}
                  onClick={() => setActiveProcess(step)}
                  className={`flex-1 relative transition-all duration-300 ${
                    step !== 3 ? "mr-4" : ""
                  }`}
                >
                  <div
                    className={`h-2 rounded-full transition-all duration-300 ${
                      activeProcess >= step ? "bg-[#F97316]" : "bg-gray-200"
                    }`}
                  ></div>
                  <div
                    className={`w-8 h-8 rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 flex items-center justify-center font-bold ${
                      activeProcess >= step
                        ? "bg-[#F97316] text-white scale-125"
                        : "bg-gray-200 text-gray-500"
                    }`}
                  >
                    {step + 1}
                  </div>
                </button>
              ))}
            </div>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div
                className={`relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 cursor-pointer ${
                  activeProcess === 0
                    ? "ring-4 ring-[#F97316] transform scale-105"
                    : ""
                }`}
                onClick={() => setActiveProcess(0)}
              >
                <div className="absolute -top-5 -left-5 w-14 h-14 rounded-xl bg-gradient-to-br from-[#F97316] to-[#FB923C] text-white flex items-center justify-center font-bold text-2xl shadow-lg">
                  01
                </div>
                <h3 className="font-poppins font-semibold text-2xl mb-4 mt-4 text-[#1E293B]">
                  Initial Consultation
                </h3>
                <p className="text-[#64748B] leading-relaxed">
                  We meet with you to understand your vision, requirements,
                  budget, and timeline. Our experts provide initial guidance and
                  feasibility assessment.
                </p>
              </div>

              <div
                className={`relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 cursor-pointer ${
                  activeProcess === 1
                    ? "ring-4 ring-[#F97316] transform scale-105"
                    : ""
                }`}
                onClick={() => setActiveProcess(1)}
              >
                <div className="absolute -top-5 -left-5 w-14 h-14 rounded-xl bg-gradient-to-br from-[#F97316] to-[#FB923C] text-white flex items-center justify-center font-bold text-2xl shadow-lg">
                  02
                </div>
                <h3 className="font-poppins font-semibold text-2xl mb-4 mt-4 text-[#1E293B]">
                  Design & Planning
                </h3>
                <p className="text-[#64748B] leading-relaxed">
                  Our team creates detailed plans, blueprints, and schedules. We
                  handle all permits and ensure compliance with regulations.
                </p>
              </div>

              <div
                className={`relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 cursor-pointer ${
                  activeProcess === 2
                    ? "ring-4 ring-[#F97316] transform scale-105"
                    : ""
                }`}
                onClick={() => setActiveProcess(2)}
              >
                <div className="absolute -top-5 -left-5 w-14 h-14 rounded-xl bg-gradient-to-br from-[#F97316] to-[#FB923C] text-white flex items-center justify-center font-bold text-2xl shadow-lg">
                  03
                </div>
                <h3 className="font-poppins font-semibold text-2xl mb-4 mt-4 text-[#1E293B]">
                  Construction Phase
                </h3>
                <p className="text-[#64748B] leading-relaxed">
                  Expert execution with regular progress updates. Quality
                  control at every stage ensures the highest standards are
                  maintained.
                </p>
              </div>

              <div
                className={`relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 cursor-pointer ${
                  activeProcess === 3
                    ? "ring-4 ring-[#F97316] transform scale-105"
                    : ""
                }`}
                onClick={() => setActiveProcess(3)}
              >
                <div className="absolute -top-5 -left-5 w-14 h-14 rounded-xl bg-gradient-to-br from-[#F97316] to-[#FB923C] text-white flex items-center justify-center font-bold text-2xl shadow-lg">
                  04
                </div>
                <h3 className="font-poppins font-semibold text-2xl mb-4 mt-4 text-[#1E293B]">
                  Final Delivery
                </h3>
                <p className="text-[#64748B] leading-relaxed">
                  Thorough inspection and walkthrough. We ensure complete
                  satisfaction and provide warranty support for your peace of
                  mind.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Image Gallery Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-poppins font-bold text-4xl md:text-5xl mb-4">
              Our Recent Projects
            </h2>
            <p className="text-[#64748B] text-lg max-w-2xl mx-auto">
              Take a look at some of our completed construction projects
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="group relative overflow-hidden rounded-2xl cursor-pointer h-80">
              <img
                src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&q=80"
                alt="Modern office complex construction project"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1E293B] to-transparent opacity-0 group-hover:opacity-90 transition-opacity duration-300 flex items-end p-6">
                <div className="text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <h4 className="font-semibold text-xl mb-2">
                    Modern Office Complex
                  </h4>
                  <p className="text-sm text-gray-300">
                    Downtown Business District
                  </p>
                </div>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl cursor-pointer h-80">
              <img
                src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80"
                alt="Completed luxury residential construction project"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1E293B] to-transparent opacity-0 group-hover:opacity-90 transition-opacity duration-300 flex items-end p-6">
                <div className="text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <h4 className="font-semibold text-xl mb-2">
                    Luxury Residence
                  </h4>
                  <p className="text-sm text-gray-300">Private Estate</p>
                </div>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl cursor-pointer h-80">
              <img
                src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80"
                alt="Architectural design and construction planning"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1E293B] to-transparent opacity-0 group-hover:opacity-90 transition-opacity duration-300 flex items-end p-6">
                <div className="text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <h4 className="font-semibold text-xl mb-2">
                    Architectural Design
                  </h4>
                  <p className="text-sm text-gray-300">Commercial Building</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Project CTA with Image */}
      <section className="py-20 bg-[#F8FAFC]">
        <div className="container mx-auto px-4">
          <div className="relative bg-gradient-to-r from-[#1E293B] to-[#334155] rounded-3xl overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#F97316] rounded-full blur-3xl animate-pulse"></div>
              <div
                className="absolute bottom-0 left-0 w-64 h-64 bg-[#F97316] rounded-full blur-3xl animate-pulse"
                style={{ animationDelay: "1s" }}
              ></div>
            </div>

            <div className="relative z-10 grid grid-cols-1 items-center gap-8 p-6 sm:p-10 md:p-16 lg:grid-cols-2">
              <div className="text-center lg:text-left">
                <Hammer className="h-16 w-16 text-[#F97316] mx-auto lg:mx-0 mb-6" />
                <h2 className="font-poppins font-bold text-3xl md:text-4xl text-white mb-4">
                  Let's Build Something Amazing Together
                </h2>
                <p className="text-[#CBD5E1] text-lg mb-8">
                  Ready to start your construction project? Get in touch for a
                  free consultation and quote.
                </p>
                <Link href="/contact">
                  <button className="bg-[#F97316] hover:bg-[#FB923C] text-[#1E293B] px-10 py-4 rounded-xl font-semibold text-lg transition-all transform hover:scale-105 shadow-xl">
                    Get Your Free Quote
                  </button>
                </Link>
              </div>

              <div className="hidden lg:block">
                <img
                  src="/27.png"
                  alt="Construction"
                  className="rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-8 rounded-2xl border border-emerald-100 bg-gradient-to-r from-amber-50 to-emerald-50 p-6 shadow-lg sm:p-8 md:flex-row">
            <div className="text-center md:text-left">
              <h3 className="font-poppins font-bold text-2xl md:text-3xl mb-2">
                Planning an energy-ready property?
              </h3>
              <p className="text-[#64748B] text-lg">
                Explore how our Solar Technology division can complement your
                construction project.
              </p>
            </div>
            <Link href="/solar" className="w-full sm:w-auto">
              <button className="flex w-full items-center justify-center gap-2 whitespace-nowrap rounded-xl bg-[#FBBF24] px-8 py-3 font-medium text-[#0F172A] shadow-lg transition-colors hover:bg-[#FCD34D] sm:w-auto">
                Explore Solar Technology
                <ChevronRight className="h-5 w-5" />
              </button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
