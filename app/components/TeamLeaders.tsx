"use client";
import React from "react";

type Member = {
  id: number;
  name: string;
  post: string;
  image: string;
};

const members: Member[] = Array.from({ length: 18 }).map((_, i) => ({
  id: i + 1,
  name: "NAME",
  post: "POST",
  image: `/${i + 1}.jpg`,
}));

const TeamLeaders: React.FC = () => {
  return (
    <section className="w-full px-4 sm:px-8 md:px-10 py-24 text-white">
      {/* Content */}
      <div className="relative max-w-7xl mx-auto">
        {/* Heading */}
        <h2 className="text-center text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-widest uppercase mb-16">
          Team Leaders of Our Club
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-x-8 gap-y-14">
          {members.map((member) => (
            <div
              key={member.id}
              className="flex flex-col items-center group"
            >
              {/* Image */}
              <div
                className="
                  w-28 h-28
                  sm:w-32 sm:h-32
                  md:w-36 md:h-36
                  lg:w-40 lg:h-40
                  xl:w-44 xl:h-44
                  rounded-2xl
                  overflow-hidden
                  shadow-lg
                  transition-transform
                  duration-300
                  group-hover:scale-105
                "
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Text */}
              <div className="mt-4 text-center">
                <p className="text-sm font-bold tracking-widest">
                  {member.name}
                </p>
                <p className="text-sm font-bold tracking-widest mt-1 text-white/80">
                  {member.post}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Quote */}
      <p
        className="
          mt-24 md:mt-40
          px-4
          text-center
          text-base sm:text-lg md:text-[20px]
          font-bold
          uppercase
          text-white
        "
      >
        “Astronomy compels the soul to look upwards and leads us from this world
        to another”
      </p>
    </section>
  );
};

export default TeamLeaders;
