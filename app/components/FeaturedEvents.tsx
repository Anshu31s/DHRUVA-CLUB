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
    <section className="relative w-full min-h-screen overflow-hidden py-32">
      <div className="relative z-10 max-w-7xl mx-auto space-y-40">
        {events.map((event, index) => {
          const isEven = index % 2 === 1;

          return (
            <div
              key={event.id}
              className={`relative flex ${
                isEven ? "justify-end" : "justify-start"
              }`}
            >
              {/* Event Image */}
              <div className="relative w-220 h-175">
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
                  className={`absolute top-2/3 -translate-y-1/2 w-137.5 h-94.5 bg-white/50 backdrop-blur-md text-white p-8
                  ${isEven ? "-left-40" : "-right-40"}`}
                >
                  <p className="text-[16px] tracking-widest">
                    {event.date}
                  </p>

                  <h3 className="text-[36px] font-bold uppercase mb-2 tracking-wide">
                    {event.title}
                  </h3>

                  <p className="text-[18px] mb-2">
                    {event.description}
                  </p>

                  <button className="bg-white text-black text-sm px-4 py-2 font-semibold hover:bg-gray-200 transition">
                    Learn More
                  </button>
                </div>

                {/* Hashtag */}
                <span
                  className={`absolute top-0 text-white text-[32px] font-bold
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
