"use client";
import React from "react";
import TeamLeaders from "../components/TeamLeaders";
import Footer from "../components/footer";

const About: React.FC = () => {
  return (
    <div className="relative min-h-screen w-full text-white overflow-hidden bg-[url(/pexels-kai-pilger.jpg)] bg-contain bg-center">
      
      <h1 className="pt-50 ml-30 font-extrabold uppercase text-[40px] sm:text-[56px] md:text-[60px] lg:text-[120px] leading-tight max-w-6xl">
          ABOUT US.
        </h1>
      <div className="flex flex-col lg:flex-row items-center justify-evenly space-x-20 px-40 ">
        {/* Logo */}
        <div className="shrink-0">
          <img
            src="/Dhruva-logo.png"
            alt="Dhruva Logo"
            className="w-100 max-w-full"
          />
        </div>

        {/* Text */}
        <div className=" m-20 text-white text-2xl ">
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
        className="absolute top-190 z-10 -right-20  w-full sm:w-75 md:w-95 lg:w-115"
      />

      <img className="w-full mt-30" src="https://images.unsplash.com/photo-1531844251246-9a1bfaae09fc?" alt="" />
    <TeamLeaders />
    <Footer />
    </div>

  );
};

export default About;
