"use client";
import React from "react";
import Hero from "../components/hero";
import RecentEvents from "../components/recentevent";
import Carousel from "../components/carousel";
import AboutUs from "../components/aboutus";
import Footer from "../components/footer";


const Home: React.FC = () => {
  return (
    <div
      className="relative min-h-screen w-full text-white overflow-hidden"
      style={{
        backgroundImage: "url('/pexels-kai-pilger.jpg')",
        backgroundSize: "contain",
        backgroundPosition: "center",
      }}
    >
      <Hero />
      <RecentEvents />
      <Carousel />
      <AboutUs />
      <Footer />
  
    </div>
  );
};

export default Home;
