import { Link } from "wouter";
import { Building, Film, ArrowRight } from "lucide-react";
import { Button } from "../components/ui/button";
import { useState } from "react";

const Home = () => {
  const [hoveredCard, setHoveredCard] = useState<any>(null);

  return (
    <>
      {/* Hero Section with Division Choice */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#334155] min-h-screen flex items-center">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-96 h-96 bg-[#FFC107] opacity-5 rounded-full blur-3xl -top-20 -left-20 animate-pulse"></div>
          <div className="absolute w-96 h-96 bg-[#9C27B0] opacity-5 rounded-full blur-3xl -bottom-20 -right-20 animate-pulse"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10 py-16">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="font-poppins font-bold text-5xl md:text-6xl lg:text-7xl text-white leading-tight mb-6">
              Welcome to{" "}
              <span className="text-[#FFC107]">Rich Dad Investments</span>
            </h1>
            <p className="text-[#94A3B8] text-xl md:text-2xl mb-4 max-w-3xl mx-auto">
              Two Divisions. One Vision. Endless Possibilities.
            </p>
            <p className="text-[#64748B] text-lg max-w-2xl mx-auto">
              Choose your path to discover how we can transform your project
            </p>
          </div>

          {/* Division Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Construction Division */}
            <div
              onMouseEnter={() => setHoveredCard("construction")}
              onMouseLeave={() => setHoveredCard(null)}
              className="group relative bg-gradient-to-br from-[#1E293B] to-[#0F172A] rounded-2xl overflow-hidden border-2 border-[#334155] hover:border-[#FFC107] transition-all duration-500 transform hover:scale-105 hover:shadow-2xl"
            >
              {/* Background Image with Overlay */}
              <div className="absolute inset-0">
                <img
                  src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=800"
                  alt="Construction"
                  className="w-full h-full object-cover opacity-20 group-hover:opacity-30 transition-opacity duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-[#0F172A]/80 to-transparent"></div>
              </div>

              {/* Content */}
              <div className="relative p-8 md:p-12 h-full flex flex-col justify-between min-h-[500px]">
                <div>
                  <div className="w-20 h-20 bg-[#FFC107] bg-opacity-20 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-opacity-30 transition-all duration-300">
                    <Building className="h-10 w-10 text-[#FFC107]" />
                  </div>

                  <h2 className="font-poppins font-bold text-4xl md:text-5xl text-white mb-4">
                    Construction
                  </h2>

                  <div className="w-20 h-1 bg-[#FFC107] mb-6 group-hover:w-32 transition-all duration-300"></div>

                  <p className="text-[#94A3B8] text-lg mb-8">
                    Building tomorrow's infrastructure today. From commercial
                    complexes to residential dreams, we bring structural
                    excellence to every project.
                  </p>

                  <ul className="space-y-3 mb-8">
                    <li className="flex items-center text-[#CBD5E1]">
                      <div className="w-2 h-2 bg-[#FFC107] rounded-full mr-3"></div>
                      Commercial & Industrial Buildings
                    </li>
                    <li className="flex items-center text-[#CBD5E1]">
                      <div className="w-2 h-2 bg-[#FFC107] rounded-full mr-3"></div>
                      Residential Development
                    </li>
                    <li className="flex items-center text-[#CBD5E1]">
                      <div className="w-2 h-2 bg-[#FFC107] rounded-full mr-3"></div>
                      Renovations & Remodeling
                    </li>
                    <li className="flex items-center text-[#CBD5E1]">
                      <div className="w-2 h-2 bg-[#FFC107] rounded-full mr-3"></div>
                      Project Management
                    </li>
                  </ul>
                </div>

                <Link href="/construction">
                  <Button className="w-full bg-[#FFC107] hover:bg-[#FFD54F] text-[#0F172A] font-semibold py-4 rounded-xl transition-all duration-300 transform group-hover:translate-y-0 translate-y-2 flex items-center justify-center text-lg">
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
              className="group relative bg-gradient-to-br from-[#1E293B] to-[#0F172A] rounded-2xl overflow-hidden border-2 border-[#334155] hover:border-[#9C27B0] transition-all duration-500 transform hover:scale-105 hover:shadow-2xl"
            >
              {/* Background Image with Overlay */}
              <div className="absolute inset-0">
                <img
                  src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=800"
                  alt="Media Production"
                  className="w-full h-full object-cover opacity-20 group-hover:opacity-30 transition-opacity duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-[#0F172A]/80 to-transparent"></div>
              </div>

              {/* Content */}
              <div className="relative p-8 md:p-12 h-full flex flex-col justify-between min-h-[500px]">
                <div>
                  <div className="w-20 h-20 bg-[#9C27B0] bg-opacity-20 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-opacity-30 transition-all duration-300">
                    <Film className="h-10 w-10 text-[#9C27B0]" />
                  </div>

                  <h2 className="font-poppins font-bold text-4xl md:text-5xl text-white mb-4">
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

                <Link href="/media">
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
