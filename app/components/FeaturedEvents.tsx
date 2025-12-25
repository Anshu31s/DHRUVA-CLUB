"use client";
import React from "react";

type Event = {
  id: number;
  title: string;
  date: string;
  description: string;
  image: string;
};

const events: Event[] = [
  {
    id: 1,
    title: "Talk on Dark Matter",
    date: "18/06/2023",
    description:
      "Lorem ipsum dolor sit amet consectetur. Augue duis etiam pulvinar duis interdum accumsan tempor bibendum amet. Lorem ipsum dolor sit amet consectetur. Augue duis etiam pulvinar duis interdum accumsan tempor bibendum amet.Lorem ipsum dolor sit amet consectetur. Augue duis etiam pulvinar duis interdum accumsan tempor bibendum amet.",
    image: "https://images.unsplash.com/photo-1581937019650-bb34507b7d64?",
  },
  {
    id: 2,
    title: "Astronauts We Know",
    date: "18/06/2023",
    description:
      "Lorem ipsum dolor sit amet consectetur. Augue duis etiam pulvinar duis interdum accumsan tempor bibendum amet. Lorem ipsum dolor sit amet consectetur. Augue duis etiam pulvinar duis interdum accumsan tempor bibendum amet.Lorem ipsum dolor sit amet consectetur. Augue duis etiam pulvinar duis interdum accumsan tempor bibendum amet.",
    image: "https://images.unsplash.com/photo-1541873676-a18131494184?",
  },
];

const FeaturedEvents: React.FC = () => {
  return (
    <section className="w-full min-h-screen py-32">
      <div className="max-w-7xl mx-auto space-y-40">
        {events.map((event, index) => {
          const isEven = index % 2 === 1;

          return (
            <div
              key={event.id}
              className={`relative flex  ${
                isEven ? " justify-center md:justify-end" : " justify-center md:justify-start"
              }`}
            >
              {/* Event Image */}
              <div className="relative 110 md:w-220 h-87 md:h-175">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover"
                />

                {/* Moon (only first card) */}
                {event.id === 1 && (
                  <img
                    src="/moon2.svg"
                    alt="Moon"
                    className="absolute -top-28 -left-28 w-90"
                  />
                )}

                {/* Glass Card */}
                <div
                  className={`absolute  md:top-2/3 -translate-y-1/2 w-58 h-68 md:w-137.5 md:h-94.5 bg-white/50 backdrop-blur-md text-white p-8
                  ${isEven ? "md:-left-40" : "md:-right-40"}`}
                >
                  <p className="text-[8px] md:text-[16px] tracking-widest">
                    {event.date}
                  </p>

                  <h3 className="text-[18px] md:text-[36px] font-bold uppercase mb-2 tracking-wide">
                    {event.title}
                  </h3>

                  <p className="text-[9px] md:text-[18px] mb-2">
                    {event.description}
                  </p>

                  <button className="bg-white text-black text-sm px-2 md:px-4 py-1 md:py-2 font-semibold hover:bg-gray-200 transition">
                    Learn More
                  </button>
                </div>

                {/* Hashtag */}
                <span
                  className={`absolute top-0 text-white text-[16px] md:text-[32px] font-bold
                  ${event.id === 1 ? "-right-90" : "-left-90"}`}
                >
                  #{event.id}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default FeaturedEvents;
