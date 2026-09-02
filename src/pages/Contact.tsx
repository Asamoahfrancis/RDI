import type { LucideIcon } from "lucide-react";
import {
  Building,
  ChevronDown,
  Clock,
  Film,
  Mail,
  MapPin,
  Phone,
  Sun,
} from "lucide-react";
import { useState } from "react";
import ContactForm from "../components/ContactForm";
import Seo from "../components/Seo";

interface Department {
  name: string;
  description: string;
  email: string;
  icon: LucideIcon;
  iconStyle: string;
}

const departments: Department[] = [
  {
    name: "Construction",
    description: "Building, renovation, and project enquiries",
    email: "construction@richdadinvestments.com",
    icon: Building,
    iconStyle: "bg-orange-100 text-[#C2410C]",
  },
  {
    name: "Media",
    description: "Production, branding, and campaign enquiries",
    email: "media@richdadinvestments.com",
    icon: Film,
    iconStyle: "bg-purple-100 text-[#7E22CE]",
  },
  {
    name: "Solar Technology",
    description: "Solar systems, storage, and support enquiries",
    email: "solar@richdadinvestments.com",
    icon: Sun,
    iconStyle:
      "bg-gradient-to-br from-amber-100 to-emerald-100 text-[#047857]",
  },
];

const faqs = [
  {
    question: "Which areas do you serve?",
    answer:
      "We are based in Accra and primarily serve the Greater Accra Region, with project availability across Ghana depending on scope and requirements.",
  },
  {
    question: "Do you offer an initial consultation?",
    answer:
      "Yes. We begin with a conversation about your goals, site or audience, timeline, and budget so we can recommend the most useful next step.",
  },
  {
    question: "Can more than one division work on my project?",
    answer:
      "Yes. Our construction, media, and solar teams can work independently or coordinate on one project—for example, building a property, installing its energy system, and producing launch content.",
  },
  {
    question: "What solar technology services do you provide?",
    answer:
      "Our solar division supports energy assessments, system design, residential and commercial solar panel installation, battery storage, performance monitoring, and maintenance.",
  },
];

const Contact = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      <Seo
        title="Contact RichDad Investments | Start Your Project"
        description="Contact RichDad Investments in Accra about construction, media production, or solar panel technology services in Ghana."
      />

      <section className="relative isolate overflow-hidden bg-[#0F172A] px-4 py-20 text-center sm:py-24">
        <div className="absolute -left-24 top-0 -z-10 h-72 w-72 rounded-full bg-[#F97316]/15 blur-3xl" />
        <div className="absolute left-1/2 top-1/2 -z-10 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#9333EA]/15 blur-3xl" />
        <div className="absolute -right-24 bottom-0 -z-10 h-72 w-72 rounded-full bg-[#10B981]/15 blur-3xl" />
        <div className="container mx-auto">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-[#FBBF24]">
            Start a conversation
          </p>
          <h1 className="mx-auto max-w-4xl font-poppins text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl">
            Let&apos;s build, create, and power what&apos;s next
          </h1>
          <p className="mx-auto mt-5 max-w-3xl text-lg leading-relaxed text-slate-300 sm:text-xl">
            Tell us whether you need construction, media, solar technology, or
            a connected solution. We&apos;ll help you find the right path.
          </p>
        </div>
      </section>

      <section className="bg-gradient-to-b from-slate-50 to-white px-4 py-16 sm:py-24">
        <div className="container mx-auto grid max-w-7xl gap-8 lg:grid-cols-3 lg:gap-12">
          <div className="lg:col-span-2">
            <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-xl sm:p-8 md:p-10">
              <h2 className="font-poppins text-3xl font-bold text-slate-900 sm:text-4xl">
                Tell us about your project
              </h2>
              <p className="mb-8 mt-3 text-slate-600">
                Share a few details and select the division that best matches
                your needs.
              </p>
              <ContactForm />
            </div>
          </div>

          <aside className="space-y-6" aria-label="Contact information">
            <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-lg sm:p-8">
              <h2 className="font-poppins text-2xl font-semibold text-slate-900">
                Contact information
              </h2>
              <address className="mt-6 not-italic">
                <ul className="space-y-6">
                  <li className="flex items-start gap-4">
                    <div className="rounded-xl bg-amber-100 p-3 text-[#B45309]">
                      <MapPin className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="font-medium text-slate-800">Visit us</p>
                      <p className="mt-1 leading-relaxed text-slate-600">
                        45 Independence Avenue
                        <br />
                        North Ridge, Accra, Ghana
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="rounded-xl bg-purple-100 p-3 text-[#7E22CE]">
                      <Phone className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="font-medium text-slate-800">Call us</p>
                      <a
                        href="tel:+233301234567"
                        className="mt-1 block text-slate-600 hover:text-slate-900"
                      >
                        +233 (0) 30 123 4567
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="rounded-xl bg-emerald-100 p-3 text-[#047857]">
                      <Mail className="h-6 w-6" />
                    </div>
                    <div className="min-w-0">
                      <p className="font-medium text-slate-800">Email us</p>
                      <a
                        href="mailto:info@richdadinvestments.com"
                        className="mt-1 block break-all text-slate-600 hover:text-slate-900"
                      >
                        info@richdadinvestments.com
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="rounded-xl bg-slate-100 p-3 text-slate-700">
                      <Clock className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="font-medium text-slate-800">Office hours</p>
                      <p className="mt-1 text-slate-600">
                        Monday–Friday: 8:00–17:00
                      </p>
                    </div>
                  </li>
                </ul>
              </address>
            </div>

            <div className="rounded-2xl border border-[#FBBF24]/30 bg-gradient-to-br from-amber-50 to-emerald-50 p-6 sm:p-8">
              <Sun className="h-8 w-8 text-[#B45309]" />
              <h2 className="mt-4 font-poppins text-xl font-semibold text-slate-900">
                Planning a solar project?
              </h2>
              <p className="mt-2 leading-relaxed text-slate-600">
                Include your location, typical power needs, and property type
                in the message so our solar team can prepare for the first
                conversation.
              </p>
            </div>
          </aside>
        </div>
      </section>

      <section className="bg-[#F8FAFC] px-4 py-16 sm:py-24">
        <div className="container mx-auto">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <h2 className="font-poppins text-3xl font-bold text-slate-900 sm:text-4xl">
              Speak with the right team
            </h2>
            <p className="mt-3 text-lg text-slate-600">
              Each division has dedicated specialists ready to understand your
              project.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {departments.map((department) => (
              <article
                key={department.name}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8"
              >
                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-xl ${department.iconStyle}`}
                >
                  <department.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 font-poppins text-xl font-semibold text-slate-900">
                  {department.name}
                </h3>
                <p className="mt-2 text-slate-600">{department.description}</p>
                <a
                  href={`mailto:${department.email}`}
                  className="mt-4 block break-all text-sm font-semibold text-slate-800 hover:underline"
                >
                  {department.email}
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-16 sm:py-24">
        <div className="container mx-auto">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <h2 className="font-poppins text-3xl font-bold text-slate-900 sm:text-4xl">
              Frequently asked questions
            </h2>
            <p className="mt-3 text-lg text-slate-600">
              Helpful details before we begin.
            </p>
          </div>

          <div className="mx-auto max-w-4xl space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              const answerId = `faq-answer-${index}`;
              return (
                <article
                  key={faq.question}
                  className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
                >
                  <h3>
                    <button
                      type="button"
                      onClick={() => setOpenFaq(isOpen ? null : index)}
                      className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left transition-colors hover:bg-slate-50 sm:px-7"
                      aria-expanded={isOpen}
                      aria-controls={answerId}
                    >
                      <span className="font-poppins text-lg font-semibold text-slate-900 sm:text-xl">
                        {faq.question}
                      </span>
                      <ChevronDown
                        className={`h-5 w-5 shrink-0 text-slate-500 transition-transform ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                  </h3>
                  <div
                    id={answerId}
                    className={`grid transition-[grid-template-rows] duration-300 ${
                      isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="px-5 pb-5 leading-relaxed text-slate-600 sm:px-7 sm:pb-6">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
