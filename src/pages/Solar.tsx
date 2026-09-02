import type { LucideIcon } from "lucide-react";
import {
  ArrowRight,
  Battery,
  Building2,
  CheckCircle2,
  Gauge,
  Home,
  Leaf,
  Settings,
  ShieldCheck,
  Sun,
  Wrench,
  Zap,
} from "lucide-react";
import { Link } from "wouter";
import Seo from "../components/Seo";
import { Button } from "../components/ui/button";

interface SolarService {
  title: string;
  description: string;
  icon: LucideIcon;
}

const solarServices: SolarService[] = [
  {
    title: "Residential Solar",
    description:
      "Right-sized rooftop systems that help households reduce grid dependence and manage everyday energy costs.",
    icon: Home,
  },
  {
    title: "Commercial Solar",
    description:
      "Scalable solar solutions for offices, retail spaces, schools, facilities, and industrial operations.",
    icon: Building2,
  },
  {
    title: "Battery Storage",
    description:
      "Reliable energy storage designed to keep essential equipment powered when sunlight or grid power is unavailable.",
    icon: Battery,
  },
  {
    title: "Energy Assessment",
    description:
      "Site surveys and consumption reviews that shape a practical system around your property, usage, and goals.",
    icon: Gauge,
  },
  {
    title: "Smart Monitoring",
    description:
      "Clear performance monitoring so you can understand production, consumption, and overall system health.",
    icon: Settings,
  },
  {
    title: "Care & Maintenance",
    description:
      "Inspection, cleaning, diagnostics, and support that protect system efficiency over the long term.",
    icon: Wrench,
  },
];

const processSteps = [
  {
    number: "01",
    title: "Consultation",
    description: "We learn about your energy needs, property, and priorities.",
  },
  {
    number: "02",
    title: "Site & System Design",
    description:
      "Our team assesses the site and develops a tailored solar solution.",
  },
  {
    number: "03",
    title: "Professional Installation",
    description:
      "The system is installed carefully, tested, and prepared for handover.",
  },
  {
    number: "04",
    title: "Monitoring & Support",
    description:
      "We help you understand performance and keep the system operating well.",
  },
];

const Solar = () => {
  return (
    <>
      <Seo
        title="Solar Panel Technology in Ghana | RichDad Investments"
        description="Explore residential and commercial solar panel installation, battery storage, smart monitoring, and maintenance from RichDad Investments in Ghana."
      />

      <section className="relative isolate overflow-hidden bg-[#071A14] px-4 py-20 sm:py-24 lg:min-h-[720px] lg:py-28">
        <div className="absolute inset-0 -z-20">
          <img
            src="https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1800&q=85"
            alt="Solar panels capturing sunlight"
            className="h-full w-full object-cover"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#071A14] via-[#071A14]/90 to-[#071A14]/45" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#071A14] via-transparent to-[#071A14]/30" />
        </div>

        <div className="absolute -left-24 top-10 -z-10 h-72 w-72 rounded-full bg-[#FBBF24]/15 blur-3xl" />
        <div className="absolute -right-24 bottom-0 -z-10 h-80 w-80 rounded-full bg-[#10B981]/15 blur-3xl" />

        <div className="container mx-auto flex min-h-[560px] items-center">
          <div className="max-w-3xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#FBBF24]/40 bg-[#FBBF24]/10 px-4 py-2 text-sm font-semibold text-[#FDE68A] backdrop-blur-sm">
              <Sun className="h-4 w-4" />
              Clean energy designed around you
            </div>

            <h1 className="font-poppins text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
              Smarter solar power for a
              <span className="block bg-gradient-to-r from-[#FBBF24] to-[#34D399] bg-clip-text text-transparent">
                brighter future
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-200 sm:text-xl">
              From site assessment to installation and support, we build solar
              panel systems that give homes and businesses practical,
              dependable access to renewable energy.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/contact" className="w-full sm:w-auto">
                <Button className="w-full bg-[#FBBF24] px-7 py-6 text-base font-semibold text-[#0F172A] hover:bg-[#FCD34D] sm:w-auto">
                  Request a Solar Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <a
                href="#solar-services"
                className="inline-flex min-h-12 w-full items-center justify-center rounded-md border border-white/30 bg-white/10 px-7 py-3 font-semibold text-white transition-colors hover:bg-white/20 sm:w-auto"
              >
                Explore Solutions
              </a>
            </div>

            <div className="mt-10 grid grid-cols-1 gap-3 text-sm text-slate-200 sm:grid-cols-3">
              {[
                "Tailored system design",
                "Professional installation",
                "Ongoing performance support",
              ].map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-[#34D399]" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-16 sm:py-20">
        <div className="container mx-auto">
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                icon: Zap,
                title: "Energy independence",
                text: "Generate power at your property and reduce reliance on the grid.",
              },
              {
                icon: Leaf,
                title: "Cleaner operations",
                text: "Use renewable energy to reduce the environmental impact of daily power needs.",
              },
              {
                icon: ShieldCheck,
                title: "Built for reliability",
                text: "Thoughtful design, quality installation, and support protect long-term performance.",
              },
            ].map((benefit) => (
              <article
                key={benefit.title}
                className="rounded-2xl border border-emerald-100 bg-gradient-to-br from-white to-emerald-50/60 p-6 shadow-sm sm:p-8"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-[#FBBF24]/20 text-[#B45309]">
                  <benefit.icon className="h-6 w-6" />
                </div>
                <h2 className="font-poppins text-xl font-semibold text-slate-900">
                  {benefit.title}
                </h2>
                <p className="mt-2 leading-relaxed text-slate-600">
                  {benefit.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="solar-services"
        className="scroll-mt-24 bg-[#F8FAFC] px-4 py-16 sm:py-24"
      >
        <div className="container mx-auto">
          <div className="mx-auto mb-12 max-w-3xl text-center sm:mb-16">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-[#047857]">
              Solar solutions
            </p>
            <h2 className="font-poppins text-3xl font-bold text-slate-900 sm:text-4xl md:text-5xl">
              Technology for every stage of your energy journey
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-slate-600">
              Flexible services for new systems, energy upgrades, and ongoing
              care—planned around how your property actually uses power.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {solarServices.map((service) => (
              <article
                key={service.title}
                className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#10B981]/50 hover:shadow-xl sm:p-8"
              >
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#FBBF24]/25 to-[#10B981]/20 text-[#047857] transition-transform duration-300 group-hover:scale-110">
                  <service.icon className="h-7 w-7" />
                </div>
                <h3 className="font-poppins text-xl font-semibold text-slate-900">
                  {service.title}
                </h3>
                <p className="mt-3 leading-relaxed text-slate-600">
                  {service.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-16 sm:py-24">
        <div className="container mx-auto grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="relative overflow-hidden rounded-3xl bg-slate-900 shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&w=1200&q=85"
              alt="Solar energy installation in a green landscape"
              className="aspect-[4/3] h-full w-full object-cover opacity-80"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#071A14]/80 to-transparent" />
            <div className="absolute bottom-0 p-6 text-white sm:p-8">
              <Sun className="mb-3 h-9 w-9 text-[#FBBF24]" />
              <p className="font-poppins text-xl font-semibold sm:text-2xl">
                Practical renewable energy, professionally delivered.
              </p>
            </div>
          </div>

          <div>
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-[#047857]">
              Our process
            </p>
            <h2 className="font-poppins text-3xl font-bold text-slate-900 sm:text-4xl">
              A clear path from energy need to working system
            </h2>
            <div className="mt-8 space-y-6">
              {processSteps.map((step) => (
                <div key={step.number} className="flex gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#FBBF24] font-bold text-[#0F172A]">
                    {step.number}
                  </div>
                  <div>
                    <h3 className="font-poppins text-lg font-semibold text-slate-900">
                      {step.title}
                    </h3>
                    <p className="mt-1 leading-relaxed text-slate-600">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#071A14] px-4 py-16 sm:py-20">
        <div className="container mx-auto rounded-3xl border border-[#FBBF24]/20 bg-gradient-to-br from-[#0D2A20] to-[#071A14] p-6 text-center shadow-2xl sm:p-10 lg:p-14">
          <Sun className="mx-auto mb-5 h-12 w-12 text-[#FBBF24]" />
          <h2 className="font-poppins text-3xl font-bold text-white sm:text-4xl">
            Ready to put the sun to work?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-slate-300">
            Tell us about your property and energy needs. Our solar team will
            help you understand the right next step.
          </p>
          <Link href="/contact" className="mt-8 inline-block w-full sm:w-auto">
            <Button className="w-full bg-[#FBBF24] px-8 py-6 text-base font-semibold text-[#0F172A] hover:bg-[#FCD34D] sm:w-auto">
              Start Your Solar Project
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </>
  );
};

export default Solar;
