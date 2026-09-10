import { FaLightbulb, FaRocket, FaCode, FaBullseye } from "react-icons/fa";

export default function AboutDetails() {
  return (
    <main>

      {/* ================= HERO ================= */}
      <section className="bg-[#ced1d4] py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6">

          <div className="max-w-4xl">

            <p className="text-[#FF6633] font-extrabold text-sm tracking-widest uppercase mb-4">
              ABOUT MARINESOFT
            </p>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#0A2540] leading-tight mb-6">
              We Build Digital Solutions
              <span className="text-[#FF6633]"> That Grow Businesses</span>
            </h1>

            <p className="text-gray-900 text-base md:text-lg leading-8 ">
              MarineSoft is a professional software development company
              providing innovative technology solutions, web development,
              digital marketing and custom software services.
            </p>

          </div>

        </div>
      </section>


      {/* ================= ABOUT COMPANY ================= */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">

          <div className="grid lg:grid-cols-2 gap-12 items-center">

            {/* IMAGE */}
            <div className="h-[350px] md:h-[500px] overflow-hidden rounded-2xl">
              <img
                src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=80"
                alt="MarineSoft Office"
                className="w-full h-full object-cover hover:scale-105 transition duration-700"
              />
            </div>

            {/* CONTENT */}
            <div>

              <p className="text-[#FF6633] font-bold text-sm uppercase tracking-wider mb-3">
                WHO WE ARE
              </p>

              <h2 className="text-3xl md:text-4xl font-bold text-[#0A2540] mb-6">
                Professional Software Solutions For Modern Businesses
              </h2>

              <p className="text-gray-600 leading-7 mb-5">
                MarineSoft is a professional software company based in
                Moradabad. We help businesses establish a strong digital
                presence through technology, creativity and reliable
                solutions.
              </p>

              <p className="text-gray-600 leading-7 mb-5">
                Our team works on software development, website development,
                mobile applications, digital marketing, SEO, WhatsApp
                marketing and custom business solutions.
              </p>

              <p className="text-gray-600 leading-7">
                We believe that every business has different requirements.
                That's why we focus on creating customized solutions that
                solve real business problems.
              </p>

            </div>

          </div>

        </div>
      </section>


      {/* ================= WHAT WE DO ================= */}
      <section className="py-16 md:py-24 bg-[#f4f7fb]">
        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center max-w-3xl mx-auto mb-14">

            <p className="text-[#FF6633] font-bold text-sm uppercase tracking-wider mb-3">
              WHAT WE DO
            </p>

            <h2 className="text-3xl md:text-4xl font-bold text-[#0A2540] mb-5">
              Technology & Digital Solutions
            </h2>

            <p className="text-gray-600 leading-7">
              We combine technology, creativity and business understanding
              to deliver effective digital solutions.
            </p>

          </div>


          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">

            {/* CARD 1 */}
            <div className="bg-white p-7 rounded-xl shadow-sm hover:shadow-xl transition duration-300">

              <div className="w-14 h-14 bg-blue-100 text-[#0088FF] rounded-full flex items-center justify-center mb-5">
                <FaCode className="text-2xl" />
              </div>

              <h3 className="text-xl font-bold text-[#0A2540] mb-3">
                Software Development
              </h3>

              <p className="text-gray-600 text-sm leading-6">
                Custom software solutions designed according to your
                business requirements.
              </p>

            </div>


            {/* CARD 2 */}
            <div className="bg-white p-7 rounded-xl shadow-sm hover:shadow-xl transition duration-300">

              <div className="w-14 h-14 bg-orange-100 text-[#FF6633] rounded-full flex items-center justify-center mb-5">
                <FaRocket className="text-2xl" />
              </div>

              <h3 className="text-xl font-bold text-[#0A2540] mb-3">
                Web Development
              </h3>

              <p className="text-gray-600 text-sm leading-6">
                Modern, responsive and user-friendly websites for
                businesses and organizations.
              </p>

            </div>


            {/* CARD 3 */}
            <div className="bg-white p-7 rounded-xl shadow-sm hover:shadow-xl transition duration-300">

              <div className="w-14 h-14 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-5">
                <FaLightbulb className="text-2xl" />
              </div>

              <h3 className="text-xl font-bold text-[#0A2540] mb-3">
                Digital Marketing
              </h3>

              <p className="text-gray-600 text-sm leading-6">
                Digital marketing strategies that help businesses improve
                their online visibility and reach.
              </p>

            </div>


            {/* CARD 4 */}
            <div className="bg-white p-7 rounded-xl shadow-sm hover:shadow-xl transition duration-300">

              <div className="w-14 h-14 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center mb-5">
                <FaBullseye className="text-2xl" />
              </div>

              <h3 className="text-xl font-bold text-[#0A2540] mb-3">
                Custom Solutions
              </h3>

              <p className="text-gray-600 text-sm leading-6">
                Business-focused solutions created to solve specific
                challenges and improve productivity.
              </p>

            </div>

          </div>

        </div>
      </section>


      {/* ================= MISSION / VISION ================= */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">

          <div className="grid md:grid-cols-2 gap-8">

            {/* MISSION */}
            <div className="bg-[#0088FF] text-white rounded-2xl p-8 md:p-10">

              <FaLightbulb className="text-4xl mb-6" />

              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Our Mission
              </h2>

              <p className="text-blue-100 leading-7">
                Our mission is to provide reliable, creative and
                cost-effective technology solutions that help businesses
                grow and succeed in the digital world.
              </p>

            </div>


            {/* VISION */}
            <div className="bg-[#FF6633] text-white rounded-2xl p-8 md:p-10">

              <FaRocket className="text-4xl mb-6" />

              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Our Vision
              </h2>

              <p className="text-orange-100 leading-7">
                Our vision is to become a trusted technology partner for
                businesses by delivering innovative digital products and
                meaningful customer experiences.
              </p>

            </div>

          </div>

        </div>
      </section>


      {/* ================= CTA ================= */}
      <section className="bg-[#0A2540] py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">

          <h2 className="text-3xl md:text-4xl font-bold text-white mb-5">
            Have a Project in Mind?
          </h2>

          <p className="text-gray-300 leading-7 mb-8">
            Let's discuss your requirements and build a solution that
            works for your business.
          </p>

          <a
            href="/contact"
            className="inline-block bg-[#FF6633] text-white font-bold px-8 py-3 rounded-md hover:bg-[#e55524] transition duration-300"
          >
            CONTACT US
          </a>

        </div>
      </section>

    </main>
  );
}