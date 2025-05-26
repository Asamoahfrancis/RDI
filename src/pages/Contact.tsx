import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Building,
  Film,
  Share2,
} from "lucide-react";
import ContactForm from "../components/ContactForm";

const Contact = () => {
  return (
    <>
      {/* Page Header */}
      <section className="bg-[#1E293B] py-16 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-poppins font-bold text-4xl md:text-5xl text-white mb-4">
            Contact Us
          </h1>
          <p className="text-[#94A3B8] text-lg md:text-xl max-w-2xl mx-auto">
            Ready to discuss your project? Reach out to our team for a
            consultation.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 md:py-24 bg-[#F8FAFC]">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Contact Form */}
            <div className="lg:w-2/3 bg-white p-8 rounded-xl shadow-lg">
              <h2 className="font-poppins font-semibold text-2xl mb-6">
                Send us a message
              </h2>
              <ContactForm />
            </div>

            {/* Contact Info */}
            <div className="lg:w-1/3 space-y-8">
              {/* Contact Details */}
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="font-poppins font-semibold text-xl mb-4">
                  Contact Information
                </h3>

                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-8 h-8 bg-[#FFC107] bg-opacity-10 rounded-full flex items-center justify-center text-[#FFC107]">
                        <MapPin className="h-4 w-4" />
                      </div>
                    </div>
                    <div className="ml-4">
                      <h4 className="font-medium">Address</h4>
                      <p className="text-[#64748B]">
                        123 Business Avenue
                        <br />
                        Suite 400
                        <br />
                        San Francisco, CA 94107
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-8 h-8 bg-[#9C27B0] bg-opacity-10 rounded-full flex items-center justify-center text-[#9C27B0]">
                        <Phone className="h-4 w-4" />
                      </div>
                    </div>
                    <div className="ml-4">
                      <h4 className="font-medium">Phone</h4>
                      <p className="text-[#64748B]">+1 (555) 123-4567</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-8 h-8 bg-[#FFC107] bg-opacity-10 rounded-full flex items-center justify-center text-[#FFC107]">
                        <Mail className="h-4 w-4" />
                      </div>
                    </div>
                    <div className="ml-4">
                      <h4 className="font-medium">Email</h4>
                      <p className="text-[#64748B]">info@dualcore.com</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-8 h-8 bg-[#9C27B0] bg-opacity-10 rounded-full flex items-center justify-center text-[#9C27B0]">
                        <Clock className="h-4 w-4" />
                      </div>
                    </div>
                    <div className="ml-4">
                      <h4 className="font-medium">Hours</h4>
                      <p className="text-[#64748B]">
                        Monday - Friday: 9AM - 5PM
                        <br />
                        Saturday - Sunday: Closed
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Department Contacts */}
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="font-poppins font-semibold text-xl mb-4">
                  Department Contacts
                </h3>

                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-8 h-8 bg-[#FFC107] bg-opacity-10 rounded-full flex items-center justify-center text-[#FFC107]">
                        <Building className="h-4 w-4" />
                      </div>
                    </div>
                    <div className="ml-4">
                      <h4 className="font-medium">Construction Division</h4>
                      <p className="text-[#64748B]">
                        construction@dualcore.com
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-8 h-8 bg-[#9C27B0] bg-opacity-10 rounded-full flex items-center justify-center text-[#9C27B0]">
                        <Film className="h-4 w-4" />
                      </div>
                    </div>
                    <div className="ml-4">
                      <h4 className="font-medium">Media Division</h4>
                      <p className="text-[#64748B]">media@dualcore.com</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-8 h-8 bg-[#10B981] bg-opacity-10 rounded-full flex items-center justify-center text-[#10B981]">
                        <Share2 className="h-4 w-4" />
                      </div>
                    </div>
                    <div className="ml-4">
                      <h4 className="font-medium">Partnerships</h4>
                      <p className="text-[#64748B]">
                        partnerships@dualcore.com
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="font-poppins font-semibold text-xl mb-4">
                  Connect With Us
                </h3>

                <div className="flex space-x-4">
                  <a
                    href="#"
                    className="w-10 h-10 bg-[#FFC107] bg-opacity-10 rounded-full flex items-center justify-center text-[#FFC107] hover:bg-[#FFC107] hover:text-white transition-colors"
                  >
                    <svg
                      className="h-5 w-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 bg-[#9C27B0] bg-opacity-10 rounded-full flex items-center justify-center text-[#9C27B0] hover:bg-[#9C27B0] hover:text-white transition-colors"
                  >
                    <svg
                      className="h-5 w-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 bg-[#FFC107] bg-opacity-10 rounded-full flex items-center justify-center text-[#FFC107] hover:bg-[#FFC107] hover:text-white transition-colors"
                  >
                    <svg
                      className="h-5 w-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 bg-[#9C27B0] bg-opacity-10 rounded-full flex items-center justify-center text-[#9C27B0] hover:bg-[#9C27B0] hover:text-white transition-colors"
                  >
                    <svg
                      className="h-5 w-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-poppins font-bold text-3xl md:text-4xl mb-4">
              Visit Our Office
            </h2>
            <p className="text-[#64748B] max-w-2xl mx-auto">
              We're conveniently located in downtown San Francisco, easily
              accessible by public transportation.
            </p>
          </div>

          <div className="rounded-xl overflow-hidden shadow-lg h-[400px] md:h-[500px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15182.603571458578!2d-0.3105617710510188!3d5.629860498736724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdfa209f804cb5b%3A0x13fe1f4f9fff6dfe!2sAblekuma%20Fan-Milk!5e0!3m2!1sen!2sgh!4v1748164136397!5m2!1sen!2sgh"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-[#F8FAFC]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-poppins font-bold text-3xl md:text-4xl mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-[#64748B] max-w-2xl mx-auto">
              Find answers to common questions about our services and process.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="font-poppins font-semibold text-xl mb-3">
                What areas do you serve?
              </h3>
              <p className="text-[#64748B]">
                We primarily serve the San Francisco Bay Area for construction
                projects, but our media services are available nationwide and
                internationally.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="font-poppins font-semibold text-xl mb-3">
                How long does a typical project take?
              </h3>
              <p className="text-[#64748B]">
                Project timelines vary based on scope and complexity.
                Construction projects typically range from 3 months to 2 years,
                while media projects can range from 2 weeks to 6 months.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="font-poppins font-semibold text-xl mb-3">
                Do you offer free consultations?
              </h3>
              <p className="text-[#64748B]">
                Yes, we offer free initial consultations to discuss your project
                needs and how we can help. Contact us to schedule yours today.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="font-poppins font-semibold text-xl mb-3">
                What makes DualCore different?
              </h3>
              <p className="text-[#64748B]">
                Our unique integration of construction and media expertise
                allows us to provide comprehensive solutions that most companies
                can't offer under one roof.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
