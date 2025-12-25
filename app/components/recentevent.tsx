import React from "react";

const RecentEvents: React.FC = () => {
  return (
    <section className="w-full py-24 md:py-40 px-6 md:px-16 lg:px-24">
      {/* Section Title */}
      <h2 className="text-white font-bold text-3xl md:text-4xl tracking-widest uppercase mb-8">
        Recent Events
      </h2>

      {/* Event Card */}
      <div
        className="relative w-full h-105 md:h-130 lg:h-150 rounded-xl overflow-hidden"
        style={{
          backgroundImage: "url('/nebula.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay (optional for better contrast) */}
        <div className="absolute inset-0 bg-black/30"></div>

        {/* Content Box */}
        <div
          className="
            absolute
            bottom-6
            left-6
            right-6
            md:bottom-auto
            md:top-1/2
            md:-translate-y-1/2
            md:right-12
            md:left-auto
            md:w-[45%]
            bg-white/40
            backdrop-blur-md
            p-6
            md:p-8
            text-white
            rounded-lg
          "
        >
          <p className="text-sm md:text-base mb-2 tracking-wider">
            18/06/2023
          </p>

          <h3 className="text-xl md:text-3xl lg:text-4xl font-bold uppercase mb-4">
            Talk on Cosmic Nebula
          </h3>

          <p className="text-sm md:text-base lg:text-lg leading-relaxed font-medium mb-6">
            Lorem ipsum dolor sit amet consectetur. Augue duis etiam pulvinar
            duis interdum accumsan tempor bibendum amet. Lorem ipsum dolor sit
            amet consectetur. Porro itaque harum rerum! Sint pariatur dicta
            obcaecati incidunt iste.
          </p>

          <button className="inline-block bg-white text-black px-6 py-2 text-sm md:text-base font-semibold hover:bg-gray-200 transition">
            Read More
          </button>
        </div>
      </div>
    </section>
  );
};

export default RecentEvents;
