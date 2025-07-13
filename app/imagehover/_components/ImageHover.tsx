"use client";
import gsap from "gsap";
import { InertiaPlugin } from "gsap/all";
import { useGSAP } from "@gsap/react";
/* eslint-disable @next/next/no-img-element */
import React from "react";

gsap.registerPlugin(InertiaPlugin);

const ImageHover = () => {
  let oldX = 0,
    oldY = 0,
    displacedX = 0,
    displacedY = 0;
  const speed = 100;

  useGSAP(() => {
    const handleMouseMove = (e: MouseEvent) => {
      displacedX = e.clientX - oldX;
      displacedY = e.clientY - oldY;
      oldX = e.clientX;
      oldY = e.clientY;
    };

    document.addEventListener("mousemove", handleMouseMove);

    const imageElements = document.querySelectorAll(".image");
    imageElements.forEach((el) => {
      el.addEventListener("mouseenter", () => {
        const tl = gsap.timeline({});
        const image = el.querySelector("img");

        if (image) {
          tl.to(image, {
            inertia: {
              x: {
                velocity: displacedX * speed,
                end: 0,
              },
              y: {
                velocity: displacedY * speed,
                end: 0,
              },
            },
          });
        }
      });
    });

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      imageElements.forEach((el) => {
        el.removeEventListener("mouseenter", () => {});
      });
    };
  });

  const images = Array.from({ length: 12 }, (_, index) => ({
    id: index,
    src: "https://images.unsplash.com/photo-1532012197267-da84d127e765?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZnJlZSUyMHBpY3xlbnwwfHwwfHx8MA%3D%3D",
  }));

  return (
    <section className="flex flex-wrap gap-10 w-[860px]">
      <div className="grid grid-cols-4 gap-4">
        {images.map((image) => (
          <div
            key={image.id}
            className="image w-[200px] h-[200px] object-cover rounded-[10px] cursor-pointer">
            <img
              src={image.src}
              alt="image"
              className="w-full h-full object-cover grayscale-100 rounded-[10px] transition-transform duration-300 hover:grayscale-0"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ImageHover;
