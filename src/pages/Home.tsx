import { Link } from "wouter";
import { Building, Film, Sun, ArrowRight } from "lucide-react";
import { Button } from "../components/ui/button";
import { useState } from "react";
import Seo from "../components/Seo";

const Home = () => {
  const [hoveredCard, setHoveredCard] = useState<
    "construction" | "media" | "solar" | null
  >(null);

  return (
    <>
      <Seo
        title="RichDad Investments | Construction, Media & Solar Technology"
        description="RichDad Investments provides construction, media production, and solar panel technology solutions for homes and businesses in Ghana."
      />

      {/* Hero Section with Division Choice */}
      <section className="relative flex min-h-screen items-center overflow-hidden bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#334155]">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-96 h-96 bg-[#FFC107] opacity-5 rounded-full blur-3xl -top-20 -left-20 animate-pulse"></div>
          <div className="absolute w-96 h-96 bg-[#9C27B0] opacity-5 rounded-full blur-3xl -bottom-20 -right-20 animate-pulse"></div>
          <div className="absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#10B981] opacity-5 blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10 py-16">
          {/* Header */}
          <div className="mb-10 text-center sm:mb-16">
            <h1 className="mb-6 font-poppins text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
              Welcome to{" "}
              <span className="bg-gradient-to-r from-[#FB923C] via-[#FBBF24] to-[#34D399] bg-clip-text text-transparent">
                RichDad Investments
              </span>
            </h1>
            <p className="text-[#94A3B8] text-xl md:text-2xl mb-4 max-w-3xl mx-auto">
              Three Divisions. One Vision. Endless Possibilities.
            </p>
            <p className="text-[#64748B] text-lg max-w-2xl mx-auto">
              Choose your path to discover how we can transform your project
            </p>
          </div>

          {/* Division Cards */}
          <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3 xl:gap-8">
            {/* Construction Division */}
            <div
              onMouseEnter={() => setHoveredCard("construction")}
              onMouseLeave={() => setHoveredCard(null)}
              className="group relative overflow-hidden rounded-2xl border-2 border-[#334155] bg-gradient-to-br from-[#1E293B] to-[#0F172A] transition-all duration-500 hover:-translate-y-1 hover:border-[#F97316] hover:shadow-2xl"
            >
              {/* Background Image with Overlay */}
              <div className="absolute inset-0">
                <img
                  src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=800"
                  alt="Construction professionals working on a building project"
                  className="w-full h-full object-cover opacity-20 group-hover:opacity-30 transition-opacity duration-500"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-[#0F172A]/80 to-transparent"></div>
              </div>

              {/* Content */}
              <div className="relative flex h-full min-h-[480px] flex-col justify-between p-6 sm:p-8 xl:p-8 2xl:p-10">
                <div>
                  <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-[#F97316]/20 transition-all duration-300 group-hover:bg-[#F97316]/30">
                    <Building className="h-10 w-10 text-[#FB923C]" />
                  </div>

                  <h2 className="mb-4 font-poppins text-3xl font-bold text-white sm:text-4xl">
                    Construction
                  </h2>

                  <div className="mb-6 h-1 w-20 bg-[#F97316] transition-all duration-300 group-hover:w-32"></div>

                  <p className="text-[#94A3B8] text-lg mb-8">
                    Building tomorrow's infrastructure today. From commercial
                    complexes to residential dreams, we bring structural
                    excellence to every project.
                  </p>

                  <ul className="space-y-3 mb-8">
                    <li className="flex items-center text-[#CBD5E1]">
                      <div className="mr-3 h-2 w-2 shrink-0 rounded-full bg-[#F97316]"></div>
                      Commercial & Industrial Buildings
                    </li>
                    <li className="flex items-center text-[#CBD5E1]">
                      <div className="mr-3 h-2 w-2 shrink-0 rounded-full bg-[#F97316]"></div>
                      Residential Development
                    </li>
                    <li className="flex items-center text-[#CBD5E1]">
                      <div className="mr-3 h-2 w-2 shrink-0 rounded-full bg-[#F97316]"></div>
                      Renovations & Remodeling
                    </li>
                    <li className="flex items-center text-[#CBD5E1]">
                      <div className="mr-3 h-2 w-2 shrink-0 rounded-full bg-[#F97316]"></div>
                      Project Management
                    </li>
                  </ul>
                </div>

                <Link href="/construction" className="block">
                  <Button className="flex w-full translate-y-2 items-center justify-center rounded-xl bg-[#F97316] py-4 text-lg font-semibold text-white transition-all duration-300 hover:bg-[#FB923C] group-hover:translate-y-0">
                    Explore Construction
                    <ArrowRight
                      className={`ml-2 h-5 w-5 transition-transform duration-300 ${
                        hoveredCard === "construction" ? "translate-x-2" : ""
                      }`}
                    />
                  </Button>
                </Link>
              </div>
            </div>

            {/* Media Division */}
            <div
              onMouseEnter={() => setHoveredCard("media")}
              onMouseLeave={() => setHoveredCard(null)}
              className="group relative overflow-hidden rounded-2xl border-2 border-[#334155] bg-gradient-to-br from-[#1E293B] to-[#0F172A] transition-all duration-500 hover:-translate-y-1 hover:border-[#9C27B0] hover:shadow-2xl"
            >
              {/* Background Image with Overlay */}
              <div className="absolute inset-0">
                <img
                  src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=800"
                  alt="Media Production"
                  className="w-full h-full object-cover opacity-20 group-hover:opacity-30 transition-opacity duration-500"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-[#0F172A]/80 to-transparent"></div>
              </div>

              {/* Content */}
              <div className="relative flex h-full min-h-[480px] flex-col justify-between p-6 sm:p-8 xl:p-8 2xl:p-10">
                <div>
                  <div className="w-20 h-20 bg-[#9C27B0] bg-opacity-20 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-opacity-30 transition-all duration-300">
                    <Film className="h-10 w-10 text-[#9C27B0]" />
                  </div>

                  <h2 className="mb-4 font-poppins text-3xl font-bold text-white sm:text-4xl">
                    Media
                  </h2>

                  <div className="w-20 h-1 bg-[#9C27B0] mb-6 group-hover:w-32 transition-all duration-300"></div>

                  <p className="text-[#94A3B8] text-lg mb-8">
                    Crafting compelling stories through digital innovation. From
                    concept to creation, we bring your brand's vision to life.
                  </p>

                  <ul className="space-y-3 mb-8">
                    <li className="flex items-center text-[#CBD5E1]">
                      <div className="w-2 h-2 bg-[#9C27B0] rounded-full mr-3"></div>
                      Video Production & Photography
                    </li>
                    <li className="flex items-center text-[#CBD5E1]">
                      <div className="w-2 h-2 bg-[#9C27B0] rounded-full mr-3"></div>
                      Digital Marketing Solutions
                    </li>
                    <li className="flex items-center text-[#CBD5E1]">
                      <div className="w-2 h-2 bg-[#9C27B0] rounded-full mr-3"></div>
                      Brand Development
                    </li>
                    <li className="flex items-center text-[#CBD5E1]">
                      <div className="w-2 h-2 bg-[#9C27B0] rounded-full mr-3"></div>
                      Content Strategy
                    </li>
                  </ul>
                </div>

                <Link href="/media" className="block">
                  <Button className="w-full bg-[#9C27B0] hover:bg-[#AB47BC] text-white font-semibold py-4 rounded-xl transition-all duration-300 transform group-hover:translate-y-0 translate-y-2 flex items-center justify-center text-lg">
                    Explore Media
                    <ArrowRight
                      className={`ml-2 h-5 w-5 transition-transform duration-300 ${
                        hoveredCard === "media" ? "translate-x-2" : ""
                      }`}
                    />
                  </Button>
                </Link>
              </div>
            </div>

            {/* Solar Technology Division */}
            <div
              onMouseEnter={() => setHoveredCard("solar")}
              onMouseLeave={() => setHoveredCard(null)}
              className="group relative overflow-hidden rounded-2xl border-2 border-[#334155] bg-gradient-to-br from-[#1E293B] to-[#0F172A] transition-all duration-500 hover:-translate-y-1 hover:border-[#FBBF24] hover:shadow-2xl md:col-span-2 md:w-[calc(50%_-_0.75rem)] md:justify-self-center xl:col-span-1 xl:w-auto"
            >
              {/* Background Image with Overlay */}
              <div className="absolute inset-0">
                <img
                  src="https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=800"
                  alt="Solar panels generating clean energy"
                  className="w-full h-full object-cover opacity-20 group-hover:opacity-30 transition-opacity duration-500"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-[#0F172A]/80 to-transparent"></div>
              </div>

              {/* Content */}
              <div className="relative flex h-full min-h-[480px] flex-col justify-between p-6 sm:p-8 xl:p-8 2xl:p-10">
                <div>
                  <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-[#FBBF24]/25 to-[#10B981]/20 transition-all duration-300 group-hover:from-[#FBBF24]/35 group-hover:to-[#10B981]/30">
                    <Sun className="h-10 w-10 text-[#FBBF24]" />
                  </div>

                  <h2 className="mb-4 font-poppins text-3xl font-bold text-white sm:text-4xl">
                    Solar Technology
                  </h2>

                  <div className="mb-6 h-1 w-20 bg-gradient-to-r from-[#FBBF24] to-[#10B981] transition-all duration-300 group-hover:w-32"></div>

                  <p className="text-[#94A3B8] text-lg mb-8">
                    Powering homes and businesses with reliable solar panel
                    technology. We deliver efficient, sustainable energy
                    systems designed for long-term savings.
                  </p>

                  <ul className="space-y-3 mb-8">
                    <li className="flex items-center text-[#CBD5E1]">
                      <div className="w-2 h-2 bg-[#10B981] rounded-full mr-3 shrink-0"></div>
                      Solar Panel Installation
                    </li>
                    <li className="flex items-center text-[#CBD5E1]">
                      <div className="w-2 h-2 bg-[#10B981] rounded-full mr-3 shrink-0"></div>
                      Energy Storage Solutions
                    </li>
                    <li className="flex items-center text-[#CBD5E1]">
                      <div className="w-2 h-2 bg-[#10B981] rounded-full mr-3 shrink-0"></div>
                      System Design & Consultation
                    </li>
                    <li className="flex items-center text-[#CBD5E1]">
                      <div className="w-2 h-2 bg-[#10B981] rounded-full mr-3 shrink-0"></div>
                      Maintenance & Performance Monitoring
                    </li>
                  </ul>
                </div>

                <Link href="/solar" className="block">
                  <Button className="flex w-full translate-y-2 items-center justify-center rounded-xl bg-[#FBBF24] py-4 text-lg font-semibold text-[#0F172A] transition-all duration-300 hover:bg-[#FCD34D] group-hover:translate-y-0">
                    Explore Solar Technology
                    <ArrowRight
                      className={`ml-2 h-5 w-5 transition-transform duration-300 ${
                        hoveredCard === "solar" ? "translate-x-2" : ""
                      }`}
                    />
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-16">
            <p className="text-[#64748B] mb-4">
              Not sure which division you need?
            </p>
            <Link href="/contact">
              <Button className="bg-[#334155] hover:bg-[#475569] text-white px-8 py-3 rounded-lg font-medium transition-all">
                Contact Us for Guidance
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
