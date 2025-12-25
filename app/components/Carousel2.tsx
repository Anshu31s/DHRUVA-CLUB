'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';

const images = [
    'https://images.unsplash.com/photo-1519810755548-39cd217da494?',
    'https://images.unsplash.com/photo-1529788295308-1eace6f67388?',
    'https://images.unsplash.com/photo-1494022299300-899b96e49893?',
    'https://images.unsplash.com/photo-1538370965046-79c0d6907d47?',
    'https://images.unsplash.com/photo-1611462985358-60d3498e0364?',
];

const Carousel = () => {

    const doubledImages = [...images, ...images];

    return (
        <div className="w-full overflow-hidden whitespace-nowrap py-10 relative">
            <div className="inline-block animate-infinite-scroll">
                {doubledImages.map((src, index) => (
                    <div
                        key={index}
                        className="inline-block mx-4 w-75 h-50 relative rounded-lg overflow-hidden border border-white/20"
                    >
                        <Image
                            src={src}
                            alt={`Carousel Item ${index}`}
                            fill
                            className="object-cover hover:scale-110 transition-transform duration-500"
                        />
                    </div>
                ))}
            </div>
            <style jsx>{`
        .animate-infinite-scroll {
          animation: infinite-scroll 20s linear infinite;
        }
        @keyframes infinite-scroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
      `}</style>
        </div>
    );
};

export default Carousel;
