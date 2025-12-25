import React, { useState } from "react";

type Slide = {
  id: number;
  image: string;
};

const slidesData: Slide[] = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1544198365-f5d60b6d8190?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 4,
    image:
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 5,
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
  },
];

const Carousel: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const numSlides = slidesData.length;

  const handlePrev = () =>
    setActiveIndex((p) => (p - 1 + numSlides) % numSlides);
  const handleNext = () => setActiveIndex((p) => (p + 1) % numSlides);

  const getStatus = (index: number) => {
    let diff = index - activeIndex;
    if (diff > numSlides / 2) diff -= numSlides;
    else if (diff < -numSlides / 2) diff += numSlides;

    if (diff === 0) return "active";
    if (diff === 1 || (numSlides === 2 && diff === -1)) return "next";
    if (diff === -1) return "prev";
    if (diff === 2 || (numSlides === 4 && diff === -2))
      return "background-next";
    if (diff === -2) return "background-prev";
    return "hidden";
  };

  return (
    <>
      <h1
        className="
    mx-auto
    mb-10 sm:mb-12 md:mb-16
    text-center
    uppercase
    font-bold
    text-white

    text-lg sm:text-xl md:text-2xl lg:text-[32px]
    leading-tight md:leading-snug
    tracking-[0.15em] sm:tracking-[0.18em] md:tracking-[0.2em]
  "
      >
        WHAT’S IT LIKE WHEN WE HAVE EVENTS
      </h1>

      <div className="relative w-full mx-auto px-4 py-20 overflow-visible rounded-xl">
        <style>{`
        .slide {
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
          transition: all 0.6s cubic-bezier(0.65, 0, 0.35, 1);
          will-change: transform, opacity;
        }
        .slide[data-status="active"] {
          opacity: 1;
          transform: translateY(0%) translateX(0%) translateZ(0px) scale(1);
          z-index: 10;
        }
        .slide[data-status="next"] {
          opacity: 0.8;
          transform: translateY(0%) translateX(25%) translateZ(-100px) scale(0.8);
          z-index: 9;
        }
        .slide[data-status="prev"] {
          opacity: 0.8;
          transform: translateY(0%) translateX(-25%) translateZ(-100px) scale(0.8);
          z-index: 9;
        }
        .slide[data-status="background-next"] {
          opacity: 0.6;
          transform: translateY(0%) translateX(45%) translateZ(-200px) scale(0.6);
          z-index: 8;
        }
        .slide[data-status="background-prev"] {
          opacity:0.6;
          transform: translateY(0%) translateX(-45%) translateZ(-200px) scale(0.6);
          z-index: 8;
        }
        .slide[data-status="hidden"] {
          opacity:0;
          transform: translateY(0%) translateX(0%) translateZ(-300px) scale(0.5);
          z-index: 1;
          pointer-events: none;
        }
      `}</style>
        <main
          className="
  relative
  w-full
  h-[280px] sm:h-[360px] md:h-[450px] lg:h-[520px]
  transform-3d
  flex
  items-center
  justify-center
  overflow-hidden
"
        >
          {slidesData.map((item, index) => (
            <article
              key={item.id}
              data-status={getStatus(index)}
              className="
        slide
        absolute
        w-[90%] sm:w-[80%] md:w-[65%] lg:w-[60%]
        h-full
        rounded-3xl sm:rounded-4xl lg:rounded-[40px]
        overflow-hidden
        shadow-2xl
        border
        border-white/10
        transition-all
        duration-500
        ease-out
      "
            >
              <img
                src={item.image}
                alt={`Slide ${item.id}`}
                className="w-full h-full object-cover"
              />
            </article>
          ))}
        </main>

        {/* Navigation UI based on Reference Image */}
        <div className="mt-8 sm:mt-10 lg:mt-12 flex flex-col items-center gap-4 sm:gap-6">
          <div className="flex items-center text-white/70">
            {/* Pagination Dots & Arrows */}
            <div className="flex items-center gap-3 sm:gap-5 md:gap-8">
              {/* Prev */}
              <button
                onClick={handlePrev}
                className="
          p-2 sm:p-3
          hover:text-white
          active:scale-95
          transition
        "
                aria-label="Previous slide"
              >
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5"
                  viewBox="0 0 19 18"
                  fill="none"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M5.74264 7.06066H18.6213V10.0607H5.74264L10.682 15L8.56066 17.1213L0 8.56066L8.56066 0L10.682 2.12132L5.74264 7.06066Z"
                    fill="currentColor"
                  />
                </svg>
              </button>

              {/* Dots */}
              <div className="flex items-center gap-1.5 sm:gap-2">
                {slidesData.map((_, i) => (
                  <div
                    key={i}
                    className={`
              h-2 sm:h-2.5
              rounded-full
              transition-all duration-300
              ${
                i === activeIndex
                  ? "w-6 sm:w-8 bg-[#7B61FF]"
                  : "w-2 sm:w-2.5 bg-white/30"
              }
            `}
                  />
                ))}
              </div>

              {/* Next */}
              <button
                onClick={handleNext}
                className="
          p-2 sm:p-3
          hover:text-white
          active:scale-95
          transition
        "
                aria-label="Next slide"
              >
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5"
                  viewBox="0 0 19 18"
                  fill="none"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12.5537 10.443H0V7.32899H12.5537L7.73899 2.20194L9.80678 0L18.1514 8.88599L9.80678 17.772L7.73899 15.57L12.5537 10.443Z"
                    fill="currentColor"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Carousel;
