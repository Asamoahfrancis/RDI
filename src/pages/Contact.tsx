import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Building,
  Film,
  Share2,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  ChevronDown,
} from "lucide-react";
import { useState } from "react";
import ContactForm from "../components/ContactForm";

const Contact = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    {
      question: "What areas do you serve?",
      answer:
        "We primarily serve the Greater Accra Region for investment opportunities, with services available nationwide and internationally.",
    },
    {
      question: "How long does a typical investment take to mature?",
      answer:
        "Timelines vary based on the investment type and market conditions. Real estate projects typically range from 6 months to 3 years, while financial investments can range from short-term trades to long-term holdings.",
    },
    {
      question: "Do you offer free consultations?",
      answer:
        "Yes, we offer free initial consultations to discuss your investment goals and how we can help. Contact us to schedule yours today.",
    },
    {
      question: "What makes Rich Dad Investments different?",
      answer:
        "Inspired by timeless financial education principles, we combine expert investment strategies with personalized guidance to help you build lasting wealth under one roof.",
    },
  ];

  return (
    <>
      {/* Hero Header */}
      <section className="relative bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="relative container mx-auto px-4 text-center">
          <h1 className="font-poppins font-extrabold text-5xl md:text-6xl lg:text-7xl text-white mb-6 tracking-tight">
            Build Your Financial Future
          </h1>
          <p className="text-slate-200 text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
            Smart investments for lasting wealth. Whether real estate, stocks,
            or diversified portfolios — we're here to guide you. Get in touch
            today.
          </p>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 hover:shadow-2xl transition-shadow duration-500">
                <h2 className="font-poppins font-bold text-3xl md:text-4xl mb-8 text-slate-800">
                  Send Us a Message
                </h2>
                <ContactForm />
              </div>
            </div>

            {/* Contact Info Sidebar */}
            <div className="space-y-8">
              {/* General Info Card */}
              <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300">
                <h3 className="font-poppins font-semibold text-2xl mb-6 text-slate-800">
                  Contact Information
                </h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-amber-100 rounded-xl text-amber-600">
                      <MapPin className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="font-medium text-slate-700">Address</p>
                      <p className="text-slate-500 leading-relaxed">
                        45 Independence Avenue
                        <br />
                        North Ridge
                        <br />
                        Accra, Ghana
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-purple-100 rounded-xl text-purple-600">
                      <Phone className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="font-medium text-slate-700">Phone</p>
                      <p className="text-slate-500">+233 (0) 30 123 4567</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-amber-100 rounded-xl text-amber-600">
                      <Mail className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="font-medium text-slate-700">Email</p>
                      <p className="text-slate-500">
                        info@richdadinvestments.com
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-purple-100 rounded-xl text-purple-600">
                      <Clock className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="font-medium text-slate-700">Hours</p>
                      <p className="text-slate-500">
                        Mon–Fri: 8AM–5PM
                        <br />
                        Sat–Sun: Closed
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Department Contacts */}
              <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300">
                <h3 className="font-poppins font-semibold text-2xl mb-6 text-slate-800">
                  Departments
                </h3>
                <div className="space-y-5">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-amber-100 rounded-xl text-amber-600">
                      <Building className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-medium">Real Estate</p>
                      <p className="text-slate-500 text-sm">
                        realestate@richdadinvestments.com
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-purple-100 rounded-xl text-purple-600">
                      <Film className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-medium">Financial Education</p>
                      <p className="text-slate-500 text-sm">
                        education@richdadinvestments.com
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-emerald-100 rounded-xl text-emerald-600">
                      <Share2 className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-medium">Partnerships</p>
                      <p className="text-slate-500 text-sm">
                        partnerships@richdadinvestments.com
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300">
                <h3 className="font-poppins font-semibold text-2xl mb-6 text-slate-800">
                  Follow Us
                </h3>
                <div className="flex gap-4">
                  <a
                    href="#"
                    className="group p-4 bg-amber-50 rounded-xl text-amber-600 hover:bg-amber-600 hover:text-white transition-all duration-300"
                    aria-label="Facebook"
                  >
                    <Facebook className="h-6 w-6 group-hover:scale-110 transition-transform" />
                  </a>
                  <a
                    href="#"
                    className="group p-4 bg-purple-50 rounded-xl text-purple-600 hover:bg-purple-600 hover:text-white transition-all duration-300"
                    aria-label="Twitter"
                  >
                    <Twitter className="h-6 w-6 group-hover:scale-110 transition-transform" />
                  </a>
                  <a
                    href="#"
                    className="group p-4 bg-amber-50 rounded-xl text-amber-600 hover:bg-amber-600 hover:text-white transition-all duration-300"
                    aria-label="Instagram"
                  >
                    <Instagram className="h-6 w-6 group-hover:scale-110 transition-transform" />
                  </a>
                  <a
                    href="#"
                    className="group p-4 bg-purple-50 rounded-xl text-purple-600 hover:bg-purple-600 hover:text-white transition-all duration-300"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="h-6 w-6 group-hover:scale-110 transition-transform" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Map Section */}
      <section className="py-20 md:py-28 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-poppins font-bold text-4xl md:text-5xl mb-4 text-slate-800">
              Find Us in Accra
            </h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">
              Located in the vibrant North Ridge area — stop by for a
              consultation on your investment journey.
            </p>
          </div>

          <div className="rounded-3xl overflow-hidden shadow-2xl max-w-6xl mx-auto h-[500px] md:h-[600px] hover:shadow-3xl transition-shadow duration-500">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3970.927305923997!2d-0.20539992409999998!3d5.571399994428!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf9b4a2b9b2b2b%3A0x1234567890abcdef!2sNorth%20Ridge%2C%20Accra!5e0!3m2!1sen!2sgh!4v1735680000000!5m2!1sen!2sgh"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Interactive FAQ Accordion */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-poppins font-bold text-4xl md:text-5xl mb-4 text-slate-800">
              Frequently Asked Questions
            </h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">
              Everything you need to know before investing with us.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full px-8 py-6 flex justify-between items-center text-left hover:bg-slate-50 transition-colors"
                >
                  <h3 className="font-poppins font-semibold text-xl text-slate-800">
                    {faq.question}
                  </h3>
                  <ChevronDown
                    className={`h-6 w-6 text-slate-500 transition-transform duration-300 ${
                      openFaq === index ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    openFaq === index ? "max-h-96" : "max-h-0"
                  }`}
                >
                  <div className="px-8 pb-6">
                    <p className="text-slate-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
