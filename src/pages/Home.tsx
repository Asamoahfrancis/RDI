import { Link } from "wouter";
import { Check, Building, Film } from "lucide-react";
import { Button } from "../components/ui/button";

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <section
        id="home"
        className="relative overflow-hidden bg-gradient-to-r from-[#1E293B] to-[#1E293B] py-16 md:py-24"
      >
        {/* Decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-72 h-72 bg-[#FFC107] opacity-10 rounded-full -top-10 -left-10"></div>
          <div className="absolute w-96 h-96 bg-[#9C27B0] opacity-10 rounded-full -bottom-20 -right-20"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 text-center md:text-left mb-10 md:mb-0">
              <h1 className="font-poppins font-bold text-4xl md:text-5xl lg:text-6xl text-white leading-tight mb-6">
                <span className="block">Building Media &</span>
                <span className="block">
                  <span className="text-[#FFC107]">Construction</span> Solutions
                </span>
              </h1>
              <p className="text-[#94A3B8] text-lg md:text-xl mb-8 max-w-lg mx-auto md:mx-0">
                We bridge the gap between physical and digital worlds with
                innovative solutions for construction projects and media
                productions.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center md:justify-start">
                <Link href="/services">
                  <Button className="bg-[#FFC107] hover:bg-opacity-90 text-white px-8 py-3 rounded-lg font-medium transition-all transform hover:scale-105 text-center w-full sm:w-auto">
                    Our Services
                  </Button>
                </Link>
                <Link href="/portfolio">
                  <Button className="bg-[#9C27B0] hover:bg-opacity-90 text-white px-8 py-3 rounded-lg font-medium transition-all transform hover:scale-105 text-center w-full sm:w-auto">
                    View Portfolio
                  </Button>
                </Link>
              </div>
            </div>

            <div className="md:w-1/2 flex justify-center">
              <img
                src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
                alt="DualCore Industries Modern Office"
                className="rounded-lg shadow-2xl w-full max-w-lg transform md:rotate-3 transition-transform hover:rotate-0 duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section Preview */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-poppins font-bold text-3xl md:text-4xl mb-4">
              About DualCore
            </h2>
            <p className="text-[#64748B] max-w-2xl mx-auto">
              Our unique approach combines expertise in both construction and
              media to deliver integrated solutions for the modern world.
            </p>
          </div>

          <div className="flex flex-col md:flex-row items-center space-y-12 md:space-y-0 md:space-x-16">
            <div className="md:w-1/2">
              <div className="relative">
                <img
                  src="/34.jpg"
                  alt="DualCore Team"
                  className="rounded-lg shadow-xl w-full z-10 relative"
                />
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-[#FFC107] rounded-lg hidden md:block"></div>
                <div className="absolute -top-4 -left-4 w-24 h-24 bg-[#9C27B0] rounded-lg hidden md:block"></div>
              </div>
            </div>

            <div className="md:w-1/2">
              <h3 className="font-poppins font-semibold text-2xl md:text-3xl mb-6">
                Our Story
              </h3>
              <p className="text-[#64748B] mb-6">
                Founded in 2015, DualCore Industries emerged from a vision to
                bridge the gap between physical construction and digital media.
                What began as two separate ventures merged into a powerful
                synergy that provides comprehensive solutions to our clients.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                <div className="bg-[#F8FAFC] p-6 rounded-lg">
                  <div className="text-[#FFC107] text-xl mb-2">
                    <Building className="h-6 w-6" />
                  </div>
                  <h4 className="font-poppins font-semibold text-lg mb-2">
                    Construction Division
                  </h4>
                  <p className="text-[#64748B] text-sm">
                    Specializing in commercial and residential projects with
                    innovative building techniques and sustainable practices.
                  </p>
                </div>

                <div className="bg-[#F8FAFC] p-6 rounded-lg">
                  <div className="text-[#9C27B0] text-xl mb-2">
                    <Film className="h-6 w-6" />
                  </div>
                  <h4 className="font-poppins font-semibold text-lg mb-2">
                    Media Division
                  </h4>
                  <p className="text-[#64748B] text-sm">
                    Creating compelling digital content, marketing materials,
                    and immersive experiences for businesses of all sizes.
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
                <div className="flex items-center">
                  <div className="text-[#FFC107] text-xl mr-2">
                    <Check className="h-5 w-5" />
                  </div>
                  <span className="font-medium">10+ Years Experience</span>
                </div>
                <div className="flex items-center">
                  <div className="text-[#9C27B0] text-xl mr-2">
                    <Check className="h-5 w-5" />
                  </div>
                  <span className="font-medium">200+ Projects Completed</span>
                </div>
                <div className="flex items-center">
                  <div className="text-[#10B981] text-xl mr-2">
                    <Check className="h-5 w-5" />
                  </div>
                  <span className="font-medium">50+ Team Members</span>
                </div>
              </div>

              <div className="mt-8">
                <Link href="/about">
                  <Button className="bg-[#1E293B] hover:bg-opacity-90 text-white px-6 py-2.5 rounded-lg font-medium transition-all transform hover:scale-105">
                    Learn More About Us
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-16 md:py-24 bg-[#F8FAFC]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-poppins font-bold text-3xl md:text-4xl mb-4">
              Our Services
            </h2>
            <p className="text-[#64748B] max-w-2xl mx-auto">
              Comprehensive solutions spanning both construction and media to
              meet all your project needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Construction Services */}
            <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-[#FFC107]">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-[#FFC107] bg-opacity-10 rounded-full flex items-center justify-center text-[#FFC107] text-2xl">
                  <Building className="h-6 w-6" />
                </div>
                <h3 className="font-poppins font-semibold text-2xl ml-4">
                  Construction Services
                </h3>
              </div>

              <ul className="space-y-4">
                <li className="flex">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-6 h-6 bg-[#FFC107] bg-opacity-10 rounded-full flex items-center justify-center text-[#FFC107] text-xs">
                      <Check className="h-3 w-3" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="font-medium text-lg mb-2">
                      Commercial Construction
                    </h4>
                    <p className="text-[#64748B]">
                      Full-service commercial construction with a focus on
                      office spaces, retail outlets, and industrial facilities.
                    </p>
                  </div>
                </li>
                <li className="flex">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-6 h-6 bg-[#FFC107] bg-opacity-10 rounded-full flex items-center justify-center text-[#FFC107] text-xs">
                      <Check className="h-3 w-3" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="font-medium text-lg mb-2">
                      Residential Projects
                    </h4>
                    <p className="text-[#64748B]">
                      Custom home building, renovations, and multi-family
                      residential developments with attention to detail.
                    </p>
                  </div>
                </li>
              </ul>

              <div className="mt-8">
                <Link href="/services">
                  <Button className="bg-[#FFC107] hover:bg-opacity-90 text-white px-6 py-2.5 rounded-lg font-medium transition-all transform hover:scale-105">
                    View All Construction Services
                  </Button>
                </Link>
              </div>
            </div>

            {/* Media Services */}
            <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-[#9C27B0]">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-[#9C27B0] bg-opacity-10 rounded-full flex items-center justify-center text-[#9C27B0] text-2xl">
                  <Film className="h-6 w-6" />
                </div>
                <h3 className="font-poppins font-semibold text-2xl ml-4">
                  Media Services
                </h3>
              </div>

              <ul className="space-y-4">
                <li className="flex">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-6 h-6 bg-[#9C27B0] bg-opacity-10 rounded-full flex items-center justify-center text-[#9C27B0] text-xs">
                      <Check className="h-3 w-3" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="font-medium text-lg mb-2">
                      Content Production
                    </h4>
                    <p className="text-[#64748B]">
                      High-quality video and photography production for
                      commercial, promotional, and documentary purposes.
                    </p>
                  </div>
                </li>
                <li className="flex">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-6 h-6 bg-[#9C27B0] bg-opacity-10 rounded-full flex items-center justify-center text-[#9C27B0] text-xs">
                      <Check className="h-3 w-3" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="font-medium text-lg mb-2">
                      Digital Marketing
                    </h4>
                    <p className="text-[#64748B]">
                      Comprehensive digital marketing strategies including
                      social media, content marketing, and SEO optimization.
                    </p>
                  </div>
                </li>
              </ul>

              <div className="mt-8">
                <Link href="/services">
                  <Button className="bg-[#9C27B0] hover:bg-opacity-90 text-white px-6 py-2.5 rounded-lg font-medium transition-all transform hover:scale-105">
                    View All Media Services
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Link href="/services">
              <Button className="bg-[#1E293B] hover:bg-opacity-90 text-white px-8 py-3 rounded-lg font-medium transition-all transform hover:scale-105">
                Explore All Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-[#1E293B] to-[#1E293B]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-poppins font-bold text-3xl md:text-4xl text-white mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-[#94A3B8] text-lg mb-8 max-w-2xl mx-auto">
            Contact us today to discuss how our dual expertise in construction
            and media can bring your vision to life.
          </p>
          <Link href="/contact">
            <Button className="bg-[#10B981] hover:bg-opacity-90 text-white px-8 py-3 rounded-lg font-medium transition-all transform hover:scale-105 text-center">
              Get in Touch
            </Button>
          </Link>
        </div>
      </section>
    </>
  );
};

export default Home;
