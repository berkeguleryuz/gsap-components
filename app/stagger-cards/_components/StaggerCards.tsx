"use client";
/* eslint-disable @next/next/no-img-element */
import gsap from "gsap";
import React from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const StaggerCards = () => {
  useGSAP(() => {
    const container = document.querySelector("#container") as HTMLElement;
    const description = document.querySelector("#description");
    const imagesAndVideo = gsap.utils.toArray(
      "#container img, #container video",
    );

    const video = imagesAndVideo.find(
      (el) => (el as HTMLElement).tagName === "VIDEO",
    );

    gsap.set(description, { opacity: 0 });

    const getResponsiveValues = () => {
      return window.innerWidth < 600
        ? { minVw: -20, maxVw: 20, minVh: -20, maxVh: 20 }
        : { minVw: -50, maxVw: 50, minVh: -50, maxVh: 50 };
    };

    const { minVw, maxVw, minVh, maxVh } = getResponsiveValues();

    imagesAndVideo.forEach((item, i) => {
      const rotation = i % 2 === 0 ? -5 : 5;

      const randomX = gsap.utils.random(minVw, maxVw, 10, true);
      const randomY = gsap.utils.random(minVh, maxVh, 10, true);

      gsap.set(item as HTMLElement, {
        transformOrigin: "center center",
        x: randomX,
        y: randomY,
        rotate: rotation,
      });
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: "top top",
        end: "+=4000",
        scrub: 2,
        pin: true,
      },
    });

    tl.to(description, {
      yPercent: -10,
      opacity: 1,
      duration: 3,
      ease: "power1.inOut",
    });

    tl.to(
      imagesAndVideo,
      {
        autoAlpha: 1,
        duration: 0.5,
        stagger: 5,
        ease: "elastic.out(1, 0.3)",
        onStart: () => {
          if (video) {
            (video as HTMLVideoElement).play();
          }
        },
      },
      ">+3",
    );

    tl.to(".scroll-indicator", {
      opacity: 0,
      duration: 1,
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: ".scroll-indicator",
        start: "top top",
        end: "+=1000",
        scrub: 1,
      },
    });
  });
  return (
    <div
      id="container"
      className="relative w-full h-screen flex justify-center items-center overflow-hidden">
      <div className="scroll-indicator absolute bottom-5 left-1/2 -translate-x-1/2 -translate-y-1/2 text-2xl font-bold flex items-center gap-2 opacity-100">
        <p>Scroll to see</p>
        <span className="text-4xl animate-bounce">↓</span>
      </div>
      <p
        id="description"
        className="absolute text-center w-[90%] md:w-[80%] text-3xl font-semibold opacity-0">
        Ready for your next adventure?
      </p>
      <img
        src="https://images.unsplash.com/photo-1472214103451-9374bd1c798e?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt=""
        className="absolute w-[400px] md:w-[600px] aspect-[4/3] object-cover rounded-2xl shadow-[0_0_50px_rgba(0,0,0,0.5)] shadow-white/50 opacity-0"
      />
      <img
        src="https://images.unsplash.com/photo-1703138560531-7b033a785ae6?q=80&w=2687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt=""
        className="absolute w-[400px] md:w-[600px] aspect-[4/3] object-cover rounded-2xl shadow-[0_0_50px_rgba(0,0,0,0.5)] shadow-white/50 opacity-0"
      />
      <img
        src="https://images.unsplash.com/photo-1472214103451-9374bd1c798e?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt=""
        className="absolute w-[400px] md:w-[600px] aspect-[4/3] object-cover rounded-2xl shadow-[0_0_50px_rgba(0,0,0,0.5)] shadow-white/50 opacity-0"
      />
      <img
        src="https://images.unsplash.com/photo-1622368706487-770359927adc?q=80&w=2669&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt=""
        className="absolute w-[400px] md:w-[600px] aspect-[4/3] object-cover rounded-2xl shadow-[0_0_50px_rgba(0,0,0,0.5)] shadow-white/50 opacity-0"
      />
      <img
        src="https://images.unsplash.com/photo-1488415032361-b7e238421f1b?q=80&w=2669&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt=""
        className="absolute w-[400px] md:w-[600px] aspect-[4/3] object-cover rounded-2xl shadow-[0_0_50px_rgba(0,0,0,0.5)] shadow-white/50 opacity-0"
      />
      <img
        src="https://images.unsplash.com/photo-1506318137071-a8e063b4bec0?q=80&w=2693&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt=""
        className="absolute w-[400px] md:w-[600px] aspect-[4/3] object-cover rounded-2xl shadow-[0_0_50px_rgba(0,0,0,0.5)] shadow-white/50 opacity-0"
      />
    </div>
  );
};

export default StaggerCards;
