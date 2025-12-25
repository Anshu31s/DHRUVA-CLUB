import React from "react";

const Hero: React.FC = () => {
  return (
    <section >
      {/* Hero Content */}
      <div className="flex flex-col justify-center min-h-screen px-6 sm:px-10 md:px-16 lg:px-20 max-w-full">
        {/* Heading */}
        <h1 className=" font-extrabold uppercase text-[40px] sm:text-[56px] md:text-[60px] lg:text-[72px] leading-tight max-w-6xl">
          Let’s travel to the edge of space
        </h1>

        {/* Subheading */}
        <p className="mt-6 max-w-4xl font-bold text-base sm:text-lg md:text-xl tracking-wide text-white/90">
          We are a group that love to explore and learn new information related to
          our universe.<br /> Join us and Explore
        </p>

        {/* CTA Button */}
        <button className="mt-10 w-fit border border-white px-6 py-3 text-sm tracking-widest uppercase hover:bg-white hover:text-black transition">
          Discover More
        </button>
      </div>

      {/* Moon Image */}
      <img
        src="/moon.svg"
        alt="Moon"
        className="absolute top-149 right-40   w-full sm:w-75 md:w-95 lg:w-115"
      />
    </section>
  );
};

export default Hero;
