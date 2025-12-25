import React from "react";

const RecentEvents: React.FC = () => {
  return (
    <section className="w-full py-60 px-6 md:px-16 lg:px-24">
      {/* Section Title */}
      <h2 className="text-white font-bold text-4xl tracking-widest uppercase mb-4">
        Recent Events
      </h2>

      {/* Event Card */}
      <div
        className="relative w-full max-w-dvw h-160 rounded-lg overflow-hidden"
        style={{
          backgroundImage: "url('/nebula.jpg')", 
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >

        {/* Content Box */}
        <div className="absolute w-2/5 h-8/12  right-30 top-30 bg-white/50 p-6 md:p-8 text-white ">
          <p className="text-xl mb-2">18/06/2023</p>

          <h3 className="text-xl md:text-4xl font-bold uppercase mb-3">
            Talk on Cosmic Nebula
          </h3>

          <p className="text-xl leading-relaxed font-bold mb-4">
           Lorem ipsum dolor sit amet consectetur. Augue duis etiam pulvinar
            duis interdum accumsan tempor bibendum amet. Lorem ipsum dolor sit
            amet consectetur.
            Lorem ipsum dolor sit fuga esse ullam explicabo nulla! Porro itaque harum rerum! Sint pariatur dicta obcaecati incidunt iste, totam in harum nesciunt!
          </p>

          <button className="mt-2 text-xl font-semibold inline-block bg-white text-black px-4 py-2 hover:bg-gray-200 transition">
            Read More
          </button>
        </div>
      </div>
    </section>
  );
};

export default RecentEvents;
