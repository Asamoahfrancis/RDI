import { useState } from "react";
import {
  Users,
  Target,
  Award,
  Building,
  Film,
  ChevronRight,
  Sparkles,
} from "lucide-react";

const About = () => {
  const [activeTab, setActiveTab] = useState("construction");

  return (
    <>
      {/* Page Header */}
      <section className="bg-[#1E293B] py-16 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-poppins font-bold text-4xl md:text-5xl text-white mb-4">
            About Rich Dad Investments
          </h1>
          <p className="text-[#94A3B8] text-lg md:text-xl max-w-2xl mx-auto">
            Where Construction Excellence Meets Media Innovation
          </p>
        </div>
      </section>

      {/* Interactive Division Showcase */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-[#1E293B] via-[#334155] to-[#1E293B]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-poppins font-bold text-3xl md:text-4xl text-white mb-4">
              Our Two Powerhouse Divisions
            </h2>
            <p className="text-[#94A3B8] text-lg max-w-2xl mx-auto">
              Explore our specialized expertise in construction and media
            </p>
          </div>

          {/* Tab Buttons */}
          <div className="flex justify-center mb-12">
            <div className="bg-white bg-opacity-10 backdrop-blur-sm p-2 rounded-2xl inline-flex gap-2">
              <button
                onClick={() => setActiveTab("construction")}
                className={`flex items-center gap-2 px-8 py-4 rounded-xl font-semibold transition-all duration-300 ${
                  activeTab === "construction"
                    ? "bg-gradient-to-r from-[#FFC107] to-[#FFD54F] text-white shadow-lg scale-105"
                    : "text-black border border-[#94A3B8] hover:bg-white hover:bg-opacity-10"
                }`}
              >
                <Building className="h-5 w-5" />
                Construction
              </button>
              <button
                onClick={() => setActiveTab("media")}
                className={`flex items-center gap-2 px-8 py-4  rounded-xl font-semibold transition-all duration-300 ${
                  activeTab === "media"
                    ? "bg-gradient-to-r from-[#9C27B0] to-[#BA68C8] text-white    shadow-lg scale-105"
                    : "text-black border border-gray-300 shadow-2xl  hover:bg-white hover:bg-opacity-10"
                }`}
              >
                <Film className="h-5 w-5" />
                Media
              </button>
            </div>
          </div>

          {/* Content Display */}
          <div className="max-w-5xl mx-auto ">
            {activeTab === "construction" && (
              <div className="animate-fadeIn">
                <div className="bg-gradient-to-br from-[#FFC107] to-[#FFD54F] p-8 md:p-12 rounded-3xl shadow-2xl ">
                  <div className="flex items-center mb-8">
                    <div className="w-20 h-20 bg-white bg-opacity-20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                      <Building className="h-10 w-10 text-black" />
                    </div>
                    <div className="ml-6">
                      <h3 className="font-poppins font-bold text-3xl md:text-4xl">
                        Construction Division
                      </h3>
                      <p className="text-white text-opacity-90 text-lg mt-1">
                        Building the Future, One Project at a Time
                      </p>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8 mb-8">
                    <div>
                      <h4 className="font-semibold text-xl mb-4 flex items-center">
                        <Sparkles className="h-5 w-5 mr-2" />
                        What We Do
                      </h4>
                      <p className="text-white text-opacity-95 leading-relaxed">
                        Our construction division brings decades of combined
                        experience in commercial and residential development. We
                        specialize in innovative building techniques,
                        sustainable practices, and cutting-edge construction
                        technology that transforms visions into reality.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-xl mb-4 flex items-center">
                        <Award className="h-5 w-5 mr-2" />
                        Our Expertise
                      </h4>
                      <div className="space-y-3">
                        <div className="flex items-start bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-3">
                          <ChevronRight className="h-5 w-5 mr-2 flex-shrink-0 mt-0.5" />
                          <span>
                            Expert architects, engineers, and project managers
                          </span>
                        </div>
                        <div className="flex items-start bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-3">
                          <ChevronRight className="h-5 w-5 mr-2 flex-shrink-0 mt-0.5" />
                          <span>
                            Green building and sustainability certifications
                          </span>
                        </div>
                        <div className="flex items-start bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-3">
                          <ChevronRight className="h-5 w-5 mr-2 flex-shrink-0 mt-0.5" />
                          <span>Advanced construction technology and BIM</span>
                        </div>
                        <div className="flex items-start bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-3">
                          <ChevronRight className="h-5 w-5 mr-2 flex-shrink-0 mt-0.5" />
                          <span>On-time, on-budget delivery guarantee</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-2xl p-6">
                    <h4 className="font-semibold text-xl mb-3">Our Promise</h4>
                    <p className="text-[#94A3B8] text-opacity-95 leading-relaxed">
                      From initial design through final construction, we ensure
                      quality and precision at every step of the building
                      process. We don't just construct buildings—we create
                      spaces that inspire, function flawlessly, and stand the
                      test of time.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "media" && (
              <div className="animate-fadeIn">
                <div className="bg-gradient-to-br from-[#9C27B0] to-[#BA68C8] p-8 md:p-12 rounded-3xl shadow-2xl ">
                  <div className="flex items-center mb-8">
                    <div className="w-20 h-20 bg-white bg-opacity-20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                      <Film className="h-10 w-10 text-[#94A3B8]" />
                    </div>
                    <div className="ml-6">
                      <h3 className="font-poppins font-bold text-3xl md:text-4xl">
                        Media Division
                      </h3>
                      <p className="text-white text-opacity-90 text-lg mt-1">
                        Crafting Stories That Captivate and Convert
                      </p>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8 mb-8">
                    <div>
                      <h4 className="font-semibold text-xl mb-4 flex items-center">
                        <Sparkles className="h-5 w-5 mr-2" />
                        What We Create
                      </h4>
                      <p className="text-white text-opacity-95 leading-relaxed">
                        Our media division creates compelling digital content,
                        marketing materials, and immersive experiences that
                        resonate with audiences. From brand strategy to content
                        production, we help businesses establish and maintain a
                        powerful digital presence that drives results.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-xl mb-4 flex items-center">
                        <Award className="h-5 w-5 mr-2" />
                        Our Capabilities
                      </h4>
                      <div className="space-y-3 ">
                        <div className="flex items-start bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-3">
                          <ChevronRight className="h-5 w-5 mr-2 flex-shrink-0 mt-0.5" />
                          <span>
                            Award-winning creative directors and producers
                          </span>
                        </div>
                        <div className="flex items-start bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-3">
                          <ChevronRight className="h-5 w-5 mr-2 flex-shrink-0 mt-0.5" />
                          <span>
                            State-of-the-art production equipment and studios
                          </span>
                        </div>
                        <div className="flex items-start bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-3">
                          <ChevronRight className="h-5 w-5 mr-2 flex-shrink-0 mt-0.5" />
                          <span>Data-driven digital marketing strategies</span>
                        </div>
                        <div className="flex items-start bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-3">
                          <ChevronRight className="h-5 w-5 mr-2 flex-shrink-0 mt-0.5" />
                          <span>
                            VR/AR, 3D visualization, and emerging tech
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white  bg-opacity-20 backdrop-blur-sm rounded-2xl p-6">
                    <h4 className="font-semibold text-xl mb-3">
                      Our Specialty
                    </h4>
                    <p className=" text-opacity-95 leading-relaxed">
                      We create everything from promotional videos and
                      architectural visualizations to full-scale brand campaigns
                      and digital experiences. Our content doesn't just look
                      good—it tells your story, engages your audience, and
                      delivers measurable business impact.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center space-y-12 md:space-y-0 md:space-x-16">
            <div className="md:w-1/2">
              <div className="relative">
                <img
                  src="/36.jpg"
                  alt="Rich Dad Investments Team"
                  className="rounded-lg shadow-xl w-full z-10 relative"
                />
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-[#FFC107] rounded-lg hidden md:block"></div>
                <div className="absolute -top-4 -left-4 w-24 h-24 bg-[#9C27B0] rounded-lg hidden md:block"></div>
              </div>
            </div>

            <div className="md:w-1/2">
              <h2 className="font-poppins font-semibold text-3xl md:text-4xl mb-6">
                Our Story
              </h2>
              <p className="text-[#64748B] mb-6">
                Founded in 2015, Rich Dad Investments emerged from a vision to
                bridge the gap between physical construction and digital media.
                What began as two separate ventures merged into a powerful
                synergy that provides comprehensive solutions to our clients.
              </p>
              <p className="text-[#64748B] mb-6">
                Our founders, with backgrounds in architecture and digital
                marketing respectively, recognized that modern projects often
                required both physical building expertise and digital presence
                creation. Instead of clients needing to work with multiple
                companies, Rich Dad Investments was established to offer
                seamless integration of both worlds.
              </p>
              <p className="text-[#64748B]">
                Today, we've grown to a team of over 50 professionals spanning
                architects, engineers, project managers, designers, developers,
                filmmakers, content creators, and marketing specialists. This
                diverse expertise allows us to handle projects from concept to
                completion with an integrated approach that saves time, reduces
                costs, and delivers superior results.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What Sets Us Apart */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-[#1E293B] to-[#334155]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-poppins font-bold text-3xl md:text-4xl text-white mb-4">
              What Sets Us Apart
            </h2>
            <p className="text-[#94A3B8] text-lg max-w-2xl mx-auto">
              Our unique dual expertise creates value that single-focus
              companies simply cannot match
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white bg-opacity-10 backdrop-blur-sm p-8 rounded-xl border border-white border-opacity-20 hover:bg-opacity-15 transition-all">
              <div className="w-12 h-12 bg-[#FFC107] rounded-lg flex items-center justify-center mb-6">
                <Users className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-poppins font-semibold text-xl text-white mb-4">
                Integrated Teams
              </h3>
              <p className="text-[#94A3B8]">
                Our construction and media professionals work side-by-side from
                day one, ensuring seamless coordination and unified vision
                throughout your project.
              </p>
            </div>

            <div className="bg-white bg-opacity-10 backdrop-blur-sm p-8 rounded-xl border border-white border-opacity-20 hover:bg-opacity-15 transition-all">
              <div className="w-12 h-12 bg-[#9C27B0] rounded-lg flex items-center justify-center mb-6">
                <Award className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-poppins font-semibold text-xl text-white mb-4">
                Proven Track Record
              </h3>
              <p className="text-[#94A3B8]">
                With over 200 successful projects completed, we've demonstrated
                our ability to deliver exceptional results across diverse
                industries and project scales.
              </p>
            </div>

            <div className="bg-white bg-opacity-10 backdrop-blur-sm p-8 rounded-xl border border-white border-opacity-20 hover:bg-opacity-15 transition-all">
              <div className="w-12 h-12 bg-[#10B981] rounded-lg flex items-center justify-center mb-6">
                <Target className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-poppins font-semibold text-xl text-white mb-4">
                Holistic Approach
              </h3>
              <p className="text-[#94A3B8]">
                We don't just build structures or create content—we develop
                comprehensive solutions that align your physical and digital
                presence with your business goals.
              </p>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.4s ease-out;
        }
      `}</style>
    </>
  );
};

export default About;
