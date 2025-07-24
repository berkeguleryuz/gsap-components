"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef, useState } from "react";

const mockData = [
  {
    id: 1,
    title: "Winter Landscape",
    imageSrc:
      "https://images.unsplash.com/photo-1536782376847-5c9d14d97cc0?q=80&w=2676&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    title: "Mountain View",
    imageSrc:
      "https://images.unsplash.com/photo-1454496522488-7a8e488e8606?q=80&w=2676&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    title: "Golden Gate",
    imageSrc:
      "https://images.unsplash.com/photo-1530406472580-81dc39c4babe?q=80&w=3246&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 4,
    title: "Forest Path",
    imageSrc:
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2676&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 5,
    title: "Desert Dunes",
    imageSrc:
      "https://images.unsplash.com/photo-1473580044384-7ba9967e16a0?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 6,
    title: "Cityscape",
    imageSrc:
      "https://images.unsplash.com/photo-1449157291145-7efd050a4d0e?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 7,
    title: "Ocean Waves",
    imageSrc:
      "https://images.unsplash.com/photo-1502791451862-7bd8c1df43a7?q=80&w=2564&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const AccordionImages = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const slidesRef = useRef<(HTMLDivElement | null)[]>([]);

  useGSAP(
    () => {
      if (!slidesRef.current.length) return;

      slidesRef.current.forEach((slide, i) => {
        if (!slide) return;

        gsap.to(slide, {
          width: i === activeIndex ? "42vw" : "8vw",
          duration: i === activeIndex ? 2.5 : 2,
          ease: i === activeIndex ? "elastic(1, .3)" : "elastic(1, .6)",
        });

        const title = slide.querySelector("h1");
        gsap.to(title, {
          opacity: i === activeIndex ? 1 : 0,
          y: i === activeIndex ? 0 : 20,
          duration: 0.5,
          ease: "power2.inOut",
          delay: i === activeIndex ? 0.5 : 0,
        });
      });
    },
    { dependencies: [activeIndex], scope: slidesRef }
  );

  const handleSlideClick = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div className="flex items-center justify-center group whitespace-nowrap overflow-hidden p-4">
        {mockData.map((item, i) => (
          <div
            key={item.id}
            ref={(el) => {
              slidesRef.current[i] = el;
            }}
            className="relative w-[15vw] h-[75vh] bg-cover bg-center mx-2 rounded-3xl inline-block cursor-pointer overflow-hidden"
            style={{ backgroundImage: `url(${item.imageSrc})` }}
            onClick={() => handleSlideClick(i)}
          >
            <h1 className="absolute text-3xl font-semibold text-white w-max bottom-5 left-5 opacity-0 drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
              {item.title}
            </h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AccordionImages;
