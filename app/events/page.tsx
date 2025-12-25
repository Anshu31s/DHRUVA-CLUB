"use client";
import React from "react";
import FeaturedEvents from "../components/FeaturedEvents";
import Carousel from "../components/Carousel2";
import Footer from "../components/footer";

const Events: React.FC = () => {
  return (
    <section className="relative min-h-screen w-full text-white overflow-hidden bg-[url(/pexels-kai-pilger.jpg)] bg-cover bg-center">
      
      {/* Hero Section */}
      <div className="px-6 md:px-12 lg:px-20 pt-24">
        <div
          className="relative w-full h-[60vh] md:h-[70vh] lg:h-[80vh] mx-auto overflow-hidden bg-cover bg-center"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1536697246787-1f7ae568d89a)",
          }}
        >
          {/* Text Content */}
          <div className="absolute bottom-6 md:bottom-10 w-full">
            <div className="px-6 md:px-12">
              <h1 className="text-white text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-extrabold uppercase tracking-wider leading-tight">
                Our Stargazers
              </h1>

              <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-10">
                <span className="text-white text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-extrabold uppercase tracking-wider">
                  Spectacle
                </span>

                <span className="font-extrabold text-white text-sm sm:text-base md:text-xl lg:text-3xl tracking-widest uppercase">
                  A journey through the cosmos
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Events Title */}
      <div className="relative z-10 mt-20 md:mt-24 text-center">
        <h2 className="text-white text-xl sm:text-2xl md:text-[32px] font-extrabold tracking-[0.25em] md:tracking-[0.4em] uppercase">
          Recent Events
        </h2>
      </div>

      {/* Content */}
      <FeaturedEvents />
      <Carousel />

      {/* Quote */}
      <p className="mt-24 md:mt-40 px-6 text-center text-sm sm:text-base md:text-[20px] font-bold uppercase text-white">
        “Astronomy compels the soul to look upwards and leads us from this world
        to another”
      </p>

      <Footer />
    </section>
  );
};

export default Events;
