import type { PortfolioItemType } from "../components/PortfolioItem";

export interface PortfolioProject {
  id: number;
  type: PortfolioItemType;
  title: string;
  description: string;
  imageSrc: string;
  year: string;
  slug: string;
}

export const portfolioProjects: PortfolioProject[] = [
  {
    id: 1,
    type: "construction",
    title: "Urban Office Tower",
    description:
      "A 20-story office building with sustainable features and modern design in downtown area.",
    imageSrc: "/35.jpg",
    year: "2023",
    slug: "urban-office-tower",
  },
  {
    id: 2,
    type: "media",
    title: "Tech Corp Brand Campaign",
    description:
      "A comprehensive rebranding campaign including video, photography and digital assets.",
    imageSrc:
      "https://images.unsplash.com/photo-1492724441997-5dc865305da7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500",
    year: "2023",
    slug: "tech-corp-brand-campaign",
  },
  // {
  //   id: 3,
  //   type: "integrated",
  //   title: "Lakeside Residences VR",
  //   description:
  //     "Virtual reality experience for a luxury residential development before construction began.",
  //   imageSrc:
  //     "https://images.unsplash.com/photo-1531834685032-c34bf0d84c77?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500",
  //   year: "2022",
  //   slug: "lakeside-residences-vr",
  // },
  {
    id: 4,
    type: "construction",
    title: "Eco-Friendly Home Development",
    description:
      "A 15-unit residential development featuring sustainable materials and energy efficiency.",
    imageSrc: "/27.png",
    year: "2022",
    slug: "eco-friendly-home-development",
  },
  {
    id: 5,
    type: "media",
    title: "Luxury Brand Product Launch",
    description:
      "Comprehensive media campaign for a new product line including photography and social content.",
    imageSrc:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500",
    year: "2022",
    slug: "luxury-brand-product-launch",
  },
  // {
  //   id: 6,
  //   type: "integrated",
  //   title: "Metro Mall Redevelopment",
  //   description:
  //     "Construction project with comprehensive marketing campaign to attract tenants and customers.",
  //   imageSrc:
  //     "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500",
  //   year: "2021",
  //   slug: "metro-mall-redevelopment",
  // },
];

export const mediaServices = [
  {
    title: "Content Production",
    description:
      "High-quality video and photography production for commercial, promotional, and documentary purposes.",
  },
  {
    title: "Digital Marketing",
    description:
      "Comprehensive digital marketing strategies including social media, content marketing, and SEO optimization.",
  },
  {
    title: "Web Development",
    description:
      "Custom website design and development with responsive layouts and user-friendly interfaces.",
  },
  {
    title: "Virtual Tours & 3D Rendering",
    description:
      "Immersive virtual tours and photorealistic 3D renderings for construction and real estate projects.",
  },
];

export const constructionServices = [
  {
    title: "Commercial Construction",
    description:
      "Full-service commercial construction with a focus on office spaces, retail outlets, and industrial facilities.",
  },
  {
    title: "Residential Projects",
    description:
      "Custom home building, renovations, and multi-family residential developments with attention to detail.",
  },
  {
    title: "Project Management",
    description:
      "Comprehensive project management services ensuring on-time, on-budget completion with quality assurance.",
  },
  {
    title: "Sustainable Building",
    description:
      "Green building practices and sustainable construction solutions that minimize environmental impact.",
  },
];

export const integratedServices = [
  {
    title: "Virtual Building Experiences",
    description:
      "Interactive 3D virtual tours of buildings before construction begins.",
    icon: "vr-cardboard",
  },
  {
    title: "Construction Documentation",
    description:
      "Professional photography and videography to document construction progress.",
    icon: "drone",
  },
  {
    title: "Marketing for Properties",
    description:
      "Comprehensive marketing packages for new developments and properties.",
    icon: "chart-line",
  },
];
