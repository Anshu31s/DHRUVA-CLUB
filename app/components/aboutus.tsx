import React from "react";

const AboutUs: React.FC = () => {
  return (
    <section className="w-full px-6 sm:px-10 lg:px-24 py-20 text-white">
      {/* Top Heading */}
      <p className="text-center text-sm sm:text-lg lg:text-[32px] tracking-[0.3em] uppercase font-bold mb-20">
        Know more about us here
      </p>

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row items-center justify-between gap-16 max-w-7xl mx-auto">
        
        {/* Logo */}
        <img
          src="/dhruva-logo.png"
          alt="Dhruva Logo"
          className="w-40 sm:w-56 lg:w-[18%] object-contain"
        />

        {/* Text */}
        <div className="text-center lg:text-left">
          <h2 className="text-xl sm:text-3xl lg:text-[36px] leading-snug font-bold uppercase">
            We are a club that learn, share and explore <br className="hidden sm:block" />
            everything related to our universe.
          </h2>

          <p className="text-sm sm:text-lg lg:text-[24px] text-gray-200 uppercase leading-relaxed mt-6 max-w-2xl">
            DHRUVA is a college club. We work toward increasing knowledge
            about space, cosmos, and everything we are still learning about.
            We share and learn together.
          </p>
        </div>
      </div>

      {/* Quote */}
      <p className="mt-32 text-center text-xs sm:text-sm lg:text-[20px] font-bold uppercase max-w-4xl mx-auto">
        “Astronomy compels the soul to look upwards and leads us from this world
        to another”
      </p>
    </section>
  );
};

export default AboutUs;
