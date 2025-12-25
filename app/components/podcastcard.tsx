import React from "react";

const PodcastCards = () => {
  const cards = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1590602846989-e99596d2a6ee?auto=format&fit=crop&q=80&w=1200",
      alt: "Black studio microphone on dark background",
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1619490287893-862fd1808407?auto=format&fit=crop&q=80&w=1200",
      alt: "Studio microphone with warm lighting",
    },
  ];

  return (
    <div className="md:min-h-screen px-4 sm:px-8 md:px-12 lg:px-16 py-12 flex flex-col gap-8 items-center justify-center">
      {cards.map((card) => (
        <div
          key={card.id}
          className="
            relative
            w-full
            max-w-6xl
            aspect-video
            rounded-3xl sm:rounded-[40px]
            overflow-hidden
            shadow-2xl
            group
            cursor-pointer
          "
        >
          {/* Background Image */}
          <img
            src={card.image}
            alt={card.alt}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />

          {/* Overlay */}
          <div
            className="
              absolute
              bottom-4 left-4
              sm:bottom-6 sm:left-8
              md:bottom-8 md:left-16
              lg:bottom-10 lg:left-24
              flex flex-col gap-1
            "
          >
            <span className="text-white text-[10px] sm:text-xs font-bold uppercase tracking-widest">
              Available on
            </span>

            {/* Spotify SVG */}
            <div className="w-28 sm:w-36 md:w-44">
              <svg
                viewBox="0 0 171 38"
                className="w-full h-auto"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* SVG paths unchanged */}
                {/* (kept exactly as you had them) */}
              </svg>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PodcastCards;
