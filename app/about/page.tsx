"use client";
import React from "react";
import TeamLeaders from "../components/TeamLeaders";
import Footer from "../components/footer";

const About: React.FC = () => {
  return (
    <div className="relative min-h-screen w-full text-white overflow-hidden bg-[url(/pexels-kai-pilger.jpg)] bg-contain bg-center">

      {/* Heading */}
      <h1 className="
        pt-24 sm:pt-32 lg:pt-40
        px-6 sm:px-10 lg:px-20
        font-extrabold uppercase
        text-[36px] sm:text-[56px] md:text-[72px] lg:text-[120px]
        leading-tight
        max-w-7xl
      ">
        ABOUT US.
      </h1>

      {/* Content */}
      <div className="
        flex flex-col lg:flex-row
        items-center
        justify-between
        gap-12 lg:gap-20
        px-6 sm:px-10 lg:px-24
        py-16
      ">
        {/* Logo */}
        <div className="shrink-0">
          <img
            src="/Dhruva-logo.png"
            alt="Dhruva Logo"
            className="w-48 sm:w-64 lg:w-96 max-w-full mx-auto"
          />
        </div>

        {/* Text */}
        <div className="text-base sm:text-lg lg:text-2xl leading-relaxed max-w-3xl">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
            voluptatem suscipit soluta laudantium, sapiente natus deleniti
            perferendis temporibus quaerat mollitia! Assumenda neque a modi quo
            magni. Eius corrupti ea eum! Lorem ipsum dolor sit amet consectetur,
            adipisicing elit. Soluta esse, accusantium dignissimos perspiciatis
            excepturi quos numquam! Ducimus minus ipsam facere alias quod esse
            temporibus vel porro cumque nobis voluptas itaque sunt nostrum,
            maiores doloribus. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Laborum quam optio numquam quis amet? Vero iusto
            aliquid error neque officia quaerat numquam illum consectetur
            suscipit illo maiores, minus consequatur explicabo. Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Error ducimus, dicta
            tempore doloribus optio, repellat vero ab et, voluptates suscipit
            distinctio ipsam porro quidem illo amet at quis placeat sequi.
          </p>
        </div>
      </div>

      {/* Moon Image */}
      <img
        src="/moon.svg"
        alt="Moon"
        className="
          absolute
          right-[-30%] sm:right-[-15%] lg:right-[-8%]
          top-[26%] lg:top-[22%]
          w-64 sm:w-80 lg:w-md
          pointer-events-none
          z-10
        "
      />

      {/* Divider Image */}
      <img
        className="w-full mt-24"
        src="https://images.unsplash.com/photo-1531844251246-9a1bfaae09fc?"
        alt=""
      />

      <TeamLeaders />
      <Footer />
    </div>
  );
};

export default About;
