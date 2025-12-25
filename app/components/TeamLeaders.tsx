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
  image: `/${i + 1}.jpg`, // replace with your real images
}));

const TeamLeaders: React.FC = () => {
  return (
    <section className="w-full px-10 py-24 text-white">

      {/* Content */}
      <div className="relative max-w-7xl mx-auto">
        {/* Heading */}
        <h2 className="text-center text-3xl md:text-4xl font-extrabold tracking-widest uppercase mb-16">
          Team Leaders of Our Club
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-x-8 gap-y-14">
          {members.map((member) => (
            <div key={member.id} className="flex flex-col items-center group">
              {/* Image */}
              <div className="w-50 h-50 rounded-2xl overflow-hidden shadow-lg group-hover:scale-105 transition-transform duration-300">
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
                <p className="text-sm font-bold tracking-widest mt-1">
                  {member.post}
                </p>
              </div>
            </div>
          ))}
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

export default TeamLeaders;
