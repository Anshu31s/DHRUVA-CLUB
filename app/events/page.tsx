"use client";
import React from "react";
import FeaturedEvents from "../components/FeaturedEvents";
import Carousel from "../components/Carousel2";
import Footer from "../components/footer";

const Events: React.FC = () => {
  return (
    <section className="relative min-h-screen w-full text-white overflow-hidden bg-[url(/pexels-kai-pilger.jpg)] bg-contain bg-center">
      <div className="p-20 mt-18">
        <div className="relative w-full h-140 mx-auto overflow-hidden bg-[url(https://images.unsplash.com/photo-1536697246787-1f7ae568d89a?)] bg-cover bg-center">
          {/* Text Content */}
          <div className="absolute bottom-10 ">
            <div className="px-12">
              <h1 className="text-white text-5xl md:text-7xl font-extrabold uppercase leading-tight tracking-wider">
                Our Stargazers
              </h1>
              <div className="flex items-center">
                <span className="text-white text-5xl md:text-7xl font-extrabold uppercase leading-tight tracking-wider">
                  Spectacle
                </span>
                <span className=" ml-10 font-extrabold text-white text-xl md:text-3xl tracking-widest uppercase">
                  A journey through the cosmos
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Events Title */}
      <div className="relative z-10 mt-24 text-center">
        <h2 className="text-white text-[32px] font-extrabold tracking-[0.4em] uppercase">
          Recent Events
        </h2>
      </div>
      <FeaturedEvents />
      <Carousel />
      {/* Quote */}
      <p className="mt-40 text-center text-[20px] font-bold uppercase text-white">
        “Astronomy compels the soul to look upwards and leads us from this world
        to another”
      </p>
      <Footer />
    </section>
  );
};

export default Events;
