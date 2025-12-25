"use client";
import React from "react";

type Episode = {
  number: string;
  title: string;
  tags: string;
  image: string;
};

const leftColumn: Episode[] = [
  {
    number: "01.",
    title: "SPACEBUZZ EP. 1",
    tags: "#SPACE #ASTRONOMY",
    image:
      "https://images.unsplash.com/photo-1484589065579-248aad0d8b13?auto=format&fit=crop&q=80&w=1200",
  },
  {
    number: "02.",
    title: "SPACEBUZZ EP. 2",
    tags: "#COSMOS #ASTRONOMY",
    image: "/space.png",
  },
];

const rightColumn: Episode[] = [
  {
    number: "03.",
    title: "SPACEBUZZ EP. 3",
    tags: "#ASTRONAUT #ASTRONOMY",
    image:
      "https://images.unsplash.com/photo-1537420327992-d6e192287183?auto=format&fit=crop&q=80&w=1200",
  },
  {
    number: "04.",
    title: "SPACEBUZZ EP. 4",
    tags: "#SPACE #ASTRONOMY",
    image:
      "https://images.unsplash.com/photo-1530508777238-14544088c3ed?auto=format&fit=crop&q=80&w=1200",
  },
];

const PodcastOfWeek: React.FC = () => {
  return (
    <section className="relative min-h-screen w-full bg-cover bg-center text-white px-6 sm:px-10 lg:px-14 py-16">
      {/* Header */}
      <div className="flex flex-col lg:flex-row justify-evenly gap-10 lg:gap-12 mb-20">
        <h1 className="text-3xl sm:text-4xl md:text-[4rem] lg:text-[5rem] font-extrabold tracking-widest uppercase">
          Podcast of the Week
        </h1>

        <div className="max-w-2xl text-base sm:text-lg md:text-xl text-gray-200">
          <p className="leading-relaxed mb-6">
            Lorem ipsum dolor sit amet consectetur. Diam donec egestas est leo
            malesuada massa quisque vitae at. Aliquet scelerisque magna nulla
            aenean euismod sed. Adipiscing placerat quisque eu rhoncus consequat.
          </p>

          <button className="flex items-center gap-2 border-2 border-white px-6 py-2 rounded-md text-base sm:text-lg font-semibold hover:bg-white hover:text-black transition">
            Learn More
            <span className="text-2xl">↗</span>
          </button>
        </div>
      </div>

      {/* Episodes Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-20 lg:gap-x-32 px-0 sm:px-6 lg:px-20">
        {/* LEFT COLUMN */}
        <div className="flex flex-col">
          {leftColumn.map((ep, index) => (
            <React.Fragment key={ep.number}>
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-8">
                <span className="text-2xl sm:text-3xl font-extrabold">
                  {ep.number}
                </span>

                <img
                  src={ep.image}
                  alt={ep.title}
                  className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl object-cover"
                />

                <div>
                  <h3 className="text-base sm:text-lg font-bold tracking-widest">
                    {ep.title}
                  </h3>
                  <p className="text-sm sm:text-md font-bold tracking-widest">
                    {ep.tags}
                  </p>
                </div>
              </div>

              {index === 0 && (
                <div className="h-0.5 bg-white w-full my-10 sm:my-16" />
              )}
            </React.Fragment>
          ))}
        </div>

        {/* RIGHT COLUMN */}
        <div className="flex flex-col">
          {rightColumn.map((ep, index) => (
            <React.Fragment key={ep.number}>
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-8">
                <span className="text-2xl sm:text-3xl font-extrabold">
                  {ep.number}
                </span>

                <img
                  src={ep.image}
                  alt={ep.title}
                  className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl object-cover"
                />

                <div>
                  <h3 className="text-base sm:text-lg font-bold tracking-widest">
                    {ep.title}
                  </h3>
                  <p className="text-sm sm:text-md font-bold tracking-widest">
                    {ep.tags}
                  </p>
                </div>
              </div>

              {index === 0 && (
                <div className="h-0.5 bg-white w-full my-10 sm:my-16" />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Quote */}
      <p className="mt-24 sm:mt-32 lg:mt-40 text-center text-sm sm:text-base md:text-[20px] font-bold uppercase text-white px-4">
        “Astronomy compels the soul to look upwards and leads us from this world
        to another”
      </p>
    </section>
  );
};

export default PodcastOfWeek;
