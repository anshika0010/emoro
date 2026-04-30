import ContactForm from "@/components/ContactForm";

export default function HeroSection() {
  return (
    <>
      <section className="relative w-full h-[80vh] flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="/contactbanner.jpg"
            alt="Background"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6">
          <div className="flex justify-start">
            <div className="text-white max-w-xl text-left">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                contact us
              </h1>
              <p className="text-lg mb-6">
                We’re here to help. Reach out anytime for support or questions.
              </p>
            </div>
          </div>
        </div>
      </section>
      <ContactForm />
    </>
  );
}
