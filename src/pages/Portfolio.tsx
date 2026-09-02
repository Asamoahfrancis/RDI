import { useState } from "react";
import { Play, Award, Users, TrendingUp, X } from "lucide-react";
import { Link } from "wouter";
import Seo from "../components/Seo";

type MediaCategory = "all" | "video" | "branding" | "animation" | "commercial";

interface MediaProject {
  id: number;
  title: string;
  category: Exclude<MediaCategory, "all">;
  client: string;
  image: string;
  video: boolean;
  year: string;
  description: string;
  tags: string[];
  stats: Record<string, string>;
}

const MediaPortfolio = () => {
  const [selectedProject, setSelectedProject] =
    useState<MediaProject | null>(null);
  const [activeCategory, setActiveCategory] =
    useState<MediaCategory>("all");
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const categories: { id: MediaCategory; label: string }[] = [
    { id: "all", label: "All Work" },
    { id: "video", label: "Video Production" },
    { id: "branding", label: "Branding" },
    { id: "animation", label: "Animation" },
    { id: "commercial", label: "Commercials" },
  ];

  const projects: MediaProject[] = [
    {
      id: 1,
      title: "Tech Innovation Campaign",
      category: "commercial",
      client: "TechCorp",
      image:
        "https://images.unsplash.com/photo-1492724441997-5dc865305da7?w=800",
      video: true,
      year: "2024",
      description:
        "A cutting-edge commercial campaign that increased brand awareness by 200%",
      tags: ["4K Video", "Motion Graphics", "Color Grading"],
      stats: { views: "2.5M", engagement: "+180%" },
    },
    {
      id: 2,
      title: "Urban Stories Documentary",
      category: "video",
      client: "City Arts",
      image:
        "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=800",
      video: true,
      year: "2024",
      description: "Award-winning documentary series exploring urban culture",
      tags: ["Documentary", "Cinematography", "Sound Design"],
      stats: { views: "1.8M", engagement: "+150%" },
    },
    {
      id: 3,
      title: "EcoLife Brand Identity",
      category: "branding",
      client: "EcoLife",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800",
      video: false,
      year: "2024",
      description: "Complete brand redesign for sustainable lifestyle company",
      tags: ["Logo Design", "Brand Strategy", "Visual Identity"],
      stats: { impact: "95%", satisfaction: "Excellent" },
    },
    {
      id: 4,
      title: "Animated Product Launch",
      category: "animation",
      client: "StartupX",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800",
      video: true,
      year: "2024",
      description: "3D animation for innovative product reveal",
      tags: ["3D Animation", "VFX", "Motion Design"],
      stats: { views: "3.2M", conversions: "+220%" },
    },
    {
      id: 5,
      title: "Fashion Week Recap",
      category: "video",
      client: "StyleMag",
      image:
        "https://images.unsplash.com/photo-1445510861639-5651173bc5d5?w=800",
      video: true,
      year: "2024",
      description: "High-energy recap of international fashion week",
      tags: ["Event Coverage", "Quick Cuts", "Slow Motion"],
      stats: { views: "4.1M", shares: "50K+" },
    },
    {
      id: 6,
      title: "Restaurant Rebranding",
      category: "branding",
      client: "Savory Kitchen",
      image:
        "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800",
      video: false,
      year: "2024",
      description: "Full visual identity for upscale restaurant chain",
      tags: ["Menu Design", "Photography", "Brand Guidelines"],
      stats: { revenue: "+165%", customers: "+85%" },
    },
  ];

  const filteredProjects =
    activeCategory === "all"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Seo
        title="Media Production & Creative Services | RichDad Investments"
        description="Explore video production, photography, branding, animation, and digital content services from the RichDad Investments media division."
      />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1492724441997-5dc865305da7?w=1600')] bg-cover bg-center opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/50 to-slate-900"></div>

        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <div className="inline-block mb-6 animate-pulse">
            <div className="bg-purple-500/20 backdrop-blur-sm border border-purple-500/50 rounded-full px-6 py-2">
              <span className="text-purple-300 font-semibold">
                Award-Winning Media Production
              </span>
            </div>
          </div>

          <h1 className="mb-6 text-4xl font-bold leading-tight text-white sm:text-5xl md:text-7xl lg:text-8xl">
            Stories That
            <span className="block bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-transparent bg-clip-text">
              Move People
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto">
            We create stunning visual content that captivates audiences and
            drives results
          </p>

          {/* Stats */}
          <div className="mt-14 grid grid-cols-2 gap-6 sm:gap-8 md:mt-20 md:grid-cols-4">
            {[
              { icon: Award, label: "Industry Awards", value: "24+" },
              { icon: Users, label: "Happy Clients", value: "150+" },
              { icon: TrendingUp, label: "Projects Delivered", value: "500+" },
              { icon: Play, label: "Total Views", value: "50M+" },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <stat.icon className="w-8 h-8 text-purple-400 mx-auto mb-2" />
                <div className="text-3xl font-bold text-white mb-1">
                  {stat.value}
                </div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl md:text-5xl">
              Featured Work
            </h2>
            <p className="text-xl text-gray-400">
              Explore our latest creative projects
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-16">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all ${
                  activeCategory === cat.id
                    ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg shadow-purple-500/50"
                    : "bg-white/10 text-gray-300 hover:bg-white/20"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="group relative cursor-pointer"
                onMouseEnter={() => setHoveredCard(project.id)}
                onMouseLeave={() => setHoveredCard(null)}
                onClick={() => setSelectedProject(project)}
                onKeyDown={(event) => {
                  if (event.key === "Enter" || event.key === " ") {
                    event.preventDefault();
                    setSelectedProject(project);
                  }
                }}
                role="button"
                tabIndex={0}
                aria-label={`View ${project.title} project details`}
              >
                <div className="relative overflow-hidden rounded-2xl aspect-[4/3] bg-slate-800">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />

                  {/* Overlay */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent transition-opacity duration-300 ${
                      hoveredCard === project.id ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    <div className="absolute inset-0 p-6 flex flex-col justify-end">
                      <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                        <div className="flex gap-2 mb-3">
                          {project.tags.slice(0, 2).map((tag, i) => (
                            <span
                              key={i}
                              className="bg-purple-500/20 backdrop-blur-sm text-purple-300 px-3 py-1 rounded-full text-xs"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-2">
                          {project.title}
                        </h3>
                        <p className="text-gray-300 mb-4">
                          {project.description}
                        </p>
                        <div className="flex items-center justify-between">
                          <span className="text-purple-400 text-sm">
                            {project.client}
                          </span>
                          {project.video && (
                            <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                              <Play className="w-5 h-5 text-white" />
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Corner Badge */}
                  <div className="absolute top-4 right-4">
                    <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                      {project.year}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-300"
          role="dialog"
          aria-modal="true"
          aria-labelledby="project-dialog-title"
        >
          <div className="bg-slate-900 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="relative">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-96 object-cover rounded-t-2xl"
              />
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                aria-label="Close project details"
              >
                <X className="w-5 h-5 text-white" />
              </button>
              {selectedProject.video && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <button className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-all hover:scale-110">
                    <Play className="w-10 h-10 text-white ml-1" />
                  </button>
                </div>
              )}
            </div>

            <div className="p-8">
              <div className="flex flex-wrap gap-2 mb-4">
                {selectedProject.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <h2
                id="project-dialog-title"
                className="mb-2 text-3xl font-bold text-white sm:text-4xl"
              >
                {selectedProject.title}
              </h2>
              <p className="text-purple-400 mb-4">
                Client: {selectedProject.client}
              </p>
              <p className="text-gray-300 text-lg mb-6">
                {selectedProject.description}
              </p>

              {Object.entries(selectedProject.stats).map(([key, value]) => (
                <div key={key}>
                  <div className="text-2xl font-bold text-white mb-1">
                    {value}
                  </div>
                  <div className="text-gray-400 text-sm capitalize">{key}</div>
                </div>
              ))}

              <Link href="/contact" className="mt-8 block">
                <button className="w-full rounded-full bg-gradient-to-r from-purple-600 to-pink-600 px-6 py-3 font-semibold text-white transition-all hover:from-purple-500 hover:to-pink-500">
                  Start a Similar Project
                </button>
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-purple-900/50 to-pink-900/50 backdrop-blur-sm rounded-3xl p-12 border border-purple-500/20">
            <h2 className="mb-6 text-3xl font-bold text-white sm:text-4xl md:text-5xl">
              Let's Create Something Amazing
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Ready to bring your vision to life? Get in touch with our creative
              team today.
            </p>
            <Link href="/contact">
              <button className="cursor-pointer bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white px-12 py-4 rounded-full font-semibold text-lg transition-all transform hover:scale-105 shadow-lg shadow-purple-500/50">
                Get Started
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MediaPortfolio;
