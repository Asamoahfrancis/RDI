import type { LucideIcon } from "lucide-react";
import {
  ArrowRight,
  Building,
  CheckCircle2,
  Film,
  Lightbulb,
  Sun,
  Target,
  Users,
} from "lucide-react";
import { useState } from "react";
import { Link } from "wouter";
import Seo from "../components/Seo";
import { Button } from "../components/ui/button";

type DivisionId = "construction" | "media" | "solar";

interface Division {
  id: DivisionId;
  name: string;
  eyebrow: string;
  summary: string;
  promise: string;
  icon: LucideIcon;
  items: string[];
  href: string;
  buttonActive: string;
  iconStyle: string;
  panelStyle: string;
  linkStyle: string;
}

const divisions: Division[] = [
  {
    id: "construction",
    name: "Construction",
    eyebrow: "Building the future, one project at a time",
    summary:
      "Our construction division brings together planning, craftsmanship, and project management to deliver commercial and residential spaces that perform beautifully.",
    promise:
      "From the first brief to final handover, we keep quality, safety, clear communication, and responsible delivery at the centre of the project.",
    icon: Building,
    items: [
      "Commercial and residential construction",
      "Renovation and remodelling",
      "Design-build coordination",
      "Project management",
    ],
    href: "/construction",
    buttonActive: "bg-[#F97316] text-white shadow-lg",
    iconStyle: "bg-orange-100 text-[#C2410C]",
    panelStyle: "border-orange-200 bg-gradient-to-br from-orange-50 to-white",
    linkStyle: "bg-[#F97316] text-white hover:bg-[#FB923C]",
  },
  {
    id: "media",
    name: "Media",
    eyebrow: "Stories that captivate, connect, and convert",
    summary:
      "Our media division turns ideas into strong visual experiences through strategy, production, branding, and digital content designed around real audience needs.",
    promise:
      "We pair creative direction with disciplined production so every asset supports your message, reflects your identity, and helps move your business forward.",
    icon: Film,
    items: [
      "Video production and photography",
      "Brand strategy and identity",
      "Digital marketing content",
      "Animation and visual storytelling",
    ],
    href: "/media",
    buttonActive: "bg-[#9333EA] text-white shadow-lg",
    iconStyle: "bg-purple-100 text-[#7E22CE]",
    panelStyle: "border-purple-200 bg-gradient-to-br from-purple-50 to-white",
    linkStyle: "bg-[#9333EA] text-white hover:bg-[#A855F7]",
  },
  {
    id: "solar",
    name: "Solar Technology",
    eyebrow: "Clean energy for resilient homes and businesses",
    summary:
      "Our solar technology division designs and installs practical renewable energy systems, combining solar panels, storage, monitoring, and long-term technical support.",
    promise:
      "We assess how you use energy, recommend an appropriate system, install it professionally, and help you protect performance after handover.",
    icon: Sun,
    items: [
      "Residential and commercial solar",
      "Battery storage solutions",
      "Energy assessment and system design",
      "Monitoring, maintenance, and support",
    ],
    href: "/solar",
    buttonActive:
      "bg-gradient-to-r from-[#FBBF24] to-[#10B981] text-[#0F172A] shadow-lg",
    iconStyle:
      "bg-gradient-to-br from-amber-100 to-emerald-100 text-[#047857]",
    panelStyle:
      "border-emerald-200 bg-gradient-to-br from-amber-50 via-white to-emerald-50",
    linkStyle: "bg-[#FBBF24] text-[#0F172A] hover:bg-[#FCD34D]",
  },
];

const About = () => {
  const [activeTab, setActiveTab] = useState<DivisionId>("construction");
  const activeDivision = divisions.find((division) => division.id === activeTab)!;
  const ActiveIcon = activeDivision.icon;

  return (
    <>
      <Seo
        title="About RichDad Investments | Three Specialized Divisions"
        description="Learn how RichDad Investments brings construction, media production, and solar technology expertise together to deliver practical, connected solutions."
      />

      <section className="bg-[#0F172A] px-4 py-16 text-center sm:py-20 md:py-24">
        <div className="container mx-auto">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-[#FBBF24]">
            About RichDad Investments
          </p>
          <h1 className="mx-auto max-w-4xl font-poppins text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl">
            Three disciplines. One connected vision.
          </h1>
          <p className="mx-auto mt-5 max-w-3xl text-lg leading-relaxed text-slate-300 sm:text-xl">
            We build enduring spaces, create meaningful stories, and deliver
            cleaner energy systems that help people and businesses move
            forward.
          </p>
        </div>
      </section>

      <section className="bg-gradient-to-b from-[#0F172A] to-[#1E293B] px-4 py-16 sm:py-24">
        <div className="container mx-auto">
          <div className="mx-auto mb-10 max-w-3xl text-center sm:mb-12">
            <h2 className="font-poppins text-3xl font-bold text-white sm:text-4xl">
              Explore our divisions
            </h2>
            <p className="mt-3 text-lg text-slate-300">
              Specialized teams, connected by one standard of thoughtful
              delivery.
            </p>
          </div>

          <div
            className="mx-auto mb-8 grid max-w-5xl grid-cols-1 gap-3 sm:grid-cols-3"
            role="tablist"
            aria-label="RichDad Investments divisions"
          >
            {divisions.map((division) => (
              <button
                key={division.id}
                type="button"
                role="tab"
                id={`division-tab-${division.id}`}
                aria-selected={activeTab === division.id}
                aria-controls="division-panel"
                onClick={() => setActiveTab(division.id)}
                className={`flex min-h-14 items-center justify-center gap-2 rounded-xl border border-white/15 px-4 py-3 font-semibold transition-all duration-300 ${
                  activeTab === division.id
                    ? division.buttonActive
                    : "bg-white/5 text-slate-200 hover:bg-white/10"
                }`}
              >
                <division.icon className="h-5 w-5 shrink-0" />
                {division.name}
              </button>
            ))}
          </div>

          <article
            id="division-panel"
            role="tabpanel"
            aria-labelledby={`division-tab-${activeDivision.id}`}
            key={activeDivision.id}
            className={`animate-fadeIn mx-auto max-w-5xl rounded-3xl border p-6 shadow-2xl sm:p-8 lg:p-12 ${activeDivision.panelStyle}`}
          >
            <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12">
              <div>
                <div
                  className={`mb-6 flex h-16 w-16 items-center justify-center rounded-2xl ${activeDivision.iconStyle}`}
                >
                  <ActiveIcon className="h-8 w-8" />
                </div>
                <p className="text-sm font-bold uppercase tracking-[0.15em] text-slate-500">
                  {activeDivision.eyebrow}
                </p>
                <h3 className="mt-3 font-poppins text-3xl font-bold text-slate-900 sm:text-4xl">
                  {activeDivision.name} Division
                </h3>
                <p className="mt-5 text-lg leading-relaxed text-slate-600">
                  {activeDivision.summary}
                </p>
                <Link href={activeDivision.href} className="mt-7 inline-block w-full sm:w-auto">
                  <Button
                    className={`w-full px-6 py-5 font-semibold sm:w-auto ${activeDivision.linkStyle}`}
                  >
                    Explore {activeDivision.name}
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>

              <div className="rounded-2xl border border-slate-200/80 bg-white/80 p-5 sm:p-6">
                <h4 className="font-poppins text-xl font-semibold text-slate-900">
                  Core capabilities
                </h4>
                <ul className="mt-5 space-y-4">
                  {activeDivision.items.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-slate-700">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#059669]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 border-t border-slate-200 pt-6">
                  <h4 className="font-poppins font-semibold text-slate-900">
                    Our promise
                  </h4>
                  <p className="mt-2 leading-relaxed text-slate-600">
                    {activeDivision.promise}
                  </p>
                </div>
              </div>
            </div>
          </article>
        </div>
      </section>

      <section className="bg-white px-4 py-16 sm:py-24">
        <div className="container mx-auto grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="relative">
            <img
              src="/36.jpg"
              alt="The RichDad Investments team collaborating"
              className="relative z-10 aspect-[4/3] w-full rounded-2xl object-cover shadow-xl"
              loading="lazy"
            />
            <div className="absolute -bottom-4 -right-4 hidden h-24 w-24 rounded-xl bg-[#10B981] md:block" />
            <div className="absolute -left-4 -top-4 hidden h-24 w-24 rounded-xl bg-[#FBBF24] md:block" />
          </div>

          <div>
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-[#B45309]">
              Our story
            </p>
            <h2 className="font-poppins text-3xl font-bold text-slate-900 sm:text-4xl">
              Expertise that grows with the needs of our clients
            </h2>
            <div className="mt-6 space-y-5 leading-relaxed text-slate-600">
              <p>
                RichDad Investments began with a vision to combine physical
                construction expertise with the creative power of digital
                media. That connected approach gave clients fewer handoffs and
                a more consistent path from idea to delivery.
              </p>
              <p>
                As reliable, sustainable power became increasingly important
                to the homes and businesses we serve, Solar Technology became
                our third specialized division. It extends the same practical
                mindset into energy assessment, solar installation, storage,
                monitoring, and support.
              </p>
              <p>
                Today, our teams can work independently or together—building a
                facility, communicating its story, and helping power its future.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-[#0F172A] to-[#1E293B] px-4 py-16 sm:py-24">
        <div className="container mx-auto">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <h2 className="font-poppins text-3xl font-bold text-white sm:text-4xl">
              What sets us apart
            </h2>
            <p className="mt-4 text-lg text-slate-300">
              Connected expertise creates more options and a clearer experience
              for every client.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                icon: Users,
                title: "Collaborative teams",
                text: "Construction, media, and solar specialists can coordinate around one brief and one shared outcome.",
                color: "bg-[#F97316]",
              },
              {
                icon: Lightbulb,
                title: "Practical innovation",
                text: "We choose technology and creative approaches for their real-world value, not novelty alone.",
                color: "bg-[#9333EA]",
              },
              {
                icon: Target,
                title: "Purposeful delivery",
                text: "Every solution is shaped around your goals, constraints, users, and long-term success.",
                color: "bg-[#10B981]",
              },
            ].map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm sm:p-8"
              >
                <div
                  className={`mb-6 flex h-12 w-12 items-center justify-center rounded-xl ${item.color}`}
                >
                  <item.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-poppins text-xl font-semibold text-white">
                  {item.title}
                </h3>
                <p className="mt-3 leading-relaxed text-slate-300">{item.text}</p>
              </article>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link href="/contact" className="inline-block w-full sm:w-auto">
              <Button className="w-full bg-white px-7 py-6 font-semibold text-[#0F172A] hover:bg-slate-100 sm:w-auto">
                Talk to Our Team
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn { animation: fadeIn 0.35s ease-out; }
        @media (prefers-reduced-motion: reduce) {
          .animate-fadeIn { animation: none; }
        }
      `}</style>
    </>
  );
};

export default About;
