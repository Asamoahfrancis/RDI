import { Link } from "wouter";
import { Building, Film, CheckCircle } from "lucide-react";
import { Button } from "../components/ui/button";

const About = () => {
  return (
    <>
      {/* Page Header */}
      <section className="bg-[#1E293B] py-16 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-poppins font-bold text-4xl md:text-5xl text-white mb-4">
            About DualCore
          </h1>
          <p className="text-[#94A3B8] text-lg md:text-xl max-w-2xl mx-auto">
            Our unique approach combines expertise in both construction and
            media to deliver integrated solutions for the modern world.
          </p>
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
                  alt="DualCore Team"
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
                Founded in 2015, DualCore Industries emerged from a vision to
                bridge the gap between physical construction and digital media.
                What began as two separate ventures merged into a powerful
                synergy that provides comprehensive solutions to our clients.
              </p>
              <p className="text-[#64748B] mb-6">
                Our founders, with backgrounds in architecture and digital
                marketing respectively, recognized that modern projects often
                required both physical building expertise and digital presence
                creation. Instead of clients needing to work with multiple
                companies, DualCore was established to offer seamless
                integration of both worlds.
              </p>
              <p className="text-[#64748B] mb-6">
                Today, we've grown to a team of over 50 professionals spanning
                architects, engineers, project managers, designers, developers,
                and marketing specialists. This diverse expertise allows us to
                handle projects from concept to completion with an integrated
                approach that saves time, reduces costs, and delivers superior
                results.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Divisions */}
      <section className="py-16 md:py-24 bg-[#F8FAFC]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-poppins font-bold text-3xl md:text-4xl mb-4">
              Our Divisions
            </h2>
            <p className="text-[#64748B] max-w-2xl mx-auto">
              Two specialized teams working together to deliver comprehensive
              solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Construction Division */}
            <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-[#FFC107]">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-[#FFC107] bg-opacity-10 rounded-full flex items-center justify-center text-[#FFC107] text-2xl">
                  <Building className="h-6 w-6" />
                </div>
                <h3 className="font-poppins font-semibold text-2xl ml-4">
                  Construction Division
                </h3>
              </div>

              <p className="text-[#64748B] mb-6">
                Our construction division specializes in both commercial and
                residential projects, with a focus on innovative building
                techniques and sustainable practices. We handle everything from
                initial design to final construction, ensuring quality at every
                step.
              </p>

              <div className="mb-6">
                <img
                  src="/35.jpg"
                  alt="Construction Services"
                  className="rounded-lg w-full h-48 object-cover"
                />
              </div>

              <ul className="space-y-3 mb-6">
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-[#FFC107] mr-3" />
                  <span>Experienced team of architects and engineers</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-[#FFC107] mr-3" />
                  <span>Green building certification specialists</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-[#FFC107] mr-3" />
                  <span>Advanced construction technology implementation</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-[#FFC107] mr-3" />
                  <span>
                    Proven track record of on-time, on-budget delivery
                  </span>
                </li>
              </ul>

              <Link href="/services">
                <Button className="bg-[#FFC107] hover:bg-opacity-90 text-white px-6 py-2.5 rounded-lg font-medium transition-all transform hover:scale-105 w-full">
                  View Construction Services
                </Button>
              </Link>
            </div>

            {/* Media Division */}
            <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-[#9C27B0]">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-[#9C27B0] bg-opacity-10 rounded-full flex items-center justify-center text-[#9C27B0] text-2xl">
                  <Film className="h-6 w-6" />
                </div>
                <h3 className="font-poppins font-semibold text-2xl ml-4">
                  Media Division
                </h3>
              </div>

              <p className="text-[#64748B] mb-6">
                Our media division focuses on creating compelling digital
                content, marketing materials, and immersive experiences for
                businesses of all sizes. From brand strategy to content
                production, we help companies establish and maintain a strong
                digital presence.
              </p>

              <div className="mb-6">
                <img
                  src="https://images.unsplash.com/photo-1540655037529-dec987208707?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400"
                  alt="Media Services"
                  className="rounded-lg w-full h-48 object-cover"
                />
              </div>

              <ul className="space-y-3 mb-6">
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-[#9C27B0] mr-3" />
                  <span>Award-winning creative directors and producers</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-[#9C27B0] mr-3" />
                  <span>State-of-the-art production equipment</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-[#9C27B0] mr-3" />
                  <span>Data-driven digital marketing strategies</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-[#9C27B0] mr-3" />
                  <span>Expertise in emerging technologies like VR/AR</span>
                </li>
              </ul>

              <Link href="/services">
                <Button className="bg-[#9C27B0] hover:bg-opacity-90 text-white px-6 py-2.5 rounded-lg font-medium transition-all transform hover:scale-105 w-full">
                  View Media Services
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-poppins font-bold text-3xl md:text-4xl mb-4">
              Our Core Values
            </h2>
            <p className="text-[#64748B] max-w-2xl mx-auto">
              The principles that guide our work and define our company culture.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-[#F8FAFC] p-8 rounded-xl hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-r from-[#FFC107] to-[#9C27B0] rounded-full flex items-center justify-center text-white text-2xl mb-6">
                <span className="font-bold">01</span>
              </div>
              <h3 className="font-poppins font-semibold text-xl mb-4">
                Innovation
              </h3>
              <p className="text-[#64748B]">
                We constantly seek new and better ways to solve problems,
                embracing the latest technologies and methodologies in both
                construction and media.
              </p>
            </div>

            <div className="bg-[#F8FAFC] p-8 rounded-xl hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-r from-[#FFC107] to-[#9C27B0] rounded-full flex items-center justify-center text-white text-2xl mb-6">
                <span className="font-bold">02</span>
              </div>
              <h3 className="font-poppins font-semibold text-xl mb-4">
                Integrity
              </h3>
              <p className="text-[#64748B]">
                We maintain the highest ethical standards in all our dealings,
                being transparent, honest and accountable in everything we do.
              </p>
            </div>

            <div className="bg-[#F8FAFC] p-8 rounded-xl hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-r from-[#FFC107] to-[#9C27B0] rounded-full flex items-center justify-center text-white text-2xl mb-6">
                <span className="font-bold">03</span>
              </div>
              <h3 className="font-poppins font-semibold text-xl mb-4">
                Excellence
              </h3>
              <p className="text-[#64748B]">
                We strive for excellence in every project, paying close
                attention to details and ensuring the highest quality in our
                deliverables.
              </p>
            </div>

            <div className="bg-[#F8FAFC] p-8 rounded-xl hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-r from-[#FFC107] to-[#9C27B0] rounded-full flex items-center justify-center text-white text-2xl mb-6">
                <span className="font-bold">04</span>
              </div>
              <h3 className="font-poppins font-semibold text-xl mb-4">
                Sustainability
              </h3>
              <p className="text-[#64748B]">
                We are committed to environmentally responsible practices in
                both our construction projects and media operations.
              </p>
            </div>

            <div className="bg-[#F8FAFC] p-8 rounded-xl hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-r from-[#FFC107] to-[#9C27B0] rounded-full flex items-center justify-center text-white text-2xl mb-6">
                <span className="font-bold">05</span>
              </div>
              <h3 className="font-poppins font-semibold text-xl mb-4">
                Collaboration
              </h3>
              <p className="text-[#64748B]">
                We believe in the power of teamwork, fostering a collaborative
                environment both internally and with our clients.
              </p>
            </div>

            <div className="bg-[#F8FAFC] p-8 rounded-xl hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-r from-[#FFC107] to-[#9C27B0] rounded-full flex items-center justify-center text-white text-2xl mb-6">
                <span className="font-bold">06</span>
              </div>
              <h3 className="font-poppins font-semibold text-xl mb-4">
                Client Focus
              </h3>
              <p className="text-[#64748B]">
                We prioritize understanding and meeting our clients' needs,
                building long-term relationships based on trust and mutual
                success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-[#1E293B] to-[#1E293B]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-poppins font-bold text-3xl md:text-4xl text-white mb-6">
            Ready to Work With Us?
          </h2>
          <p className="text-[#94A3B8] text-lg mb-8 max-w-2xl mx-auto">
            Contact us today to discuss how our dual expertise in construction
            and media can bring your vision to life.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link href="/services">
              <Button className="bg-[#FFC107] hover:bg-opacity-90 text-white px-8 py-3 rounded-lg font-medium transition-all transform hover:scale-105 w-full sm:w-auto">
                Our Services
              </Button>
            </Link>
            <Link href="/contact">
              <Button className="bg-[#10B981] hover:bg-opacity-90 text-white px-8 py-3 rounded-lg font-medium transition-all transform hover:scale-105 w-full sm:w-auto">
                Get in Touch
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
