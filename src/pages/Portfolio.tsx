import { useState } from "react";
import { Link } from "wouter";
import { Button } from "../components/ui/button";
import { portfolioProjects } from "../lib/constants";
import PortfolioFilter from "../components/PortfolioFilter";
import PortfolioItem, {
  type PortfolioItemType,
} from "../components/PortfolioItem";

type FilterCategory = "all" | PortfolioItemType;

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState<FilterCategory>("all");

  const handleFilterChange = (category: FilterCategory) => {
    setActiveFilter(category);
  };

  const filteredProjects =
    activeFilter === "all"
      ? portfolioProjects
      : portfolioProjects.filter((project) => project.type === activeFilter);

  return (
    <>
      {/* Page Header */}
      <section className="bg-[#1E293B] py-16 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-poppins font-bold text-4xl md:text-5xl text-white mb-4">
            Our Portfolio
          </h1>
          <p className="text-[#94A3B8] text-lg md:text-xl max-w-2xl mx-auto">
            Browse our recent projects spanning both construction and media
            production.
          </p>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-poppins font-bold text-3xl md:text-4xl mb-4">
              Featured Projects
            </h2>
            <p className="text-[#64748B] max-w-2xl mx-auto">
              Filter our portfolio to see our work in construction, media, or
              integrated projects.
            </p>

            {/* Portfolio Filter */}
            <PortfolioFilter
              onFilterChange={handleFilterChange}
              activeFilter={activeFilter}
            />
          </div>

          {/* Portfolio Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <PortfolioItem
                key={project.id}
                type={project.type}
                title={project.title}
                description={project.description}
                imageSrc={project.imageSrc}
                year={project.year}
                slug={project.slug}
              />
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-16">
              <p className="text-[#64748B] text-lg">
                No projects found in this category.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16 md:py-24 bg-[#F8FAFC]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-poppins font-bold text-3xl md:text-4xl mb-4">
              Featured Case Studies
            </h2>
            <p className="text-[#64748B] max-w-2xl mx-auto">
              Dive deeper into some of our most successful and innovative
              projects.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Case Study 1 */}
            <div className="bg-white rounded-xl overflow-hidden shadow-lg">
              <div className="relative">
                <img
                  src="/36.jpg"
                  alt="Urban Office Tower"
                  className="w-full h-64 object-cover"
                />
                <div className="absolute top-0 left-0 bg-[#FFC107] text-white px-4 py-2">
                  Construction
                </div>
              </div>
              <div className="p-8">
                <h3 className="font-poppins font-semibold text-2xl mb-4">
                  Urban Office Tower: A Study in Sustainable Design
                </h3>
                <p className="text-[#64748B] mb-6">
                  This 20-story office building in downtown San Francisco
                  showcases our commitment to sustainable construction practices
                  and innovative design.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="bg-[#F8FAFC] text-[#64748B] px-3 py-1 rounded-full text-sm">
                    Sustainable Materials
                  </span>
                  <span className="bg-[#F8FAFC] text-[#64748B] px-3 py-1 rounded-full text-sm">
                    Energy Efficiency
                  </span>
                  <span className="bg-[#F8FAFC] text-[#64748B] px-3 py-1 rounded-full text-sm">
                    Smart Building
                  </span>
                </div>
                <Link href="/portfolio/urban-office-tower">
                  <Button className="bg-[#FFC107] hover:bg-opacity-90 text-white px-6 py-2.5 rounded-lg font-medium transition-all transform hover:scale-105">
                    View Case Study
                  </Button>
                </Link>
              </div>
            </div>

            {/* Case Study 2 */}
            <div className="bg-white rounded-xl overflow-hidden shadow-lg">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1492724441997-5dc865305da7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500"
                  alt="Tech Corp Brand Campaign"
                  className="w-full h-64 object-cover"
                />
                <div className="absolute top-0 left-0 bg-[#9C27B0] text-white px-4 py-2">
                  Media
                </div>
              </div>
              <div className="p-8">
                <h3 className="font-poppins font-semibold text-2xl mb-4">
                  Tech Corp Rebranding: Digital Transformation
                </h3>
                <p className="text-[#64748B] mb-6">
                  A comprehensive rebranding campaign for Tech Corp that
                  increased their market visibility by 200% and customer
                  engagement by 150%.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="bg-[#F8FAFC] text-[#64748B] px-3 py-1 rounded-full text-sm">
                    Brand Strategy
                  </span>
                  <span className="bg-[#F8FAFC] text-[#64748B] px-3 py-1 rounded-full text-sm">
                    Video Production
                  </span>
                  <span className="bg-[#F8FAFC] text-[#64748B] px-3 py-1 rounded-full text-sm">
                    Digital Marketing
                  </span>
                </div>
                <Link href="/portfolio/tech-corp-brand-campaign">
                  <Button className="bg-[#9C27B0] hover:bg-opacity-90 text-white px-6 py-2.5 rounded-lg font-medium transition-all transform hover:scale-105">
                    View Case Study
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-poppins font-bold text-3xl md:text-4xl mb-4">
              Client Testimonials
            </h2>
            <p className="text-[#64748B] max-w-2xl mx-auto">
              Hear what our clients have to say about working with DualCore.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-[#F8FAFC] p-8 rounded-xl">
              <div className="mb-6">
                <svg
                  className="h-8 w-8 text-[#FFC107]"
                  fill="currentColor"
                  viewBox="0 0 32 32"
                >
                  <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                </svg>
              </div>
              <p className="text-[#64748B] mb-6">
                DualCore's ability to handle both our construction project and
                marketing campaign was exceptional. Their integrated approach
                saved us time and money while delivering outstanding results.
              </p>
              <div className="flex items-center">
                <div className="mr-4">
                  <div className="w-12 h-12 bg-[#1E293B] rounded-full flex items-center justify-center text-white font-bold">
                    JD
                  </div>
                </div>
                <div>
                  <h4 className="font-medium text-lg">John Doe</h4>
                  <p className="text-[#64748B] text-sm">
                    CEO, Tech Innovations
                  </p>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-[#F8FAFC] p-8 rounded-xl">
              <div className="mb-6">
                <svg
                  className="h-8 w-8 text-[#9C27B0]"
                  fill="currentColor"
                  viewBox="0 0 32 32"
                >
                  <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                </svg>
              </div>
              <p className="text-[#64748B] mb-6">
                The virtual tour that DualCore created for our residential
                development was a game-changer. We sold 80% of the units before
                construction was even completed.
              </p>
              <div className="flex items-center">
                <div className="mr-4">
                  <div className="w-12 h-12 bg-[#1E293B] rounded-full flex items-center justify-center text-white font-bold">
                    JS
                  </div>
                </div>
                <div>
                  <h4 className="font-medium text-lg">Jane Smith</h4>
                  <p className="text-[#64748B] text-sm">
                    Director, Urban Living Properties
                  </p>
                </div>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-[#F8FAFC] p-8 rounded-xl">
              <div className="mb-6">
                <svg
                  className="h-8 w-8 text-[#10B981]"
                  fill="currentColor"
                  viewBox="0 0 32 32"
                >
                  <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                </svg>
              </div>
              <p className="text-[#64748B] mb-6">
                DualCore's attention to detail and commitment to quality is
                unmatched. Their team consistently went above and beyond to
                ensure our project's success.
              </p>
              <div className="flex items-center">
                <div className="mr-4">
                  <div className="w-12 h-12 bg-[#1E293B] rounded-full flex items-center justify-center text-white font-bold">
                    RM
                  </div>
                </div>
                <div>
                  <h4 className="font-medium text-lg">Robert Martinez</h4>
                  <p className="text-[#64748B] text-sm">
                    COO, Global Enterprises
                  </p>
                </div>
              </div>
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
            Contact us today to discuss how our dual expertise in construction
            and media can bring your vision to life.
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

export default Portfolio;
