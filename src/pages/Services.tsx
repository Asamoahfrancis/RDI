import { Link } from "wouter";
import {
  Building,
  Film,
  Box,
  Smartphone,
  Check,
  TrendingUp,
} from "lucide-react";

import { Button } from "../components/ui/button";
import { constructionServices, mediaServices } from "../lib/constants";

const Services = () => {
  return (
    <>
      {/* Page Header */}
      <section className="bg-[#1E293B] py-16 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-poppins font-bold text-4xl md:text-5xl text-white mb-4">
            Our Services
          </h1>
          <p className="text-[#94A3B8] text-lg md:text-xl max-w-2xl mx-auto">
            Comprehensive solutions spanning both construction and media to meet
            all your project needs.
          </p>
        </div>
      </section>

      {/* Construction Services */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12">
            <div className="lg:w-1/3">
              <div className="sticky top-24">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-[#FFC107] bg-opacity-10 rounded-full flex items-center justify-center text-[#FFC107] text-2xl">
                    <Building className="h-6 w-6" />
                  </div>
                  <h2 className="font-poppins font-semibold text-2xl md:text-3xl ml-4">
                    Construction Services
                  </h2>
                </div>

                <p className="text-[#64748B] mb-6">
                  Our construction division offers comprehensive services for
                  commercial and residential projects, with a focus on quality,
                  sustainability, and innovation.
                </p>

                <img
                  src="/27.png"
                  alt="Construction Services"
                  className="rounded-lg w-full object-cover mb-6"
                />

                <Link href="/contact">
                  <Button className="bg-[#FFC107] hover:bg-opacity-90 text-white px-6 py-2.5 rounded-lg font-medium transition-all transform hover:scale-105 w-full">
                    Request Construction Services
                  </Button>
                </Link>
              </div>
            </div>

            <div className="lg:w-2/3 space-y-8">
              {constructionServices.map((service, index) => (
                <div
                  key={index}
                  className="bg-[#F8FAFC] p-8 rounded-xl hover:shadow-md transition-shadow"
                >
                  <div className="flex">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-10 h-10 bg-[#FFC107] bg-opacity-10 rounded-full flex items-center justify-center text-[#FFC107]">
                        <Check className="h-5 w-5" />
                      </div>
                    </div>
                    <div className="ml-6">
                      <h3 className="font-poppins font-semibold text-xl mb-3">
                        {service.title}
                      </h3>
                      <p className="text-[#64748B]">{service.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Media Services */}
      <section className="py-16 md:py-24 bg-[#F8FAFC]">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12">
            <div className="lg:w-1/3 order-1 lg:order-2">
              <div className="sticky top-24">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-[#9C27B0] bg-opacity-10 rounded-full flex items-center justify-center text-[#9C27B0] text-2xl">
                    <Film className="h-6 w-6" />
                  </div>
                  <h2 className="font-poppins font-semibold text-2xl md:text-3xl ml-4">
                    Media Services
                  </h2>
                </div>

                <p className="text-[#64748B] mb-6">
                  Our media division specializes in creating compelling digital
                  content, marketing materials, and immersive experiences for
                  businesses of all sizes.
                </p>

                <img
                  src="https://images.unsplash.com/photo-1540655037529-dec987208707?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500"
                  alt="Media Services"
                  className="rounded-lg w-full object-cover mb-6"
                />

                <Link href="/contact">
                  <Button className="bg-[#9C27B0] hover:bg-opacity-90 text-white px-6 py-2.5 rounded-lg font-medium transition-all transform hover:scale-105 w-full">
                    Request Media Services
                  </Button>
                </Link>
              </div>
            </div>

            <div className="lg:w-2/3 space-y-8 order-2 lg:order-1">
              {mediaServices.map((service, index: any) => (
                <div
                  key={index}
                  className="bg-white p-8 rounded-xl hover:shadow-md transition-shadow"
                >
                  <div className="flex">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-10 h-10 bg-[#9C27B0] bg-opacity-10 rounded-full flex items-center justify-center text-[#9C27B0]">
                        <Check className="h-5 w-5" />
                      </div>
                    </div>
                    <div className="ml-6">
                      <h3 className="font-poppins font-semibold text-xl mb-3">
                        {service.title}
                      </h3>
                      <p className="text-[#64748B]">{service.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Integrated Solutions */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-poppins font-bold text-3xl md:text-4xl mb-4">
              Integrated Solutions
            </h2>
            <p className="text-[#64748B] max-w-2xl mx-auto">
              Where our construction and media expertise converge to provide
              unique value.
            </p>
          </div>

          <div className="bg-gradient-to-r from-[#FFC107]/10 to-[#9C27B0]/10 p-8 rounded-xl">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="text-2xl mb-4 bg-gradient-to-r from-[#FFC107] to-[#9C27B0] bg-clip-text text-transparent">
                  <Box className="h-8 w-8" />
                </div>
                <h4 className="font-medium text-lg mb-2">
                  Virtual Building Experiences
                </h4>
                <p className="text-[#64748B] text-sm">
                  Interactive 3D virtual tours of buildings before construction
                  begins.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="text-2xl mb-4 bg-gradient-to-r from-[#FFC107] to-[#9C27B0] bg-clip-text text-transparent">
                  <Smartphone className="h-8 w-8" />
                </div>
                <h4 className="font-medium text-lg mb-2">
                  Construction Documentation
                </h4>
                <p className="text-[#64748B] text-sm">
                  Professional photography and videography to document
                  construction progress.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="text-2xl mb-4 bg-gradient-to-r from-[#FFC107] to-[#9C27B0] bg-clip-text text-transparent">
                  <TrendingUp className="h-8 w-8" />
                </div>
                <h4 className="font-medium text-lg mb-2">
                  Marketing for Properties
                </h4>
                <p className="text-[#64748B] text-sm">
                  Comprehensive marketing packages for new developments and
                  properties.
                </p>
              </div>
            </div>

            <div className="mt-8 text-center">
              <Link href="/contact">
                <Button className="bg-gradient-to-r from-[#FFC107] to-[#9C27B0] hover:opacity-90 text-white px-8 py-3 rounded-lg font-medium transition-all transform hover:scale-105">
                  Discuss Integrated Solutions
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Service Process */}
      <section className="py-16 md:py-24 bg-[#F8FAFC]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-poppins font-bold text-3xl md:text-4xl mb-4">
              Our Service Process
            </h2>
            <p className="text-[#64748B] max-w-2xl mx-auto">
              How we work with you to deliver exceptional results from start to
              finish.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-md relative">
              <div className="absolute -top-4 -right-4 w-12 h-12 rounded-full bg-[#1E293B] text-white flex items-center justify-center font-bold">
                01
              </div>
              <h3 className="font-poppins font-semibold text-xl mb-4 mt-2">
                Consultation
              </h3>
              <p className="text-[#64748B]">
                We begin by understanding your needs, goals, and vision for the
                project.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md relative">
              <div className="absolute -top-4 -right-4 w-12 h-12 rounded-full bg-[#1E293B] text-white flex items-center justify-center font-bold">
                02
              </div>
              <h3 className="font-poppins font-semibold text-xl mb-4 mt-2">
                Planning
              </h3>
              <p className="text-[#64748B]">
                Our team develops a detailed project plan with timelines,
                deliverables, and milestones.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md relative">
              <div className="absolute -top-4 -right-4 w-12 h-12 rounded-full bg-[#1E293B] text-white flex items-center justify-center font-bold">
                03
              </div>
              <h3 className="font-poppins font-semibold text-xl mb-4 mt-2">
                Execution
              </h3>
              <p className="text-[#64748B]">
                We implement the project plan with regular updates and check-ins
                throughout the process.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md relative">
              <div className="absolute -top-4 -right-4 w-12 h-12 rounded-full bg-[#1E293B] text-white flex items-center justify-center font-bold">
                04
              </div>
              <h3 className="font-poppins font-semibold text-xl mb-4 mt-2">
                Delivery
              </h3>
              <p className="text-[#64748B]">
                We complete the project to your specifications and provide
                ongoing support as needed.
              </p>
            </div>
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
            Contact us today to discuss how our services can help bring your
            vision to life.
          </p>
          <Link href="/contact">
            <Button className="bg-[#10B981] hover:bg-opacity-90 text-white px-8 py-3 rounded-lg font-medium transition-all transform hover:scale-105">
              Get a Free Consultation
            </Button>
          </Link>
        </div>
      </section>
    </>
  );
};

export default Services;
