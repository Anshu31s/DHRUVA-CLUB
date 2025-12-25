"use client";
import React from "react";
import PodcastCards from "../components/podcastcard";
import PodcastOfWeek from "../components/PodcastOfWeek";
import Footer from "../components/footer";

const Podcast: React.FC = () => {
  return (
    <div className="relative min-h-screen w-full text-white overflow-hidden bg-[url(/pexels-kai-pilger.jpg)] bg-contain bg-center">
      <h1 className="flex items-center pt-50 p-10 justify-center text-center text-[14rem] font-extrabold ">
        <span>P</span>
        <img
          src="/moon2.svg"
          alt="Moon"
          className="w-48 h-48 m-6 object-cover mt-8 rounded-full"
        />

        <span className="tracking-widest">DCASTS</span>
      </h1>

      <PodcastCards />
      <PodcastOfWeek />
      <Footer />
    </div>
  );
};

export default Podcast;
