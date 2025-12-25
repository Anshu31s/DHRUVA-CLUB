"use client";
import React from "react";
import PodcastCards from "../components/podcastcard";
import PodcastOfWeek from "../components/PodcastOfWeek";
import Footer from "../components/footer";

const Podcast: React.FC = () => {
  return (
    <div className="min-h-screen w-full text-white overflow-hidden bg-[url(/pexels-kai-pilger.jpg)] bg-contain bg-center">
      <h1 className="flex items-center pt-25 md:pt-50 p-5 md:p-10 justify-center text-center text-[2.7rem] md:text-[14rem] font-extrabold tracking-widest">
        <span>P</span>
        <img
          src="/moon2.svg"
          alt="Moon"
          className="w-10 h-10 md:w-48 md:h-48 m-2 md:m-6 object-cover mt-3 md:mt-8 rounded-full"
        />

        <span className="">DCASTS</span>
      </h1>

      <PodcastCards />
      <PodcastOfWeek />
      <Footer />
    </div>
  );
};

export default Podcast;
