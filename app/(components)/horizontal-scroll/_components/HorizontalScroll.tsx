"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollSmoother, ScrollTrigger } from "gsap/all";
import React from "react";
/* eslint-disable @next/next/no-img-element */

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const HorizontalScroll = () => {
  useGSAP(() => {
    ScrollSmoother.create({
      content: "#content",
      wrapper: "#wrapper",

      smooth: 1.2,
      effects: true,
      smoothTouch: 0.1,
    });

    const cards = gsap.utils.toArray("#card") as Element[];
    const cardsContainer = document.querySelector(
      "#cards-container"
    ) as Element;

    gsap.set(cards[0], { opacity: 1 });

    const totalScroll = cardsContainer?.scrollWidth - window.innerWidth + 350;
    const scrollTrack = gsap.to(cardsContainer, {
      x: -totalScroll,
      duration: cards.length,
      ease: "none",
      scrollTrigger: {
        trigger: "#scroll-section",
        start: "top top",
        end: `+=${totalScroll}`,
        pin: true,
        scrub: true,
      },
    });

    cards.forEach((card) => {
      gsap.to(card, {
        opacity: 1,
        scrollTrigger: {
          trigger: card,
          start: "left 95%",
          end: "center 90%",
          scrub: true,
          containerAnimation: scrollTrack,
        },
      });
    });
  });
  return (
    <div id="wrapper">
      <div id="content">
        <div id="scroll-section" className="relative overflow-hidden">
          <div
            id="cards-container"
            className="w-full h-full flex flex-nowrap justify-start items-center px-11 md:px-[50px] py-0"
          >
            <div id="heading" className="flex-[1 0 35%]">
              <h1 className="text-7xl text-white font-bold mr-11">Clodron</h1>
            </div>
            <div
              id="card"
              className="h-full flex-[1_0_50%] mr-9 md:mr-12 rounded-xl shadow-xl opacity-0"
            >
              <img
                className="block w-full h-full object-cover rounded-xl"
                src={
                  "https://images.unsplash.com/photo-1536782376847-5c9d14d97cc0?q=80&w=2676&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                }
                alt="image"
              />
            </div>
            <div
              id="card"
              className="h-full flex-[1_0_50%] mr-9 md:mr-12 rounded-xl shadow-xl opacity-0"
            >
              <img
                className="block w-full h-full object-cover rounded-xl"
                src={
                  "https://images.unsplash.com/photo-1536782376847-5c9d14d97cc0?q=80&w=2676&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                }
                alt="image"
              />
            </div>
            <div
              id="card"
              className="h-full flex-[1_0_50%] mr-9 md:mr-12 rounded-xl shadow-xl opacity-0"
            >
              <img
                className="block w-full h-full object-cover rounded-xl"
                src={
                  "https://images.unsplash.com/photo-1536782376847-5c9d14d97cc0?q=80&w=2676&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                }
                alt="image"
              />
            </div>
            <div
              id="card"
              className="h-full flex-[1_0_50%] mr-9 md:mr-12 rounded-xl shadow-xl opacity-0"
            >
              <img
                className="block w-full h-full object-cover rounded-xl"
                src={
                  "https://images.unsplash.com/photo-1536782376847-5c9d14d97cc0?q=80&w=2676&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                }
                alt="image"
              />
            </div>
            <div
              id="card"
              className="h-full flex-[1_0_50%] rounded-xl shadow-xl opacity-0"
            >
              <img
                className="block w-full h-full object-cover rounded-xl"
                src={
                  "https://images.unsplash.com/photo-1536782376847-5c9d14d97cc0?q=80&w=2676&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                }
                alt="image"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HorizontalScroll;
