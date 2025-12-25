import React from "react";

const AboutUs: React.FC = () => {
  return (
    <section className="w-full">
      {/* Top Heading */}
      <p className="text-center text-[32px] tracking-[0.3em] uppercase font-bold mb-50">
        Know more about us here
      </p>

      {/* Main Content */}
      <div className="flex flex-row justify-evenly items-center">
        
          <img src="/dhruva-logo.png" alt="Dhruva Logo" className="w-[18%]" />
    

        {/* Text */}
        <div className="">
          <h2 className="text-[36px] leading-20 font-bold uppercase">
            We are club that learn, share and explore <br />
            everything related to our universe.
          </h2>

          <p className="text-[24px] text-gray-200 uppercase leading-relaxed mt-4">
            DHRUVA is a college club. We work toward increasing knowledge <br />
            about space, cosmos, and everything we are still learning about.
            <br /> We share and learn together.
          </p>
        </div>
      </div>

      {/* Quote */}
      <p className="mt-40 text-center text-[20px] font-bold uppercase text-white">
        “Astronomy compels the soul to look upwards and leads us from this world
        to another”
      </p>
    </section>
  );
};

export default AboutUs;
